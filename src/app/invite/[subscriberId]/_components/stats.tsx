import {
  getSubscriberInviteClicks,
  getSubscriberInviteCount,
  getSubscriberRankingPosition,
} from '@/http/api'
import { BadgeCheck, Medal, MousePointerClick } from 'lucide-react'

interface StatsProps {
  subscriberId: string
}

export async function Stats({ subscriberId }: StatsProps) {
  const { count: accessCount } = await getSubscriberInviteClicks(subscriberId)
  const { count: subscribesCount } =
    await getSubscriberInviteCount(subscriberId)
  const { position } = await getSubscriberRankingPosition(subscriberId)

  return (
    <div className="grid gap-3 md:grid-cols-3">
      <div className="relative flex flex-col items-center justify-center bg-gray-700 border border-gray-600 px-4 py-7 gap-2 rounded-xl">
        <span className="font-heading text-2xl font-semibold leading-none">
          {accessCount}
        </span>
        <span className="text-sm leading-none text-gray-300 text-center">
          Acessos ao link
        </span>

        <MousePointerClick className="size-5 text-purple absolute top-3 left-3" />
      </div>

      <div className="relative flex flex-col items-center justify-center bg-gray-700 border border-gray-600 px-4 py-7 gap-2 rounded-xl">
        <span className="font-heading text-2xl font-semibold leading-none">
          {subscribesCount}
        </span>
        <span className="text-sm leading-none text-gray-300 text-center">
          Inscrições feitas
        </span>

        <BadgeCheck className="size-5 text-purple absolute top-3 left-3" />
      </div>

      <div className="relative flex flex-col items-center justify-center bg-gray-700 border border-gray-600 px-4 py-7 gap-2 rounded-xl">
        <span className="font-heading text-2xl font-semibold leading-none">
          {position ? `${position}ª` : 'N/A'}
        </span>
        <span className="text-sm leading-none text-gray-300 text-center">
          Posição no ranking
        </span>

        <Medal className="size-5 text-purple absolute top-3 left-3" />
      </div>
    </div>
  )
}

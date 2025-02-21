import { BadgeCheck, Medal, MousePointerClick } from 'lucide-react'

export function Stats() {
  return (
    <div className="grid gap-3 md:grid-cols-3">
      <div className="relative flex flex-col items-center justify-center bg-gray-700 border border-gray-600 px-4 py-7 gap-2 rounded-xl">
        <span className="font-heading text-2xl font-semibold leading-none">
          1042
        </span>
        <span className="text-sm leading-none text-gray-300 text-center">
          Acessos ao link
        </span>

        <MousePointerClick className="size-5 text-purple absolute top-3 left-3" />
      </div>

      <div className="relative flex flex-col items-center justify-center bg-gray-700 border border-gray-600 px-4 py-7 gap-2 rounded-xl">
        <span className="font-heading text-2xl font-semibold leading-none">
          1042
        </span>
        <span className="text-sm leading-none text-gray-300 text-center">
          Acessos ao link
        </span>

        <BadgeCheck className="size-5 text-purple absolute top-3 left-3" />
      </div>

      <div className="relative flex flex-col items-center justify-center bg-gray-700 border border-gray-600 px-4 py-7 gap-2 rounded-xl">
        <span className="font-heading text-2xl font-semibold leading-none">
          1042
        </span>
        <span className="text-sm leading-none text-gray-300 text-center">
          Acessos ao link
        </span>

        <Medal className="size-5 text-purple absolute top-3 left-3" />
      </div>
    </div>
  )
}

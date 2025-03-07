import Image, { type ImageProps } from 'next/image'

import { getRanking } from '@/http/api'
import medalCopper from '../../../../assets/medal-copper.svg'
import medalGold from '../../../../assets/medal-gold.svg'
import medalSilver from '../../../../assets/medal-silver.svg'

const images: Record<string, ImageProps> = {
  '1': medalGold,
  '2': medalSilver,
  '3': medalCopper,
}

export async function Ranking() {
  const { ranking } = await getRanking()

  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="font-heading font-semibold text-gray-200 leading-none text-xl">
        Ranking de indicações
      </h2>

      {ranking.map((item, index) => {
        const rankingPosition = index + 1
        const rankingImage = images[rankingPosition]

        return (
          <div key={item.id} className="space-y-4">
            <div className="relative flex flex-col justify-center bg-gray-700 border border-gray-600 p-6 gap-3 rounded-xl">
              <span className="text-sm text-gray-300 leading-none">
                <span className="font-semibold">{rankingPosition}º</span> |{' '}
                {item.name}
              </span>

              <span className="font-heading font-semibold text-2xl text-gray-200 leading-none">
                {item.score}
              </span>

              <Image
                src={rankingImage.src}
                width={56}
                height={86}
                alt=""
                className="absolute top-0 right-8"
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}

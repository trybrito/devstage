import Image from 'next/image';

import medalCopper from '../../../../assets/medal-copper.svg';
import medalGold from '../../../../assets/medal-gold.svg';
import medalSilver from '../../../../assets/medal-silver.svg';

export function Ranking() {
  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="font-heading font-semibold text-gray-200 leading-none text-xl">
        Ranking de indicações
      </h2>

      <div className="space-y-4">
        <div className="relative flex flex-col justify-center bg-gray-700 border border-gray-600 p-6 gap-3 rounded-xl">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">1º</span> | Thiago Brito
          </span>

          <span className="font-heading font-semibold text-2xl text-gray-200 leading-none">
            1030
          </span>

          <Image src={medalGold} alt="" className="absolute top-0 right-8" />
        </div>
      </div>

      <div className="space-y-4">
        <div className="relative flex flex-col justify-center bg-gray-700 border border-gray-600 p-6 gap-3 rounded-xl">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">2º</span> | Thiago Brito
          </span>

          <span className="font-heading font-semibold text-2xl text-gray-200 leading-none">
            1030
          </span>

          <Image src={medalSilver} alt="" className="absolute top-0 right-8" />
        </div>
      </div>

      <div className="space-y-4">
        <div className="relative flex flex-col justify-center bg-gray-700 border border-gray-600 p-6 gap-3 rounded-xl">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">3º</span> | Thiago Brito
          </span>

          <span className="font-heading font-semibold text-2xl text-gray-200 leading-none">
            1030
          </span>

          <Image src={medalCopper} alt="" className="absolute top-0 right-8" />
        </div>
      </div>
    </div>
  );
}

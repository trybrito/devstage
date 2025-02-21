import Image from 'next/image'

import { IconButton } from '@/components/icon-button'
import { InputField, InputIcon, InputRoot } from '@/components/input'
import { BadgeCheck, Copy, Link, Medal, MousePointerClick } from 'lucide-react'

import logo from '../../assets/logo.svg'
import medalCopper from '../../assets/medal-copper.svg'
import medalGold from '../../assets/medal-gold.svg'
import medalSilver from '../../assets/medal-silver.svg'

export default function InvitePage() {
  return (
    <div className="min-h-dvh flex flex-col md:flex-row justify-between items-center gap-16">
      <div className="flex flex-col gap-10 w-full max-w-[550px]">
        <Image src={logo} alt="" width={108.5} height={30} />

        <div className="space-y-2">
          <h1 className="text-4xl font-semibold font-heading text-gray-100 leading-none">
            Inscrição confirmada!
          </h1>
          <p className="text-gray-300">
            Para entrar no evento, acesse o link enviado para seu e-mail.
          </p>
        </div>

        <div className="space-y-6">
          <div className="space-y-3">
            <h2 className="text-xl text-gray-200 font-heading font-semibold leading-none">
              Indique e Ganhe
            </h2>
            <p className="text-gray-300">
              Convide mais pessoas para o evento e concorra a prêmios
              exclusivos! É só compartilhar o link abaixo e acompanhar as
              inscrições:
            </p>
          </div>

          <InputRoot>
            <InputIcon>
              <Link />
            </InputIcon>
            <InputField
              readOnly
              defaultValue="http://localhost:3000/invite/12434guig8iyf324"
            />
            <IconButton className="-mr-2">
              <Copy className="size-5" />
            </IconButton>
          </InputRoot>

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
        </div>
      </div>

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

            <Image
              src={medalSilver}
              alt=""
              className="absolute top-0 right-8"
            />
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

            <Image
              src={medalCopper}
              alt=""
              className="absolute top-0 right-8"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

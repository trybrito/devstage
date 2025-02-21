import Image from 'next/image';

import logo from '../../../assets/logo.svg';
import { InviteLinkInput } from './_components/invite-link-input';
import { Ranking } from './_components/ranking';
import { Stats } from './_components/stats';

interface InvitePageProps {
  params: Promise<{
    subscriberId: string;
  }>;
}

export default async function InvitePage(props: InvitePageProps) {
  const { subscriberId } = await props.params;

  const inviteLink = `http://localhost:3333/invites/${subscriberId}`;

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

          <InviteLinkInput inviteLink={inviteLink} />

          <Stats />
        </div>
      </div>

      <Ranking />
    </div>
  );
}

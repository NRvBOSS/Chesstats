import { Player } from '@/types/player';
import Image from 'next/image';

type Props = {
  player: Player
}

export default function PlayerHero({ player }: Props) {
  return (
    <section className="w-full bg-zinc-900 rounded-2xl p-6 flex items-center justify-between">
      {/* Left */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-white">
          {player.name}
        </h1>

        <p className="text-zinc-400">
          {player.title ?? 'Chess Player'} · {player.country?.slice(-2)}
        </p>

        <div className="mt-4">
          <span className="text-zinc-400 text-sm">Status</span>
          <div className="text-green-400 font-semibold">
            {player.status}
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="w-28 h-28 rounded-full bg-zinc-800 flex items-center justify-center overflow-hidden">
        {player.avatar ? (
          <Image
            src={player.avatar}
            alt="avatar"
            width={112}
            height={112}
            className="w-full h-full object-cover"
            priority
          />
        ) : (
          <span className="text-zinc-500">No Avatar</span>
        )}
      </div>
    </section>
  )
}

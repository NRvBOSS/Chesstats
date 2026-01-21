import { Player } from "@/types/player";
import Image from "next/image";

type Props = {
  rating: number | null;
  p: Player;
  onDetailsClick?: () => void;
};

export default function PlayerHero({ p, rating, onDetailsClick }: Props) {
  return (
    <div className="relative w-80 h-120 bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl border-2 border-zinc-800">
      {/* Chess pattern background */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-8 grid-rows-8 h-full w-full">
          {Array.from({ length: 64 }).map((_, i) => (
            <div
              key={i}
              className={`${
                (Math.floor(i / 8) + i) % 2 === 0
                  ? "bg-white"
                  : "bg-transparent"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Rating badge - top left */}
      <div className="absolute top-6 left-6 z-20">
        <div className="bg-zinc-950 rounded-lg px-4 py-2 border-2 border-amber-500 shadow-lg">
          <div className="text-amber-400 text-xs font-bold tracking-wider">
            RATING
          </div>
          <div className="text-white text-2xl font-black">
            {rating || "2800"}
          </div>
        </div>
      </div>

      {/* Country flag - top right */}
      <div className="absolute top-6 right-6 z-20">
        <div className="bg-zinc-950 rounded-lg px-3 py-2 shadow-lg border-2 border-zinc-700">
          <span className="text-2xl">{p.country?.slice(-2) || "🌍"}</span>
        </div>
      </div>

      {/* Player image */}
      <div className="absolute top-25 left-1/2 -translate-x-1/2 w-48 h-48 z-10">
        <div className="relative w-full h-full">
          {p.avatar ? (
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-zinc-700 shadow-2xl bg-zinc-800">
              <Image
                src={p.avatar}
                alt={p.username || "Player Avatar"}
                width={192}
                height={192}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          ) : (
            <div className="relative w-full h-full rounded-full bg-zinc-800 border-4 border-zinc-700 shadow-2xl flex items-center justify-center">
              <span className="text-zinc-600 text-6xl">♔</span>
            </div>
          )}
        </div>
      </div>

      {/* Player info - bottom section */}
      <div className="absolute h-1/2 bottom-0 left-0 right-0 z-20 px-4 pb-6 pt-20">
        {/* Name */}
        <div className="text-center mb-4">
          <h1 className="text-white text-2xl font-black tracking-tight mb-1 truncate px-2">
            {p.username || "Anonymous"}
          </h1>
          <p className="text-zinc-400 text-sm font-semibold tracking-wide uppercase truncate px-2">
            {p.title || p.name || "Chess Player"}
          </p>
        </div>

        {/* Stats bar */}
        <div className="bg-zinc-950 rounded-xl p-4 border-2 border-zinc-800">
          <div className="flex items-center justify-between">
            {/* Status */}
            <div className="flex-1 text-center">
              <div className="text-zinc-500 text-xs font-semibold uppercase tracking-wider mb-1">
                Status
              </div>
              <div className="flex items-center justify-center gap-1.5">
                <div
                  className={`w-2 h-2 rounded-full ${
                    p.status === "active" ? "bg-emerald-500" : "bg-zinc-600"
                  }`}
                />
                <span
                  className={`text-sm font-bold ${
                    p.status === "active" ? "text-emerald-400" : "text-zinc-500"
                  }`}
                >
                  {p.status || "Offline"}
                </span>
              </div>
            </div>

            {/* Divider */}
            <div className="w-px h-10 bg-zinc-800" />

            {/* League */}
            <div className="flex-1 text-center">
              <div className="text-zinc-500 text-xs font-semibold uppercase tracking-wider mb-1">
                League
              </div>
              <div className="text-white text-sm font-bold">
                {p.league || "---"}
              </div>
            </div>
          </div>
        </div>

        {/* Details button */}
        <button
          onClick={onDetailsClick}
          className="w-full mt-4 bg-zinc-800 hover:bg-zinc-700 text-white py-3 rounded-xl font-semibold transition-all duration-200 border-2 border-zinc-700 hover:border-zinc-600 active:scale-95"
        >
          View Details →
        </button>
      </div>
    </div>
  );
}

import PlayerHero from "@/components/blocks/PlayerHero";
import PlayerStats from "@/components/blocks/PlayerStats";
import Name from "@/components/ui/PlayerSearch";
import { getBestRating } from "@/components/utils/getBestRat";

async function getPlayer(username: string) {
  const res = await fetch(`https://api.chess.com/pub/player/${username}`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) return null;
  return res.json();
}

async function getPlayerStats(username: string) {
  const res = await fetch(
    `https://api.chess.com/pub/player/${username}/stats`,
    { next: { revalidate: 3600 } },
  );

  if (!res.ok) return null;
  return res.json();
}

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ username?: string }>;
}) {
  const { username } = await searchParams;

  const [p, stats] = username
    ? await Promise.all([getPlayer(username), getPlayerStats(username)])
    : [null, null];
  const bestRating = stats ? getBestRating(stats) : null;

  return (
    <main className="min-h-screen bg-black p-8">
      <Name />

      {p && <PlayerHero p={p} rating={bestRating} />}

      {stats && <PlayerStats stats={stats} />}
    </main>
  );
}

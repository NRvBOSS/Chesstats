import PlayerHero from "@/components/blocks/PlayerHero";
import PlayerStats from "@/components/blocks/PlayerStats";
import Name from "@/components/ui/PlayerName";

async function getPlayer(username: string) {
  const res = await fetch(
    `https://api.chess.com/pub/player/${username}`,
    { next: { revalidate: 3600 } }
  );

  if (!res.ok) return null;
  return res.json();
}

async function getPlayerStats(username: string) {
  const res = await fetch(
    `https://api.chess.com/pub/player/${username}/stats`,
    { next: { revalidate: 3600 } }
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

  const [player, stats] = username
    ? await Promise.all([
        getPlayer(username),
        getPlayerStats(username),
      ])
    : [null, null];

  return (
    <main className="min-h-screen bg-black p-8">
      <Name />

      {player && <PlayerHero player={player} />}

      {stats && <PlayerStats stats={stats} />}
    </main>
  );
}
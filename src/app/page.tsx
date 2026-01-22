import Name from "@/components/ui/PlayerSearch";
import PlayerHero from "@/components/blocks/PlayerHero";
import PlayerStats from "@/components/blocks/PlayerStats";
import { getPlayerProfile } from "@/lib/services/chesscom.services";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ username?: string }>;
}) {
  const params = await searchParams;

  if (!params.username) {
    return (
      <main className="min-h-screen bg-black p-8">
        <Name />
      </main>
    );
  }

  const data = await getPlayerProfile(params.username);
  if (!data) return null;

  return (
    <main className="min-h-screen bg-black p-8">
      <Name />
      <div className="flex gap-8 mt-8 flex-col lg:flex-row">
        <PlayerHero p={data.player} />
        <PlayerStats stats={data.stats} />
      </div>
    </main>
  );
}

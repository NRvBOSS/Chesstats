import { getPlayer, getPlayerStats } from "@/lib/api/chesscom";
import { getBestRating } from "@/components/utils/getBestRat";
import type { PlayerWithStats } from "@/lib/types/player";

export async function getPlayerProfile(
  username: string,
): Promise<PlayerWithStats | null> {
  const [player, stats] = await Promise.all([
    getPlayer(username),
    getPlayerStats(username),
  ]);

  if (!player || !stats) return null;

  return {
    player: {
      ...player,
      rating: getBestRating(stats),
    },
    stats,
  };
}

import { PlayerWithStats } from "@/lib/types/player";

export function getBestRating(stats: PlayerWithStats["stats"] | null) {
  if (!stats) return null;

  const ratings: number[] = [
    stats.chess_rapid?.last?.rating,
    stats.chess_blitz?.last?.rating,
    stats.chess_bullet?.last?.rating,
  ].filter((r): r is number => typeof r === "number");

  return ratings.length ? Math.max(...ratings) : null;
}

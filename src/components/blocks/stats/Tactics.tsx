"use client";

import { formatDate } from "@/components/utils/FormatDate";
import { ChessComStatsResponse } from "@/lib/types/player";

type Props = {
  stats: ChessComStatsResponse;
};

export default function Tactics({ stats }: Props) {
  return (
    <div className="bg-zinc-800 p-4 rounded-lg">
      <h3 className="text-lg font-semibold text-white mb-2">Tactics</h3>
      {stats.tactics?.highest?.rating ? (
        <>
          <p className="text-zinc-300">
            Highest Rating: {stats.tactics.highest.rating}
          </p>
          <p className="text-zinc-400 text-sm">
            Date: {formatDate(stats.tactics.highest.date)}
          </p>

          {stats.tactics.lowest?.rating && (
            <>
              <p className="text-zinc-300 mt-2">
                Lowest Rating: {stats.tactics.lowest.rating}
              </p>
              <p className="text-zinc-400 text-sm">
                Date: {formatDate(stats.tactics.lowest.date)}
              </p>
            </>
          )}
        </>
      ) : (
        <p className="text-zinc-500">N/A</p>
      )}
    </div>
  );
}

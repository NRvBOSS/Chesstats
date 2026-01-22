"use client";

import { ChessComStatsResponse } from '@/lib/types/player';

type Props = {
  stats: ChessComStatsResponse

}

export default function PuzzleRush({stats}:Props){
    return(
        <div className="bg-zinc-800 p-4 rounded-lg">
        <h3 className="text-lg font-semibold text-white mb-2">Puzzle Rush</h3>
        {stats.puzzle_rush?.best?.score ? (
          <>
            <p className="text-zinc-300">Best Score: {stats.puzzle_rush.best.score}</p>
            <p className="text-zinc-400 text-sm">Total Attempts: {stats.puzzle_rush.best.total_attempts}</p>
          </>
        ) : (
          <p className="text-zinc-500">N/A</p>
        )}
      </div>
    )
}
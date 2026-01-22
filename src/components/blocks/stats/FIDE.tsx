"use client";

import { ChessComStatsResponse } from '@/lib/types/player';

type Props = {
  stats: ChessComStatsResponse

}

export default function FIDE({stats}:Props){
    return(
        <div className="bg-zinc-800 p-4 rounded-lg">
        <h3 className="text-lg font-semibold text-white mb-2">FIDE Rating</h3>
        {stats.fide ? (
          <p className="text-zinc-300">{stats.fide}</p>
        ) : (
          <p className="text-zinc-500">N/A</p>
        )}
      </div>
    )
}
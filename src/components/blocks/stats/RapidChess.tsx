"use client";

import { formatDate } from '@/components/utils/FormatDate';
import { ChessComStatsResponse } from '@/lib/types/player';

type Props = {
  stats: ChessComStatsResponse

}

export default function RapidChess({stats}: Props){
    return(
         <div className="bg-zinc-800 p-4 rounded-lg">
        <h3 className="text-lg font-semibold text-white mb-2">Rapid Chess</h3>
        {stats.chess_rapid?.last?.rating ? (
          <>
            <p className="text-zinc-300">Current Rating: {stats.chess_rapid.last.rating}</p>
            <p className="text-zinc-400 text-sm">Date: {formatDate(stats.chess_rapid.last.date)}</p>
            {stats.chess_rapid.last.rd && <p className="text-zinc-400 text-sm">RD: {stats.chess_rapid.last.rd}</p>}
            
            {stats.chess_rapid.best?.rating && (
              <>
                <p className="text-zinc-300 mt-2">Best Rating: {stats.chess_rapid.best.rating}</p>
                <p className="text-zinc-400 text-sm">Best Date: {formatDate(stats.chess_rapid.best.date)}</p>
              </>
            )}
            
            {stats.chess_rapid.record && (
              <>
                <p className="text-zinc-300 mt-2">
                  Record: {stats.chess_rapid.record.win}W / 
                  {stats.chess_rapid.record.loss}L / 
                  {stats.chess_rapid.record.draw}D
                </p>
                {stats.chess_rapid.record.time_per_move && (
                  <p className="text-zinc-400 text-sm">Avg Time/Move: {stats.chess_rapid.record.time_per_move}s</p>
                )}
                {stats.chess_rapid.record.timeout_percent && (
                  <p className="text-zinc-400 text-sm">Timeout: {stats.chess_rapid.record.timeout_percent}%</p>
                )}
              </>
            )}
            
            {stats.chess_rapid.tournament && (
              <div className="mt-2 border-t border-zinc-700 pt-2">
                <p className="text-zinc-300">Tournament Points: {stats.chess_rapid.tournament.points}</p>
                <p className="text-zinc-400 text-sm">Tournaments: {stats.chess_rapid.tournament.count}</p>
                <p className="text-zinc-400 text-sm">Withdrawals: {stats.chess_rapid.tournament.withdraw}</p>
                <p className="text-zinc-400 text-sm">Best Finish: #{stats.chess_rapid.tournament.highest_finish}</p>
              </div>
            )}
          </>
        ) : (
          <p className="text-zinc-500">N/A</p>
        )}
      </div>
    )
}
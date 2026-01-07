"use client";

import { formatDate } from '@/components/utils/FormatDate';
import { ChessComStatsResponse } from '@/types/player';

type Props = {
  stats: ChessComStatsResponse

}

export default function BulletChess({stats}:Props){
    return(
        <div className="bg-zinc-800 p-4 rounded-lg">
        <h3 className="text-lg font-semibold text-white mb-2">Bullet Chess</h3>
        {stats.chess_bullet?.last?.rating ? (
          <>
            <p className="text-zinc-300">Current Rating: {stats.chess_bullet.last.rating}</p>
            <p className="text-zinc-400 text-sm">Date: {formatDate(stats.chess_bullet.last.date)}</p>
            {stats.chess_bullet.last.rd && <p className="text-zinc-400 text-sm">RD: {stats.chess_bullet.last.rd}</p>}
            
            {stats.chess_bullet.best?.rating && (
              <>
                <p className="text-zinc-300 mt-2">Best Rating: {stats.chess_bullet.best.rating}</p>
                <p className="text-zinc-400 text-sm">Best Date: {formatDate(stats.chess_bullet.best.date)}</p>
              </>
            )}
            
            {stats.chess_bullet.record && (
              <>
                <p className="text-zinc-300 mt-2">
                  Record: {stats.chess_bullet.record.win}W / 
                  {stats.chess_bullet.record.loss}L / 
                  {stats.chess_bullet.record.draw}D
                </p>
                {stats.chess_bullet.record.time_per_move && (
                  <p className="text-zinc-400 text-sm">Avg Time/Move: {stats.chess_bullet.record.time_per_move}s</p>
                )}
                {stats.chess_bullet.record.timeout_percent && (
                  <p className="text-zinc-400 text-sm">Timeout: {stats.chess_bullet.record.timeout_percent}%</p>
                )}
              </>
            )}
            
            {stats.chess_bullet.tournament && (
              <div className="mt-2 border-t border-zinc-700 pt-2">
                <p className="text-zinc-300">Tournament Points: {stats.chess_bullet.tournament.points}</p>
                <p className="text-zinc-400 text-sm">Tournaments: {stats.chess_bullet.tournament.count}</p>
                <p className="text-zinc-400 text-sm">Withdrawals: {stats.chess_bullet.tournament.withdraw}</p>
                <p className="text-zinc-400 text-sm">Best Finish: #{stats.chess_bullet.tournament.highest_finish}</p>
              </div>
            )}
          </>
        ) : (
          <p className="text-zinc-500">N/A</p>
        )}
      </div>
    )
}
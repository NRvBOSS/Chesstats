"use client";

import { ChessComStatsResponse } from '@/types/player';

type Props = {
  stats: ChessComStatsResponse
}

// Tarix formatlaşdırma funksiyası - hydration problemini həll edir
const formatDate = (timestamp: number) => {
  const date = new Date(timestamp * 1000);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${day}.${month}.${year}`;
};

export default function PlayerStats({ stats }: Props) {
  return (
    <div className="w-full bg-zinc-900 rounded-2xl p-6 mt-6 space-y-4">
      <h2 className="text-2xl font-bold text-white mb-4">Statistics</h2>
      
      {/* Daily Chess */}
      <div className="bg-zinc-800 p-4 rounded-lg">
        <h3 className="text-lg font-semibold text-white mb-2">Daily Chess</h3>
        {stats.chess_daily?.last?.rating ? (
          <>
            <p className="text-zinc-300">Current Rating: {stats.chess_daily.last.rating}</p>
            <p className="text-zinc-400 text-sm">Date: {formatDate(stats.chess_daily.last.date)}</p>
            {stats.chess_daily.last.rd && <p className="text-zinc-400 text-sm">RD: {stats.chess_daily.last.rd}</p>}
            
            {stats.chess_daily.best?.rating && (
              <>
                <p className="text-zinc-300 mt-2">Best Rating: {stats.chess_daily.best.rating}</p>
                <p className="text-zinc-400 text-sm">Best Date: {formatDate(stats.chess_daily.best.date)}</p>
              </>
            )}
            
            {stats.chess_daily.record && (
              <>
                <p className="text-zinc-300 mt-2">
                  Record: {stats.chess_daily.record.win}W / 
                  {stats.chess_daily.record.loss}L / 
                  {stats.chess_daily.record.draw}D
                </p>
                {stats.chess_daily.record.time_per_move && (
                  <p className="text-zinc-400 text-sm">Avg Time/Move: {stats.chess_daily.record.time_per_move}s</p>
                )}
                {stats.chess_daily.record.timeout_percent && (
                  <p className="text-zinc-400 text-sm">Timeout: {stats.chess_daily.record.timeout_percent}%</p>
                )}
              </>
            )}
            
            {stats.chess_daily.tournament && (
              <div className="mt-2 border-t border-zinc-700 pt-2">
                <p className="text-zinc-300">Tournament Points: {stats.chess_daily.tournament.points}</p>
                <p className="text-zinc-400 text-sm">Tournaments: {stats.chess_daily.tournament.count}</p>
                <p className="text-zinc-400 text-sm">Withdrawals: {stats.chess_daily.tournament.withdraw}</p>
                <p className="text-zinc-400 text-sm">Best Finish: #{stats.chess_daily.tournament.highest_finish}</p>
              </div>
            )}
          </>
        ) : (
          <p className="text-zinc-500">N/A</p>
        )}
      </div>

      {/* Rapid Chess */}
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

      {/* Blitz Chess */}
      <div className="bg-zinc-800 p-4 rounded-lg">
        <h3 className="text-lg font-semibold text-white mb-2">Blitz Chess</h3>
        {stats.chess_blitz?.last?.rating ? (
          <>
            <p className="text-zinc-300">Current Rating: {stats.chess_blitz.last.rating}</p>
            <p className="text-zinc-400 text-sm">Date: {formatDate(stats.chess_blitz.last.date)}</p>
            {stats.chess_blitz.last.rd && <p className="text-zinc-400 text-sm">RD: {stats.chess_blitz.last.rd}</p>}
            
            {stats.chess_blitz.best?.rating && (
              <>
                <p className="text-zinc-300 mt-2">Best Rating: {stats.chess_blitz.best.rating}</p>
                <p className="text-zinc-400 text-sm">Best Date: {formatDate(stats.chess_blitz.best.date)}</p>
              </>
            )}
            
            {stats.chess_blitz.record && (
              <>
                <p className="text-zinc-300 mt-2">
                  Record: {stats.chess_blitz.record.win}W / 
                  {stats.chess_blitz.record.loss}L / 
                  {stats.chess_blitz.record.draw}D
                </p>
                {stats.chess_blitz.record.time_per_move && (
                  <p className="text-zinc-400 text-sm">Avg Time/Move: {stats.chess_blitz.record.time_per_move}s</p>
                )}
                {stats.chess_blitz.record.timeout_percent && (
                  <p className="text-zinc-400 text-sm">Timeout: {stats.chess_blitz.record.timeout_percent}%</p>
                )}
              </>
            )}
            
            {stats.chess_blitz.tournament && (
              <div className="mt-2 border-t border-zinc-700 pt-2">
                <p className="text-zinc-300">Tournament Points: {stats.chess_blitz.tournament.points}</p>
                <p className="text-zinc-400 text-sm">Tournaments: {stats.chess_blitz.tournament.count}</p>
                <p className="text-zinc-400 text-sm">Withdrawals: {stats.chess_blitz.tournament.withdraw}</p>
                <p className="text-zinc-400 text-sm">Best Finish: #{stats.chess_blitz.tournament.highest_finish}</p>
              </div>
            )}
          </>
        ) : (
          <p className="text-zinc-500">N/A</p>
        )}
      </div>

      {/* Bullet Chess */}
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

      {/* FIDE Rating */}
      <div className="bg-zinc-800 p-4 rounded-lg">
        <h3 className="text-lg font-semibold text-white mb-2">FIDE Rating</h3>
        {stats.fide ? (
          <p className="text-zinc-300">{stats.fide}</p>
        ) : (
          <p className="text-zinc-500">N/A</p>
        )}
      </div>

      {/* Tactics */}
      <div className="bg-zinc-800 p-4 rounded-lg">
        <h3 className="text-lg font-semibold text-white mb-2">Tactics</h3>
        {stats.tactics?.highest?.rating ? (
          <>
            <p className="text-zinc-300">Highest Rating: {stats.tactics.highest.rating}</p>
            <p className="text-zinc-400 text-sm">Date: {formatDate(stats.tactics.highest.date)}</p>
            
            {stats.tactics.lowest?.rating && (
              <>
                <p className="text-zinc-300 mt-2">Lowest Rating: {stats.tactics.lowest.rating}</p>
                <p className="text-zinc-400 text-sm">Date: {formatDate(stats.tactics.lowest.date)}</p>
              </>
            )}
          </>
        ) : (
          <p className="text-zinc-500">N/A</p>
        )}
      </div>

      {/* Puzzle Rush */}
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
    </div>
  )
}
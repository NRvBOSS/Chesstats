"use client";

import { ChessComStatsResponse } from '@/types/player';
import DailyChess from './stats/DailyChess';
import RapidChess from './stats/RapidChess';
import BlitzChess from './stats/BlitzChess';
import BulletChess from './stats/BulletChess';
import FIDE from './stats/FIDE';
import Tactics from './stats/Tactics';
import PuzzleRush from './stats/PuzzleRush';

type Props = {
  stats: ChessComStatsResponse

}

export default function PlayerStats({ stats }: Props) {
  return (
    <div className="w-full bg-zinc-900 rounded-2xl p-6 mt-6 space-y-4">
      <h2 className="text-2xl font-bold text-white mb-4">Statistics</h2>
      
      {/* Daily Chess */}
      <DailyChess stats={stats}/>

      {/* Rapid Chess */}
      <RapidChess stats={stats}/>

      {/* Blitz Chess */}
      <BlitzChess stats={stats}/>

      {/* Bullet Chess */}
      <BulletChess stats={stats}/>

      {/* FIDE Rating */}
      <FIDE stats={stats}/>

      {/* Tactics */}
      <Tactics stats={stats}/>

      {/* Puzzle Rush */}
      <PuzzleRush stats={stats}/>
    </div>
  )
}
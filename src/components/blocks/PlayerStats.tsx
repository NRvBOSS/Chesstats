"use client";

import { useState } from "react";
import { ChessComStatsResponse } from "@/lib/types/player";

import DailyChess from "./stats/DailyChess";
import RapidChess from "./stats/RapidChess";
import BlitzChess from "./stats/BlitzChess";
import BulletChess from "./stats/BulletChess";
import FIDE from "./stats/FIDE";
import Tactics from "./stats/Tactics";
import PuzzleRush from "./stats/PuzzleRush";

type Props = {
  stats: ChessComStatsResponse;
};

const buttons = [
  { label: "Daily", component: DailyChess },
  { label: "Rapid", component: RapidChess },
  { label: "Blitz", component: BlitzChess },
  { label: "Bullet", component: BulletChess },
  { label: "FIDE", component: FIDE },
  { label: "Tactics", component: Tactics },
  { label: "PuzzleRush", component: PuzzleRush },
];

export default function PlayerStats({ stats }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const ActiveComponent = buttons[activeIndex].component;

  return (
    <div className="w-full bg-zinc-900 rounded-2xl p-6 mt-6 space-y-4">
      <h2 className="text-2xl font-bold text-white">Statistics</h2>

      {/* BUTTONS */}
      <div className="flex gap-3">
        {buttons.map((btn, index) => (
          <button
            key={btn.label}
            onClick={() => setActiveIndex(index)}
            className={
              activeIndex === index
                ? "text-blue-400 font-semibold"
                : "text-white"
            }
          >
            {btn.label}
          </button>
        ))}
      </div>

      {/* ACTIVE STATS */}
      <div className="mt-6">
        <ActiveComponent stats={stats} />
      </div>
    </div>
  );
}

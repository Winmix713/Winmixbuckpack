import React from 'react';
import type { Game } from '../../types/football';
export function StatBars({
  game


}: {game: Game;}) {
  const pairs: Array<[string, number, number]> = [['Goals', game.score[0], game.score[1]], ['Shots', 12 + game.id, 8 + game.id % 3], ['On target', 6 + game.id % 3, 3 + game.id % 2], ['Corners', 7, 4], ['Passes', 426 + game.id * 9, 358 + game.id * 7]];
  return <div className="flex flex-col gap-4">
      {pairs.map(([name, a, b]) => {
      const total = a + b;
      const aPct = total ? a / total * 100 : 50;
      const bPct = total ? b / total * 100 : 50;
      return <div key={name} className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between text-sm">
              <strong className="text-wm-text">{a}</strong>
              <span className="text-xs text-wm-muted">{name}</span>
              <strong className="text-wm-text">{b}</strong>
            </div>
            <div className="flex h-1.5 overflow-hidden rounded-full bg-white/10">
              <i className="block h-full bg-wm-lime" style={{
            width: `${aPct}%`
          }} />
              <b className="block h-full bg-wm-green" style={{
            width: `${bPct}%`
          }} />
            </div>
          </div>;
    })}
    </div>;
}
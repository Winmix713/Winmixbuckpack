import React from 'react';
import { clubs } from '../../data/clubs';
import type { Game } from '../../types/football';
export function EventList({
  game


}: {game: Game;}) {
  if (!game.events.length) {
    return <p className="text-sm text-wm-muted">No goals recorded in this simulated fixture yet.</p>;
  }
  return <ol className="flex flex-col gap-3">
      {game.events.map((e, i) => <li key={i} className="flex items-center gap-3 rounded-lg border border-white/8 bg-white/[0.02] px-3 py-2.5">
          <b className="w-10 shrink-0 text-sm text-wm-lime">{e.minute}′</b>
          <span aria-hidden="true">⚽</span>
          <div>
            <strong className="block text-sm text-wm-text">{e.player}</strong>
            <small className="text-xs text-wm-muted">{clubs[game[e.side]].name} · Goal</small>
          </div>
        </li>)}
    </ol>;
}
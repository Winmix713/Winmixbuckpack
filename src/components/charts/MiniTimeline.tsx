import React from 'react';
import type { Game } from '../../types/football';
export function MiniTimeline({
  game


}: {game: Game;}) {
  const progress = game.minute / 90 * 100;
  return <div className="relative h-1 w-28 rounded-full bg-white/10" aria-label="Match event timeline">
      <i className="absolute inset-y-0 left-0 rounded-full bg-wm-lime" style={{
      width: `${progress}%`
    }} />
      {game.events.map((e, i) => <span key={i} title={`${e.minute}′ ${e.player}`} className={`absolute top-1/2 h-2 w-2 -translate-y-1/2 -translate-x-1/2 rounded-full ${e.side === 'home' ? 'bg-wm-violet' : 'bg-wm-green'}`} style={{
      left: `${e.minute / 90 * 100}%`
    }} />)}
    </div>;
}
import React from 'react';
import { toast } from 'sonner';
import { clubs } from '../../data/clubs';
import type { Game } from '../../types/football';

export function EventLine({ game }: {game: Game;}) {
  const progress = game.minute / 90 * 100;
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-baseline justify-between">
        <strong className="text-lg text-wm-text">{game.status === 'Live' ? `${game.minute}′` : 'FULL TIME'}</strong>
        <span className="text-sm text-wm-muted">{game.comment}</span>
      </div>
      <div className="relative h-1.5 w-full rounded-full bg-white/10">
        <i className="absolute inset-y-0 left-0 rounded-full bg-wm-lime" style={{ width: `${progress}%` }} />
        {game.events.map((e, i) =>
        <button
          key={i}
          type="button"
          className="absolute top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1 rounded-full border border-wm-lime/35 bg-[#18200f] px-1.5 py-1 text-xs leading-none text-wm-lime hover:bg-[#1f2913]"
          style={{ left: `${e.minute / 90 * 100}%` }}
          aria-label={`${e.minute} minute goal by ${e.player}`}
          onClick={() =>
          toast(`${e.minute}′ — ${e.player} scores for ${clubs[game[e.side]].name}`)
          }>
          
            <span aria-hidden="true">⚽</span>
            <small>{e.minute}′</small>
          </button>
        )}
      </div>
      <div className="flex justify-between text-[10px] uppercase tracking-wide text-wm-muted-2">
        <span>Kick-off</span>
        <span>Half time</span>
        <span>90′</span>
      </div>
    </div>);

}
import React from 'react';
import { clubs } from '../../data/clubs';
import { formationNumbers, formationPoints, playerNames } from '../../data/content';

interface LineupPitchProps {
  clubId: number;
  compact?: boolean;
}

export function LineupPitch({ clubId, compact = false }: LineupPitchProps) {
  const club = clubs[clubId];
  return (
    <div
      role="img"
      aria-label={`${club.name} 4-3-3 formation`}
      className="relative w-full overflow-hidden rounded-lg border border-white/10 bg-gradient-to-b from-[#0f2417] to-[#0a1710]"
      style={{ height: compact ? 220 : 320 }}>
      
      <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
      <div className="absolute inset-x-1/4 top-0 h-10 rounded-b-md border border-t-0 border-white/10" />
      <div className="absolute inset-x-1/4 bottom-0 h-10 rounded-t-md border border-b-0 border-white/10" />
      {formationPoints.map(([x, y], i) =>
      <span
        key={i}
        className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1"
        style={{ left: `${x}%`, top: `${y}%` }}>
        
          <b className="grid h-7 w-7 place-items-center rounded-full border border-wm-lime/40 bg-wm-surface-2 text-xs font-semibold text-wm-text">
            {formationNumbers[i]}
          </b>
          <small className="whitespace-nowrap text-[9px] text-wm-muted">{playerNames[(i + clubId) % 11]}</small>
        </span>
      )}
      <span className="absolute bottom-2 right-2 text-[10px] tracking-widest text-wm-muted-2">4 — 3 — 3</span>
    </div>);

}
import React from 'react';
import type { Club } from '../../types/football';
export function Donut({
  club


}: {club: Club;}) {
  const wPct = club.w * 10;
  const dPct = (club.w + club.d) * 10;
  return <div className="flex items-center gap-5">
      <div className="grid h-[118px] w-[118px] shrink-0 place-items-center rounded-full p-4" style={{
      background: `conic-gradient(#a877da 0 ${wPct}%, #58b99b ${wPct}% ${dPct}%, #53475f ${dPct}% 100%)`
    }} role="img" aria-label={`${club.w} wins, ${club.d} draws, ${club.l} losses`}>
        
        <div className="grid h-full w-full place-items-center rounded-full bg-wm-surface text-center">
          <div>
            <strong className="block text-2xl text-wm-text">10</strong>
            <small className="text-[10px] tracking-wide text-wm-muted">MATCHES</small>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 text-sm text-wm-muted">
        <span className="flex items-center gap-2">
          <i className="inline-block h-2 w-2 rounded-full bg-wm-lime" /> {club.w} Wins
        </span>
        <span className="flex items-center gap-2">
          <i className="inline-block h-2 w-2 rounded-full bg-wm-green" /> {club.d} Draws
        </span>
        <span className="flex items-center gap-2">
          <i className="inline-block h-2 w-2 rounded-full bg-[#53475f]" /> {club.l} Losses
        </span>
      </div>
    </div>;
}
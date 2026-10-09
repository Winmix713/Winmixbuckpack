import React from 'react';
import { clubs } from '../../data/clubs';
interface ClubBadgeProps {
  clubId: number;
  size?: 'default' | 'large';
}
export function ClubBadge({
  clubId,
  size = 'default'
}: ClubBadgeProps) {
  const club = clubs[clubId];
  const isLarge = size === 'large';
  return <span aria-hidden="true" className={`inline-grid shrink-0 place-items-center border border-white/15 bg-[#181d1b] font-semibold leading-none text-wm-text ${isLarge ? 'h-[55px] w-[49px] rounded-[12px_12px_17px_17px] text-base' : 'h-8 w-[29px] rounded-[8px_8px_11px_11px] text-[10px]'}`}>
      
      {club.short}
    </span>;
}
export function BadgePair({
  homeId,
  awayId



}: {homeId: number;awayId: number;}) {
  return <span className="flex w-[47px] shrink-0 items-center">
      <ClubBadge clubId={homeId} />
      <span className="-ml-2.5 mt-3">
        <ClubBadge clubId={awayId} />
      </span>
    </span>;
}
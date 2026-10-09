import React from 'react';
import { Heart } from 'lucide-react';
import type { Game } from '../../types/football';
import { clubs } from '../../data/clubs';
import { formatScore, gameTitle } from '../../utils/football';
import { BadgePair } from './ClubBadge';
interface MobileMatchCardProps {
  game: Game;
  active: boolean;
  followed: boolean;
  onOpen: () => void;
  onToggleFollow: () => void;
}
export function MobileMatchCard({
  game,
  active,
  followed,
  onOpen,
  onToggleFollow
}: MobileMatchCardProps) {
  return <article className={`rounded-2xl border p-4 transition-colors ${active ? 'border-white/[0.18] bg-white/[0.055]' : 'border-white/[0.08] bg-white/[0.025]'}`}>
      <div className="flex items-start gap-3">
        <button type="button" onClick={onOpen} aria-label={`Open ${gameTitle(game)}`} className="flex min-w-0 flex-1 items-start gap-3 text-left">
          <BadgePair homeId={game.home} awayId={game.away} />
          <span className="min-w-0 flex-1">
            <strong className="block text-[15px] font-medium leading-5 text-[#edf2ee]">
              {clubs[game.home].name} <span className="text-xs font-normal text-[#78837c]">vs</span> {clubs[game.away].name}
            </strong>
            <span className="mt-1 block text-xs text-[#98a39c]">{game.league}</span>
          </span>
        </button>
        <button type="button" onClick={onToggleFollow} aria-pressed={followed} aria-label={`${followed ? 'Remove' : 'Add'} ${gameTitle(game)} ${followed ? 'from' : 'to'} watchlist`} className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl border transition ${followed ? 'border-wm-lime/25 bg-wm-lime/[0.08] text-wm-lime' : 'border-white/[0.09] text-[#7f8b83] hover:bg-white/[0.05] hover:text-wm-text'}`}>
          
          <Heart size={17} fill={followed ? 'currentColor' : 'none'} />
        </button>
      </div>

      <button type="button" onClick={onOpen} className="mt-4 flex w-full items-center justify-between rounded-xl bg-black/20 px-3 py-3 text-left">
        <span>
          <span className={`inline-flex items-center gap-1.5 text-xs font-medium ${game.status === 'Live' ? 'text-wm-lime' : 'text-[#aab4ad]'}`}>
            {game.status === 'Live' && <i className="h-1.5 w-1.5 rounded-full bg-wm-lime" aria-hidden="true" />}
            {game.status === 'Live' ? `${game.minute}′ Live` : 'Full time'}
          </span>
          <small className="mt-1 block max-w-[210px] truncate text-xs text-[#87928b]">{game.comment}</small>
        </span>
        <strong className="text-xl font-semibold tracking-[-1px] text-[#f2f5f2]">{formatScore(game)}</strong>
      </button>
    </article>;
}
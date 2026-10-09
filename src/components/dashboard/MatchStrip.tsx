import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useDashboard, games } from '../../contexts/DashboardContext';
import { ClubBadge } from './ClubBadge';
import { MiniTimeline } from '../charts/MiniTimeline';
import { gameTitle, formatScore } from '../../utils/football';
export function MatchStrip() {
  const {
    activeId,
    openMatch,
    nextMatch,
    prevMatch
  } = useDashboard();
  const game = games[activeId];
  return <div className="flex items-center gap-3 border-t border-white/[0.08] bg-white/[0.018] px-4 py-3 sm:gap-4 sm:px-6">
      <button type="button" onClick={() => openMatch(activeId)} aria-label={`Open ${gameTitle(game)}`} className="flex min-w-0 flex-1 items-center gap-3 text-left">
        
        <ClubBadge clubId={game.home} />
        <span className="min-w-0">
          <strong className="block truncate text-[13px] text-[#e6ece8]">{gameTitle(game)}</strong>
          <small className="block truncate text-[11px] text-[#718078]">
            {game.status === 'Live' ? `${game.minute}′` : 'FT'} · {game.comment}
          </small>
        </span>
      </button>
      <div className="hidden items-center gap-2 text-[11px] text-wm-muted sm:flex">
        <span>{game.status === 'Live' ? `${game.minute}′` : 'FT'}</span>
        <MiniTimeline game={game} />
        <strong className="text-wm-text">{formatScore(game)}</strong>
      </div>
      <div className="flex shrink-0 items-center gap-1">
        <button type="button" onClick={prevMatch} aria-label="Previous match" className="grid h-11 w-11 place-items-center rounded-xl border border-white/[0.08] text-[#8e9992] transition hover:bg-white/[0.05] hover:text-wm-text">
          
          <ChevronLeft size={16} />
        </button>
        <button type="button" onClick={nextMatch} aria-label="Next match" className="grid h-11 w-11 place-items-center rounded-xl border border-white/[0.08] text-[#8e9992] transition hover:bg-white/[0.05] hover:text-wm-text">
          
          <ChevronRight size={16} />
        </button>
      </div>
    </div>;
}
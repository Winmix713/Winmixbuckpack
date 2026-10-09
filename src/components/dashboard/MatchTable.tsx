import React from 'react';
import { Heart } from 'lucide-react';
import { games, useDashboard } from '../../contexts/DashboardContext';
import { clubs } from '../../data/clubs';
import { filterMatches } from '../../utils/matches';
import { formatScore, gameTitle } from '../../utils/football';
import { BadgePair } from './ClubBadge';
import { MatchListState } from './MatchListState';
import { MobileMatchCard } from './MobileMatchCard';

export type MatchListViewState = 'ready' | 'loading' | 'error';

interface MatchTableProps {
  state?: MatchListViewState;
  onRetry?: () => void;
}

export function MatchTable({ state = 'ready', onRetry }: MatchTableProps) {
  const { view, statusFilter, search, leagueFilter, dateFilter, followed, activeId, openMatch, toggleFollow, resetFilters } = useDashboard();
  const list = filterMatches({
    games,
    favoritesOnly: view === 'favorites',
    followed,
    status: statusFilter,
    search,
    league: leagueFilter,
    date: dateFilter
  });

  if (state === 'loading' || state === 'error') {
    return <MatchListState state={state} onReset={resetFilters} onRetry={onRetry ?? resetFilters} />;
  }

  if (!list.length) return <MatchListState state="empty" onReset={resetFilters} />;

  return (
    <div>
      <div className="space-y-3 px-4 py-4 md:hidden">
        {list.map((game) =>
        <MobileMatchCard
          key={game.id}
          game={game}
          active={activeId === game.id}
          followed={followed.has(game.id)}
          onOpen={() => openMatch(game.id)}
          onToggleFollow={() => toggleFollow(game.id)} />

        )}
      </div>

      <div className="hidden overflow-x-auto px-6 md:block">
        <table className="w-full min-w-[760px] border-collapse">
          <thead>
            <tr className="text-left text-[11px] font-medium uppercase tracking-[1px] text-[#7f8a83]">
              <th className="w-12 py-4">#</th>
              <th className="py-4">Match</th>
              <th className="py-4">Competition</th>
              <th className="py-4">Score</th>
              <th className="py-4">Status</th>
              <th className="w-16 py-4 text-center"><span className="sr-only">Watchlist</span></th>
            </tr>
          </thead>
          <tbody>
            {list.map((game, index) => {
              const isActive = activeId === game.id;
              const isFollowed = followed.has(game.id);
              return (
                <tr key={game.id} className={`h-[74px] border-t text-[#a5afa8] transition-colors hover:bg-white/[0.035] ${isActive ? 'border-white/[0.12] bg-white/[0.05]' : 'border-white/[0.055]'}`}>
                  <td className="py-3 text-xs text-[#737e77]">{String(index + 1).padStart(2, '0')}</td>
                  <td className="max-w-[380px] py-3 pr-6">
                    <button type="button" onClick={() => openMatch(game.id)} aria-label={`Open ${gameTitle(game)}`} className="flex w-full min-w-0 items-center gap-3 text-left">
                      <BadgePair homeId={game.home} awayId={game.away} />
                      <span className="min-w-0 flex-1">
                        <strong className="block truncate text-[14px] font-medium text-[#e8ede9]">
                          {clubs[game.home].name} <span className="px-1 text-xs font-normal text-[#77827b]">vs</span> {clubs[game.away].name}
                        </strong>
                        <small className="mt-1 block truncate text-xs text-[#89948d]">{game.comment}</small>
                      </span>
                    </button>
                  </td>
                  <td className="py-3 pr-5 text-[13px] text-[#9aa49e]">{game.league.replace('Virtual ', '')}</td>
                  <td className="py-3 text-[15px] font-semibold text-[#edf1ee]">{formatScore(game)}</td>
                  <td className="py-3">
                    <span className={`inline-flex min-h-8 items-center gap-1.5 rounded-lg border px-2.5 text-xs font-medium ${game.status === 'Live' ? 'border-wm-lime/20 bg-wm-lime/[0.06] text-wm-lime' : 'border-white/10 bg-white/[0.035] text-[#a2aca5]'}`}>
                      {game.status === 'Live' && <i className="h-1.5 w-1.5 rounded-full bg-wm-lime" aria-hidden="true" />}
                      {game.status === 'Live' ? `${game.minute}′ Live` : 'Full time'}
                    </span>
                  </td>
                  <td className="py-3 text-center">
                    <button type="button" onClick={() => toggleFollow(game.id)} aria-pressed={isFollowed} aria-label={`${isFollowed ? 'Remove' : 'Add'} ${gameTitle(game)} ${isFollowed ? 'from' : 'to'} watchlist`} className={`mx-auto grid h-11 w-11 place-items-center rounded-xl border transition ${isFollowed ? 'border-wm-lime/20 bg-wm-lime/[0.07] text-wm-lime' : 'border-transparent text-[#69746d] hover:border-white/[0.1] hover:bg-white/[0.04] hover:text-wm-text'}`}>
                      <Heart size={16} fill={isFollowed ? 'currentColor' : 'none'} />
                    </button>
                  </td>
                </tr>);

            })}
          </tbody>
        </table>
      </div>
    </div>);

}
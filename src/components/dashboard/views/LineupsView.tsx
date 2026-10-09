import React from 'react';
import { useDashboard, games } from '../../../contexts/DashboardContext';
import { clubs } from '../../../data/clubs';
import { gameTitle, formatScore } from '../../../utils/football';
import { ClubBadge } from '../ClubBadge';
import { ChipTabs } from './ChipTabs';
import { DataCard } from './DataCard';
import { LineupPitch } from '../../charts/LineupPitch';
import { EventLine } from '../../charts/EventLine';
import { EventList } from '../../charts/EventList';

export function LineupsView() {
  const { activeId, setActiveId, teamSide, setTeamSide } = useDashboard();
  const game = games[activeId];
  const teamId = teamSide === 'home' ? game.home : game.away;

  return (
    <div className="flex flex-col gap-5 px-6 pb-8">
      <label className="flex items-center gap-2 text-[12px] text-wm-muted">
        Match
        <select
          value={activeId}
          onChange={(e) => setActiveId(Number(e.target.value))}
          className="rounded-md border border-white/[0.11] bg-[#111514] px-2.5 py-1.5 text-[12px] text-[#dce4df]">
          
          {games.map((g) =>
          <option key={g.id} value={g.id}>
              {gameTitle(g)}
            </option>
          )}
        </select>
      </label>

      <div className="grid grid-cols-3 items-center gap-3 rounded-xl border border-white/[0.08] p-4">
        <div className="flex flex-col items-center gap-2 text-center">
          <ClubBadge clubId={game.home} size="large" />
          <strong className="text-sm text-wm-text">{clubs[game.home].name}</strong>
          <small className="text-xs text-wm-muted-2">{clubs[game.home].location}</small>
        </div>
        <div className="flex flex-col items-center gap-1.5 text-center">
          <span
            className={`rounded-md border px-2 py-1 text-[10px] ${
            game.status === 'Live' ? 'border-wm-lime/[0.18] bg-wm-lime/[0.075] text-[#bff45e]' : 'border-white/10 bg-white/[0.035] text-[#9aa49d]'}`
            }>
            
            {game.status === 'Live' ? `LIVE DEMO · ${game.minute}′` : 'FULL TIME'}
          </span>
          <strong className="text-2xl text-[#e4ff91]">{formatScore(game)}</strong>
          <small className="text-xs text-wm-muted-2">{game.league}</small>
        </div>
        <div className="flex flex-col items-center gap-2 text-center">
          <ClubBadge clubId={game.away} size="large" />
          <strong className="text-sm text-wm-text">{clubs[game.away].name}</strong>
          <small className="text-xs text-wm-muted-2">{clubs[game.away].location}</small>
        </div>
      </div>

      <div className="rounded-xl border border-white/[0.08] p-4">
        <EventLine game={game} />
      </div>

      <ChipTabs
        value={teamSide}
        onChange={(v) => setTeamSide(v as 'home' | 'away')}
        items={[
        ['home', clubs[game.home].name],
        ['away', clubs[game.away].name]]
        } />
      

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <DataCard title="Starting line-up">
          <LineupPitch clubId={teamId} />
        </DataCard>
        <DataCard title="Goals & match events">
          <EventList game={game} />
          <p className="mt-3 text-xs text-wm-muted-2">Select a timeline marker to inspect a goal.</p>
        </DataCard>
      </div>
    </div>);

}
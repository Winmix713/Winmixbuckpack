import React from 'react';
import { useDashboard, games } from '../../../contexts/DashboardContext';
import { gameTitle } from '../../../utils/football';
import { RadarChart } from '../../charts/RadarChart';
import { StatBars } from '../../charts/StatBars';
import { AreaChart } from '../../charts/AreaChart';
import { ActionsChart } from '../../charts/ActionsChart';
import { HeatPitch } from '../../charts/HeatPitch';
import { DataCard } from './DataCard';
import { ChipTabs } from './ChipTabs';
import { clubs } from '../../../data/clubs';

export function StatisticsView() {
  const { activeId, setActiveId, half, setHalf } = useDashboard();
  const game = games[activeId];

  return (
    <div className="flex flex-col gap-5 px-6 pb-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
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
        <ChipTabs
          value={String(half)}
          onChange={(v) => setHalf(Number(v) as 1 | 2)}
          items={[
          ['1', 'First half'],
          ['2', 'Second half']]
          } />
        
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[
        ['Possession', `${game.possession - (half === 1 ? 3 : 0)}`, '%'],
        ['Total attempts', `${half === 1 ? 7 : 12 + game.id}`, ''],
        ['Pass accuracy', `${half === 1 ? 86 : 89}`, '%'],
        ['Avg. sprint', half === 1 ? '25.6' : '27.8', 'km/h']].
        map(([label, value, unit]) =>
        <div key={label} className="rounded-lg border border-white/[0.09] px-3 py-2.5">
            <small className="block text-[11px] text-[#7b8780]">{label}</small>
            <strong className="text-xl text-[#d8ff74]">
              {value}
              <em className="ml-0.5 text-xs font-normal not-italic text-[#7b8780]">{unit}</em>
            </strong>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <DataCard title="Team comparison">
          <RadarChart possession={game.possession} />
          <div className="mt-2 flex justify-center gap-4 text-xs text-[#829088]">
            <span className="flex items-center gap-1.5">
              <i className="h-2 w-2 rounded-full bg-wm-lime" /> {clubs[game.home].name}
            </span>
            <span className="flex items-center gap-1.5">
              <i className="h-2 w-2 rounded-full bg-wm-green" /> {clubs[game.away].name}
            </span>
          </div>
        </DataCard>
        <DataCard title="Match statistics">
          <StatBars game={game} />
        </DataCard>
        <DataCard title="Ball possession" wide note={`${game.possession}% / ${100 - game.possession}%`}>
          <AreaChart home={game.possession} away={100 - game.possession} />
        </DataCard>
        <DataCard title="Active actions">
          <ActionsChart half={half} />
        </DataCard>
        <DataCard title="Field presence">
          <HeatPitch />
        </DataCard>
      </div>
    </div>);

}
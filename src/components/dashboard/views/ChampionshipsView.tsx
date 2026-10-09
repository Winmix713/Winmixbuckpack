import React from 'react';
import { useDashboard, games } from '../../../contexts/DashboardContext';
import { clubs } from '../../../data/clubs';
import { ClubBadge } from '../ClubBadge';
import { ChipTabs } from './ChipTabs';
import { formatScore } from '../../../utils/football';
const GROUPS = 'ABCD'.split('').map((g) => [g, `Group ${g}`] as [string, string]);
const DAYS = [19, 20, 21, 22, 23, 24, 25];
const DAY_LABELS = ['SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI'];
export function ChampionshipsView() {
  const {
    group,
    setGroup,
    round,
    setRound,
    dateFilter,
    setDateFilter,
    openMatch
  } = useDashboard();
  const list = games.filter((game) => game.group === group && (round === 'all' || game.round === round) && (!dateFilter || game.date === dateFilter));
  return <div className="flex flex-col gap-5 px-6 pb-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="text-[11px] uppercase tracking-wide text-wm-muted-2">Virtual European Championship</span>
        <label className="flex items-center gap-2 text-[12px] text-wm-muted">
          Round
          <select value={round} onChange={(e) => setRound(e.target.value)} className="min-h-11 rounded-xl border border-white/[0.11] bg-[#111514] px-3 text-[13px] text-[#dce4df]">
            
            <option value="all">All rounds</option>
            <option>Group stage</option>
            <option>Quarter-final</option>
            <option>Semi-final</option>
            <option>Final</option>
          </select>
        </label>
      </div>

      <ChipTabs items={GROUPS} value={group} onChange={setGroup} />

      <div className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-white/[0.08] px-4 py-3">
        <label className="flex items-center gap-2 text-[12px] text-wm-muted">
          Matchday
          <input type="date" value={dateFilter} min="2026-09-01" max="2026-09-30" onChange={(e) => setDateFilter(e.target.value)} className="min-h-11 rounded-xl border border-white/[0.11] bg-[#111514] px-3 text-[13px] text-[#dce4df]" />
          
        </label>
        <span className="text-xs text-wm-muted-2">September 2026 · demo schedule</span>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-1">
        <button type="button" onClick={() => setDateFilter('')} className={`flex min-h-11 shrink-0 items-center rounded-lg border px-3.5 text-xs font-medium ${!dateFilter ? 'border-white/[0.18] bg-white/[0.08] text-wm-text' : 'border-white/[0.08] text-wm-muted'}`}>
          
          All dates
        </button>
        {DAYS.map((d, i) => {
        const value = `2026-09-${d}`;
        const active = dateFilter === value;
        return <button key={d} onClick={() => setDateFilter(value)} className={`flex shrink-0 flex-col items-center gap-1 rounded-lg border px-3.5 py-2.5 ${active ? 'border-wm-lime/25 bg-wm-lime/[0.09] text-[#dfff7b]' : 'border-white/[0.08] text-wm-muted'}`}>
              
              <small className="text-[9px] tracking-wide">{DAY_LABELS[i]}</small>
              <strong className="text-sm">{d}</strong>
              {d === 22 && <i className="mt-0.5 h-1 w-1 rounded-full bg-wm-lime" />}
            </button>;
      })}
      </div>

      {list.length ? <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {list.map((g) => <button key={g.id} onClick={() => openMatch(g.id)} className="grid grid-cols-[1fr_65px_1fr] items-center gap-2 rounded-xl border border-white/[0.08] p-3 text-left" style={{
        background: 'linear-gradient(145deg, rgba(255,255,255,.03), rgba(255,255,255,.012))'
      }}>
          
              <span className="flex flex-col items-center gap-1.5 text-center">
                <ClubBadge clubId={g.home} />
                <strong className="text-xs text-wm-text">{clubs[g.home].name}</strong>
              </span>
              <span className="flex flex-col items-center gap-1 text-center">
                <span className="text-[15px] font-medium text-[#e2ff89]">{formatScore(g)}</span>
                <small className="text-[9px] text-wm-muted-2">{g.status === 'Live' ? `${g.minute}′ LIVE DEMO` : 'FULL TIME'}</small>
              </span>
              <span className="flex flex-col items-center gap-1.5 text-center">
                <ClubBadge clubId={g.away} />
                <strong className="text-xs text-wm-text">{clubs[g.away].name}</strong>
              </span>
              <small className="col-span-3 text-center text-[10px] text-wm-muted-2">
                {g.round} · Group {g.group}
              </small>
            </button>)}
        </div> : <div className="flex flex-col items-center gap-3 py-12 text-center">
          <strong className="text-wm-text">No fixtures in this selection</strong>
          <p className="text-sm text-wm-muted">Choose another group, round or date in the simulated schedule.</p>
          <button type="button" onClick={() => {
        setGroup('A');
        setRound('all');
        setDateFilter('');
      }} className="min-h-11 rounded-lg border border-white/10 bg-white/[0.035] px-4 text-sm text-wm-text hover:border-white/20">
          
            View all demo fixtures
          </button>
        </div>}
    </div>;
}
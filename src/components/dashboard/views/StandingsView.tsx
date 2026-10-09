import React, { useState } from 'react';
import { clubs } from '../../../data/clubs';
import { ClubBadge } from '../ClubBadge';
import { DataCard } from './DataCard';
import { AreaChart } from '../../charts/AreaChart';
import { useDashboard } from '../../../contexts/DashboardContext';
const LEAGUES = [...new Set(clubs.map((c) => c.league))];
export function StandingsView() {
  const {
    setClubId,
    setView
  } = useDashboard();
  const [league, setLeague] = useState('all');
  const list = clubs.filter((c) => league === 'all' || c.league === league).sort((a, b) => b.pts - a.pts || b.gf - b.ga - (a.gf - a.ga));
  return <div className="flex flex-col gap-5 px-6 pb-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <label className="flex items-center gap-2 text-[12px] text-wm-muted">
          Competition
          <select value={league} onChange={(e) => setLeague(e.target.value)} className="rounded-md border border-white/[0.11] bg-[#111514] px-2.5 py-1.5 text-[12px] text-[#dce4df]">
            
            <option value="all">All virtual clubs</option>
            {LEAGUES.map((l) => <option key={l} value={l}>
                {l}
              </option>)}
          </select>
        </label>
        <span className="text-[11px] uppercase tracking-wide text-wm-muted-2">Demo season · 10 matches played</span>
      </div>

      <div className="overflow-x-auto rounded-xl border border-white/[0.08]">
        <table className="w-full min-w-[520px] border-collapse text-sm">
          <thead>
            <tr className="text-left text-[10px] uppercase tracking-wide text-[#626c66]">
              <th className="px-4 py-3">#</th>
              <th className="px-4 py-3">Club</th>
              <th className="px-4 py-3">W</th>
              <th className="px-4 py-3">D</th>
              <th className="px-4 py-3">L</th>
              <th className="px-4 py-3">GF</th>
              <th className="px-4 py-3">GA</th>
              <th className="px-4 py-3">PTS</th>
            </tr>
          </thead>
          <tbody>
            {list.map((c, i) => <tr key={c.id} className={`border-t border-white/[0.045] text-[#929c95] ${i === 0 ? 'bg-wm-lime/[0.055]' : ''}`}>
                <td className="px-4 py-2.5">{i + 1}</td>
                <td className="px-4 py-2.5">
                  <button onClick={() => {
                setClubId(c.id);
                setView('clubs');
              }} className="flex items-center gap-2.5">
                  
                    <ClubBadge clubId={c.id} />
                    <strong className="text-wm-text">{c.name}</strong>
                  </button>
                </td>
                <td className="px-4 py-2.5">{c.w}</td>
                <td className="px-4 py-2.5">{c.d}</td>
                <td className="px-4 py-2.5">{c.l}</td>
                <td className="px-4 py-2.5">{c.gf}</td>
                <td className="px-4 py-2.5">{c.ga}</td>
                <td className="px-4 py-2.5 font-medium text-[#d8ff74]">{c.pts}</td>
              </tr>)}
          </tbody>
        </table>
      </div>

      <DataCard title="Championship position">
        <AreaChart label="Relative club position trend" />
      </DataCard>
    </div>;
}
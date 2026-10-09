import React from 'react';
import { ChevronDown, LayoutGrid } from 'lucide-react';
import { BallIcon } from '../icons/FootballIcons';
import { useDashboard } from '../../contexts/DashboardContext';
import type { ViewKey } from '../../types/football';
const dashboardItems: Array<{
  go: ViewKey;
  label: string;
}> = [{
  go: 'clubs',
  label: 'Club summary'
}, {
  go: 'championships',
  label: 'Championships'
}, {
  go: 'standings',
  label: 'League overview'
}, {
  go: 'statistics',
  label: 'Statistics'
}];
const matchItems: Array<{
  go: ViewKey;
  label: string;
  count?: number;
}> = [{
  go: 'matches',
  label: 'Match centre',
  count: 8
}, {
  go: 'lineups',
  label: 'Match overview'
}, {
  go: 'favorites',
  label: 'Watchlist'
}];
function SideItem({
  label,
  active,
  onClick,
  count





}: {label: string;active: boolean;onClick: () => void;count?: number;}) {
  return <button type="button" onClick={onClick} className={`flex min-h-11 w-full items-center justify-between rounded-[9px] border px-3 py-2 text-left text-[13px] transition-colors ${active ? 'border-white/[0.14] bg-white/[0.075] font-medium text-[#edf2ee]' : 'border-transparent text-[#929d96] hover:bg-white/[0.045] hover:text-[#e8ece9]'}`}>
      
      <span>{label}</span>
      {count !== undefined && <span className={active ? 'text-wm-lime' : 'text-[#727d76]'}>{count}</span>}
    </button>;
}
export function Sidebar() {
  const {
    view,
    setView
  } = useDashboard();
  return <aside className="wm-scroll hidden w-[232px] shrink-0 flex-col overflow-y-auto border-r border-white/[0.08] px-3.5 py-4 md:flex" style={{
    background: 'linear-gradient(160deg, rgba(255,255,255,.045), transparent 35%), rgba(11,13,13,.82)'
  }} aria-label="Football navigation">
      
      <div className="mb-5 flex items-center gap-2.5 px-1">
        <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg border border-[#dfff7c] bg-wm-lime text-sm font-bold text-[#11150b]">
          W
        </span>
        <div className="min-w-0">
          <div className="truncate text-[13px] font-medium text-wm-text">Winmix Analytics</div>
          <small className="block text-[11px] text-[#69736d]">Virtual football workspace</small>
        </div>
      </div>

      <div className="mb-2 px-2 text-[10px] font-medium uppercase tracking-[1px] text-[#59625c]">Workspace</div>

      <details open className="group mb-1.5">
        <summary className="flex min-h-11 cursor-pointer list-none items-center gap-2 rounded-[9px] px-3 py-2 text-[14px] text-[#929d96] hover:bg-white/[0.035] [&::-webkit-details-marker]:hidden">
          <LayoutGrid size={15} />
          <span className="flex-1">Dashboard</span>
          <ChevronDown size={14} className="opacity-60 transition group-open:rotate-180" />
        </summary>
        <div className="mt-1 flex flex-col gap-0.5 pl-[22px]">
          {dashboardItems.map((item) => <SideItem key={item.go} label={item.label} active={view === item.go} onClick={() => setView(item.go)} />)}
        </div>
      </details>

      <details open className="group mb-1.5">
        <summary className="flex min-h-11 cursor-pointer list-none items-center gap-2 rounded-[9px] px-3 py-2 text-[14px] text-[#929d96] hover:bg-white/[0.035] [&::-webkit-details-marker]:hidden">
          <BallIcon className="h-[15px] w-[15px]" />
          <span className="flex-1">Matches</span>
          <ChevronDown size={14} className="opacity-60 transition group-open:rotate-180" />
        </summary>
        <div className="mt-1 flex flex-col gap-0.5 pl-[22px]">
          {matchItems.map((item) => <SideItem key={item.go} label={item.label} count={item.count} active={view === item.go} onClick={() => setView(item.go)} />)}
        </div>
      </details>

      <div className="my-3 h-px bg-white/[0.075]" />

      <SideItem label="Profile" active={view === 'profile'} onClick={() => setView('profile')} />
      <div className="mt-0.5">
        <SideItem label="Settings" active={view === 'settings'} onClick={() => setView('settings')} />
      </div>

      <div className="mt-auto pt-4">
        <div className="rounded-xl border border-white/[0.08] bg-white/[0.025] p-3">
          <span className="text-[12px] text-wm-muted">Match coverage</span>
          <strong className="mt-1 block text-[15px] text-[#edf2ee]">
            8 <small className="text-xs text-wm-muted">/ 8 fixtures</small>
          </strong>
          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/[0.07]">
            <i className="block h-full w-full bg-wm-lime shadow-[0_0_12px_rgba(200,255,54,.35)]" />
          </div>
          <span className="mt-2 block text-[11px] text-wm-muted">Simulated dataset · 22 Sep</span>
        </div>
        <button type="button" onClick={() => setView('profile')} className="mt-3 flex min-h-11 w-full items-center gap-2.5 rounded-lg px-2 py-1.5 text-left hover:bg-white/[0.04]">
          
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white/10 text-[11px] font-semibold text-wm-text">
            WA
          </span>
          <span className="min-w-0">
            <span className="block truncate text-[12px] text-wm-text">Winmix Analyst</span>
            <small className="block truncate text-[11px] text-wm-muted">Budapest, Hungary</small>
          </span>
        </button>
      </div>
    </aside>;
}
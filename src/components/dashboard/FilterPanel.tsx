import React from 'react';
import { X } from 'lucide-react';
import { useDashboard } from '../../contexts/DashboardContext';
const LEAGUES = ['all', 'Virtual Champions', 'Virtual Premier', 'Virtual Bundesliga', 'Virtual Serie A'];
export function FilterPanel() {
  const {
    filterOpen,
    statusFilter,
    setStatusFilter,
    search,
    setSearch,
    leagueFilter,
    setLeagueFilter,
    dateFilter,
    setDateFilter,
    resetFilters
  } = useDashboard();
  const chips = [statusFilter !== 'all' ? {
    label: statusFilter,
    clear: () => setStatusFilter('all')
  } : null, search ? {
    label: `“${search}”`,
    clear: () => setSearch('')
  } : null, leagueFilter !== 'all' ? {
    label: leagueFilter.replace('Virtual ', ''),
    clear: () => setLeagueFilter('all')
  } : null, dateFilter ? {
    label: dateFilter,
    clear: () => setDateFilter('')
  } : null].filter((chip): chip is {
    label: string;
    clear: () => void;
  } => Boolean(chip));
  if (!filterOpen && chips.length === 0) return null;
  return <div className="border-b border-white/[0.08] bg-black/10 px-4 py-4 sm:px-6">
      {filterOpen && <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-[minmax(180px,1fr)_minmax(180px,1fr)_auto] lg:items-end">
          <label className="flex flex-col gap-1.5 text-xs font-medium text-[#99a49d]">
            Competition
            <select value={leagueFilter} onChange={(event) => setLeagueFilter(event.target.value)} className="min-h-11 rounded-xl border border-white/[0.11] bg-[#111514] px-3 text-[13px] text-[#e5ebe7]">
            
              {LEAGUES.map((league) => <option key={league} value={league}>{league === 'all' ? 'All competitions' : league}</option>)}
            </select>
          </label>
          <label className="flex flex-col gap-1.5 text-xs font-medium text-[#99a49d]">
            Match date
            <input type="date" min="2026-09-22" max="2026-09-24" value={dateFilter} onChange={(event) => setDateFilter(event.target.value)} className="min-h-11 rounded-xl border border-white/[0.11] bg-[#111514] px-3 text-[13px] text-[#e5ebe7]" />
          
          </label>
          <button type="button" onClick={resetFilters} className="min-h-11 rounded-xl border border-white/10 bg-white/[0.035] px-4 text-[13px] font-medium text-wm-text hover:bg-white/[0.07]">
            Clear all
          </button>
        </div>}

      {chips.length > 0 && <div className={`${filterOpen ? 'mt-4' : ''} flex flex-wrap items-center gap-2`} aria-label="Active filters">
          <span className="mr-1 text-xs text-[#7f8a83]">Active filters</span>
          {chips.map((chip) => <button key={chip.label} type="button" onClick={chip.clear} className="inline-flex min-h-9 items-center gap-1.5 rounded-full border border-white/[0.1] bg-white/[0.045] px-3 text-xs text-[#bec7c1] hover:bg-white/[0.08]" aria-label={`Remove ${chip.label} filter`}>
              {chip.label}<X size={12} aria-hidden="true" />
            </button>)}
          <button type="button" onClick={resetFilters} className="min-h-9 px-2 text-xs font-medium text-[#aeb8b1] hover:text-white">Clear all</button>
        </div>}
    </div>;
}
import React from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import { games, useDashboard } from '../../contexts/DashboardContext';
import type { StatusFilter } from '../../types/football';

const TABS: Array<{key: StatusFilter;label: string;}> = [
{ key: 'all', label: 'All matches' },
{ key: 'Live', label: 'Live' },
{ key: 'Finished', label: 'Finished' }];


export function MatchToolbar() {
  const { statusFilter, setStatusFilter, search, setSearch, filterOpen, setFilterOpen } = useDashboard();

  return (
    <div className="flex flex-col gap-4 border-b border-white/[0.08] px-4 pb-5 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
      <div role="tablist" aria-label="Match status" className="flex min-h-11 items-center gap-1 rounded-xl border border-white/[0.07] bg-black/20 p-1">
        {TABS.map((tab) => {
          const selected = statusFilter === tab.key;
          const count = tab.key === 'all' ? games.length : games.filter((game) => game.status === tab.key).length;
          return (
            <button
              key={tab.key}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setStatusFilter(tab.key)}
              className={`inline-flex min-h-9 items-center gap-2 rounded-lg px-3 text-[13px] font-medium transition-colors ${
              selected ? 'bg-white/[0.09] text-[#f2f5f2]' : 'text-[#8d9891] hover:bg-white/[0.04] hover:text-wm-text'}`
              }>
              
              {tab.label}
              <span className={`text-[11px] ${selected ? 'text-wm-lime' : 'text-[#677169]'}`}>{count}</span>
            </button>);

        })}
      </div>

      <div className="flex items-center gap-2">
        <label className="flex min-h-11 min-w-0 flex-1 items-center gap-2 rounded-xl border border-white/[0.1] bg-white/[0.03] px-3 lg:w-[230px]">
          <Search size={16} className="shrink-0 text-[#7d8881]" aria-hidden="true" />
          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search a team"
            aria-label="Search matches"
            className="min-w-0 flex-1 bg-transparent text-[13px] text-[#edf2ee] placeholder:text-[#78827b] focus:outline-none" />
          
        </label>
        <button
          type="button"
          onClick={() => setFilterOpen(!filterOpen)}
          aria-expanded={filterOpen}
          aria-label="Filter matches"
          className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl border transition ${filterOpen ? 'border-white/[0.18] bg-white/[0.09] text-wm-text' : 'border-white/[0.1] bg-white/[0.03] text-[#a4aea7] hover:bg-white/[0.07]'}`}>
          
          <SlidersHorizontal size={16} />
        </button>
      </div>
    </div>);

}
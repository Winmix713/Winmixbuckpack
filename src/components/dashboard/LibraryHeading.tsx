import React from 'react';
import { Sparkles } from 'lucide-react';
import { useDashboard } from '../../contexts/DashboardContext';
import { viewDescriptions, viewOrder } from '../../data/content';
import type { ViewKey } from '../../types/football';

export function LibraryHeading({ onTour }: {onTour: () => void;}) {
  const { view, setView } = useDashboard();
  const [title, description] = viewDescriptions[view];

  return (
    <>
      <div className="flex items-end justify-between gap-4 border-b border-white/[0.06] px-4 py-6 sm:px-6">
        <div>
          <h2 className="text-[30px] font-medium tracking-[-1.4px] text-wm-text sm:text-[34px]">
            {title}
            <span className="text-[#89948d]">.</span>
          </h2>
          <p className="mt-1.5 text-sm leading-6 text-[#98a39c]">{description}</p>
        </div>
        <button
          type="button"
          onClick={onTour}
          className="flex min-h-11 shrink-0 items-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.035] px-3 text-xs font-medium text-wm-text transition hover:bg-white/[0.07]">
          
          <Sparkles size={14} className="text-[#aeb8b1]" />
          <span className="hidden sm:inline">Take a tour</span>
        </button>
      </div>
      <div className="flex items-center justify-between gap-3 px-4 pb-4 text-[11px] text-[#8e779e] md:hidden">
        <label htmlFor="mobile-view">View</label>
        <select
          id="mobile-view"
          value={view}
          onChange={(e) => setView(e.target.value as ViewKey)}
          className="min-h-11 rounded-xl border border-white/10 bg-[#111514] px-3 text-[13px] text-wm-text">
          
          {viewOrder.map((key) =>
          <option key={key} value={key}>
              {viewDescriptions[key][0]}
            </option>
          )}
        </select>
      </div>
    </>);

}
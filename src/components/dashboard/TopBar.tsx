import React from 'react';
import { Contrast } from 'lucide-react';
import { useDashboard } from '../../contexts/DashboardContext';
import { viewDescriptions } from '../../data/content';

export function TopBar() {
  const { view, dimTheme, toggleDimTheme, rtl, toggleRtl, fontScale, setFontScale } = useDashboard();
  const [title] = viewDescriptions[view];

  return (
    <div className="flex min-h-[60px] items-center justify-between border-b border-white/[0.07] px-4 py-2 text-[12px] text-[#89948d] sm:px-6">
      <span className="truncate">
        Winmix <span className="px-1 text-white/20">/</span> <span className="font-medium text-[#dce2de]">{title}</span>
      </span>
      <div className="flex items-center gap-1.5">
        <button type="button" onClick={toggleDimTheme} aria-pressed={dimTheme} aria-label="Switch dashboard contrast" title="Switch dashboard contrast" className={`grid h-11 w-11 place-items-center rounded-xl border transition ${dimTheme ? 'border-white/[0.16] bg-white/[0.09] text-wm-text' : 'border-transparent text-[#919b94] hover:bg-white/[0.05] hover:text-wm-text'}`}>
          <Contrast size={15} />
        </button>
        <button type="button" onClick={toggleRtl} aria-pressed={rtl} aria-label="Right-to-left layout" className={`grid h-11 min-w-11 place-items-center rounded-xl border px-2 text-[10px] font-medium transition ${rtl ? 'border-white/[0.16] bg-white/[0.09] text-wm-text' : 'border-transparent text-[#919b94] hover:bg-white/[0.05] hover:text-wm-text'}`}>
          RTL
        </button>
        <label className="hidden min-h-11 items-center gap-2 rounded-xl px-2 text-[10px] text-[#919b94] lg:flex" title="Dashboard text size">
          Aa
          <input type="range" min={100} max={120} step={5} value={fontScale} onChange={(event) => setFontScale(Number(event.target.value))} aria-label="Dashboard text size" className="h-[3px] w-[52px] accent-[#aeb8b1]" />
        </label>
        <span className="hidden min-h-8 items-center rounded-lg border border-white/[0.1] bg-white/[0.035] px-2.5 text-[9px] font-medium tracking-[.8px] text-[#a6b09f] sm:inline-flex">SIMULATED DATA</span>
      </div>
    </div>);

}
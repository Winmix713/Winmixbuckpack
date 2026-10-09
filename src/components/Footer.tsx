import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useDashboard } from '../contexts/DashboardContext';
import type { ViewKey } from '../types/football';
export function Footer() {
  const {
    setView,
    openTour
  } = useDashboard();
  const goTo = (view: ViewKey) => {
    setView(view);
    window.setTimeout(() => document.getElementById('library')?.scrollIntoView({
      behavior: 'smooth'
    }), 0);
  };
  return <footer className="border-t border-white/[0.09] bg-[#070908]">
      <div className="mx-auto grid max-w-[1500px] gap-10 px-6 py-12 sm:px-10 md:grid-cols-[1.4fr_1fr_1fr] lg:py-16">
        <div className="max-w-md">
          <a href="#main" className="inline-flex min-h-11 items-center gap-3 text-xl font-semibold tracking-[-1px] text-wm-text">
            <span className="grid h-9 w-9 place-items-center rounded-[10px] border border-[#dcff7a] bg-wm-lime text-base font-bold text-[#11150c]">W</span>
            winmix
          </a>
          <p className="mt-4 text-sm leading-6 text-[#98a29b]">Virtual football prediction and match intelligence, designed to make simulated patterns easier to understand.</p>
        </div>

        <nav aria-label="Footer product navigation">
          <h2 className="text-xs font-semibold uppercase tracking-[1.2px] text-[#68736c]">Product</h2>
          <div className="mt-4 flex flex-col items-start gap-1">
            <button type="button" onClick={() => goTo('matches')} className="min-h-11 text-sm text-[#adb6b0] hover:text-white">Matches</button>
            <button type="button" onClick={() => goTo('clubs')} className="min-h-11 text-sm text-[#adb6b0] hover:text-white">Clubs</button>
            <a href="#features" className="inline-flex min-h-11 items-center text-sm text-[#adb6b0] hover:text-white">Analytics</a>
          </div>
        </nav>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[1.2px] text-[#68736c]">Explore</h2>
          <button type="button" onClick={openTour} className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm text-[#d7ddd9] hover:text-white">Take the product tour <ArrowUpRight size={14} /></button>
          <p className="mt-3 text-xs leading-5 text-[#747f78]">Simulated virtual football analytics. Predictions are illustrative and are not guaranteed outcomes.</p>
        </div>
      </div>
      <div className="mx-auto flex max-w-[1500px] flex-col gap-2 border-t border-white/[0.07] px-6 py-5 text-xs text-[#727d76] sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <span>© 2026 Winmix</span>
        <span>Analytics only · No real-money betting</span>
      </div>
    </footer>;
}
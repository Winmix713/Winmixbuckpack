import React from 'react';
import { useDashboard } from '../contexts/DashboardContext';

export function Closing() {
  const { setView } = useDashboard();

  return (
    <section className="relative mx-6 mb-20 overflow-hidden rounded-2xl border border-white/10 px-8 py-12 shadow-[0_30px_90px_rgba(0,0,0,.24)] sm:mx-10 md:flex md:items-center md:justify-between md:px-14">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
          'radial-gradient(ellipse at 15% 120%, rgba(200,255,54,.1), transparent 58%), linear-gradient(110deg, rgba(255,255,255,.035), rgba(255,255,255,.012))'
        }} />
      
      <div className="relative">
        <span className="text-[12px] uppercase tracking-[1.8px] text-[#8e9992]">Turn patterns into perspective</span>
        <h2 className="mt-3 text-[32px] font-medium leading-tight tracking-[-1.8px] text-wm-text sm:text-[39px]">
          Predict the match.
          <br />Understand the pattern.
        </h2>
      </div>
      <a
        href="#library"
        onClick={() => setView('matches')}
        className="relative mt-6 inline-flex min-h-12 shrink-0 items-center gap-2 rounded-xl border border-[#e1ff89] bg-wm-lime px-5 text-sm font-semibold text-[#0a0c08] shadow-[0_8px_30px_rgba(200,255,54,.14)] md:mt-0">
        
        Explore predictions <span aria-hidden="true">↗</span>
      </a>
    </section>);

}
import React from 'react';
import { useDashboard } from '../../../contexts/DashboardContext';
import { DataCard } from './DataCard';

export function ProfileView() {
  const { followed, setView } = useDashboard();

  return (
    <div className="flex flex-col gap-5 px-6 pb-8">
      <article className="rounded-xl border border-white/[0.08] p-5" style={{ background: 'linear-gradient(145deg, rgba(255,255,255,.035), rgba(255,255,255,.012))' }}>
        <span className="grid h-14 w-14 place-items-center rounded-full border border-wm-lime/30 bg-white/10 text-lg font-semibold text-wm-text">
          WA
        </span>
        <h3 className="mt-3 text-lg font-medium text-wm-text">Winmix Analyst</h3>
        <p className="text-sm text-wm-muted">Budapest, Hungary</p>
        <span className="mt-2 inline-block rounded-md border border-white/10 bg-white/[0.035] px-2 py-1 text-[10px] text-[#9aa49d]">
          DEMO PROFILE
        </span>
        <div className="mt-5 grid grid-cols-3 gap-3">
          <div className="rounded-lg border border-white/[0.09] px-3 py-2.5">
            <small className="block text-[11px] text-[#7b8780]">Following</small>
            <strong className="text-xl text-[#d8ff74]">{followed.size}</strong>
          </div>
          <div className="rounded-lg border border-white/[0.09] px-3 py-2.5">
            <small className="block text-[11px] text-[#7b8780]">Competitions</small>
            <strong className="text-xl text-[#d8ff74]">4</strong>
          </div>
          <div className="rounded-lg border border-white/[0.09] px-3 py-2.5">
            <small className="block text-[11px] text-[#7b8780]">Matchday</small>
            <strong className="text-xl text-[#d8ff74]">
              22<em className="ml-0.5 text-xs font-normal not-italic text-[#7b8780]">Sep</em>
            </strong>
          </div>
        </div>
        <button
          onClick={() => setView('favorites')}
          className="mt-5 rounded-lg border border-white/10 bg-white/[0.035] px-4 py-2 text-sm text-wm-text hover:border-white/20">
          
          Open your watchlist ↗
        </button>
      </article>
      <DataCard title="Your football workspace">
        <p className="text-sm text-wm-muted">
          Keep selected matches close with the heart button. Your demo watchlist lasts for this page session.
        </p>
      </DataCard>
    </div>);

}
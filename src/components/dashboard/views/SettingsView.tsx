import React from 'react';
import { useDashboard } from '../../../contexts/DashboardContext';
import { DataCard } from './DataCard';

export function SettingsView() {
  const { dimTheme, toggleDimTheme, rtl, toggleRtl, fontScale, setFontScale, resetDisplay } = useDashboard();

  return (
    <div className="flex flex-col gap-5 px-6 pb-8">
      <article className="rounded-xl border border-white/[0.08] p-5" style={{ background: 'linear-gradient(145deg, rgba(255,255,255,.035), rgba(255,255,255,.012))' }}>
        <h3 className="text-[15px] font-medium text-wm-text">Display preferences</h3>
        <div className="mt-4 flex items-center justify-between gap-4 border-b border-white/[0.06] pb-4">
          <span>
            <strong className="block text-sm text-wm-text">Dashboard contrast</strong>
            <small className="text-xs text-wm-muted">Choose the regular or brighter glass surface.</small>
          </span>
          <button
            onClick={toggleDimTheme}
            className="shrink-0 rounded-lg border border-white/10 bg-white/[0.035] px-3 py-1.5 text-xs text-wm-text hover:border-white/20">
            
            {dimTheme ? 'Brighter' : 'Original'}
          </button>
        </div>
        <div className="flex items-center justify-between gap-4 border-b border-white/[0.06] py-4">
          <span>
            <strong className="block text-sm text-wm-text">Reading direction</strong>
            <small className="text-xs text-wm-muted">Change the dashboard layout direction.</small>
          </span>
          <button
            onClick={toggleRtl}
            className="shrink-0 rounded-lg border border-white/10 bg-white/[0.035] px-3 py-1.5 text-xs text-wm-text hover:border-white/20">
            
            {rtl ? 'Left to right' : 'Right to left'}
          </button>
        </div>
        <div className="flex flex-col gap-2 py-4">
          <label htmlFor="settings-font">
            <strong className="block text-sm text-wm-text">Text size</strong>
            <small className="text-xs text-wm-muted">Make dashboard labels more comfortable.</small>
          </label>
          <input
            id="settings-font"
            type="range"
            min={100}
            max={120}
            step={5}
            value={fontScale}
            onChange={(e) => setFontScale(Number(e.target.value))}
            className="w-full accent-wm-lime" />
          
        </div>
        <button
          onClick={resetDisplay}
          className="mt-2 rounded-lg border border-white/10 bg-white/[0.035] px-4 py-2 text-sm text-wm-text hover:border-white/20">
          
          Reset display preferences
        </button>
      </article>
      <DataCard title="About this dataset">
        <p className="text-sm text-wm-muted">
          All fixtures, scores, player names, statistics, attendance and weather are simulated examples. They are not live sporting
          results. No external feed is connected.
        </p>
      </DataCard>
    </div>);

}
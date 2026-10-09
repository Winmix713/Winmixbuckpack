import React from 'react';
import { useDashboard } from '../../contexts/DashboardContext';
import { BallIcon } from '../icons/FootballIcons';
import { Sidebar } from './Sidebar';
import { TopBar } from './TopBar';
import { LibraryHeading } from './LibraryHeading';
import { MatchToolbar } from './MatchToolbar';
import { FilterPanel } from './FilterPanel';
import { MatchTable } from './MatchTable';
import { MatchStrip } from './MatchStrip';
import { AuxPanel } from './AuxPanel';

export function DashboardStage() {
  const { view, dimTheme, rtl, fontScale, openTour } = useDashboard();
  const isMatchesView = view === 'matches' || view === 'favorites';

  return (
    <div id="library" className="relative z-10 mx-auto -mt-8 max-w-[1500px] scroll-mt-24 px-4 sm:px-6 lg:px-10 xl:-mt-24">
      <div className="relative overflow-hidden rounded-[20px] border border-white/[0.15] shadow-[0_45px_120px_rgba(0,0,0,.56)]">
        <div className="flex min-h-11 items-center justify-between border-b border-white/[0.08] bg-white/[0.018] px-5 text-[10px] uppercase tracking-[1.6px] text-[#7f8a83] sm:px-7">
          <span className="flex items-center gap-2">
            <i className="h-1.5 w-1.5 rounded-full bg-wm-lime shadow-[0_0_10px_rgba(200,255,54,.6)]" />
            Every match tells a story
          </span>
          <span className="hidden sm:inline">01 / The Match Centre</span>
        </div>
        <div
          id="dashboard-stage"
          dir={rtl ? 'rtl' : 'ltr'}
          className={`flex min-h-[580px] overflow-hidden lg:min-h-[680px] ${dimTheme ? 'bg-[rgba(20,24,24,.98)]' : 'bg-[rgba(9,11,11,.97)]'}`}
          style={{ fontSize: `${fontScale}%` }}>
          
          <Sidebar />
          <div className="flex min-w-0 flex-1 flex-col">
            <TopBar />
            <LibraryHeading onTour={openTour} />
            {isMatchesView && <MatchToolbar />}
            {isMatchesView && <FilterPanel />}
            <div className="flex-1">{isMatchesView ? <MatchTable /> : <AuxPanel />}</div>
            <MatchStrip />
          </div>
        </div>
        <div className="flex min-h-11 items-center justify-between border-t border-white/[0.08] bg-white/[0.018] px-5 text-[10px] text-[#7f8a83] sm:px-7">
          <span className="flex items-center gap-1.5">
            <BallIcon className="h-3 w-3" /> Every angle of the virtual game.
          </span>
          <span className="hidden sm:inline">
            Explore the interactive demo <span aria-hidden="true">↗</span>
          </span>
        </div>
      </div>
    </div>);

}
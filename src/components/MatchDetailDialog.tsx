import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useDashboard, games } from '../contexts/DashboardContext';
import { clubs } from '../data/clubs';
import { gameTitle, formatScore } from '../utils/football';
import { ChipTabs } from './dashboard/views/ChipTabs';
import { ClubBadge } from './dashboard/ClubBadge';
import { EventLine } from './charts/EventLine';
import { EventList } from './charts/EventList';
import { StatBars } from './charts/StatBars';
import { RadarChart } from './charts/RadarChart';
import { AreaChart } from './charts/AreaChart';
import { LineupPitch } from './charts/LineupPitch';
import { DataCard } from './dashboard/views/DataCard';
import type { DetailTab } from '../types/football';

export function MatchDetailDialog() {
  const { matchDialogOpen, closeMatchDialog, activeId, detailTab, setDetailTab, teamSide, setTeamSide } = useDashboard();
  const game = games[activeId];
  const teamId = teamSide === 'home' ? game.home : game.away;

  useEffect(() => {
    if (!matchDialogOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMatchDialog();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [matchDialogOpen, closeMatchDialog]);

  return (
    <AnimatePresence>
      {matchDialogOpen &&
      <motion.div
        className="wm-dialog-backdrop fixed inset-0 z-[70] flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onMouseDown={(e) => {
          if (e.target === e.currentTarget) closeMatchDialog();
        }}>
        
          <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="match-dialog-title"
          initial={{ opacity: 0, scale: 0.96, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 12 }}
          transition={{ duration: 0.2 }}
          className="wm-dialog-panel wm-scroll relative max-h-[88vh] w-full max-w-[620px] overflow-y-auto rounded-2xl border border-white/[0.15] p-6 shadow-[0_40px_120px_rgba(0,0,0,.7)]">
          
            <button
            type="button"
            autoFocus
            onClick={closeMatchDialog}
            aria-label="Close match details"
            className="absolute right-4 top-4 text-[#89938c] hover:text-wm-text">
            
              <X size={18} />
            </button>
            <span className="text-[11px] uppercase tracking-wide text-wm-muted-2">Winmix · Simulated match</span>
            <h2 id="match-dialog-title" className="mt-1 text-xl font-medium text-wm-text">
              {gameTitle(game)}
            </h2>

            <div className="mt-4 grid grid-cols-3 items-center gap-2 rounded-xl border border-white/[0.08] p-4">
              <div className="flex flex-col items-center gap-1.5 text-center">
                <ClubBadge clubId={game.home} size="large" />
                <strong className="text-xs text-wm-text">{clubs[game.home].name}</strong>
                <small className="text-[10px] text-wm-muted-2">{clubs[game.home].location}</small>
              </div>
              <div className="flex flex-col items-center gap-1 text-center">
                <span
                className={`rounded-md border px-2 py-0.5 text-[9px] ${
                game.status === 'Live' ? 'border-wm-lime/[0.18] bg-wm-lime/[0.075] text-[#bff45e]' : 'border-white/10 bg-white/[0.035] text-[#9aa49d]'}`
                }>
                
                  {game.status === 'Live' ? `LIVE · ${game.minute}′` : 'FULL TIME'}
                </span>
                <strong className="text-xl text-[#e4ff91]">{formatScore(game)}</strong>
              </div>
              <div className="flex flex-col items-center gap-1.5 text-center">
                <ClubBadge clubId={game.away} size="large" />
                <strong className="text-xs text-wm-text">{clubs[game.away].name}</strong>
                <small className="text-[10px] text-wm-muted-2">{clubs[game.away].location}</small>
              </div>
            </div>

            <div className="mt-4">
              <ChipTabs
              value={detailTab}
              onChange={(v) => setDetailTab(v as DetailTab)}
              items={[
              ['summary', 'Summary'],
              ['lineups', 'Lineups'],
              ['goals', 'Goals'],
              ['statistics', 'Statistics']]
              } />
            
            </div>

            <div className="mt-4">
              {detailTab === 'summary' &&
            <div className="flex flex-col gap-4">
                  <EventLine game={game} />
                  <StatBars game={game} />
                </div>
            }
              {detailTab === 'lineups' &&
            <div className="flex flex-col gap-4">
                  <ChipTabs
                value={teamSide}
                onChange={(v) => setTeamSide(v as 'home' | 'away')}
                items={[
                ['home', clubs[game.home].name],
                ['away', clubs[game.away].name]]
                } />
              
                  <LineupPitch clubId={teamId} />
                </div>
            }
              {detailTab === 'goals' && <EventList game={game} />}
              {detailTab === 'statistics' &&
            <div className="flex flex-col gap-4">
                  <DataCard title="Team comparison">
                    <RadarChart possession={game.possession} />
                  </DataCard>
                  <DataCard title="Match statistics">
                    <StatBars game={game} />
                  </DataCard>
                  <DataCard title="Ball possession" wide>
                    <AreaChart home={game.possession} away={100 - game.possession} />
                  </DataCard>
                </div>
            }
            </div>
          </motion.div>
        </motion.div>
      }
    </AnimatePresence>);

}
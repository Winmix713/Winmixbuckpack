import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useDashboard } from '../contexts/DashboardContext';
import { tourSteps } from '../data/content';
import { ClubBadge } from './dashboard/ClubBadge';
export function TourDialog() {
  const {
    tourOpen,
    tourStep,
    closeTour,
    advanceTour
  } = useDashboard();
  const step = tourSteps[tourStep];
  useEffect(() => {
    if (!tourOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeTour();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [tourOpen, closeTour]);
  const visuals = [<div key="0" className="flex items-center justify-center gap-4">
      <ClubBadge clubId={0} size="large" />
      <span className="text-2xl font-medium text-wm-text">2 : 1</span>
      <ClubBadge clubId={1} size="large" />
    </div>, <div key="1" className="text-sm text-wm-muted">Explore possession, shots and momentum for any fixture.</div>, <span key="2" className="grid h-20 w-20 place-items-center rounded-2xl bg-wm-lime text-4xl font-bold text-[#11150d]">
      W
    </span>];
  return <AnimatePresence>
      {tourOpen && <motion.div className="wm-dialog-backdrop fixed inset-0 z-[70] flex items-center justify-center p-4" initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} exit={{
      opacity: 0
    }} onMouseDown={(e) => {
      if (e.target === e.currentTarget) closeTour();
    }}>
        
          <motion.div role="dialog" aria-modal="true" aria-labelledby="tour-title" initial={{
        opacity: 0,
        scale: 0.96,
        y: 12
      }} animate={{
        opacity: 1,
        scale: 1,
        y: 0
      }} exit={{
        opacity: 0,
        scale: 0.96,
        y: 12
      }} transition={{
        duration: 0.2
      }} className="wm-dialog-panel relative w-full max-w-[480px] rounded-2xl border border-white/[0.15] p-7 shadow-[0_40px_120px_rgba(0,0,0,.7)]">
          
            <button type="button" autoFocus onClick={closeTour} aria-label="Close tour" className="absolute right-4 top-4 text-[#89938c] hover:text-wm-text">
              <X size={18} />
            </button>
            <span className="text-[11px] uppercase tracking-wide text-wm-muted-2">
              The Winmix Tour · 0{tourStep + 1} / 03
            </span>
            <div className="my-6 flex min-h-[80px] items-center justify-center">{visuals[tourStep]}</div>
            <h2 id="tour-title" className="text-xl font-medium text-wm-text">
              {step.title}
            </h2>
            <p className="mt-2 text-sm text-wm-muted">{step.description}</p>
            <div className="mt-6 flex items-center justify-between">
              <div className="flex gap-1.5" aria-hidden="true">
                {tourSteps.map((_, i) => <i key={i} className={`h-1.5 w-1.5 rounded-full ${i === tourStep ? 'bg-wm-lime' : 'bg-[#394039]'}`} />)}
              </div>
              <button onClick={advanceTour} className="rounded-lg border border-[#e1ff89] bg-gradient-to-b from-[#d7ff62] to-[#b7ee26] px-4 py-2 text-sm font-medium text-[#0a0c08] shadow-[0_8px_30px_rgba(200,255,54,.14)]">
              
                {tourStep === 2 ? 'Explore the matches ↗' : 'Next →'}
              </button>
            </div>
          </motion.div>
        </motion.div>}
    </AnimatePresence>;
}
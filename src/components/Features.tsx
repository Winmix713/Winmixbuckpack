import React from 'react';
import { motion } from 'framer-motion';
import { Library, Sparkles, Users } from 'lucide-react';
import { useDashboard } from '../contexts/DashboardContext';
import { clubs } from '../data/clubs';
import { featureCards } from '../data/content';
import { AreaChart } from './charts/AreaChart';
const icons = [Sparkles, Library, Users];
export function Features() {
  const {
    setView
  } = useDashboard();
  return <section id="features" aria-labelledby="features-title" className="mx-auto max-w-[1420px] px-6 py-24 sm:px-10 md:py-28">
      <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <span className="text-[12px] uppercase tracking-[1.8px] text-[#7d8a81]">Built for your football intelligence</span>
          <h2 id="features-title" className="mt-3 text-[42px] font-medium leading-[1.02] tracking-[-2.7px] text-wm-text md:text-[58px]">
            More than a score.
            <br />
            <span className="text-[#747d77]">The whole picture.</span>
          </h2>
        </div>
        <p className="max-w-[320px] text-sm text-[#858f88]">
          From the first whistle to the final result.
          <br /> Understand what happens between the goals.
        </p>
      </div>

      <div className="grid grid-cols-1 overflow-hidden rounded-2xl border border-white/[0.09] bg-white/[0.012] shadow-[0_35px_100px_rgba(0,0,0,.24)] md:grid-cols-3">
        {featureCards.map((card, i) => {
        const Icon = icons[i];
        return <motion.article key={card.number} initial={{
          y: 25,
          opacity: 0
        }} whileInView={{
          y: 0,
          opacity: 1
        }} viewport={{
          once: true,
          margin: '-80px'
        }} transition={{
          duration: 0.6,
          delay: i * 0.12
        }} className="border-t border-white/[0.08] p-7 first:border-t-0 md:border-l md:border-t-0 md:first:border-l-0" style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(200,255,54,.035), transparent 65%)'
        }}>
              
              <div className="flex items-center gap-2 text-xs text-[#626d66]">
                {card.number} <Icon size={14} className="text-wm-lime" />
              </div>

              <div className="my-4 h-[95px]">
                {i === 0 && <AreaChart />}
                {i === 1 && <div className="flex h-full items-center gap-2.5">
                    {[clubs[0], clubs[1]].map((c) => <div key={c.id} className="flex flex-1 items-center justify-between rounded-lg border border-wm-lime/[0.12] px-3 py-2.5 text-[11px] text-wm-text" style={{
                background: 'linear-gradient(135deg, #171c19, #0b0d0d)'
              }}>
                    
                        <span className="flex items-center gap-1.5">
                          <span className={`h-1.5 w-1.5 rounded-full ${c.id === 0 ? 'bg-wm-violet' : 'bg-wm-green'}`} /> {c.name} VFC
                        </span>
                        <span className="text-wm-muted">{c.pts} PTS</span>
                      </div>)}
                  </div>}
                {i === 2 && <div className="flex h-full items-center justify-center gap-2.5">
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-white/10 text-[9px] font-semibold text-wm-text">BC</span>
                    <span className="h-px w-6 bg-white/15" />
                    <span className="rounded-full border border-wm-lime/20 bg-wm-lime/[0.07] px-2 py-1 text-[10px] text-wm-lime">VS</span>
                    <span className="h-px w-6 bg-white/15" />
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-white/10 text-[9px] font-semibold text-wm-text">DO</span>
                  </div>}
              </div>

              <h3 className="text-[19px] font-medium text-wm-text">{card.title}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-[#7e8881]">{card.description}</p>
              <a href="#library" onClick={() => setView(card.go)} className="mt-4 inline-flex items-center gap-1.5 text-[13px] text-[#aab4ad] hover:text-wm-text">
                
                <span className="text-wm-lime">{card.cta}</span> <span aria-hidden="true">↗</span>
              </a>
            </motion.article>;
      })}
      </div>
    </section>;
}
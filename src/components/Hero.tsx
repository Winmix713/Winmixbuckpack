import React from 'react';
import { ArrowUpRight, Play, Sparkles, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { useDashboard } from '../contexts/DashboardContext';

const STADIUM_URL = "/adidas_soccer_ball_on_green_grass_in_blur_stadium_background_4k_hd_uefa_champions_league-t2.jpg";
const momentum = [22, 30, 27, 42, 38, 56, 49, 66, 60, 78, 70, 86];

export function Hero() {
  const { setView, openTour } = useDashboard();

  return (
    <section
      id="product"
      aria-labelledby="hero-title"
      className="relative mx-auto min-h-[790px] w-full max-w-[2250px] overflow-hidden rounded-b-[32px] bg-[#060708] px-5 pb-36 pt-16 sm:px-8 lg:min-h-[850px] lg:px-12 lg:pt-24"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(5,7,6,.94) 0%, rgba(5,7,6,.78) 40%, rgba(5,7,6,.28) 70%, rgba(5,7,6,.48) 100%), linear-gradient(0deg, rgba(5,7,6,.72), transparent 55%), url(${STADIUM_URL})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}>
      
      <div className="relative mx-auto grid w-full max-w-[1500px] items-center gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(390px,.75fr)] lg:gap-20">
        <div className="max-w-[780px]">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex min-h-9 items-center gap-2 rounded-full border border-white/[0.13] bg-black/25 px-3 text-[12px] font-medium text-[#c3ccc6] backdrop-blur-md">
            <Sparkles size={13} className="text-wm-lime" aria-hidden="true" /> Virtual football prediction system
          </motion.div>

          <motion.h1 id="hero-title" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.08 }} className="mt-7 text-[58px] font-medium leading-[.95] tracking-[-4px] text-[#f5f7f4] sm:text-[78px] sm:tracking-[-5px] xl:text-[96px] xl:tracking-[-6px]">
            Predict the match.<br /><span className="text-[#cbd2cd]">Understand the pattern.</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.18 }} className="mt-7 max-w-[610px] text-[17px] leading-7 text-[#b0bab3] sm:text-[19px] sm:leading-8">
            A virtual football prediction system built around form, momentum and match intelligence — all in one focused workspace.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.28 }} className="mt-9 flex flex-wrap items-center gap-5">
            <a href="#library" onClick={() => setView('matches')} className="inline-flex min-h-12 items-center gap-2 rounded-xl border border-[#e1ff89] bg-wm-lime px-5 text-[14px] font-semibold text-[#0a0c08] shadow-[0_12px_34px_rgba(200,255,54,.15)] transition hover:brightness-105">
              Explore predictions <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <button type="button" onClick={openTour} className="inline-flex min-h-12 items-center gap-2 px-1 text-[14px] font-medium text-[#d2d8d4] transition hover:text-white">
              <span className="grid h-8 w-8 place-items-center rounded-full border border-white/[0.14] bg-black/20"><Play size={12} fill="currentColor" aria-hidden="true" /></span>
              See how it works
            </button>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.42 }} className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/[0.12] pt-6 text-sm text-[#9ca69f]">
            <span><strong className="mr-2 text-[#eef2ef]">8</strong>simulated matches</span>
            <span><strong className="mr-2 text-[#eef2ef]">4</strong>competitions</span>
            <span><strong className="mr-2 text-[#eef2ef]">100%</strong>virtual data</span>
          </motion.div>
        </div>

        <motion.aside initial={{ opacity: 0, x: 28 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} aria-label="Simulated prediction example" className="mx-auto w-full max-w-[520px] rounded-[24px] border border-white/[0.15] bg-[rgba(11,14,12,.86)] p-5 shadow-[0_32px_90px_rgba(0,0,0,.48)] backdrop-blur-xl sm:p-7">
          <div className="flex items-center justify-between gap-4">
            <div>
              <span className="text-[11px] font-medium uppercase tracking-[1.4px] text-[#8f9a93]">Prediction preview</span>
              <h2 className="mt-1 text-lg font-medium text-[#f0f3f1]">Barcelona VFC vs Dortmund VFC</h2>
            </div>
            <span className="inline-flex min-h-8 items-center rounded-lg border border-white/[0.1] bg-white/[0.04] px-2.5 text-[10px] uppercase tracking-[.8px] text-[#9ea8a1]">Simulated</span>
          </div>

          <div className="mt-7 rounded-2xl border border-white/[0.09] bg-black/20 p-5">
            <div className="flex items-end justify-between gap-5">
              <div>
                <span className="text-xs text-[#8f9992]">Predicted outcome</span>
                <strong className="mt-1 block text-[26px] font-medium tracking-[-1px] text-[#f3f6f4]">Barcelona win</strong>
              </div>
              <div className="text-right">
                <strong className="block text-[32px] font-semibold tracking-[-1.5px] text-wm-lime">68%</strong>
                <span className="text-xs text-[#8f9992]">confidence</span>
              </div>
            </div>
            <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/[0.07]" aria-label="Prediction confidence 68 percent">
              <div className="h-full w-[68%] rounded-full bg-wm-lime" />
            </div>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-[1fr_auto] sm:items-end">
            <div>
              <div className="flex items-center gap-2 text-xs text-[#aab4ad]"><TrendingUp size={14} className="text-wm-lime" />Momentum signal</div>
              <div className="mt-3 flex h-14 items-end gap-1.5" aria-hidden="true">
                {momentum.map((height, index) => <i key={index} className="flex-1 rounded-t bg-white/[0.15] last:bg-wm-lime" style={{ height: `${height}%` }} />)}
              </div>
            </div>
            <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-right">
              <span className="block text-[11px] text-[#89948d]">Form edge</span>
              <strong className="text-sm font-medium text-[#e8ede9]">Home · Strong</strong>
            </div>
          </div>
          <p className="mt-5 border-t border-white/[0.08] pt-4 text-[11px] leading-5 text-[#7f8a83]">Illustrative prediction generated from simulated form and momentum data. Not a guaranteed outcome.</p>
        </motion.aside>
      </div>
    </section>);

}
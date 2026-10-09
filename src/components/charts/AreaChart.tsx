import React from 'react';
interface AreaChartProps {
  label?: string;
  home?: number;
  away?: number;
}
const HOME_PATH = 'M0 74C35 65 46 22 83 30S135 72 166 46S218 10 250 37S301 72 332 36S391 19 430 39';
const AWAY_PATH = 'M0 42C35 36 50 61 83 68S133 14 166 26S215 71 250 61S295 11 332 22S390 75 430 52';
export function AreaChart({
  label = 'Ball possession',
  home = 58,
  away = 42
}: AreaChartProps) {
  return <div className="w-full" role="img" aria-label={`${label}: home ${home}%, away ${away}%`}>
      <svg viewBox="0 0 430 100" preserveAspectRatio="none" className="h-24 w-full">
        <path d={`${HOME_PATH}V100H0Z`} fill="#c8ff3618" />
        <path d={HOME_PATH} stroke="#c8ff36" fill="none" strokeWidth={2} />
        <path d={AWAY_PATH} stroke="#58bd9c" fill="none" strokeWidth={2} />
        <path d="M0 25H430M0 50H430M0 75H430" stroke="#ffffff09" strokeDasharray="3 5" />
      </svg>
      <div className="mt-2 flex justify-between text-[10px] uppercase tracking-wide text-wm-muted-2">
        <span>0′</span>
        <span>15′</span>
        <span>30′</span>
        <span>HT</span>
        <span>60′</span>
        <span>75′</span>
        <span>90′</span>
      </div>
    </div>;
}
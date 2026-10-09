import React from 'react';

interface RadarChartProps {
  possession: number;
}

const LABELS = ['POSSESSION', 'SHOTS', 'PASSES', 'CORNERS', 'SAVES', 'ATTACKS'];
const LABEL_POS: Array<[number, number, string]> = [
[130, 12, 'middle'],
[220, 59, 'middle'],
[222, 157, 'middle'],
[130, 207, 'middle'],
[39, 157, 'middle'],
[39, 59, 'middle']];


function point(i: number, v: number) {
  const angle = (i * 60 - 90) * Math.PI / 180;
  return `${130 + Math.cos(angle) * v * 0.82},${104 + Math.sin(angle) * v * 0.82}`;
}

export function RadarChart({ possession }: RadarChartProps) {
  const home = [possession, 67, 50, 65, 72, 60];
  const away = [100 - possession, 48, 73, 55, 58, 69];
  return (
    <div
      role="img"
      aria-label="Team comparison of possession, shots, passes, corners, saves and attacks"
      className="flex justify-center">
      
      <svg viewBox="0 0 260 215" className="h-[190px] w-full max-w-[260px]">
        {[25, 50, 75, 100].map((v) =>
        <polygon key={v} points={home.map((_, i) => point(i, v)).join(' ')} fill="none" stroke="#ffffff0d" />
        )}
        {home.map((_, i) =>
        <path key={i} d={`M130 104L${point(i, 100)}`} stroke="#ffffff0b" />
        )}
        <polygon points={home.map((v, i) => point(i, v)).join(' ')} fill="#a855f724" stroke="#be90ea" strokeWidth={2} />
        <polygon points={away.map((v, i) => point(i, v)).join(' ')} fill="#10b98115" stroke="#61bda1" strokeWidth={2} />
        <g fill="#94859f" fontSize={10} textAnchor="middle">
          {LABELS.map((label, i) =>
          <text key={label} x={LABEL_POS[i][0]} y={LABEL_POS[i][1]}>
              {label}
            </text>
          )}
        </g>
      </svg>
    </div>);

}
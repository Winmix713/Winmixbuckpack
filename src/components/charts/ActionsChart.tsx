import React from 'react';

const POSITIONS = ['GK', 'LB', 'CB', 'CB', 'RB', 'CM', 'CM', 'CAM', 'LW', 'RW', 'ST'];

export function ActionsChart({ half }: {half: 1 | 2;}) {
  return (
    <div className="flex h-32 items-end gap-2" role="img" aria-label={`Active actions by position, half ${half}`}>
      {POSITIONS.map((p, i) => {
        const height = 30 + (i * 19 + half * 13) % 70;
        return (
          <div key={p} className="flex flex-1 flex-col items-center gap-1.5">
            <div className="flex h-24 w-full items-end">
              <i
                className="block w-full rounded-t bg-wm-lime"
                style={{ height: `${height}%`, background: 'linear-gradient(#c8ff36, #4e9d83)' }} />
              
            </div>
            <small className="text-[9px] text-wm-muted-2">{p}</small>
          </div>);

      })}
    </div>);

}
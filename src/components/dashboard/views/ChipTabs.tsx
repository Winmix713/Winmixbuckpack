import React from 'react';

interface ChipTabsProps {
  items: Array<[string, string]>;
  value: string;
  onChange: (value: string) => void;
}

export function ChipTabs({ items, value, onChange }: ChipTabsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map(([key, label]) => {
        const active = key === value;
        return (
          <button
            key={key}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(key)}
            className={`rounded-full border px-3 py-1.5 text-xs transition-colors ${
            active ?
            'border-wm-lime/20 bg-wm-lime/[0.08] text-[#dfff7d]' :
            'border-white/[0.08] text-[#839087] hover:text-wm-text'}`
            }>
            
            {label}
          </button>);

      })}
    </div>);

}
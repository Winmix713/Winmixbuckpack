import React from 'react';
interface DataCardProps {
  title: string;
  children: React.ReactNode;
  wide?: boolean;
  note?: string;
}
export function DataCard({
  title,
  children,
  wide,
  note
}: DataCardProps) {
  return <article className={`rounded-xl border border-white/[0.08] p-4 ${wide ? 'lg:col-span-2' : ''}`} style={{
    background: 'linear-gradient(145deg, rgba(255,255,255,.035), rgba(255,255,255,.012))'
  }}>
      
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-[13px] font-medium text-[#dfe6e1]">{title}</h3>
        {note && <span className="text-xs text-wm-muted">{note}</span>}
      </div>
      {children}
    </article>;
}
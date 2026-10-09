import React, { useEffect, useState } from 'react';
import { ArrowUpRight, Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from './Sheet';
import { useDashboard } from '../contexts/DashboardContext';
import type { ViewKey } from '../types/football';
const navItems: Array<{
  label: string;
  view?: ViewKey;
  href: string;
}> = [{
  label: 'Matches',
  view: 'matches',
  href: '#library'
}, {
  label: 'Clubs',
  view: 'clubs',
  href: '#library'
}, {
  label: 'Analytics',
  href: '#features'
}];
export function Header() {
  const {
    view,
    setView
  } = useDashboard();
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<'dashboard' | 'analytics'>('dashboard');
  useEffect(() => {
    const updateSection = () => {
      const features = document.getElementById('features');
      if (!features) return;
      const bounds = features.getBoundingClientRect();
      setActiveSection(bounds.top <= 160 && bounds.bottom >= 120 ? 'analytics' : 'dashboard');
    };
    updateSection();
    window.addEventListener('scroll', updateSection, {
      passive: true
    });
    return () => window.removeEventListener('scroll', updateSection);
  }, []);
  const goTo = (targetView?: ViewKey, targetId = 'library') => {
    if (targetView) setView(targetView);
    setOpen(false);
    window.setTimeout(() => document.getElementById(targetId)?.scrollIntoView({
      behavior: 'smooth'
    }), 0);
  };
  return <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[rgba(6,7,8,.88)] backdrop-blur-2xl backdrop-saturate-150">
      <nav aria-label="Main navigation" className="mx-auto flex h-[76px] max-w-[1500px] items-center justify-between gap-5 px-5 sm:px-8 lg:px-10">
        <a href="#main" className="flex min-h-11 items-center gap-3 rounded-lg text-[22px] font-semibold tracking-[-1.2px] text-wm-text">
          <span className="grid h-9 w-9 place-items-center rounded-[10px] border border-[#dfff7e] bg-wm-lime text-lg font-bold text-[#10120d] shadow-[0_0_28px_rgba(200,255,54,.12)]">W</span>
          <span>winmix<sup className="ml-0.5 text-[9px] font-normal text-[#88928b]">®</sup></span>
        </a>

        <div className="hidden h-full items-center gap-2 md:flex">
          {navItems.map((item) => {
          const active = item.view ? activeSection === 'dashboard' && (view === item.view || item.view === 'matches' && view === 'favorites') : activeSection === 'analytics';
          return <a key={item.label} href={item.href} onClick={(event) => {
            if (item.view) {
              event.preventDefault();
              goTo(item.view);
            }
          }} aria-current={active ? 'page' : undefined} className={`relative inline-flex min-h-11 items-center rounded-lg px-4 text-[14px] font-medium transition ${active ? 'text-white' : 'text-[#939d96] hover:bg-white/[0.035] hover:text-white'}`}>
                
                {item.label}
                {active && <span className="absolute inset-x-4 bottom-0 h-0.5 rounded-full bg-wm-lime" aria-hidden="true" />}
              </a>;
        })}
        </div>

        <div className="flex items-center gap-2">
          <a href="#library" onClick={(event) => {
          event.preventDefault();
          goTo('matches');
        }} className="hidden min-h-11 items-center gap-2 rounded-xl border border-[#e1ff89] bg-wm-lime px-4 text-[13px] font-semibold text-[#0a0c08] shadow-[0_8px_24px_rgba(200,255,54,.12)] transition hover:brightness-105 sm:inline-flex">
            Explore predictions <ArrowUpRight size={15} aria-hidden="true" />
          </a>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger className="grid h-11 w-11 place-items-center rounded-xl border border-white/[0.11] bg-white/[0.035] text-wm-text md:hidden" aria-label="Open navigation">
              <Menu size={20} />
            </SheetTrigger>
            <SheetContent side="right" className="border-white/[0.1] bg-[#0b0e0c] text-wm-text">
              <SheetHeader>
                <SheetTitle className="text-left text-wm-text">Navigate Winmix</SheetTitle>
                <SheetDescription className="text-left text-[#919b94]">Prediction intelligence and simulated match analytics.</SheetDescription>
              </SheetHeader>
              <div className="mt-8 flex flex-col gap-2">
                {navItems.map((item) => {
                const active = item.view ? activeSection === 'dashboard' && (view === item.view || item.view === 'matches' && view === 'favorites') : activeSection === 'analytics';
                return <a key={item.label} href={item.href} onClick={(event) => {
                  event.preventDefault();
                  goTo(item.view, item.view ? 'library' : 'features');
                }} aria-current={active ? 'page' : undefined} className={`flex min-h-12 items-center justify-between rounded-xl px-4 text-base ${active ? 'bg-white/[0.08] text-white' : 'text-[#aab4ad] hover:bg-white/[0.04]'}`}>
                      {item.label}{active && <span className="h-2 w-2 rounded-full bg-wm-lime" aria-hidden="true" />}
                    </a>;
              })}
              </div>
              <a href="#library" onClick={(event) => {
              event.preventDefault();
              goTo('matches');
            }} className="mt-8 flex min-h-12 items-center justify-center gap-2 rounded-xl bg-wm-lime px-4 text-sm font-semibold text-[#0a0c08]">
                Explore predictions <ArrowUpRight size={16} />
              </a>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>;
}
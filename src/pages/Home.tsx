import React from 'react';
import { Toaster } from 'sonner';
import { DashboardProvider } from '../contexts/DashboardContext';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { DashboardStage } from '../components/dashboard/DashboardStage';
import { Features } from '../components/Features';
import { Closing } from '../components/Closing';
import { Footer } from '../components/Footer';
import { TourDialog } from '../components/TourDialog';
import { MatchDetailDialog } from '../components/MatchDetailDialog';
export function Home() {
  return <DashboardProvider>
      <div className="wm-app relative min-h-screen w-full">
        <div className="wm-grid-overlay" />
        <a href="#main" className="fixed left-5 top-5 z-[100] -translate-y-16 rounded-lg bg-white px-3 py-2 text-sm font-medium text-black transition focus:translate-y-0">
          
          Skip to content
        </a>
        <div className="relative z-[1]">
          <Header />
          <main id="main">
            <Hero />
            <DashboardStage />
            <Features />
            <Closing />
          </main>
          <Footer />
        </div>
        <TourDialog />
        <MatchDetailDialog />
        <Toaster theme="dark" toastOptions={{
        style: {
          background: '#141814',
          color: '#dfff8b',
          border: '1px solid rgba(200,255,54,.25)'
        }
      }} />
        
      </div>
    </DashboardProvider>;
}
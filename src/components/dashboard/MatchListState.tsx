import React from 'react';
import { AlertCircle, Search } from 'lucide-react';
import { Skeleton } from '../Skeleton';
interface MatchListStateProps {
  state: 'loading' | 'empty' | 'error';
  onReset: () => void;
  onRetry?: () => void;
}
export function MatchListState({
  state,
  onReset,
  onRetry
}: MatchListStateProps) {
  if (state === 'loading') {
    return <div aria-label="Loading matches" aria-busy="true" className="px-4 py-3 sm:px-6">
        <div className="hidden space-y-2 md:block">
          {Array.from({
          length: 5
        }, (_, index) => <div key={index} className="flex h-[72px] items-center gap-4 rounded-xl border border-white/[0.055] px-4">
              <Skeleton className="h-9 w-16 rounded-lg bg-white/[0.07]" />
              <div className="flex-1 space-y-2">
                <Skeleton className="h-3.5 w-48 bg-white/[0.07]" />
                <Skeleton className="h-2.5 w-32 bg-white/[0.05]" />
              </div>
              <Skeleton className="h-8 w-20 rounded-lg bg-white/[0.06]" />
              <Skeleton className="h-8 w-14 rounded-lg bg-white/[0.06]" />
            </div>)}
        </div>
        <div className="space-y-3 md:hidden">
          {Array.from({
          length: 4
        }, (_, index) => <Skeleton key={index} className="h-[156px] w-full rounded-2xl bg-white/[0.06]" />)}
        </div>
      </div>;
  }
  const isError = state === 'error';
  const Icon = isError ? AlertCircle : Search;
  return <div role={isError ? 'alert' : 'status'} className="flex min-h-[300px] flex-col items-center justify-center gap-3 px-6 py-16 text-center">
      <span className="grid h-12 w-12 place-items-center rounded-2xl border border-white/[0.09] bg-white/[0.035] text-[#aeb8b1]">
        <Icon size={22} aria-hidden="true" />
      </span>
      <strong className="text-base font-medium text-wm-text">{isError ? 'Matches could not be loaded' : 'No matches found'}</strong>
      <p className="max-w-sm text-sm leading-6 text-[#929d96]">
        {isError ? 'The simulated match feed is temporarily unavailable. Try loading it again.' : 'Adjust or clear your filters to return to the complete match list.'}
      </p>
      <button type="button" onClick={isError ? onRetry : onReset} className="mt-2 inline-flex min-h-11 items-center justify-center rounded-lg border border-white/[0.13] bg-white/[0.045] px-4 text-sm font-medium text-wm-text transition hover:bg-white/[0.08]">
        
        {isError ? 'Retry' : 'Clear filters'}
      </button>
    </div>;
}
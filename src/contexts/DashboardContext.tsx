import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { toast } from 'sonner';
import { games } from '../data/games';
import type { DetailTab, StatusFilter, TeamSide, ViewKey } from '../types/football';
import { gameTitle } from '../utils/football';
import { clubs } from '../data/clubs';
interface DashboardContextValue {
  view: ViewKey;
  setView: (v: ViewKey) => void;
  statusFilter: StatusFilter;
  setStatusFilter: (v: StatusFilter) => void;
  search: string;
  setSearch: (v: string) => void;
  leagueFilter: string;
  setLeagueFilter: (v: string) => void;
  dateFilter: string;
  setDateFilter: (v: string) => void;
  activeId: number;
  setActiveId: (v: number) => void;
  clubId: number;
  setClubId: (v: number) => void;
  half: 1 | 2;
  setHalf: (v: 1 | 2) => void;
  teamSide: TeamSide;
  setTeamSide: (v: TeamSide) => void;
  group: string;
  setGroup: (v: string) => void;
  round: string;
  setRound: (v: string) => void;
  detailTab: DetailTab;
  setDetailTab: (v: DetailTab) => void;
  followed: Set<number>;
  toggleFollow: (id: number) => void;
  dimTheme: boolean;
  toggleDimTheme: () => void;
  rtl: boolean;
  toggleRtl: () => void;
  fontScale: number;
  setFontScale: (v: number) => void;
  filterOpen: boolean;
  setFilterOpen: (v: boolean) => void;
  matchDialogOpen: boolean;
  openMatch: (id: number) => void;
  closeMatchDialog: () => void;
  resetFilters: () => void;
  resetDisplay: () => void;
  nextMatch: () => void;
  prevMatch: () => void;
  selectClub: (id: number) => void;
  tourOpen: boolean;
  tourStep: number;
  openTour: () => void;
  closeTour: () => void;
  advanceTour: () => void;
}
const DashboardContext = createContext<DashboardContextValue | null>(null);
export function DashboardProvider({
  children


}: {children: React.ReactNode;}) {
  const [view, setView] = useState<ViewKey>('matches');
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('all');
  const [search, setSearch] = useState('');
  const [leagueFilter, setLeagueFilter] = useState('all');
  const [dateFilter, setDateFilter] = useState('');
  const [activeId, setActiveId] = useState(0);
  const [clubId, setClubId] = useState(0);
  const [half, setHalf] = useState<1 | 2>(1);
  const [teamSide, setTeamSide] = useState<TeamSide>('home');
  const [group, setGroup] = useState('A');
  const [round, setRound] = useState('all');
  const [detailTab, setDetailTab] = useState<DetailTab>('summary');
  const [followed, setFollowed] = useState<Set<number>>(new Set([1, 4]));
  const [dimTheme, setDimTheme] = useState(false);
  const [rtl, setRtl] = useState(false);
  const [fontScale, setFontScale] = useState(100);
  const [filterOpen, setFilterOpen] = useState(false);
  const [matchDialogOpen, setMatchDialogOpen] = useState(false);
  const [tourOpen, setTourOpen] = useState(false);
  const [tourStep, setTourStep] = useState(0);
  const toggleFollow = useCallback((id: number) => {
    setFollowed((prev) => {
      const next = new Set(prev);
      const wasFollowed = next.has(id);
      if (wasFollowed) next.delete(id);else next.add(id);
      toast(wasFollowed ? 'Match removed from your watchlist' : 'Match added to your watchlist', {
        description: gameTitle(games[id])
      });
      return next;
    });
  }, []);
  const toggleDimTheme = useCallback(() => setDimTheme((v) => !v), []);
  const toggleRtl = useCallback(() => setRtl((v) => !v), []);
  const openMatch = useCallback((id: number) => {
    setActiveId(id);
    setDetailTab('summary');
    setTeamSide('home');
    setMatchDialogOpen(true);
  }, []);
  const closeMatchDialog = useCallback(() => setMatchDialogOpen(false), []);
  const resetFilters = useCallback(() => {
    setStatusFilter('all');
    setSearch('');
    setLeagueFilter('all');
    setDateFilter('');
  }, []);
  const resetDisplay = useCallback(() => {
    setDimTheme(false);
    setRtl(false);
    setFontScale(100);
  }, []);
  const nextMatch = useCallback(() => {
    setActiveId((prev) => (prev + 1) % games.length);
  }, []);
  const prevMatch = useCallback(() => {
    setActiveId((prev) => (prev - 1 + games.length) % games.length);
  }, []);
  const selectClub = useCallback((id: number) => {
    setClubId(id);
    setView('clubs');
  }, []);
  const openTour = useCallback(() => {
    setTourStep(0);
    setTourOpen(true);
  }, []);
  const closeTour = useCallback(() => setTourOpen(false), []);
  const advanceTour = useCallback(() => {
    setTourStep((prev) => {
      if (prev === 2) {
        setTourOpen(false);
        resetFilters();
        setView('matches');
        return 0;
      }
      return prev + 1;
    });
  }, [resetFilters]);
  const value = useMemo<DashboardContextValue>(() => ({
    view,
    setView,
    statusFilter,
    setStatusFilter,
    search,
    setSearch,
    leagueFilter,
    setLeagueFilter,
    dateFilter,
    setDateFilter,
    activeId,
    setActiveId,
    clubId,
    setClubId,
    half,
    setHalf,
    teamSide,
    setTeamSide,
    group,
    setGroup,
    round,
    setRound,
    detailTab,
    setDetailTab,
    followed,
    toggleFollow,
    dimTheme,
    toggleDimTheme,
    rtl,
    toggleRtl,
    fontScale,
    setFontScale,
    filterOpen,
    setFilterOpen,
    matchDialogOpen,
    openMatch,
    closeMatchDialog,
    resetFilters,
    resetDisplay,
    nextMatch,
    prevMatch,
    selectClub,
    tourOpen,
    tourStep,
    openTour,
    closeTour,
    advanceTour
  }), [view, statusFilter, search, leagueFilter, dateFilter, activeId, clubId, half, teamSide, group, round, detailTab, followed, dimTheme, rtl, fontScale, filterOpen, matchDialogOpen, toggleFollow, toggleDimTheme, toggleRtl, openMatch, closeMatchDialog, resetFilters, resetDisplay, nextMatch, prevMatch, selectClub, tourOpen, tourStep, openTour, closeTour, advanceTour]);
  return <DashboardContext.Provider value={value}>{children}</DashboardContext.Provider>;
}
export function useDashboard() {
  const ctx = useContext(DashboardContext);
  if (!ctx) throw new Error('useDashboard must be used within DashboardProvider');
  return ctx;
}
export { clubs, games };
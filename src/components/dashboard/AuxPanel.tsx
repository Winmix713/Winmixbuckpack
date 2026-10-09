import React from 'react';
import { useDashboard } from '../../contexts/DashboardContext';
import { StatisticsView } from './views/StatisticsView';
import { ClubsView } from './views/ClubsView';
import { StandingsView } from './views/StandingsView';
import { ChampionshipsView } from './views/ChampionshipsView';
import { LineupsView } from './views/LineupsView';
import { ProfileView } from './views/ProfileView';
import { SettingsView } from './views/SettingsView';

export function AuxPanel() {
  const { view } = useDashboard();

  switch (view) {
    case 'statistics':
      return <StatisticsView />;
    case 'clubs':
      return <ClubsView />;
    case 'standings':
      return <StandingsView />;
    case 'championships':
      return <ChampionshipsView />;
    case 'lineups':
      return <LineupsView />;
    case 'profile':
      return <ProfileView />;
    case 'settings':
      return <SettingsView />;
    default:
      return null;
  }
}
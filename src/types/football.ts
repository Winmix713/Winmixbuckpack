export interface Club {
  id: number;
  name: string;
  short: string;
  location: string;
  league: string;
  w: number;
  d: number;
  l: number;
  gf: number;
  ga: number;
  pts: number;
}

export type MatchStatus = 'Live' | 'Finished';

export interface GoalEvent {
  minute: number;
  side: 'home' | 'away';
  player: string;
}

export interface Game {
  id: number;
  home: number;
  away: number;
  score: [number, number];
  minute: number;
  status: MatchStatus;
  league: string;
  date: string;
  group: string;
  round: string;
  comment: string;
  events: GoalEvent[];
  possession: number;
}

export type ViewKey =
'matches' |
'favorites' |
'clubs' |
'championships' |
'standings' |
'statistics' |
'lineups' |
'profile' |
'settings';

export type StatusFilter = 'all' | 'Live' | 'Finished';

export type DetailTab = 'summary' | 'lineups' | 'goals' | 'statistics';

export type TeamSide = 'home' | 'away';
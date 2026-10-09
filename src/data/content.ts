import type { ViewKey } from '../types/football';

export const viewDescriptions: Record<ViewKey, [string, string]> = {
  matches: ['Match centre', 'Every fixture. Every detail. All in one place.'],
  favorites: ['Watchlist', 'The fixtures you want to keep close.'],
  clubs: ['Club summary', 'Form, players and the numbers behind the badge.'],
  championships: ['Championships', 'Follow groups, knockout rounds and matchdays.'],
  standings: ['League overview', 'Every result has its place in the table.'],
  statistics: ['Statistics', 'Compare the patterns behind the scoreline.'],
  lineups: ['Match overview', 'Two teams. Every player. Every moment.'],
  profile: ['Your profile', 'Your football workspace, set up for you.'],
  settings: ['Settings', 'Make the match centre comfortable to read.']
};

export const viewOrder: ViewKey[] = [
'matches', 'favorites', 'clubs', 'championships', 'standings', 'statistics', 'lineups', 'profile', 'settings'];


export const playerNames = ['Navarro', 'Costa', 'Meyer', 'Duarte', 'Weber', 'Santos', 'Reed', 'Klein', 'Silva', 'Cole', 'Rossi'];
export const formationNumbers = [1, 2, 4, 5, 3, 6, 8, 10, 7, 9, 11];
export const formationPoints: Array<[number, number]> = [
[50, 87], [17, 67], [39, 71], [62, 71], [83, 67], [30, 47], [69, 47], [50, 32], [17, 17], [50, 12], [83, 17]];


export interface TourStep {
  title: string;
  description: string;
}

export const tourSteps: TourStep[] = [
{
  title: 'Every fixture, in focus.',
  description: 'Switch between live and finished demo fixtures. Search for a team, choose a league, and follow a match with the heart button.'
},
{
  title: 'Go beyond the score.',
  description: 'Open any match to explore goals, possession, team comparisons and player formations. Switch teams to see both sides of the pitch.'
},
{
  title: 'See the whole competition.',
  description: 'Explore club form, league tables and championship groups from the sidebar. All results are simulated examples; no live data feed is connected.'
}];


export const featureCards = [
{
  number: '01',
  title: 'Read the momentum.',
  description: 'Follow possession, shots and attacking pressure. See how the balance of a match changes.',
  cta: 'Explore match statistics',
  go: 'statistics' as ViewKey
},
{
  number: '02',
  title: 'Every club, in context.',
  description: 'Compare club form and league positions. Put every result into the bigger picture.',
  cta: 'Explore the league table',
  go: 'standings' as ViewKey
},
{
  number: '03',
  title: 'Know the starting eleven.',
  description: 'Explore formations, player roles and match events. See the game from the pitch up.',
  cta: 'Explore the lineups',
  go: 'lineups' as ViewKey
}];
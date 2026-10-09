import type { Game, StatusFilter } from '../types/football';
import { gameTitle } from './football';

interface MatchFilters {
  games: Game[];
  favoritesOnly: boolean;
  followed: Set<number>;
  status: StatusFilter;
  search: string;
  league: string;
  date: string;
}

export function filterMatches({ games, favoritesOnly, followed, status, search, league, date }: MatchFilters) {
  const query = search.trim().toLowerCase();

  return games.filter((game) => {
    const matchesSearch = !query || `${gameTitle(game)} ${game.league}`.toLowerCase().includes(query);
    return (
      (!favoritesOnly || followed.has(game.id)) && (
      status === 'all' || game.status === status) && (
      league === 'all' || game.league === league) && (
      !date || game.date === date) &&
      matchesSearch);

  });
}
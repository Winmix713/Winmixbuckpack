import { clubs } from '../data/clubs';
import type { Game } from '../types/football';

export const gameTitle = (g: Game) => `${clubs[g.home].name} · ${clubs[g.away].name}`;
export const formatScore = (g: Game) => g.score.join(' : ');
export const clubRank = (leagueId: string, clubId: number) =>
[...clubs].
filter((c) => c.league === leagueId).
sort((a, b) => b.pts - a.pts).
findIndex((c) => c.id === clubId) + 1;
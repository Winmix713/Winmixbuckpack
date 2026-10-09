import type { Game } from '../types/football';
export const games: Game[] = [{
  id: 0,
  home: 0,
  away: 1,
  score: [2, 1],
  minute: 68,
  status: 'Live',
  league: 'Virtual Champions',
  date: '2026-09-22',
  group: 'A',
  round: 'Quarter-final',
  comment: 'Silva scores from close range.',
  events: [{
    minute: 18,
    side: 'home',
    player: 'Costa'
  }, {
    minute: 42,
    side: 'away',
    player: 'Weber'
  }, {
    minute: 68,
    side: 'home',
    player: 'Silva'
  }],
  possession: 58
}, {
  id: 1,
  home: 2,
  away: 3,
  score: [1, 1],
  minute: 54,
  status: 'Live',
  league: 'Virtual Premier',
  date: '2026-09-22',
  group: 'B',
  round: 'Group stage',
  comment: 'Arsenal build an attack down the right.',
  events: [{
    minute: 12,
    side: 'home',
    player: 'Reed'
  }, {
    minute: 39,
    side: 'away',
    player: 'Cole'
  }],
  possession: 51
}, {
  id: 2,
  home: 4,
  away: 5,
  score: [3, 0],
  minute: 90,
  status: 'Finished',
  league: 'Virtual Bundesliga',
  date: '2026-09-22',
  group: 'C',
  round: 'Group stage',
  comment: 'Full time. Bayern keep a clean sheet.',
  events: [{
    minute: 11,
    side: 'home',
    player: 'Brandt'
  }, {
    minute: 47,
    side: 'home',
    player: 'Klein'
  }, {
    minute: 75,
    side: 'home',
    player: 'Brandt'
  }],
  possession: 64
}, {
  id: 3,
  home: 6,
  away: 7,
  score: [0, 1],
  minute: 81,
  status: 'Live',
  league: 'Virtual Serie A',
  date: '2026-09-23',
  group: 'D',
  round: 'Group stage',
  comment: 'Milan defend a narrow lead.',
  events: [{
    minute: 59,
    side: 'away',
    player: 'Rossi'
  }],
  possession: 46
}, {
  id: 4,
  home: 8,
  away: 9,
  score: [2, 2],
  minute: 90,
  status: 'Finished',
  league: 'Virtual Champions',
  date: '2026-09-23',
  group: 'A',
  round: 'Quarter-final',
  comment: 'Full time. The Madrid derby ends level.',
  events: [{
    minute: 9,
    side: 'home',
    player: 'Santos'
  }, {
    minute: 31,
    side: 'away',
    player: 'Vega'
  }, {
    minute: 64,
    side: 'home',
    player: 'Santos'
  }, {
    minute: 83,
    side: 'away',
    player: 'Ruiz'
  }],
  possession: 55
}, {
  id: 5,
  home: 10,
  away: 11,
  score: [2, 0],
  minute: 37,
  status: 'Live',
  league: 'Virtual Premier',
  date: '2026-09-23',
  group: 'B',
  round: 'Group stage',
  comment: 'City control possession in midfield.',
  events: [{
    minute: 14,
    side: 'home',
    player: 'Miles'
  }, {
    minute: 29,
    side: 'home',
    player: 'Stone'
  }],
  possession: 62
}, {
  id: 6,
  home: 12,
  away: 13,
  score: [1, 0],
  minute: 90,
  status: 'Finished',
  league: 'Virtual Bundesliga',
  date: '2026-09-24',
  group: 'C',
  round: 'Group stage',
  comment: 'Full time. Leverkusen take three points.',
  events: [{
    minute: 67,
    side: 'home',
    player: 'Becker'
  }],
  possession: 54
}, {
  id: 7,
  home: 14,
  away: 15,
  score: [1, 3],
  minute: 90,
  status: 'Finished',
  league: 'Virtual Serie A',
  date: '2026-09-24',
  group: 'D',
  round: 'Group stage',
  comment: 'Full time. Napoli finish strongly.',
  events: [{
    minute: 16,
    side: 'away',
    player: 'Marino'
  }, {
    minute: 34,
    side: 'home',
    player: 'Ricci'
  }, {
    minute: 63,
    side: 'away',
    player: 'Marino'
  }, {
    minute: 86,
    side: 'away',
    player: 'Moretti'
  }],
  possession: 44
}];
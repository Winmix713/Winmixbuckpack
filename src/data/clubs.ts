import type { Club } from '../types/football';

const clubBase: Array<[string, string, string, string]> = [
['Barcelona', 'BC', 'Barcelona, Spain', 'Virtual Champions'],
['Dortmund', 'DO', 'Dortmund, Germany', 'Virtual Champions'],
['Liverpool', 'LI', 'Liverpool, England', 'Virtual Premier'],
['Arsenal', 'AR', 'London, England', 'Virtual Premier'],
['Bayern', 'BY', 'Munich, Germany', 'Virtual Bundesliga'],
['Leipzig', 'LP', 'Leipzig, Germany', 'Virtual Bundesliga'],
['Juventus', 'JU', 'Turin, Italy', 'Virtual Serie A'],
['Milan', 'MI', 'Milan, Italy', 'Virtual Serie A'],
['Real Madrid', 'RM', 'Madrid, Spain', 'Virtual Champions'],
['Atlético', 'AT', 'Madrid, Spain', 'Virtual Champions'],
['Man. City', 'MC', 'Manchester, England', 'Virtual Premier'],
['Man. United', 'MU', 'Manchester, England', 'Virtual Premier'],
['Leverkusen', 'LV', 'Leverkusen, Germany', 'Virtual Bundesliga'],
['Wolfsburg', 'WO', 'Wolfsburg, Germany', 'Virtual Bundesliga'],
['Inter', 'IN', 'Milan, Italy', 'Virtual Serie A'],
['Napoli', 'NA', 'Naples, Italy', 'Virtual Serie A']];


export const clubs: Club[] = clubBase.map(([name, short, location, league], id) => {
  const w = 8 - id % 5;
  const d = id % 3;
  const l = 10 - w - d;
  return {
    id,
    name,
    short,
    location,
    league,
    w,
    d,
    l,
    gf: 24 - id % 10,
    ga: 8 + id % 7,
    pts: w * 3 + d
  };
});
// Local NBA data: 2024-25 regular-season averages (approximate).
// Team = team at the end of the 2024-25 season.
// VERIFY these against basketball-reference.com before trusting them.
const PLAYERS = [
  { name: "Shai Gilgeous-Alexander", team: "OKC", pos: "G", pts: 32.7, reb: 5.0,  ast: 6.4 },
  { name: "Giannis Antetokounmpo",   team: "MIL", pos: "F", pts: 30.4, reb: 11.9, ast: 6.5 },
  { name: "Nikola Jokic",            team: "DEN", pos: "C", pts: 29.6, reb: 12.7, ast: 10.2 },
  { name: "Luka Doncic",             team: "LAL", pos: "G", pts: 28.2, reb: 8.2,  ast: 7.7 },
  { name: "Anthony Edwards",         team: "MIN", pos: "G", pts: 27.6, reb: 5.7,  ast: 4.5 },
  { name: "Jayson Tatum",            team: "BOS", pos: "F", pts: 26.8, reb: 8.7,  ast: 6.0 },
  { name: "Kevin Durant",            team: "PHX", pos: "F", pts: 26.6, reb: 6.0,  ast: 4.2 },
  { name: "Tyrese Maxey",            team: "PHI", pos: "G", pts: 26.3, reb: 3.3,  ast: 6.1 },
  { name: "Cade Cunningham",         team: "DET", pos: "G", pts: 26.1, reb: 6.1,  ast: 9.1 },
  { name: "Jalen Brunson",           team: "NYK", pos: "G", pts: 26.0, reb: 2.9,  ast: 7.3 },
  { name: "Devin Booker",            team: "PHX", pos: "G", pts: 25.6, reb: 4.1,  ast: 7.1 },
  { name: "Anthony Davis",           team: "DAL", pos: "F", pts: 24.7, reb: 11.6, ast: 3.5 },
  { name: "Stephen Curry",           team: "GSW", pos: "G", pts: 24.5, reb: 4.4,  ast: 6.0 },
  { name: "LeBron James",            team: "LAL", pos: "F", pts: 24.4, reb: 7.8,  ast: 8.2 },
  { name: "Karl-Anthony Towns",      team: "NYK", pos: "C", pts: 24.4, reb: 12.8, ast: 3.1 },
  { name: "Victor Wembanyama",       team: "SAS", pos: "C", pts: 24.3, reb: 11.0, ast: 3.7 },
  { name: "Trae Young",              team: "ATL", pos: "G", pts: 24.2, reb: 3.1,  ast: 11.6 },
  { name: "Donovan Mitchell",        team: "CLE", pos: "G", pts: 24.0, reb: 4.5,  ast: 5.0 },
  { name: "Ja Morant",               team: "MEM", pos: "G", pts: 23.2, reb: 4.1,  ast: 7.3 },
  { name: "Domantas Sabonis",        team: "SAC", pos: "C", pts: 19.1, reb: 13.9, ast: 6.0 },
];

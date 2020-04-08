const games = [
  {
    id: 1,
    title: "The Witcher 3: Wild Hunt",
    slug: "the-witcher-3-wild-hunt",
    developerId: 4,
    platforms: "PlayStation 4, Nintendo Switch, Xbox One, Microsoft Windows",
  },
  {
    id: 2,
    title: "Cyberpunk 2077",
    slug: "cyberpunk-2077",
    developerId: 4,
    platforms:
      "PlayStation 4, Xbox One, Xbox Series X, Google Stadia, Microsoft Windows",
  },
  {
    id: 3,
    title: "The Legend of Zelda: Breath of the Wild",
    slug: "the-legend-of-zelda-botw",
    developerId: 5,
    platforms: "Nintendo Switch, Wii U",
  },
  {
    id: 4,
    title: "Super Mario Odyssey",
    slug: "super-mario-odyssey",
    developerId: 5,
    platforms: "Nintendo Switch",
  },
  {
    id: 5,
    title: "Ring Fit Adventure",
    slug: "ring-fit-adventure",
    developerId: 5,
    platforms: "Nintendo Switch",
  },
  {
    id: 6,
    title: "Assassin's Creed Odyssey",
    slug: "assassins-creed-odyssey",
    developerId: 2,
    platforms: "PlayStation 4, Xbox One, Nintendo Switch, Microsoft Windows",
  },
  {
    id: 7,
    title: "Far Cry 5",
    slug: "far-cry-5",
    developerId: 2,
    platforms: "PlayStation 4, Xbox One, Nintendo Switch, Microsoft Windows",
  },
  {
    id: 8,
    title: "The Last of Us",
    slug: "the-last-of-us",
    developerId: 3,
    platforms: "PlayStation 4, PlayStation 3",
  },
  {
    id: 9,
    title: "Uncharted 4: A Thief's End",
    slug: "uncharted-4-a-thiefs-end",
    developerId: 3,
    platforms: "PlayStation 4",
  },
  {
    id: 10,
    title: "Red Dead Redemption 2",
    slug: "red-dead-redemption-2",
    developerId: 1,
    platforms: "PlayStation 4, Google Stadia, Xbox One, Microsoft Windows",
  },
];

const developers = [
  { id: 1, name: "Rockstar Games" },
  { id: 2, name: "Ubisoft" },
  { id: 3, name: "Naughty Dog" },
  { id: 4, name: "CD Projekt Red" },
  { id: 5, name: "Nintendo Entertainment Planning & Development" },
];

const newGame = {
  id: null,
  title: "",
  developerId: null,
  platforms: "",
};

module.exports = {
  newGame,
  games,
  developers,
};

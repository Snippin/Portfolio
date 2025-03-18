const basePath = process.env.BASE_PATH;

const SJInfo = {
  name: "Slayer's Journey",
  roles: "Independent",
  shortDescription: "Slayer's Journey is a deck-building rogue-like game where players can experiment.",
  fullDescription: "Slayer's Journey is a game about building a deck that suits the player's play-style while also experimenting with different cards, continuing to try different synergies, and discovering their preferred way of playing the game.\n\n2D Unity Project",
  genre: "Rogue-like, Deck Building, RPG",
  platform: "PC",
  duration: "2024 (16 Weeks)",
  slideshow: [
    `${basePath}/images/projects/slayers_journey/SJ_MainMenu.jpg`,
    `${basePath}/images/projects/slayers_journey/SJ_Combat.jpg`,
    `${basePath}/images/projects/slayers_journey/SJ_DeckView.jpg`,
    `${basePath}/images/projects/slayers_journey/SJ_RandomMap2.jpg`,
  ],
  workGallery: [
    {
      image: `${basePath}/images/projects/slayers_journey/SJ_RandomMap.jpg`,
      title: "Random Map Generation",
      description: "Made it so each run has a different layout\nDifferent encounters and enemy types\nCan be easily modified to add more things such as more encounters, and more rest points.",
    },
    {
      image: `${basePath}/images/projects/slayers_journey/SJ_Combat2.jpg`,
      title: "Turned-Based Combat",
      description: "Player has limited amount of energy per turn\nEach card costs different amount of energy\nEnemies attack sequentially from left to right\nPlayer and enemies can apply buffs or debuffs",
    },
    {
      image: `${basePath}/images/projects/slayers_journey/SJ_VFX.jpg`,
      title: "Card Visual Effects",
      description: "Different cards have different visual and sound effects",
    },
    {
      image: `${basePath}/images/projects/slayers_journey/SJ_CombatEnd.jpg`,
      title: "Deck Manipulation",
      description: "Players can select to add a card from 3 choices after combat ends\nPlayers can either replace a card or directly add it to the deck",
    },
    {
      image: `${basePath}/images/projects/slayers_journey/SJ_DeckView2.jpg`,
      title: "Viewable Deck",
      description: "Players can view their deck at any time",
    },
    {
      image: `${basePath}/images/projects/slayers_journey/SJ_RestSite.jpg`,
      title: "Rest Sites / Points",
      description: "Players can either heal or upgrade cards in this location\nThey can do 2 actions before having to move on (2 heals, 2 upgrades, or 1 heal and 1 upgrade)",
    },

  ],
  workList: [
    "Modular system for creating different enemies with varying stats and attack patterns",
    "Modular system for creating maps based on parameters set",
    "Modular system for creating card effects",
    "Finding sprites for models and visual effects",
    "Finding audio for sound effects",
  ],
  link: "/projects/slayers_journey",
};

export default SJInfo;

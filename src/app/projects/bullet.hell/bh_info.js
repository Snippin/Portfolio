const basePath = `${process.env.BASE_PATH}/images/projects/bullet.hell`;

const BHInfo = {
  name: "Bullet.Hell",
  roles: "AI Programmer, Game Programmer, System Coordinator",
  shortDescription: "Up against hordes of enemies, Bullet.Hell puts the player right into the middle of the chaos with the limited arsenal they prepared. Prepare, Struggle and Climb against the mayhem or fall back to zero.",
  fullDescription: "Bullet.Hell is a rogue-like deck builder where players are to modify their decks which contains types of guns the player may use during the stage. Player has to kill all enemies in the stage to continue.\n\n2D Unity Project",
  genre: "Bullet Hell, Rogue-like, Deck Building",
  platform: "PC",
  duration: "2023 (2 Weeks)",
  slideshow: [
    `${basePath}/BH_MainMenu.jpg`,
    `${basePath}/BH_Gameplay.jpg`,
    `${basePath}/BH_Gameplay2.jpg`,
  ],
  workGallery: [
    {
      image: `${basePath}/BH_AI.jpg`,
      title: "AI",
      description: "Finite-state machine for behaviours\nSprite animations\nAStar pathfinding",
    },
    {
      image: `${basePath}/BH_LevelUp.jpg`,
      title: "Leveling System",
      description: "Allow player to level up\nSelect buffs to aid in the run\nStat calculation after selecting buff",

    },
    {
      image: `${basePath}/BH_Shop.jpg`,
      title: "Shop System",
      description: "Shop UI\nBuying and Selling of cards\nModification of deck upon buying or selling",
    },
  ],
  workList: [
    "Helped with other UI elements such as the Main Menu",
    "Saving & Loading of player data",
    "Github code integration (Setting up repository, resolving merge conflicts)",
  ],
  link: "/projects/bullet.hell",
};

export default BHInfo;

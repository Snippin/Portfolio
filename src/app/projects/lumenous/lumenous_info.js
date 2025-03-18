const basePath = `${process.env.BASE_PATH}/images/projects/lumenous`;

const LumenousInfo = {
  name: "Lumenous",
  roles: "AI Programmer, Game Programmer, System Coordinator",
  shortDescription: "Lumenous is a labyrinth puzzle horror game with darkness being your enemy.",
  fullDescription: "Lumenous is a labyrinth puzzle horror game with darkness being your enemy. Players are to solve the puzzles while avoiding the enemies and try to escape after collecting 4 items scattered in different areas that have different enemy/mechanics to overcome.\n\n3D Unity Project",
  genre: "First Person, Horror, Survival, Exploration, Puzzle",
  platform: "PC",
  duration: "2023 (2 Weeks)",
  slideshow: [
    `${basePath}/Lumenous_MainMenu.jpg`,
    `${basePath}/Lumenous_Gameplay1.jpg`,
    `${basePath}/Lumenous_Gameplay2.jpg`,
  ],
  workGallery: [
    {
      image: `${basePath}/Lumenous_AI1.gif`,
      title: "Dark Stalker AI",
      description: "When player shines light on him, he gets stunned temporarily",
    },
    {
      image: `${basePath}/Lumenous_AI2.gif`,
      title: "Shambler AI",
      description: "Temporarily disables the player's lamp at random intervals\nCan be intercepted with using the flash module when it is in range",
    },
    {
      image: `${basePath}/Lumenous_AI3.1.gif`,
      title: "Charger AI\n(Roaming animation)",
      description: "Charges at the player when close enough and in light (in sight)\nStuns itself when it hits a wall and opens up a breakable wall if it hits it",
    },
    {
      image: `${basePath}/Lumenous_AI3.2.gif`,
      title: "Charger AI\n(Charging animation)",
      description: "Charges at the player when close enough and in light (in sight)\nStuns itself when it hits a wall and opens up a breakable wall if it hits it",
    },
    {
      image: `${basePath}/Lumenous_Fog.gif`,
      title: "Fog",
      description: "Particle system with physics collision\nIncreases the fear meter quicker when inside it\nCan be removed temporarily when using UV module",
    },
  ],
  workList: [
    "Create finite-state machines to handle AI behaviors",
    "Learn how to use Unity's `Navmesh` for AI pathfinding",
    "AI model animations",
    "Saving & Loading of data (Player data, and AI locations)",
    "Github code integration (Setting up repository, resolving merge conflicts)",
  ],
  link: "/projects/lumenous",
};

export default LumenousInfo;

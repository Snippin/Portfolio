const basePath = `${process.env.BASE_PATH}/images/mini_projects/basic_sudoku`;

const BSInfo = {
  name: "Basic Sudoku",
  shortDescription: "A simple C++ sudoku game clone made using raylib library",
  fullDescription: "A sudoku game clone that I decided to do as a small project during a break using the raylib library.\n\nC++ project",
  duration: "2025",
  genre: "Puzzle, Casual",
  platform: "PC",
  slideshow: [
    `${basePath}/MainMenu.jpg`,
  ],
  workGallery: [
    {
      image: `${basePath}/Gameplay.jpg`,
      title: "Gameplay",
      description: "Randomly generated puzzles with only one solution\nCorrect answers in cells will be blue\nWrong answers in cells will be red",
    },
    {
      image: `${basePath}/Win.jpg`,
      title: "End Conditions",
      description: "Win condition: All empty cells are filled\nLose condition: All lives are used up",
    },
  ],
  workList: [
    "Simple puzzle generation and solving algorithm",
    "QOL selected column and row highlight",
    "Player interaction",
  ],
  link: "/mini_projects/basic_sudoku",
}

export default BSInfo;

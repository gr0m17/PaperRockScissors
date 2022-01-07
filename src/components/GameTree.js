export const GAME_DATA = {
  RPS_V00: {
    videoID: 0,
    defaultNext: -1,
    branches: {
      b1: {
        name: "Play again!",
        videoID: 3,
        buttonText: "Okay, I guess I'll play again.",
        now: 1,
        cpuOffset: function () {
          return 0;
        },
      },
    },
  },
  RPS_V01: {
    videoID: 1,
    defaultNext: 2,
  },
  RPS_V02: {
    videoID: 2,
    defaultNext: 3,
    branches: {
      b1: {
        name: "Skip Instructions",
        videoID: 3,
        buttonText: "Okay, I get it...",
        now: 1,
        cpuOffset: function () {
          return 0;
        },
      },
    },
  },
  RPS_V03: {
    videoID: 3,
    defaultNext: 16,
    branches: {
      b1: {
        name: "Rock",
        videoID: 4,
        cpuOffset: function () {
          return Math.floor(Math.random() * 3);
        },
        buttonText: "ROCK!",
        specialHandler: function () {
          console.log("player clicked rock!");
        },
      },
      b2: {
        name: "Paper",
        videoID: 8,
        cpuOffset: function () {
          return Math.floor(Math.random() * 3);
        },
        buttonText: "Paper!",
        specialHandler: function () {
          console.log("player clicked paper!");
        },
      },
      b3: {
        name: "Scissors",
        videoID: 12,
        cpuOffset: function () {
          return Math.floor(Math.random() * 3);
        },
        buttonText: "Scissors!",
        specialHandler: function () {
          console.log("player clicked scissors!");
        },
      },
    },
  },
  RPS_V04: {
    videoID: 4,
    defaultNext: 16,
    branches: {
      b1: {
        name: "Yeah!",
        videoID: 7,
        cpuOffset: function () {
          return 0;
        },
        buttonText: "Yeah!",
        specialHandler: function () {
          console.log("player clicked Yeah!");
        },
      },
      b2: {
        name: "nah!",
        videoID: 17,
        cpuOffset: function () {
          return 0;
        },
        buttonText: "Nah!",
        specialHandler: function () {
          console.log("player clicked Nah!");
        },
      },
    },
  },
  RPS_V05: {
    videoID: 5,
    defaultNext: 16,
    branches: {
      b1: {
        name: "Yeah!",
        videoID: 7,
        cpuOffset: function () {
          return 0;
        },
        buttonText: "Yeah!",
        specialHandler: function () {
          console.log("player clicked Yeah!");
        },
      },
      b2: {
        name: "nah!",
        videoID: 17,
        cpuOffset: function () {
          return 0;
        },
        buttonText: "Nah!",
        specialHandler: function () {
          console.log("player clicked Nah!");
        },
      },
    },
  },
  RPS_V06: {
    videoID: 6,
    defaultNext: 16,
    branches: {
      b1: {
        name: "Yeah!",
        videoID: 7,
        cpuOffset: function () {
          return 0;
        },
        buttonText: "Yeah!",
        specialHandler: function () {
          console.log("player clicked Yeah!");
        },
      },
      b2: {
        name: "nah!",
        videoID: 17,
        cpuOffset: function () {
          return 0;
        },
        buttonText: "Nah!",
        specialHandler: function () {
          console.log("player clicked Nah!");
        },
      },
    },
  },
  RPS_V07: {
    videoID: 7,
    defaultNext: 16,
    branches: {
      b1: {
        name: "Rock",
        videoID: 4,
        cpuOffset: function () {
          return Math.floor(Math.random() * 3);
        },
        buttonText: "ROCK!",
        specialHandler: function () {
          console.log("player clicked rock!");
        },
      },
      b2: {
        name: "Paper",
        videoID: 8,
        cpuOffset: function () {
          return Math.floor(Math.random() * 3);
        },
        buttonText: "Paper!",
        specialHandler: function () {
          console.log("player clicked paper!");
        },
      },
      b3: {
        name: "Scissors",
        videoID: 12,
        cpuOffset: function () {
          return Math.floor(Math.random() * 3);
        },
        buttonText: "Scissors!",
        specialHandler: function () {
          console.log("player clicked scissors!");
        },
      },
    },
  },
  RPS_V08: {
    videoID: 8,
    defaultNext: 16,
    branches: {
      b1: {
        name: "Yeah!",
        videoID: 11,
        cpuOffset: function () {
          return 0;
        },
        buttonText: "Yeah!",
        specialHandler: function () {
          console.log("player clicked Yeah!");
        },
      },
      b2: {
        name: "nah!",
        videoID: 17,
        cpuOffset: function () {
          return 0;
        },
        buttonText: "Nah!",
        specialHandler: function () {
          console.log("player clicked Nah!");
        },
      },
    },
  },
  RPS_V09: {
    videoID: 9,
    defaultNext: 16,
    branches: {
      b1: {
        name: "Yeah!",
        videoID: 11,
        cpuOffset: function () {
          return 0;
        },
        buttonText: "Yeah!",
        specialHandler: function () {
          console.log("player clicked Yeah!");
        },
      },
      b2: {
        name: "nah!",
        videoID: 17,
        cpuOffset: function () {
          return 0;
        },
        buttonText: "Nah!",
        specialHandler: function () {
          console.log("player clicked Nah!");
        },
      },
    },
  },
  RPS_V10: {
    videoID: 10,
    defaultNext: 16,
    branches: {
      b1: {
        name: "Yeah!",
        videoID: 11,
        cpuOffset: function () {
          return 0;
        },
        buttonText: "Yeah!",
        specialHandler: function () {
          console.log("player clicked Yeah!");
        },
      },
      b2: {
        name: "nah!",
        videoID: 17,
        cpuOffset: function () {
          return 0;
        },
        buttonText: "Nah!",
        specialHandler: function () {
          console.log("player clicked Nah!");
        },
      },
    },
  },
  RPS_V11: {
    videoID: 11,
    defaultNext: 16,
    branches: {
      b1: {
        name: "Rock",
        videoID: 4,
        cpuOffset: function () {
          return Math.floor(Math.random() * 3);
        },
        buttonText: "ROCK!",
        specialHandler: function () {
          console.log("player clicked rock!");
        },
      },
      b2: {
        name: "Paper",
        videoID: 8,
        cpuOffset: function () {
          return Math.floor(Math.random() * 3);
        },
        buttonText: "Paper!",
        specialHandler: function () {
          console.log("player clicked paper!");
        },
      },
      b3: {
        name: "Scissors",
        videoID: 12,
        cpuOffset: function () {
          return Math.floor(Math.random() * 3);
        },
        buttonText: "Scissors!",
        specialHandler: function () {
          console.log("player clicked scissors!");
        },
      },
    },
  },
  RPS_V12: {
    videoID: 12,
    defaultNext: 16,
    branches: {
      b1: {
        name: "Yeah!",
        videoID: 15,
        cpuOffset: function () {
          return 0;
        },
        buttonText: "Yeah!",
        specialHandler: function () {
          console.log("player clicked Yeah!");
        },
      },
      b2: {
        name: "nah!",
        videoID: 17,
        cpuOffset: function () {
          return 0;
        },
        buttonText: "Nah!",
        specialHandler: function () {
          console.log("player clicked Nah!");
        },
      },
    },
  },
  RPS_V13: {
    videoID: 13,
    defaultNext: 16,
    branches: {
      b1: {
        name: "Yeah!",
        videoID: 15,
        cpuOffset: function () {
          return 0;
        },
        buttonText: "Yeah!",
        specialHandler: function () {
          console.log("player clicked Yeah!");
        },
      },
      b2: {
        name: "nah!",
        videoID: 17,
        cpuOffset: function () {
          return 0;
        },
        buttonText: "Nah!",
        specialHandler: function () {
          console.log("player clicked Nah!");
        },
      },
    },
  },
  RPS_V14: {
    videoID: 14,
    defaultNext: 16,
    branches: {
      b1: {
        name: "Yeah!",
        videoID: 15,
        cpuOffset: function () {
          return 0;
        },
        buttonText: "Yeah!",
        specialHandler: function () {
          console.log("player clicked Yeah!");
        },
      },
      b2: {
        name: "nah!",
        videoID: 17,
        cpuOffset: function () {
          return 0;
        },
        buttonText: "Nah!",
        specialHandler: function () {
          console.log("player clicked Nah!");
        },
      },
    },
  },
  RPS_V15: {
    videoID: 15,
    defaultNext: 16,
    branches: {
      b1: {
        name: "Rock",
        videoID: 4,
        cpuOffset: function () {
          return Math.floor(Math.random() * 3);
        },
        buttonText: "ROCK!",
        specialHandler: function () {
          console.log("player clicked rock!");
        },
      },
      b2: {
        name: "Paper",
        videoID: 8,
        cpuOffset: function () {
          return Math.floor(Math.random() * 3);
        },
        buttonText: "Paper!",
        specialHandler: function () {
          console.log("player clicked paper!");
        },
      },
      b3: {
        name: "Scissors",
        videoID: 12,
        cpuOffset: function () {
          return Math.floor(Math.random() * 3);
        },
        buttonText: "Scissors!",
        specialHandler: function () {
          console.log("player clicked scissors!");
        },
      },
    },
  },
  RPS_V16: {
    videoID: 16,
    defaultNext: 2,
    branches: {
      b1: {
        name: "Skip Instructions",
        videoID: 3,
        buttonText: "Okay, I get it...",
        now: 1,
        cpuOffset: function () {
          return 0;
        },
      },
    },
  },
  RPS_V17: {
    videoID: 17,
    defaultNext: 18,
    branches: {
      b1: {
        name: "Play again!",
        videoID: 3,
        buttonText: "Okay, I guess I'll play again.",
        now: 1,
        cpuOffset: function () {
          return 0;
        },
      },
    },
  },
};

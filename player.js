class Player {
  constructor(name, token) {
    this.name = name;
    this.token = token;
    this.wins = 0
    this.choice = ''
  }

  takeTurn() {
    if (game.gameType ===  "normal") {
    game.computer.choice = normal[generatePick(normal)]
    } if (game.gameType ===  "spicy") 
    game.computer.choice = spicy[generatePick(spicy)]
    }
  }

  

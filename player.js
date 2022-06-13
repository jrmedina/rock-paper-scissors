class Player {
  constructor(name, token) {
    this.name = name;
    this.token = token;
    this.wins = 0
    this.choice = ''
  }

  takeTurn() {
    if (game.gameType === "normal") {
      game.cpu.choice = normal[generatePick(normal)]
    } else if (game.gameType === "spicy") {
      game.cpu.choice = spicy[generatePick(spicy)]
    }
  }
}

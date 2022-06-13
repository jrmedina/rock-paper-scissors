class Game {
  constructor() {
    this.human = new Player(`Human`, `👨🏻‍🎨`)
    this.cpu = new Player(`Computer`, `🤖`)
    this.gameType = `normal` || `spicy`
    this.winner = ``
  }

  checkForWinner() {
    if (this.human.choice === `rock` && (this.cpu.choice === `scissors` || this.cpu.choice === `lizard`)) {
      return this.winner = `human`
    } else if (this.human.choice === `paper` && (this.cpu.choice === `rock` || this.cpu.choice === `alien`)) {
      return this.winner = 'human'
    } else if (this.human.choice === "scissors" && (this.cpu.choice === `paper` || this.cpu.choice === `lizard`)) {
      return this.winner = `human`
    } else if (this.human.choice === `lizard` && (this.cpu.choice === `paper` || this.cpu.choice === `alien`)) {
      return this.winner = `human`
    } else if (this.human.choice === `alien` && (this.cpu.choice === `rock` || this.cpu.choice === `scissors`)) {
      return this.winner = `human`
    } else {
      return this.winner = `cpu`
    }
  }
    checkForDraw() {
    if (this.human.choice === this.cpu.choice) 
      return this.winner = ``
  }

  tallyWin() {
    if (this.winner === `human`) {
      return this.human.wins += 1
    } else if (this.winner === `cpu`) {
      return this.cpu.wins += 1
    }
  }
}

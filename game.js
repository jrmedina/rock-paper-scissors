class Game {
  constructor() {
    this.human = new Player("Human", "👨🏻‍🎨")
    this.cpu = new Player("Computer", "🤖")
    this.gameType = "normal" || "spicy"
    this.victory = ''
  }
  //   this.selection = {
  // rock: ['scissors', 'lizard'],
  // paper: ['rock', 'alien'],
  // scissors: ['paper', 'lizard'],
  // lizard: ['paper', 'alien'],
  // alien: ['rock', 'scissors']


  // check for winner.....
  //if this.humans choice matches this.selections key, then check the value array to determine if the player wins... change the value of this.victory accordingly.

  checkForWinner() {
    if (this.human.choice === "rock" && (this.cpu.choice === "scissors" || this.cpu.choice === "lizard")) {
      return this.victory = 'human'
    } else if (this.human.choice === "paper" && (this.cpu.choice === "rock" || this.cpu.choice === "alien")) {
      return this.victory = 'human'
    } else if (this.human.choice === "scissors" && (this.cpu.choice === "paper" || this.cpu.choice === "lizard")) {
      return this.victory = 'human'
    } else if (this.human.choice === "lizard" && (this.cpu.choice === "paper" || this.cpu.choice === "alien")) {
      return this.victory = 'human'
    } else if (this.human.choice === "alien" && (this.cpu.choice === "rock" || this.cpu.choice === "scissors")) {
      return this.victory = 'human'
    } else {
      return this.victory = 'comp'
    }
  }
    checkForDraw() {
    if (this.human.choice === this.cpu.choice) 
    return this.victory = ''
  }

  tallyWin() {
    if (this.victory === 'human') {
      return this.human.wins += 1
    } else if (this.victory === 'comp') {
      return this.cpu.wins += 1
    }
  }
}






// if(( this.human.choice === "alien"||"rock" && this.cpu.choice === "paper")||
// ( this.human.choice === "paper"||"alien" && this.cpu.choice === "lizard")||
//  ( this.human.choice === "rock"||"scissors" && this.cpu.choice === "alien")||
//  ( this.human.choice === "paper"||"lizard" && this.cpu.choice === "scissors")||
//  ( this.human.choice === "lizard"||"scissors" && this.cpu.choice === "rock")) {
//   console.log(game.victory)
//  return game.victory = 'comp'
//  } else if (this.human.choice === this.cpu.choice){
//     console.log("DRAW!")
//      return   game.victory = ''
//  }
// else {
// console.log(game.victory)
// return game.victory = 'human'
// }
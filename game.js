
class Game {
  constructor() {
    this.human = new Player("Human", "👨🏻‍🎨")
    this.cpu = new Player("Computer", "🤖")
    this.gameType = "normal" || "spicy"
    this.victory = ''

  }

game() { 
  if (this.human.choice === "rock" && this.cpu.choice === "scissors" ||
  this.human.choice === "rock" && this.cpu.choice === "lizard") {
   return game.victory = 'human'
  }if (this.human.choice === "paper" && this.cpu.choice === "rock" ||
  this.human.choice === "paper" && this.cpu.choice === "alien") {
   return game.victory = 'human'
  }if (this.human.choice === "scissors" && this.cpu.choice === "paper" ||
  this.human.choice === "scissors" && this.cpu.choice === "lizard") {
   return  game.victory = 'human'
  }if (this.human.choice === "lizard" && this.cpu.choice === "paper" ||
  this.human.choice === "lizard" && this.cpu.choice === "alien") {
    return  game.victory = 'human'
  }if (this.human.choice === "alien" && this.cpu.choice === "rock" ||
  this.human.choice === "alien" && this.cpu.choice === "scissors") {
    return  game.victory = 'human'
  }if (this.human.choice === this.cpu.choice){
      console.log("DRAW!")
     return   game.victory = 'DRAW'
  }else {
    return  game.victory = 'comp'
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



 
 

// function? "A way to keep track of the data for the game board"
//not sure what this is asking... maybe two gameType instances? rules per gameType? a sort of update?

//A way to keep track of the selected game type
// conditional function?
//if player clicks/chooses 'normal' display screen option 1 - with set of rules for 3 methods
//if player clicks/chooses 'spicy' display screen option 2 - with set of rules for 5 methods

//A way to check the Game’s board data for win conditions
//........

//A way to detect when a game is a draw (no one has won)
//conditonal function
//if both players have chose the same method, reset back to choose method screen and dont log a score

//A way to reset the Game’s board to begin a new game
//a potential refresh button that will start the entire screen over... almost like a window.load - aesthetics
//another instances that will set the "Player()" back to default, "gameType" back to undefined



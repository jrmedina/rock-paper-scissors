class Game {
  constructor() {
    this.human = new Player('Human', '👨🏻‍🎨', 0)
    this.computer = new Player('Computer', '🤖', 0)
    this.gameType = ''
  }
}




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
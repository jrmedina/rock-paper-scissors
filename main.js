var game ;
var normal = ["rock", "paper", "scissors"]
var spicy = ["rock", "paper", "scissors", "lizard", "alien"]

var normalBtn = document.querySelector('#normalMode')
var spicyBtn = document.querySelector('#spicyMode')
var changeBtn = document.querySelector('#changeGame')
var normalInput = document.querySelector('#userInput')
var humanWinCount = document.querySelector('#humanWins')
var computerWinCount = document.querySelector('#compWins')
var spicyOptions = document.querySelector('.spicy')

window.addEventListener('load', loadGame)
normalBtn.addEventListener('click', displayNorm)
spicyBtn.addEventListener('click', spicyMode)
changeBtn.addEventListener('click', normalMode)
userInput.addEventListener('click', startGame)

function loadGame() {
  game = new Game()
}

function displayNorm() {
  game.gameType = "normal"
  toggle(spicyBtn)
  toggle(normalBtn)
  toggle(changeBtn)
  toggle(normalInput)
  startGame(event)
}

function spicyMode() {
  game.gameType = "spicy"
  toggle(spicyBtn)
  toggle(normalBtn)
  toggle(changeBtn)
  toggle(normalInput)
  toggle(spicyOptions)
  startGame(event)
}

function startGame(event){
   for (var i = 0; i < spicy.length; i++){
     if (spicy[i] === event.target.id){
     this.choice = spicy[i]
     console.log(this.choice)
}
  }
  
  }




// function startNormalGame() {
//       game.gameType = 'Normal!'
//   if (user === "rock" && computer === "scissors" ) {
//     game.human.wins++
//     console.log("U:",user, "C:",computer)
//   } else if (user === "paper" && computer ==="rock") {
//       game.human.wins++
//       console.log("U:",user, "C:",computer)
//   } else if (user === "scissors" && computer === "paper") {
//     game.human.wins++
//    console.log("U:",user, "C:",computer)
//   } else if  (user === computer){
//    console.log("U:",user, "C:",computer)
//       console.log("DRAW!")
//   } else {
//    console.log("U:",user, "C:",computer)
//     game.computer.wins++ 
//   }
//   update()
// }

function update() {
  humanWinCount.innerText = `Wins: ${game.human.wins}`
  computerWinCount.innerText = `Wins: ${game.computer.wins}`
}

function generatePick(array) {
  return Math.floor(Math.random() * array.length);
};

function toggle(element) {
  element.classList.toggle('hidden')
};


// function startNormalGame() {
//       game.gameType = 'Normal!'
//   var computer = pickComputer(normal)
//   if (user === 2 && computer === 0) {
//     game.human.wins++
//     console.log(user, "you lose to paper!", computer)
//   } else if (user === 0 && computer === 2) {
//       game.human.wins++
//     console.log(user, "paper beats rock!", computer)
//   } else if (user === computer) {
//     console.log("DRAW!")
//   } else if (user > computer) {
//      game.human.wins++
//       console.log(user, "you won!", computer)
//   } else {
//     game.computer.wins++
//     console.log(user, "You lose!", computer)
//   }
//   update()
// }

// function startSpicyGame() {
//     game.gameType = 'Spicy!'
//   if (user > pickComputer(spicy)) {
//     game.human.wins++
//     update()
//     console.log("you won!")
//   } else if (user === pickComputer(spicy)) {
//     console.log("DRAW!")
//   } else {
//     game.computer.wins++
//     update()
//     console.log("You lose!")
//   }
// }



// refactor: use a foor loop to assign a value from pics > array position
// invoke startgame after asssigned

// function makeSelection(event) {
//   var choice = event.target.id
//   user = choice
//   console.log(user)

// }

var game;
var normal = [rock, paper, scissors]
// var spicy = [rock, paper, scissors, alien, lizard]
var user;

var normalBtn = document.querySelector('#normalMode')
var spicyBtn = document.querySelector('#spicyMode')
var changeBtn = document.querySelector('#changeGame')
var normalInput = document.querySelector('#userInput')
var paperimg = document.querySelector('#paper')
var rockimg = document.querySelector('#rock')
var scissorsimg = document.querySelector('#scissors')
var userInput = document.querySelector('.user-input')
var humanWinCount = document.querySelector('#humanWins')
var computerWinCount = document.querySelector('#compWins')
var header = document.querySelector('#header')

window.addEventListener('load', log)
normalBtn.addEventListener('click', normalMode)
spicyBtn.addEventListener('click', spicyMode)
changeBtn.addEventListener('click', normalMode)
// userInput.addEventListener('click', makeSelection)
paperimg.addEventListener('click', assignPaper)
rockimg.addEventListener('click', assignRock)
scissorsimg.addEventListener('click', assignScissors)

function log() {
  game = new Game()
}

function assignPaper(){
    user = 0
    console.log(user)
    startNormalGame()
}
function assignRock(){
    user = 2
    console.log(user)
    startNormalGame()
}
function assignScissors(){
    user = 1
     console.log(user)
     startNormalGame()
}


// function makeSelection(event) {
//   var choice = event.target.id
//   user = choice
//   console.log(user)

// }

function normalMode() {
  toggle(spicyBtn)
  toggle(normalBtn)
  toggle(changeBtn)
  toggle(normalInput)
}

function spicyMode() {
  toggle(spicyBtn)
  toggle(normalBtn)
  toggle(changeBtn)
  toggle(normalInput)
}



function startNormalGame() {
      game.gameType = 'Normal!'
  var computer = pickComputer(normal)
  if (user === 2 && computer === 0) {
    game.human.wins++
    console.log(user, "you lose to rock!", computer)
  } else if (user === 0 && computer === 2) {
      game.human.wins++
    console.log(user, "user: paper beats rock!", computer)
  } else if (user === computer) {
    console.log("DRAW!")
  } else if (user > computer) {
     game.computer.wins++
      console.log(user, "you won!", computer)
  } else {
    game.computer.wins++
    console.log(user, "You lose!", computer)
  }
  update()
}

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

function update() {
  humanWinCount.innerText = `Wins: ${game.human.wins}`
  computerWinCount.innerText = `Wins: ${game.computer.wins}`
  //  header.innerText = `${game.gameType}`

}


function pickComputer(array) {
  return Math.floor(Math.random() * array.length);
};

function toggle(element) {
  element.classList.toggle('hidden')
};
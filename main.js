var game;
var normal = ["rock", "paper", "scissors"]
var spicy = ["rock", "paper", "scissors", "lizard", "alien"]

var normalBtn = document.querySelector('#normalMode')
var spicyBtn = document.querySelector('#spicyMode')
var changeBtn = document.querySelector('#changeGame')
var normalInput = document.querySelector('#userInput')
var humanWinCount = document.querySelector('#humanWins')
var computerWinCount = document.querySelector('#compWins')
var spicyOptions = document.querySelector('.spicy')
var fighter = document.querySelector('#header')

window.addEventListener('load', loadGame)
normalBtn.addEventListener('click', displayNorm)
spicyBtn.addEventListener('click', displaySpicy)
changeBtn.addEventListener('click', home)
userInput.addEventListener('click', runGame)

function loadGame() {
  game = new Game()
}

function runGame(event) {
  for (var i = 0; i < spicy.length; i++) {
    if (spicy[i] === event.target.id) {
      game.human.choice = spicy[i]
    }
  }
  game.cpu.takeTurn()
  game.checkForWinner()
  game.checkForDraw()
  game.tallyWin()
  displayWins()
  setTimeout(reset, 3000)
};

function displayWins() {
  toggle(normalInput)
  humanWinCount.innerText = `Wins: ${game.human.wins}`
  computerWinCount.innerText = `Wins: ${game.cpu.wins}`
  fightScreen.innerHTML = `<img src="./assets/${game.human.choice}.png" alt="${game.human.choice}"></img>
  <img src="./assets/${game.cpu.choice}.png" alt="${game.cpu.choice}"></img>`


  if (game.victory === 'human') {
    return fighter.innerText = `U:${game.human.choice} beats C:${game.cpu.choice}`
  } else if (game.victory === 'comp') {
    return fighter.innerText = `U:${game.human.choice} loses to C:${game.cpu.choice}`
  } else if (game.victory === ''){
    return fighter.innerText = `DRAWWWWWWW!`
  }

}

function reset() {
  fighter.innerText = `Choose Your Fighter!`
  fightScreen.innerHTML = ``
  toggle(normalInput)
}

function home() {
  toggle(spicyBtn)
  toggle(normalBtn)
  toggle(changeBtn)
  toggle(normalInput)
}

function displayNorm() {
  game.gameType = "normal"
  fighter.innerText = `Choose Your Fighter!`
  toggle(spicyBtn)
  toggle(normalBtn)
  toggle(changeBtn)
  toggle(normalInput)
}

function displaySpicy() {
  game.gameType = "spicy"
  fighter.innerText = `Choose Your Fighter!`
  toggle(spicyBtn)
  toggle(normalBtn)
  toggle(changeBtn)
  toggle(normalInput)
  toggle(spicyOptions)
}

function generatePick(array) {
  return Math.floor(Math.random() * array.length);
};

function toggle(element) {
  element.classList.toggle('hidden')
};

function generatePick(array) {
  return Math.floor(Math.random() * array.length);
};

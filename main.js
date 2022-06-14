var game;
var normal = ['rock', 'paper', 'scissors']
var spicy = ['rock', 'paper', 'scissors', 'lizard', 'alien']

var changeBtn = document.querySelector('#changeGame')
var normalBtn = document.querySelector('#normalMode')
var spicyBtn = document.querySelector('#spicyMode')
var header = document.querySelector('#header')
var humanWinCount = document.querySelector('#humanWins')
var computerWinCount = document.querySelector('#compWins')
var userInput = document.querySelector('#userInput')
var spicyOptions = document.querySelector('.spicy')

window.addEventListener('load', loadGame)
changeBtn.addEventListener('click', displayHome)
normalBtn.addEventListener('click', displayNorm)
spicyBtn.addEventListener('click', displaySpicy)
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
  displayFight()
  setTimeout(reset, 2000)
}

function displayFight() {
  hide(userInput)
  hide(changeBtn)
  humanWinCount.innerText = `Wins: ${game.human.wins}`
  computerWinCount.innerText = `Wins: ${game.cpu.wins}`
  fightScreen.innerHTML =
    `<img src="./assets/${game.human.choice}.png" alt="${game.human.choice}"></img> VS.
    <img src="./assets/${game.cpu.choice}.png" alt="${game.cpu.choice}"></img>`
  if (game.winner === `human`) {
    return header.innerText = `${game.human.choice} beats ${game.cpu.choice}...`
  } else if (game.winner === `cpu`) {
    return header.innerText = `${game.human.choice} loses to ${game.cpu.choice}...`
  } else if (game.winner === ``) {
    return header.innerText = `DRAW! Try Again?`
  }
}

function reset() {
  header.innerText = `Choose Your Fighter!`
  fightScreen.innerHTML = ``
  show(userInput)
  show(changeBtn)
}

function displayHome() {
  show(spicyBtn)
  show(normalBtn)
  hide(changeBtn)
  hide(userInput)
}

function displayNorm() {
  game.setNormal()
  header.innerText = `Choose Your Fighter!`
  hide(spicyBtn)
  hide(normalBtn)
  hide(spicyOptions)
  show(changeBtn)
  show(userInput)
}

function displaySpicy() {
  game.setSpicy()
  header.innerText = `Choose Your Fighter!`
  hide(spicyBtn)
  hide(normalBtn)
  show(changeBtn)
  show(userInput)
  show(spicyOptions)
}

function generatePick(array) {
  return Math.floor(Math.random() * array.length);
}

function hide(element) {
  element.classList.add(`hidden`)
}

function show(element) {
  element.classList.remove(`hidden`)
}
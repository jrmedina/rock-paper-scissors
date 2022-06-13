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
  setTimeout(reset, 3000)
}

function displayFight() {
  toggle(userInput)
  humanWinCount.innerText = `Wins: ${game.human.wins}`
  computerWinCount.innerText = `Wins: ${game.cpu.wins}`
  fightScreen.innerHTML =
    `<img src="./assets/${game.human.choice}.png" alt="${game.human.choice}"></img>
    <img src="./assets/${game.cpu.choice}.png" alt="${game.cpu.choice}"></img>`
  if (game.winner === `human`) {
    return header.innerText = `${game.human.choice} beats ${game.cpu.choice}...`
  } else if (game.winner === `cpu`) {
    return header.innerText = `${game.human.choice} loses to ${game.cpu.choice}...`
  } else if (game.winner === ``){
    return header.innerText = `DRAW! Try Again?`
  }
}

function reset() {
  header.innerText = `Choose Your Fighter!`
  fightScreen.innerHTML = ``
  toggle(userInput)
}

function displayHome () {
  toggle(spicyBtn)
  toggle(normalBtn)
  toggle(changeBtn)
  toggle(userInput)
}

function displayNorm() {
  game.gameType = `normal`
  header.innerText = `Choose Your Fighter!`
  toggle(spicyBtn)
  toggle(normalBtn)
  toggle(changeBtn)
  toggle(userInput)
}

function displaySpicy() {
  game.gameType = `spicy`
  header.innerText = `Choose Your Fighter!`
  toggle(spicyBtn)
  toggle(normalBtn)
  toggle(changeBtn)
  toggle(userInput)
  toggle(spicyOptions)
}

function generatePick(array) {
  return Math.floor(Math.random() * array.length);
}

function toggle(element) {
  element.classList.toggle(`hidden`)
}
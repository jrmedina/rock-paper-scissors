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
var fighter = document.querySelector('#header')

window.addEventListener('load', loadGame)
normalBtn.addEventListener('click', displayNorm)
spicyBtn.addEventListener('click', spicyMode)
changeBtn.addEventListener('click', home)
userInput.addEventListener('click', startGame)

function loadGame() {
  game = new Game()
}

function startGame(event){
   for (var i = 0; i < spicy.length; i++){
     if (spicy[i] === event.target.id){
     game.human.choice = spicy[i]
    }
  }
  game.cpu.takeTurn()
  displayWins()
};

function displayWins() {
  toggle(normalInput)
  humanWinCount.innerText = `Wins: ${game.human.wins}`
  computerWinCount.innerText = `Wins: ${game.cpu.wins}`
  fightScreen.innerHTML = `<img id="${game.human.choice}" src="./assets/${game.human.choice}.png" alt="${game.human.choice}"></img>
  <img id="${game.cpu.choice}" src="./assets/${game.cpu.choice}.png" alt="${game.cpu.choice}"></img>`

  
  if(game.victory === 'human'){
    game.human.wins++
    fighter.innerText = `U:${game.human.choice} beats C:${game.cpu.choice}`
  } else if (game.victory === 'comp'){
    fighter.innerText = `U:${game.human.choice} loses to C:${game.cpu.choice}`
    game.cpu.wins++
  } else{
    fighter.innerText = `DRAWWWWWWW!`
  }
  setTimeout(reset, 4000)
}

function reset(){
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

function spicyMode() {
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
var game;
// var spicyGame;

var normal = [rock, paper, scissors]
var spicy = [rock, paper, scissors, alien, lizard]
var user = 2;

var normalBtn = document.querySelector('#normalMode')
var spicyBtn = document.querySelector('#spicyMode')
var changeBtn = document.querySelector('#changeGame')
var normalInput = document.querySelector('#userInput')
// var paper = document.querySelector('#paper')
// var rock = document.querySelector('#rock')
// var scissors = document.querySelector('#scissors')
var userInput = document.querySelector('.user-input')
var humanWinCount = document.querySelector('#humanWins')
var computerWinCount = document.querySelector('#compWins')
var header = document.querySelector('#header')

window.addEventListener('load', log)
normalBtn.addEventListener('click', normalMode)
spicyBtn.addEventListener('click', spicyMode)
changeBtn.addEventListener('click', normalMode)
userInput.addEventListener('click', makeSelection)

function log(){
    game = new Game()
    // spicyGame = new Game()
}
   


function makeSelection(event) {
var choice = event.target.id
    user = choice
    console.log(user)

}

function normalMode(){
    game.gameType = 'normal'
    toggle(spicyBtn)
    toggle(normalBtn)
    toggle(changeBtn)
    toggle(normalInput)
     console.log(game)

}

function spicyMode(){
    toggle(spicyBtn)
    toggle(normalBtn)
    toggle(changeBtn)
    toggle(normalInput)
}

function startNormalGame(){
    game.gameType = 'Normal!'
if (user > pickComputer(normal)) {
    game.human.wins ++
    update()
console.log("you won!")
} else if (user === pickComputer(normal)) {
  console.log("DRAW!")
} else {
     game.computer.wins ++
     update()
    console.log("You lose!")
}
}

function update(){
    humanWinCount.innerText = `Wins: ${game.human.wins}`
     computerWinCount.innerText = `Wins: ${game.computer.wins}`
    //  header.innerText = `${game.gameType}`

}

function startSpicyGame(){
    game.gameType = 'Spicy!'
if (user > pickComputer(spicy)) {
    game.human.wins ++
    update()
    console.log("you won!")
} else if (user === pickComputer(spicy)) {
    console.log("DRAW!")
} else {
    game.computer.wins ++
    update()
    console.log("You lose!")
}
}
 

function pickComputer(array) {
  return Math.floor(Math.random() * array.length);
};

function toggle(element) {
  element.classList.toggle('hidden')
};


var game;
// var spicyGame;

var normal = [rock, paper, scissors]
// var spicy = [rock, paper, scissors, alien, lizard]
var user;

var normalBtn = document.querySelector('#normalMode')
var spicyBtn = document.querySelector('#spicyMode')
var changeBtn = document.querySelector('#changeGame')
var normalInput = document.querySelector('#userInput')
var paper = document.querySelector('#paper')
var rock = document.querySelector('#rock')
var scissors = document.querySelector('#scissors')
var userInput = document.querySelector('.user-input')

window.addEventListener('load', log)
// window.addEventListener('load', getInput)
// paper.addEventListener('click', getInput)
// rock.addEventListener('click', getInput)
// scissors.addEventListener('click', getInput)
normalBtn.addEventListener('click', normalMode)
spicyBtn.addEventListener('click', spicyMode)
changeBtn.addEventListener('click', normalMode)
userInput.addEventListener('click', makeSelection)

function log(){
    game = new Game()
    // spicyGame = new Game()
}
    scissors = 2
    rock = 3
    paper = 1
    alien = 5
    lizard = 4   


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

function normalGG(){
if (user > pickComputer(normal)) {
console.log("you won!")
} else if (user === pickComputer(normal)) {
  console.log("DRAW!")
} else {
    console.log("You lose!")
}
}

function spicyGG(){
if (user > pickComputer(spicy)) {
    console.log("you won!")
} else if (user === pickComputer(spicy)) {
    console.log("DRAW!")
} else {
    console.log("You lose!")
}
}
 

function pickComputer(array) {
  return Math.floor(Math.random() * array.length);
};

function toggle(element) {
  element.classList.toggle('hidden')
};


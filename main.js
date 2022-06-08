var alien = 5
var lizard = 4   
var rock = 3
var scissors = 2
var paper = 1
var scissors = 2
var normal = [rock, paper, scissors]
var spicy = [rock, paper, scissors, alien, lizard]
var user = 2

var normalBtn = document.querySelector('#normalMode')
var spicyBtn = document.querySelector('#spicyMode')

normalBtn.addEventListener('click', normalMode)
spicyBtn.addEventListener('click', spicyGG)


function normalMode(){
normalGG()
hide(spicyBtn)
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
 

// function create(){
//     var comp = new Player()
// }
    
function pickComputer(array) {
  return Math.floor(Math.random() * array.length);
};


function show(element) {
  element.classList.remove('hidden')
};

function hide(element) {
  element.classList.add('hidden')
};

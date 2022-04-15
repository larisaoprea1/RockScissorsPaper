const computerChoiceDisplay = document.getElementById('computer-choice')
const myChoiceDisplay = document.getElementById('my-choice')
const resultRes = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')

let myChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click',(e)=>{

myChoice= e.target.id
myChoiceDisplay.innerHTML = myChoice
// console.log(myChoice);
generateComputerChoice()
getResult()
}))


function generateComputerChoice(){
    const randomNr = Math.floor(Math.random() * 3) + 1
    if( randomNr == 1){
       computerChoice = 'rock'
    }
    if( randomNr == 2){
        computerChoice = 'scissors'
     }
     if( randomNr == 3){
        computerChoice = 'paper'
     }
     computerChoiceDisplay.innerHTML = computerChoice
}

function getResult(){
    if(computerChoice == myChoice){
        result= 'its a draw'
    }
    if(computerChoice == 'rock' && myChoice == 'paper'){
        result= 'you lost'
    }
    if(computerChoice == 'paper' && myChoice == 'rock'){
        result= 'you win'
    }
    if(computerChoice == 'scissors' && myChoice == 'rock'){
        result= 'you win'
    }
    if(computerChoice == 'scissors' && myChoice == 'paper'){
        result= 'you lost'
    }
    if(computerChoice == 'paper' && myChoice == 'rock'){
        result= 'you lost'
    }
    if(computerChoice == 'paper' && myChoice == 'scissors'){
        result= 'you win'
    }
    if(computerChoice == 'rock' && myChoice == 'scissors'){
        result= 'you lost'
    }
    resultRes.innerHTML= result
}
//Global variables
//Getting variables in screen display
const spanWordDisplay = document.getElementById('word-display');
//sample
spanWordDisplay.innerHTML = "You Win! <br> Paper Beats Rock";
//Getting variables from buttons
const paper = document.getElementById('paper');
const rock = document.getElementById('rock');
const scissor = document.getElementById('scissor');
//Getting variables from score display
const player = document.getElementById('player');
const playerScore = document.getElementById('player-score');
const bot = document.getElementById('bot');
const botScore = document.getElementById('bot-score');

//get player selection
let playerSelection;

function getComputerChoice() {
    let result = Math.floor(Math.random() * 3);
    if(result === 0) {
        return "rock";
    } else if (result === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

paper.addEventListener('click', () => {
    let result = 'paper';
    playerSelection = result;
    console.log(playerSelection);
})

rock.addEventListener('click', () => {
    let result = 'rock';
    playerSelection = result;
    console.log(playerSelection);
})

scissor.addEventListener('click', () => {
    let result = 'scissors';
    playerSelection = result;
    console.log(playerSelection);
})

function playRound(player, computer) {

}

let computerChoice;
let humanChoice;
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    computerChoice = Math.random();

    if (computerChoice <= (1 / 3) && computerChoice > 0) {
        computerChoice = 'rock';
    } else if (computerChoice <= (2 / 3) && computerChoice > (1 / 3)) {
        computerChoice = 'paper';
    } else if (computerChoice <= 1 && computerChoice > (2 / 3)) {
        computerChoice = 'scissors';
    }
}

function getHumanChoice() {
    humanChoice = prompt('Enter your choice:');
}

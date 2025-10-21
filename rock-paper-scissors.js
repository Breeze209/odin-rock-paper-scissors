let computerChoice;
let humanChoice;
let humanScore = 0;
let computerScore = 0;
let totalRounds = 0;

const computerPick = document.querySelector('.computer-pick');
const playerPick = document.querySelector('.human-pick');
const winner = document.querySelector('.winner');
const displayScore = document.querySelector('.score');

function getComputerChoice() {
    computerChoice = Math.random();

    if (computerChoice <= (1 / 3) && computerChoice > 0) {
        computerChoice = 'rock';
    } else if (computerChoice <= (2 / 3) && computerChoice > (1 / 3)) {
        computerChoice = 'paper';
    } else if (computerChoice <= 1 && computerChoice > (2 / 3)) {
        computerChoice = 'scissors';
    }

    computerPick.textContent = `Computer picked: ${computerChoice}`;
    return computerChoice;
}

function playRound(computerChoice, humanChoice) {
    computerChoice = getComputerChoice();
    playerPick.textContent = `You picked ${humanChoice}`;

    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === 'rock') {
        switch (computerChoice) {

            case 'rock':
                winner.textContent = `It's a tie! Both players picked ${computerChoice}.`;
                displayScore.textContent = `Your score: ${humanScore}. Computers score: ${computerScore}.`;
                break;

            case 'paper':
                winner.textContent = `You lose since ${computerChoice} beats ${humanChoice}.`;
                computerScore++;
                displayScore.textContent = `Your score: ${humanScore}. Computers score: ${computerScore}.`;
                break;

            case 'scissors':
                winner.textContent = `You win since ${humanChoice} beats ${computerChoice}.`;
                humanScore++;
                displayScore.textContent = `Your score: ${humanScore}. Computers score: ${computerScore}.`;
                break;
        }
    } else if (humanChoice === 'paper') {
        switch (computerChoice) {

            case 'rock':
                winner.textContent = `You win since ${humanChoice} beats ${computerChoice}.`;
                humanScore++;
                displayScore.textContent = `Your score: ${humanScore}. Computers score: ${computerScore}.`;
                break;

            case 'paper':
                winner.textContent = `It's a tie! Both players picked ${computerChoice}.`;
                displayScore.textContent = `Your score: ${humanScore}. Computers score: ${computerScore}.`;
                break;

            case 'scissors':
                winner.textContent = `You lose since ${computerChoice} beats ${humanChoice}.`;
                computerScore++;
                displayScore.textContent = `Your score: ${humanScore}. Computers score: ${computerScore}.`;
                break;
        }
    } else if (humanChoice === 'scissors') {
       switch (computerChoice) {

            case 'rock':
                winner.textContent = `You lose since ${humanChoice} beats ${computerChoice}.`;
                computerScore++;
                displayScore.textContent = `Your score: ${humanScore}. Computers score: ${computerScore}.`;
                break;

            case 'paper':
                winner.textContent = `You win since ${computerChoice} beats ${humanChoice}.`;
                humanScore++;
                displayScore.textContent = `Your score: ${humanScore}. Computers score: ${computerScore}.`;
                break;

            case 'scissors':
                winner.textContent = `It's a tie! Both players picked ${computerChoice}.`;
                displayScore.textContent = `Your score: ${humanScore}. Computers score: ${computerScore}.`;
                break;
        } 
    }

    totalRounds++;
    if (totalRounds === 5) {
        if (computerScore > humanScore) {
            alert(`You lose the game! Computer score: ${computerScore}. Your score: ${humanScore}.`);
            totalRounds = 0;
        } else if (computerScore === humanScore) {
            alert(`It's a tie! Computer score: ${computerScore}. Your score: ${humanScore}.`);
            totalRounds = 0;
        } else if (computerScore < humanScore) {
            alert(`You win the game! Computer score: ${computerScore}. Your score: ${humanScore}.`);
            totalRounds = 0;
        }
    }
}


const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');

rockButton.addEventListener('click', () => {
    playRound(computerChoice, 'rock');
});
paperButton.addEventListener('click', () => {
    playRound(computerChoice, 'paper');
});
scissorsButton.addEventListener('click', () => {
    playRound(computerChoice, 'scissors');
});
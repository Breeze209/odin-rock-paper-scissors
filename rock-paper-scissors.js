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

    console.log(`Computer picked: ${computerChoice}.`);
    return computerChoice;
}

function getHumanChoice() {
    humanChoice = prompt('Enter your choice:');
    console.log(`You picked: ${humanChoice}`);
    return humanChoice;
}

function playRound(computerChoice, humanChoice) {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();

    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === 'rock') {
        switch (computerChoice) {

            case 'rock':
                console.log(`It's a tie! Both players picked ${computerChoice}.`);
                console.log(`Your score: ${humanScore}. Computers score: ${computerScore}.`);
                break;

            case 'paper':
                console.log(`You lose since ${computerChoice} beats ${humanChoice}.`);
                computerScore++;
                console.log(`Your score: ${humanScore}. Computers score: ${computerScore}.`);
                break;

            case 'scissors':
                console.log(`You win since ${humanChoice} beats ${computerChoice}.`);
                humanScore++;
                console.log(`Your score: ${humanScore}. Computers score: ${computerScore}.`);
                break;
        }
    } else if (humanChoice === 'paper') {
        switch (computerChoice) {

            case 'rock':
                console.log(`You win since ${humanChoice} beats ${computerChoice}.`);
                humanScore++;
                console.log(`Your score: ${humanScore}. Computers score: ${computerScore}.`);
                break;

            case 'paper':
                console.log(`It's a tie! Both players picked ${computerChoice}.`);
                console.log(`Your score: ${humanScore}. Computers score: ${computerScore}.`);
                break;

            case 'scissors':
                console.log(`You lose since ${computerChoice} beats ${humanChoice}.`);
                computerScore++;
                console.log(`Your score: ${humanScore}. Computers score: ${computerScore}.`);
                break;
        }
    } else if (humanChoice === 'scissors') {
       switch (computerChoice) {

            case 'rock':
                console.log(`You lose since ${humanChoice} beats ${computerChoice}.`);
                computerScore++;
                console.log(`Your score: ${humanScore}. Computers score: ${computerScore}.`);
                break;

            case 'paper':
                console.log(`You win since ${computerChoice} beats ${humanChoice}.`);
                humanScore++;
                console.log(`Your score: ${humanScore}. Computers score: ${computerScore}.`);
                break;

            case 'scissors':
                console.log(`It's a tie! Both players picked ${computerChoice}.`);
                console.log(`Your score: ${humanScore}. Computers score: ${computerScore}.`);
                break;
        } 
    }
}

playRound(computerChoice, humanChoice);
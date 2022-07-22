function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 100) % 3;

    switch(randomNum) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            return "You Lose! Paper beats Rock";
        } else if (computerSelection === 'scissors') {
            return "You Win! Rock beats Scissors";
        } else {
            return "You Tied! Rock ties with Rock";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === 'rock') {
            return "You Win! Paper beats Rock";
        } else if (computerSelection === 'paper') { 
            return "You Tied! Paper ties with Paper";
        } else {
            return "You Lose! Scissors beats Paper";
        }
    } else {
        if (computerSelection === 'rock') {
            return "You Lose! Rock beats Scissors";
        } else if (computerSelection === 'paper') {
            return "You Win! Scissors beats Paper";
        } else {
            return "You Tied! Scissors ties with Scissors";
        }
    }
}



// computerPlay function:
function computerPlay() {
    // Define a variable "randomNum"
    // Assign randomNum a random integer between 1 and 3
    let randomNum = (Math.floor(Math.random() * 100) % 3) + 1;

    // Define a variable "play"
    let play;

    // IF randomNum is equal to 1
    if (randomNum === 1) {
        // Assign the string "rock" to play
        play = "rock";
    }
    // ELSE IF randomNum is equal to 2
    else if (randomNum === 2) {
        // Assign "paper" to play
        play = "paper";
    }
    // ELSE
    else {
        // Assign "scissors" to play
        play = "scissors";
    }
    // Return play
    return play;
}

// playRound function:
// Take two parameters "playerSelection" and "computerSelection"
function playRound(playerSelection, computerSelection) {
    // Make string value in playerSelection all lowercase
    playerSelection = playerSelection.toLowerCase();
    // Define a variable "verdict"
    let verdict;
    // IF playerSelection is equal to computerSelection
    if (playerSelection === computerSelection) {
        // Set verdict to "You tied! playerSelection equals computerSelection"
        verdict = `You tied! ${playerSelection} ties with ${computerSelection}`;
    }
    // ELSE IF playerSelection is "rock"
    else if (playerSelection === "rock") {
        // IF computerSelection is "paper"
        if (computerSelection === "paper") {
            // Set verdict to "You lose! Paper beats rock"
            verdict = "You lose! Paper beats rock";
        }
        // ELSE
        else {
            // Set verdict to "You win! Rock beats scissors"
            verdict = "You win! Rock beats scissors";
        }
    }
    // ELSE IF playerSelection is "paper"
    else if (playerSelection === "paper") {
        // IF computerSelection is "scissors"
        if (computerSelection === "scissors") {
            // Set verdict to "You lose! Scissors beats paper"
            verdict = "You lose! Scissors beats paper";
        }
        // ELSE
        else {
            // Set verdict to "You win! Paper beats rock"
            verdict = "You win! Paper beats rock";
        }
    }
    // ELSE
    else {
        // IF computerSelection is "rock"
        if (computerSelection === "rock") {
            // Set verdict to "You lose! Rock beats scissors"
            verdict = "You lose! Rock beats scissors";
        }
        // ELSE
        else {
            // Set verdict to "You win! Scissors beats paper"
            verdict = "You win! Scissors beats paper";
        }
    }
}


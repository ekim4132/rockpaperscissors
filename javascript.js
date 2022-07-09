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
    // Make string value in playerSelection all lowercase
    // IF playerSelection is equal to computerSelection
        // return the string "You tied! playerSelection equals computerSelection"
    // ELSE IF playerSelection is "rock" and computerSelection


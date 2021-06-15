const game = function() {

    const computerPlay = function() {
        let choices = ["Rock", "Paper", "Scissors"];

        return choices[Math.floor(Math.random() * choices.length)];
    }

    let playerSelection = prompt("Choose between Rock, Paper and Scissors:", "").toLowerCase();
    const computerSelection = computerPlay();

    const playRound = function(playerSelection, computerSelection) {

        let playerScore = 0;
        let computerScore = 0;

        if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
            console.log("Game tied! Play again.")
        }

        if (playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'scissors') {
            playerScore += 1;

            console.log(`Rock beats scissors, the score is ${playerScore}-${computerScore} to the player.`);
        } else if (computerSelection.toLowerCase() === 'rock' && playerSelection.toLowerCase() === 'scissors') {
            computerScore += 1;

            console.log(`Rock beats scissors, the score is ${playerScore}-${computerScore} to the player.`);
        }

        if (playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'rock') {
            console.log("Paper beats rock, the score is 1-0 to player.");
        } else if (computerSelection.toLowerCase() === 'paper' && playerSelection.toLowerCase() === 'rock') {
            console.log("Paper beats rock, the score is 0-1 to the computer.");
        }

        if (playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase() === 'paper') {
            console.log("Scissors beats paper, the score is 1-0 to player.");
        } else if (computerSelection.toLowerCase() === 'scissors' && playerSelection.toLowerCase() === 'paper') {
            console.log("Scissors beats paper, the score is 0-1 to the computer.");
        }

        if (playerScore === 3) {
            console.log("Player has reached 3 points, player wins!");
        } else if  (computerScore === 3) {
            console.log("Computer has reached 3 points, computer wins. Unlucky!");
        }
    }
}
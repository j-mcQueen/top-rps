const game = function() {
    const computerPlay = function() {
        let choices = ["Rock", "Paper", "Scissors"];

        return choices[Math.floor(Math.random() * choices.length)];
    }

    const playerSelection = prompt("Choose between Rock, Paper and Scissors:", "").toLowerCase();
    const computerSelection = computerPlay();

    const playRound = function(playerSelection, computerSelection) {
        let playerScore = 0;
        let computerScore = 0;

        if (playerSelection === 'rock' && computerSelection === 'Scissors') {
            playerScore += 1;

            console.log(`Rock beats scissors, the score is ${playerScore}-${computerScore} to the player.`);
        } else if (computerSelection === 'Rock' && playerSelection === 'scissors') {
            computerScore += 1;

            console.log(`Rock beats scissors, the score is ${playerScore}-${computerScore} to the player.`);
        }

        if (playerSelection === 'paper' && computerSelection === 'Rock') {
            playerScore += 1;

            console.log(`Paper beats rock, the score is ${playerScore}-${computerScore} to player.`);
        } else if (computerSelection === 'Paper' && playerSelection === 'rock') {
            computerScore += 1;

            console.log(`Paper beats rock, the score is ${playerScore}-${computerScore} to the computer.`);
        }

        if (playerSelection === 'scissors' && computerSelection === 'Paper') {
            playerScore += 1;

            console.log(`Scissors beats paper, the score is ${playerScore}-${computerScore} to player.`);
        } else if (computerSelection === 'Scissors' && playerSelection === 'paper') {
            computerScore += 1;

            console.log(`Scissors beats paper, the score is ${playerScore}-${computerScore} to the computer.`);
        }

        if (
            (playerSelection === 'rock' && computerSelection === 'Rock') ||
            (playerSelection === 'paper' && computerSelection === 'Paper') || 
            (playerSelection === 'scissors' && computerSelection === 'Scissors')) {
            console.log("Game tied! Play again.");
        }

        // if (playerScore === 3) {
        //     console.log("Player has reached 3 points, player wins!");
        // } else if  (computerScore === 3) {
        //     console.log("Computer has reached 3 points, computer wins. Unlucky!");
        // }
    }

    console.log(playRound(playerSelection, computerSelection));
}

game();
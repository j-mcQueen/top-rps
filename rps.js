const game = function() {
    let playerScore = 0;
    let computerScore = 0;

    let i = 0;
    for (i = 0; i < 5; i++) {
        const computerPlay = function() {
            let choices = ["Rock", "Paper", "Scissors"];
    
            return choices[Math.floor(Math.random() * choices.length)];
        }
    
        const playerSelection = prompt("Choose between Rock, Paper and Scissors:", "").toLowerCase();
        const computerSelection = computerPlay();
    
        const playRound = function(playerSelection, computerSelection) {    
            if (playerSelection === 'rock' && computerSelection === 'Scissors') {
                playerScore += 1;
    
                console.log(`Rock beats scissors, the score is ${playerScore}-${computerScore} to the player.`);
            } else if (computerSelection === 'Rock' && playerSelection === 'scissors') {
                computerScore += 1;
    
                console.log(`Rock beats scissors, the score is ${playerScore}-${computerScore} to the computer.`);
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
                console.log("Round tied! Play again.");
            }
        }

        console.log(playRound(playerSelection, computerSelection));

        if (playerScore === 3) {
            console.log("Player has reached 3 points, player wins! Refresh to play again.");
            break;
        } else if  (computerScore === 3) {
            console.log("Computer has reached 3 points, computer wins. Unlucky! Refresh to play again.");
            break;
        } else if ((i >= 3) && (playerScore >= 0 && playerScore <= 2) && (computerScore >= 0 && computerScore <= 2)) {
            console.log("Game over. No winner can be decided within 5 games. Refresh to play again!")
            break;
        }
    }
}

game();
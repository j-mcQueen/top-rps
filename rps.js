let playerScore = 0;
let computerScore = 0;

const game = function() {
    // for (i = 0; (playerScore === 3 || computerScore === 3); i++) {
        const computerPlay = function() {
            let choices = ["Rock", "Paper", "Scissors"];
    
            return choices[Math.floor(Math.random() * choices.length)];
        }
    
        const playerSelection = prompt("Choose between Rock, Paper and Scissors:", "").toLowerCase();
        const computerSelection = computerPlay();
    
        const playRound = function(playerSelection, computerSelection) {
            if (playerSelection === 'rock' && computerSelection === 'scissors') {
                playerScore += 1;
    
                console.log(`Rock beats scissors, the score is ${playerScore}-${computerScore} to the player.`);
            } else if (computerSelection === 'rock' && playerSelection === 'scissors') {
                computerScore += 1;
    
                console.log(`Rock beats scissors, the score is ${playerScore}-${computerScore} to the player.`);
            }
    
            if (playerSelection === 'paper' && computerSelection === 'rock') {
                playerScore += 1;
    
                console.log(`Paper beats rock, the score is ${playerScore}-${computerScore} to player.`);
            } else if (computerSelection === 'paper' && playerSelection === 'rock') {
                computerScore += 1;
    
                console.log(`Paper beats rock, the score is ${playerScore}-${computerScore} to the computer.`);
            }
    
            if (playerSelection === 'scissors' && computerSelection === 'paper') {
                playerScore += 1;
    
                console.log(`Scissors beats paper, the score is ${playerScore}-${computerScore} to player.`);
            } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
                computerScore += 1;
    
                console.log(`Scissors beats paper, the score is ${playerScore}-${computerScore} to the computer.`);
            }

            if (
                (playerSelection === 'rock' && computerSelection.toLowerCase() === 'rock') ||
                (playerSelection === 'paper' && computerSelection.toLowerCase() === 'paper') || 
                (playerSelection === 'scissors' && computerSelection.toLowerCase() === 'scissors')) {
                console.log("Game tied! Play again.");
            }
    
            if (playerScore === 3) {
                console.log("Player has reached 3 points, player wins!");
            } else if  (computerScore === 3) {
                console.log("Computer has reached 3 points, computer wins. Unlucky!");
            }
        }

        playRound();
    // }
}

game();
let playerScore = 0;
let computerScore = 0;

const game = function() {
    for (i = 0; playerScore === 3 || computerScore === 3; i++) {
        const computerPlay = function() {
            let choices = ["Rock", "Paper", "Scissors"];
    
            return choices[Math.floor(Math.random() * choices.length)];
        }
    
        const playerSelection = prompt("Choose between Rock, Paper and Scissors:", "").toLowerCase();
        const computerSelection = computerPlay();
    
        const playRound = function(playerSelection, computerSelection) {
            if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
                console.log("Game tied! Play again.");
                continue;
            }
    
            if (playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'scissors') {
                playerScore += 1;
    
                console.log(`Rock beats scissors, the score is ${playerScore}-${computerScore} to the player.`);
            } else if (computerSelection.toLowerCase() === 'rock' && playerSelection.toLowerCase() === 'scissors') {
                computerScore += 1;
    
                console.log(`Rock beats scissors, the score is ${playerScore}-${computerScore} to the player.`);
            }
    
            if (playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'rock') {
                playerScore += 1;
    
                console.log(`Paper beats rock, the score is ${playerScore}-${computerScore} to player.`);
            } else if (computerSelection.toLowerCase() === 'paper' && playerSelection.toLowerCase() === 'rock') {
                computerScore += 1;
    
                console.log(`Paper beats rock, the score is ${playerScore}-${computerScore} to the computer.`);
            }
    
            if (playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase() === 'paper') {
                playerScore += 1;
    
                console.log(`Scissors beats paper, the score is ${playerScore}-${computerScore} to player.`);
            } else if (computerSelection.toLowerCase() === 'scissors' && playerSelection.toLowerCase() === 'paper') {
                computerScore += 1;
    
                console.log(`Scissors beats paper, the score is ${playerScore}-${computerScore} to the computer.`);
            }
    
            if (playerScore === 3) {
                console.log("Player has reached 3 points, player wins!");
            } else if  (computerScore === 3) {
                console.log("Computer has reached 3 points, computer wins. Unlucky!");
            }
        }
    }
}

game();
let playerScore = 0;
let computerScore = 0;

const playRound = function(playerSelection, computerSelection) {
        const scoreKeeper = document.querySelector("#results");

        const rockWinner = function() {
                let newPara = document.createElement("p");
                newPara.textContent = `Rock beats scissors, the score is ${playerScore}-${computerScore}.`;
                scoreKeeper.appendChild(newPara);
        }

        const paperWinner = function() {
                let newPara = document.createElement("p");
                newPara.textContent = `Paper beats rock, the score is ${playerScore}-${computerScore}`;
                scoreKeeper.appendChild(newPara);
        }

        const scissorsWinner = function() {
                let newPara = document.createElement("p");
                newPara.textContent = `Scissors beats paper, the score is ${playerScore}-${computerScore}.`;
                scoreKeeper.appendChild(newPara);
        }

        const tied = function() {
                let newPara = document.createElement("p");
                newPara.textContent = "Round tied, pick again.";
                scoreKeeper.appendChild(newPara);
        }

        if (playerSelection.getAttribute("id") === "player-rock" && computerSelection === "Scissors") {
                playerScore += 1;

                rockWinner();

        } else if (computerSelection === "Rock" && playerSelection.getAttribute("id") === "player-scissors") {
                computerScore += 1;

                rockWinner();
        }

        if (playerSelection.getAttribute("id") === "player-paper" && computerSelection === "Rock") {
                playerScore += 1;

                paperWinner();

        } else if (computerSelection === 'Paper' && playerSelection.getAttribute("id") === "player-rock") {
                computerScore += 1;

                paperWinner();
        }

        if (playerSelection.getAttribute("id") === "player-scissors" && computerSelection === "Paper") {
                playerScore += 1;

                scissorsWinner();

        } else if (computerSelection === 'Scissors' && playerSelection.getAttribute("id") === "player-paper") {
                computerScore += 1;

                scissorsWinner();
        }

        if (
        (playerSelection.getAttribute("id") === "player-rock" && computerSelection === "Rock") ||
        (playerSelection.getAttribute("id") === "player-paper" && computerSelection === "Paper") || 
        (playerSelection.getAttribute("id") === "player-scissors" && computerSelection === "Scissors")) {
                tied();
        }

        let resetResults = function() {
                let resultsParas = document.querySelectorAll("#results p");

                resultsParas.forEach(newPara => newPara.remove());
        }

        if (playerScore === 5) {
                alert("You have reached 5 points, you win!!");

                playerScore = 0;
                computerScore = 0;

                setTimeout(resetResults, 250);
            } else if  (computerScore === 5) {
                alert("Computer has reached 5 points, computer wins. Unlucky!");

                playerScore = 0;
                computerScore = 0;

                setTimeout(resetResults, 250);
            }
}

const btn = document.querySelector(".player-button")
const buttons = document.querySelectorAll(".player-button");

buttons.forEach(btn => btn.addEventListener("click", function(e) {
        const computerPlay = function() {
        let choices = ["Rock", "Paper", "Scissors"];

        return choices[Math.floor(Math.random() * choices.length)];
        }

        const computerSelection = computerPlay();
        const playerSelection = e.target;

        playRound(playerSelection, computerSelection);
}));
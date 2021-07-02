let playerScore = 0;
let computerScore = 0;

const playRound = function(playerSelection, computerSelection) {

        const animateComputerButton = function(computerSelection, selectionElement) {
                selectionElement.animate([
                        { transform: "scale(1)" },
                        { transform: "scale(1.2)" },
                        { transform: "scale(1)" }
                ], {
                        duration: 500,
                        iterations: 1
        
                        // animate() is experimental technology and not supported in IE. Check MDN for updates
                });
        }

        if (computerSelection === "Rock") {
                const selectionElement = document.querySelector("#computer-rock");

                animateComputerButton(computerSelection, selectionElement);
        } else if (computerSelection === "Paper") {
                const selectionElement = document.querySelector("#computer-paper");

                animateComputerButton(computerSelection, selectionElement);
        } else if (computerSelection === "Scissors") {
                const selectionElement = document.querySelector("#computer-scissors");

                animateComputerButton(computerSelection, selectionElement);
        }
        
        const scoreKeeper = document.querySelector("#results");

        const playerRock = document.querySelector("#Rock").getAttribute("id");
        const playerPaper = document.querySelector("#Paper").getAttribute("id");
        const playerScissors = document.querySelector("#Scissors").getAttribute("id");

        const roundWinner = function(winner, loser) {
                let newPara = document.createElement("p");
                newPara.textContent = `${winner} beats ${loser}, the score is ${playerScore}-${computerScore}.`;
                scoreKeeper.appendChild(newPara);
        }

        const tied = function() {
                let newPara = document.createElement("p");
                newPara.textContent = "Round tied, pick again.";
                scoreKeeper.appendChild(newPara);
        }

        if (playerSelection.getAttribute("id") === "Rock" && computerSelection === "Scissors") {
                playerScore += 1;

                roundWinner(playerRock, computerSelection);

        } else if (computerSelection === "Rock" && playerSelection.getAttribute("id") === "Scissors") {
                computerScore += 1;

                roundWinner(computerSelection, playerScissors);
        }

        if (playerSelection.getAttribute("id") === "Paper" && computerSelection === "Rock") {
                playerScore += 1;

                roundWinner(playerPaper, computerSelection);

        } else if (computerSelection === 'Paper' && playerSelection.getAttribute("id") === "Rock") {
                computerScore += 1;

                roundWinner(computerSelection, playerRock);
        }

        if (playerSelection.getAttribute("id") === "Scissors" && computerSelection === "Paper") {
                playerScore += 1;

                roundWinner(playerScissors, computerSelection);

        } else if (computerSelection === 'Scissors' && playerSelection.getAttribute("id") === "Paper") {
                computerScore += 1;

                roundWinner(computerSelection, playerPaper);
        }

        if (
        (playerSelection.getAttribute("id") === "Rock" && computerSelection === "Rock") ||
        (playerSelection.getAttribute("id") === "Paper" && computerSelection === "Paper") || 
        (playerSelection.getAttribute("id") === "Scissors" && computerSelection === "Scissors")) {
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
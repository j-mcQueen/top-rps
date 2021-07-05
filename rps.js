let playerScore = 0;
let playerScorePara = document.querySelector("#player-score p");
playerScorePara.textContent = "0";
let computerScore = 0;
let computerScorePara = document.querySelector("#computer-score p");
computerScorePara.textContent = "0";

const playRound = function(playerSelection, computerSelection) {

        const animateComputerButton = function(selection, selectionElement) {
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
        
        const scoreKeeper = document.querySelector("#output");

        const playerRock = document.querySelector("#Rock").getAttribute("id");
        const playerPaper = document.querySelector("#Paper").getAttribute("id");
        const playerScissors = document.querySelector("#Scissors").getAttribute("id");

        const roundWinner = function(winner, loser) {
                let newPara = document.createElement("p");
                newPara.textContent = `${winner} beats ${loser}.`;
                scoreKeeper.appendChild(newPara);
        }

        const tied = function() {
                let newPara = document.createElement("p");
                newPara.textContent = "Round tied, pick again.";
                scoreKeeper.appendChild(newPara);
        }

        if (playerSelection.getAttribute("id") === "Rock" && computerSelection === "Scissors") {
                playerScore += 1;
                playerScorePara.textContent = playerScore;

                roundWinner(playerRock, computerSelection);

        } else if (computerSelection === "Rock" && playerSelection.getAttribute("id") === "Scissors") {
                computerScore += 1;
                computerScorePara.textContent = computerScore;

                roundWinner(computerSelection, playerScissors);
        }

        if (playerSelection.getAttribute("id") === "Paper" && computerSelection === "Rock") {
                playerScore += 1;
                playerScorePara.textContent = playerScore;

                roundWinner(playerPaper, computerSelection);

        } else if (computerSelection === 'Paper' && playerSelection.getAttribute("id") === "Rock") {
                computerScore += 1;
                computerScorePara.textContent = computerScore;

                roundWinner(computerSelection, playerRock);
        }

        if (playerSelection.getAttribute("id") === "Scissors" && computerSelection === "Paper") {
                playerScore += 1;
                playerScorePara.textContent = playerScore;

                roundWinner(playerScissors, computerSelection);

        } else if (computerSelection === 'Scissors' && playerSelection.getAttribute("id") === "Paper") {
                computerScore += 1;
                computerScorePara.textContent = computerScore;

                roundWinner(computerSelection, playerPaper);
        }

        if (
        (playerSelection.getAttribute("id") === "Rock" && computerSelection === "Rock") ||
        (playerSelection.getAttribute("id") === "Paper" && computerSelection === "Paper") || 
        (playerSelection.getAttribute("id") === "Scissors" && computerSelection === "Scissors")) {
                tied();
        }

        let resetResults = function() {
                playerScore = 0;
                playerScorePara.textContent = "0";
                computerScore = 0;
                computerScorePara.textContent = "0";

                let resultsParas = document.querySelectorAll("#output p");

                resultsParas.forEach(newPara => newPara.remove());
        }

        if (playerScore === 5) {
                alert("You have reached 5 points, you win!!");

                setTimeout(resetResults, 250);
            } else if  (computerScore === 5) {
                alert("Computer has reached 5 points, computer wins. Unlucky!");

                setTimeout(resetResults, 250);
            }
        
            // ensures no refresh is necessary to play again 
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

// Add divs in HTML displaying player score and computer score
// On round win, get value of the div and convert it to a number

//      let playerScore = document.querySelector("#player-score").value;

//      let playerNewScore = Number(playerScore) + 1;
//      
//      playerScore = playerNewScore;
// Add 1 to the number and store in a variable
// Replace the value of the button with the variable containing the new number
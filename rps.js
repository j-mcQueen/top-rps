const game = function() {

    const computerPlay = function() {
        let choices = ["Rock", "Paper", "Scissors"];

        return choices[Math.floor(Math.random() * choices.length)];
    }

    let playerSelection = prompt("Choose between Rock, Paper and Scissors:", "").toLowerCase();
    const computerSelection = computerPlay();

    const round = function(playerSelection, computerSelection) {
        
    }
}
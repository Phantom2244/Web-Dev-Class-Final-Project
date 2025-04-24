// app.js
document.getElementById("refreshBtn").addEventListener("click", handleRefreshClick);
// refreshBtn.addEventListener('click', () => { window.location.reload(); })
function handleRefreshClick(event) { 
    // showRandomQuote(quotes); 
    location.reload(); 
}

// Complete logic of game inside this function
const rps = () => {
    let playerScore = 0;
    let computerScore = 0;
    let rounds = 0;


    // PART 1: PLAY RPS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 
    const playRPS = () => {
        
        const rockBtn = document.getElementById('rockBtn');
        const paperBtn = document.getElementById('paperBtn');
        const scissorsBtn = document.getElementById('scissorsBtn');
        const gameResult = document.getElementById('gameResult');

        const playerOptions = [rockBtn, paperBtn, scissorsBtn];
        const computerOptions = ['rock', 'paper', 'scissors']

        // Function to start playing game
        playerOptions.forEach(option => {
            option.addEventListener('click', function () {

                const roundsCompleted = document.getElementById('roundsCompleted');
                // console.log(roundsCompleted.textContent);

                const choiceNumber = Math.floor(Math.random() * 3);
                
                const computerChoice = computerOptions[choiceNumber];
                // console.log(this.innerText); //player choice
                // console.log(computerChoice); //computer choice
                // console.log("winRPS being called"); //notification that winrps is being called
                winRPS(this.innerText, computerChoice);
                roundsCompleted.textContent = 'Rounds Completed: ' + rounds;
                console.log("winRPS successful");
                if (rounds == 10) {
                    console.log("game over");
                    gameOver(playerOptions, roundsCompleted);
                    rounds = 0;
                    // location.reload();
                }
            })
        })

    }

    // PART 2: WIN A ROUND & EVALUATE ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 
    const winRPS = (player, computer) => {
        // console.log("winRPS starting");
        const playerScoreUpdated = document.getElementById('playerScoreBoard');
        const computerScoreUpdated = document.getElementById('computerScoreBoard');

        // console.log(playerScoreBoard.textContent);
        player = player.toLowerCase();
        computer = computer.toLowerCase();

        if (player === computer) {
            console.log("tie" + playerScore);
            roundResult.textContent = 'Tie -- No Points for Anyone !';
        }

        else if (player == 'rock') {
            if (computer == 'paper') {
                roundResult.textContent = 'Computer Won';
                computerScore++;
                computerScoreUpdated.textContent = computerScore;
                rounds++;

            } 
            else {
                roundResult.textContent = 'Player Won'
                playerScore++;
                playerScoreUpdated.textContent = playerScore;
                rounds++;
            }
        }

        else if (player == 'paper') {
            if (computer == 'scissors') {
                roundResult.textContent = 'Computer Won';
                computerScore++;
                computerScoreUpdated.textContent = computerScore;
                rounds++;
            } 
            else {
                roundResult.textContent = 'Player Won';
                playerScore++;
                playerScoreUpdated.textContent = playerScore;
                rounds++;
            }
        }

        else if (player == 'scissors') {
            if (computer == 'rock') {
                roundResult.textContent = 'Computer Won';
                computerScore++;
                computerScoreUpdated.textContent = computerScore;
                rounds++;
            } 
            else {
                roundResult.textContent = 'Player Won';
                playerScore++;
                playerScoreUpdated.textContent = playerScore;
                rounds++;
            }
        }

    }

    // PART 3: END GAME & DISPLAY RESULTS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 
    const gameOver = (playerOptions, roundsCompleted) => {

        const gameResult = document.getElementById('gameResult');

        roundsCompleted.style.display = 'GAME HAS ENDED.';

        if (playerScore > computerScore) {gameResult.textContent = 'YOU WIN !!  You Beat the Computer.';}
        else if (playerScore < computerScore) {gameResult.textContent = 'YOU LOSE !!  You Lost to a Bot';}
        else {gameResult.textContent = 'YOU TIED the Computer ...';}

    }

    // CONTINUE TO CALL PLAY GAME, IN ORDER TO CONTINUE THE GAME AFTER IT STARTS (until Round 10 is complete)
    playRPS();

}

rps();
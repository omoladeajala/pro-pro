function getComputerChoice() {
    const randomNumber = Math.random();
    let computerChoice;

    if (randomNumber < 1 / 3) {
        computerChoice = "rock";
    } else if (randomNumber < 2 / 3) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }

    return computerChoice;
}

function getHumanChoice() {
        const userChoice = prompt("Enter your choice: Rock, Paper, or Scissors");
        return userChoice ? userChoice.trim() : "";
}
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    const humanSelection = humanChoice.toLowerCase();
    const computerSelection = computerChoice.toLowerCase();

    let roundResult;
    if (humanSelection === computerSelection) {
        roundResult = "It's a tie!";
    } else if (
        (humanSelection === "rock" && computerSelection === "scissors") ||
        (humanSelection === "paper" && computerSelection === "rock") ||
        (humanSelection === "scissors" && computerSelection === "paper")
    ) {
        roundResult = `You win! ${humanSelection} beats ${computerSelection}.`;
        humanScore++;
    } else {
        roundResult = `You lose! ${computerSelection} beats ${humanSelection}.`;
        computerScore++;
    }

    console.log(roundResult);
    // Update DOM results if elements are present
    const resultEl = document.querySelector('.round-result');
    const playerScoreEl = document.querySelector('#player-score');
    const computerScoreEl = document.querySelector('#computer-score');
    if (resultEl) resultEl.textContent = roundResult;
    if (playerScoreEl) playerScoreEl.textContent = humanScore;
    if (computerScoreEl) computerScoreEl.textContent = computerScore;
    return roundResult;
}

function playGame() {
    // Reset scores for a new game
    humanScore = 0;
    computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        if (!humanSelection) {
            console.log('No choice entered. Ending game.');
            break;
        }
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log(`Round ${i + 1} Score: Human: ${humanScore}, Computer: ${computerScore}`);
    }

    console.log("--- FINAL SCORE --");
    if (humanScore > computerScore) {
        console.log("You won the game! Congratulations!");
    } else if (computerScore > humanScore) {
        console.log("You lost the game. Better luck next time!");
    } else {
        console.log("The game is a tie!");
    }
}

const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');

if (rockBtn) {
    rockBtn.addEventListener('click', () => {
        playRound('rock', getComputerChoice());
        console.log(`Score: Human: ${humanScore}, Computer: ${computerScore}`);
    });
}

if (paperBtn) {
    paperBtn.addEventListener('click', () => {
        playRound('paper', getComputerChoice());
        console.log(`Score: Human: ${humanScore}, Computer: ${computerScore}`);
    });
}

if (scissorsBtn) {
    scissorsBtn.addEventListener('click', () => {
        playRound('scissors', getComputerChoice());
        console.log(`Score: Human: ${humanScore}, Computer: ${computerScore}`);
    });
}
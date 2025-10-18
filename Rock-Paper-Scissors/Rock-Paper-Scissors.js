function getComputerChoice() {
  const randomNumber = Math.floor();
  let computerChoice;


if (randomNumber <1/3) {
    computerChoice = "rock";
} else if (randomNumber <2/3) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors"
}

return computerChoice;
}

function getHumanChoice() {
    const userChoice = prompt("Enter your choice: Rock, Paper, or Scissors");
    return userChoice;
}

console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
 
const humanSelection = humanChoice.toLowerCase();
const computerSelection = computerChoice.toLowerCase();

let roundResult;
if (humanSelection === computerChoice) {
roundResult = "It's a tie!";
} else if (
    (humanSelection === "rock" && computerChoice === "scissors") ||
    (humanSelection === "paper" && computerChoice === "paper") ||
    (humanSelection === "scissors" && computerChoice === "rock")
) {
    roundResult = `You win! ${humanSelection} beats ${computerSelection}.`;
} else {
    roundResult = `You lose! ${computerSelection} beats ${humanSelection}.`;
}

console.log(roundResult);
}

function playGame() {
    let humanSelection = 0;
    let computer = 0;
    
function playRound(humanChoice, computerChoice) {
 
const human = humanChoice.toLowerCase();
const computer = computerChoice.toLowerCase();

if (humanSelection === computerChoice) {
   console.log(`It's a tie! Both chose ${human}.`);
} else if (
    (human === "rock" && computer === "scissors") ||
    (human === "paper" && computer === "paper") ||
    (human === "scissors" && computer === "rock")
) {
    humanScore++;
   console.log = (`You win! ${human} beats ${computer}.`);
} else {
    computerScore++;
    console.log(`You lose! ${computer} beats ${human}.`);
}
}

for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection,computerSelection);
    console.log(`Round ${i +1} Score: Human: ${humanScore}, Computer: ${computerScore}`);
}

console.log("--- FINAL SCORE --");
if (humanScore > computerScore) {
    console.log("YOu won the game! Congratulation!");
} else if (computer > humanScore) {
    console.log("You lost the game. Better luck next time!");
} else {
    console.log("The game is a tie!");
}
}

const rockBtn = document.querySelector('#rock');
const papaerBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

rockBtn.addEventListener ('click', (e) => playRound('rock'));
paperBtn.addEventListener ('click', (e) => playRound('paper') );
scissorsBtn. addEventListener ('click', (e) => playRound('scissors'));
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
const computerSelection = ComputerChoice.toLowerCase();

let roundResult;
if (humanSelection === computerChoice) {
roundResult = "It's a tie!";
} else if (
    (humanSelection === "rock" && computerChoice === "scissors") ||
    (humanSelection === "paper" && computerChoice === "paper") ||
    (humanSelection === "scissors" && computerChoice === "rock")
)

}



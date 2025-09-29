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
 //my codes here!
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();


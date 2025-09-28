function getHumanChoice(max) {
  return Math.floor(Math.random() * max)
}

console.log(getHumanChoice("Rock", "Paper", "Scissors")); 

console.log(getHumanChoice("Rock")); 

console.log(getHumanChoice("Paper")); 

console.log(getHumanChoice("Scissors")); 

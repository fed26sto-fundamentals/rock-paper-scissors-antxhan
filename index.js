const choices = {
  rock: {
    beats: "scissors",
    beatenBy: "paper",
  },
  paper: {
    beats: "rock",
    beatenBy: "scissors",
  },
  scissors: {
    beats: "paper",
    beatenBy: "rock",
  },
};
let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
  const choicesArray = Object.keys(choices);
  const randomIndex = Math.floor(Math.random() * choicesArray.length);
  return choicesArray[randomIndex];
}

function getHumanChoice() {
  const choice = prompt("Enter choice: ").toLowerCase();
  if (!Object.keys(choices).includes(choice)) {
    console.log("Invalid choice");
    return getHumanChoice();
  }
  return choice;
}

function playRound(round) {
  console.log(`================${round}================`);
  const computerChoice = getComputerChoice();
  const humanChoice = getHumanChoice();
  console.log("computer:", computerChoice);
  console.log("human:", humanChoice);
  if (choices[computerChoice].beats === humanChoice) {
    console.log("computer wins this round");
    computerScore++;
  } else if (choices[computerChoice].beatenBy === humanChoice) {
    console.log("human wins this round");
    humanScore++;
  } else if (computerChoice === humanChoice) {
    console.log("tie");
  } else {
    console.log("Something went wrong.");
  }
}

function playGame() {
  const maxRounds = 5;
  for (let round = 0; round < maxRounds; round++) {
    playRound(round + 1);
  }
  console.log("================RESULTS================");
  console.log(
    "computer score:",
    computerScore,
    "   |   ",
    "human score: ",
    humanScore
  );
  if (computerScore > humanScore) {
    console.log("computer wins");
  } else if (computerScore < humanScore) {
    console.log("human wins");
  } else {
    console.log("tie");
  }
}

playGame();

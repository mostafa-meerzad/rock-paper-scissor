const decisionMaker = (yourChoice) => {
  const options = ["rock", "paper", "scissor"];
// a random item form options array
  const machineChoice = options[Math.floor(Math.random() * options.length)];

  console.log(yourChoice, " yourChoice");
  console.log(machineChoice, " machineChoice");
  if (yourChoice === machineChoice) {
    return "equal";
  } else if (yourChoice === "paper") {
    if (machineChoice === "rock") {
      return "you win";
    } else if (machineChoice === "scissor") {
      return "you lose";
    }
  } else if (yourChoice === "scissor") {
    if (machineChoice === "paper") {
      return "you win";
    } else if (machineChoice === "rock") {
      return "you lose";
    }
  } else if (yourChoice === "rock") {
    if (machineChoice === "scissor") {
      return "you win";
    } else if (machineChoice === "paper") {
      return "you lose";
    }
  }
};


 export default decisionMaker



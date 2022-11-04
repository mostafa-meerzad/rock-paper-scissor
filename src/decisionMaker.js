

const decisionMaker = yourChoice => {
  const options = ["rock", "paper", "scissors"];
  const machineChoice = options[Math.floor(Math.random() * options.length)];

  if (yourChoice === machineChoice) {
    return {message:"equal", machineChoice};
  } else if (yourChoice === "paper") {
    if (machineChoice === "rock") {
      return {message:"you win", machineChoice};
    } else if (machineChoice === "scissors") {
      return {message:"you lose", machineChoice};
    }
  } else if (yourChoice === "scissors") {
    if (machineChoice === "paper") {
      return {message:"you win", machineChoice};
    } else if (machineChoice === "rock") {
      return {message:"you lose", machineChoice};
    }
  } else if (yourChoice === "rock") {
    if (machineChoice === "scissors") {
      return {message:"you win", machineChoice};
    } else if (machineChoice === "paper") {
      return {message:"you lose", machineChoice};
    }
  } else {
    return {message:"", machineChoice: ''}
  }
};

export default decisionMaker;


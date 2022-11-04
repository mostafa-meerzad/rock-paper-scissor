// import rock from "./assets/images/icon-rock.svg";
// import paper from "./assets/images/icon-paper.svg";
// import scissors from "./assets/images/icon-scissors.svg";

const decisionMaker = yourChoice => {
  const options = ["rock", "paper", "scissors"];
  // a random item form options array
  const machineChoice = options[Math.floor(Math.random() * options.length)];

  // console.log(yourChoice, " yourChoice");
  // console.log(machineChoice, " machineChoice");
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



// const {message, machineChoice} = decisionMaker(null)
// console.log(message);
// console.log(machineChoice);
// 
// console.log(Math.floor(Math.random() * 2), " a random number");
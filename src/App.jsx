import React, { useState, createContext, useEffect } from "react";
import Score from "./components/Score.jsx";
import Game from "./components/Game.jsx";
import Rules from "./components/Rules";
import { motion } from "framer-motion";
import decisionMaker from "./decisionMaker";

const initialScore = 0;

const RulesContext = createContext();
const ChoiceContext = createContext();

const App = () => {
  const [score, setScore] = useState(initialScore);
  const [showRules, setShowRules] = useState(false);
  const [yourChoice, setYourChoice] = useState(null);
  const [machineChoice, setMachineChoice] = useState(null);
  const [isSelected, setIsSelected] = useState(false);
  const [loseOrWin, setLoseOrWin] = useState(null);
  const [isReset, setIsReset] = useState(false);

  const reset = () => {
    setYourChoice(null);
    setMachineChoice(null);
    setIsSelected(false);
    setIsReset(true);

    // remove active state from the option user selected
    document.querySelectorAll(".game__option").forEach((item) => {
      item.classList.remove("option-active");
    });
  };

  useEffect(() => {
    const { message, machineChoice } = decisionMaker(yourChoice);
    setLoseOrWin(message);
    setMachineChoice(machineChoice);

    // find the choice user made from the dom
    const choice = document.querySelector(`.game__option--${yourChoice}`);

    if (choice) {
      // add active state
      choice.classList.add("option-active");
    }
  }, [yourChoice]);

  useEffect(() => {
    // give setting score a delay so it doesn't change score right-away
    setTimeout(() => {
      if (loseOrWin === "you lose") {
        if (score === 0) return
        setScore(score - 1);
      } else if (loseOrWin === "you win") {
        setScore(score + 1);
      }
    }, 2000);
  }, [loseOrWin]);
  return (
    <>
      <motion.header initial={{ scale: 0 }} animate={{ scale: 1 }}>
        <Score scoreValue={score} />
      </motion.header>

      <main className={"game"}>
        <ChoiceContext.Provider
          value={{
            yourChoice,
            setYourChoice,
            isSelected,
            setIsSelected,
            reset,
            loseOrWin,
            setLoseOrWin,
            machineChoice,
            isReset
          }}
        >
          <Game />
        </ChoiceContext.Provider>
      </main>

      <motion.footer initial={{ scale: 0.5 }} animate={{ scale: 1 }}>
        <motion.button
        initial={{scale:1}}
        whileTap={{scale:.9}}
          className={"rules-btn btn"}
          onClick={() => {
            setShowRules(true);
          }}
        >
          rules
        </motion.button>
      </motion.footer>

      <RulesContext.Provider value={{ showRules, setShowRules }}>
        <Rules />
      </RulesContext.Provider>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={showRules ? { opacity: 0.5, scale: 1 } : {}}
        className="cover"
      />
    </>
  );
};

export default App;
export { RulesContext, ChoiceContext };

import React, { useState, createContext, useEffect } from "react";
import Score from "./components/Score.jsx";
import Game from "./components/Game.jsx";
import Rules from "./components/Rules";
import { motion } from "framer-motion";
import decisionMaker from './decisionMaker';



const RulesContext = createContext();
const ChoiceContext = createContext();
const initialScore = 12


const App = () => {
  const [score, setScore] = useState(initialScore);
  const [showRules, setShowRules] = useState(false);
  const [yourChoice, setYourChoice] = useState(null);
  const [machineChoice, setMachineChoice] = useState(null);
  const [isSelected, setIsSelected] = useState(false)
  const [loseOrWin, setLoseOrWin] = useState(null)
  const [isReset, setIsReset] = useState(false)

  const reset = () => {
    setYourChoice(null)
    setMachineChoice(null)
    setIsSelected(false)
    setIsReset(true)
    
    document.querySelectorAll(".game-options__option").forEach(item=>{
      item.classList.remove("option-active")
    })
  }

  useEffect(() => {
    const {message, machineChoice}  = decisionMaker(yourChoice)
    setLoseOrWin(message)
    setMachineChoice(machineChoice)
    
// find the choice made from the dom
const choice = document.querySelector(`.game-options__option--${yourChoice}`)

if(choice){
choice.classList.add("option-active")
}
   }, [yourChoice])



   useEffect(() => {
    // give setting score a delay so it doesn't change score right away 
    setTimeout(() => {
      if(loseOrWin === "you lose"){
        setScore(score - 1)
      } else if (loseOrWin === "you win"){
        setScore(score + 1)
      } 
    }, 2000)
   }, [loseOrWin])
  return (
    <>
      <motion.header
      initial={{scale:0}}
      animate={{scale:1}}>
        <Score scoreValue={score} initialScore={initialScore}/>
      </motion.header>
      <main className={"game"}>
        <ChoiceContext.Provider value={{ yourChoice, setYourChoice, isSelected, setIsSelected, reset, loseOrWin, setLoseOrWin, machineChoice, isReset }}>
          <Game />
        </ChoiceContext.Provider>
      </main>
      <motion.footer
        initial={{scale:.5}}
      animate={{scale:1}}
      >
        <button
          className={"rules-btn btn"}
          onClick={() => {
            setShowRules(true);
          }}
        >
          rules
        </button>
      </motion.footer>

      <RulesContext.Provider value={{ showRules, setShowRules }}>
        <Rules />
      </RulesContext.Provider>
      <div className="cover" />

    </>
  );
};

export default App;
export { RulesContext, ChoiceContext };



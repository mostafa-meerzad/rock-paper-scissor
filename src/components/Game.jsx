import { useContext } from "react";
import Option from "./Option.jsx";
import rock from "../assets/images/icon-rock.svg";
import paper from "../assets/images/icon-paper.svg";
import scissors from "../assets/images/icon-scissors.svg";
import { BgImg } from "../assets/images.jsx";
import { motion, AnimatePresence } from "framer-motion";
import { ChoiceContext } from "../App.jsx";


// change the animation object based on mediaQuery if it is matching 
// the desktop-view 
const changeAnimation = window.matchMedia("(min-width:1024px)").matches
const optionSelected ={ top: changeAnimation ? "26%" : "30%", left: "0%" }
const animationDelay = 1;

function Game({ setOption }) {
  const {
    yourChoice,
    setYourChoice,
    reset,
    loseOrWin,
    machineChoice,
    isReset
  } = useContext(ChoiceContext);

  console.log(loseOrWin, " lose or win from game component")
  return (
    <>
      <motion.section
        initial={{ rotate: 0, scale:0 }}
        transition={{  ease: "circOut", duration: animationDelay, direction: "reverse"}}
        animate={{ rotate: 360, scale:1 }}
        className="game__options "
      >
        <motion.div
          animate={
            yourChoice
              ? { rotate: 360, left:changeAnimation&&"-30%" }
              : isReset && {}
          }
          transition={{ duration: 0.5 }}
          className="game__your-choice"
        >
          <Option 
          showHalo={loseOrWin === "you win" && yourChoice=== "paper" && true}
            img={paper}
            name={"paper"}
            setOption={setOption}
            callBack={setYourChoice}
            animate={yourChoice ? optionSelected : isReset && {}}
           
          />
          <Option 
          showHalo={loseOrWin === "you win"  && yourChoice=== "scissors" && true}
            img={scissors}
            name={"scissors"}
            setOption={setOption}
            // className="scissors"
            callBack={setYourChoice}
            animate={yourChoice ? optionSelected : isReset && {}}
          />
          <Option 
          showHalo={loseOrWin === "you win"  && yourChoice=== "rock" && true}
            img={rock}
            name={"rock"}
            setOption={setOption}
           
            callBack={setYourChoice}
            animate={yourChoice ? optionSelected : isReset && {}}
          />

          <motion.div
            animate={yourChoice ? { scale: 0 } : isReset && {}}
            className="game__bg-img"
          >
            <BgImg />
          </motion.div>


        </motion.div>


        {machineChoice && (
          <motion.div
            
            className="game__machine-choice"
          >
          <motion.div initial={{opacity:0}}
          animate={{opacity:.4}} className="game__machine-choice-placeholder"/>
         
            <Option
            showHalo={loseOrWin === "you lose" && true}
              name={machineChoice}
              initial={{opacity:0, }}
              animate={{opacity:1}}
              transition={{delay:1}}
             
              img={
                machineChoice === "paper"
                  ? paper
                  : machineChoice === "rock"
                  ? rock
                  : machineChoice === "scissors"
                  ? scissors
                  : ""
              }
            />
   
          </motion.div>
        ) 
        }


  
      {loseOrWin && <motion.div initial={{opacity:0, scale:0}}
      animate={{opacity:1, scale:1}} className="game__choice-type">
        <p >you picked</p>
        <p >the house picked</p>
      </motion.div>}


      </motion.section>

      <section className="result">
        <AnimatePresence>
          {loseOrWin && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={
                yourChoice
                  ? { delay: animationDelay }
                  : isReset && { scale: 0.5 }
              }
              exit={{ scale: 0 }}
              className="result__result"
            >
              <div className="result__message">{loseOrWin}</div>
              <motion.button
                whileTap={{ scale: 0.8 }}
                className="result__play-again btn"
                onClick={() => {
                  reset();
                }}
              >
                play again
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
}

export default Game;


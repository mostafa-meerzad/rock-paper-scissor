import { useContext } from "react";
import Option from "./Option.jsx";
import rock from "../assets/images/icon-rock.svg";
import paper from "../assets/images/icon-paper.svg";
import scissors from "../assets/images/icon-scissors.svg";
import { BgImg } from "../assets/images.jsx";
import { motion, AnimatePresence } from "framer-motion";
import { ChoiceContext } from "../App.jsx";


const optionSelected = { top: "31.5%", left: "33%" };
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
  return (
    <>
      <motion.section
        initial={{ rotate: 0, scale:0 }}
        transition={{  ease: "circOut", duration: animationDelay }}
        animate={{ rotate: 360, scale:1 }}
        className="game-options "
      >
        <motion.div
          animate={
            yourChoice
              ? { rotate: 360, left: "-33%", top: "-.35rem" }
              : isReset && {}
          }
          transition={{ duration: 0.5 }}
          className="game-options__your-choice"
        >
          <Option
            img={paper}
            name={"paper"}
            setOption={setOption}
            className="paper"
            callBack={setYourChoice}
            animate={yourChoice ? optionSelected : isReset && {}}
          />
          <Option
            img={scissors}
            name={"scissors"}
            setOption={setOption}
            className="scissors"
            callBack={setYourChoice}
            animate={yourChoice ? optionSelected : isReset && {}}
          />
          <Option
            img={rock}
            name={"rock"}
            setOption={setOption}
            className="rock"
            callBack={setYourChoice}
            animate={yourChoice ? optionSelected : isReset && {}}
          />

          <motion.div
            animate={yourChoice ? { scale: 0 } : isReset && {}}
            className="bg-img"
          >
            <BgImg />
          </motion.div>
        </motion.div>

        {machineChoice && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: animationDelay }}
            className="game-options__machine-choice"
          >
            <Option
              name={`${machineChoice}`}
              className={`${machineChoice}`}
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
        )}

        <div className="game-options__placeholder">
          <div className="win">

            {loseOrWin === "you win" && (
              <svg
                className="halo win__halo"
                xmlns="http://www.w3.org/2000/svg"
                width="200"
                height="200"
                viewBox="0 0 270 270"
              >
                <g id="halo" transform="translate(-768 -143)">
                  <motion.circle
                    initial={{ r: 0 }}
                    animate={loseOrWin === "you win" && { r: 130 }}
                    transition={{ delay: 1.1 }}
                    className="halo__circle halo__circle--out"
                    id="out"
                    cx="135"
                    cy="135"
                    r="135"
                    transform="translate(768 143)"
                    fill="#fcfcfc99"
                  />

                  <motion.circle
                    initial={{ r: 0 }}
                    animate={loseOrWin === "you win" && { r: 95 }}
                    transition={{ delay: 1.2 }}
                    className="halo__circle halo__circle--mid"
                    id="mid"
                    cx="100.5"
                    cy="100.5"
                    r="90"
                    transform="translate(803 178)"
                    fill="#f3f3f399"
                  />

                  <motion.circle
                    initial={{ r: 0 }}
                    animate={loseOrWin === "you win" && { r: 65 }}
                    transition={{ delay: 1.3 }}
                    className="halo__circle halo__circle--in"
                    id="in"
                    cx="71"
                    cy="71"
                    r="65"
                    transform="translate(833 207)"
                    fill="#ebebeb99"
                  />
                </g>
              </svg>
            )}
            <motion.div
              initial={{ scale: 0 }}
              animate={loseOrWin ? { scale: 1 } : {}}
              transition={loseOrWin ? { delay: animationDelay } : {}}
              className="message"
            >
              you picked
            </motion.div>
          </div>

          <div className="lose">
            {loseOrWin === "you lose" && (
              <svg
                className="halo lose__halo"
                xmlns="http://www.w3.org/2000/svg"
                width="200"
                height="200"
                viewBox="0 0 270 270"
              >
                <g id="halo" transform="translate(-768 -143)">
                  <motion.circle
                    initial={{ r: 0 }}
                    animate={loseOrWin === "you lose" && { r: 130 }}
                    transition={{ delay: 1.1 }}
                    className="halo__circle halo__circle--out"
                    id="out"
                    cx="135"
                    cy="135"
                    r="135"
                    transform="translate(768 143)"
                    fill="#fcfcfc99"
                  />

                  <motion.circle
                    initial={{ r: 0 }}
                    animate={loseOrWin === "you lose" && { r: 95 }}
                    transition={{ delay: 1.2 }}
                    className="halo__circle halo__circle--mid"
                    id="mid"
                    cx="100.5"
                    cy="100.5"
                    r="90"
                    transform="translate(803 178)"
                    fill="#f3f3f399"
                  />

                  <motion.circle
                    initial={{ r: 0 }}
                    animate={loseOrWin === "you lose" && { r: 65 }}
                    transition={{ delay: 1.3 }}
                    className="halo__circle halo__circle--in"
                    id="in"
                    cx="71"
                    cy="71"
                    r="65"
                    transform="translate(833 207)"
                    fill="#ebebeb99"
                  />
                </g>
              </svg>
            )}
            <motion.div
              initial={{ scale: 0 }}
              animate={loseOrWin ? { scale: 1 } : {}}
              transition={loseOrWin ? { delay: animationDelay } : {}}
              className="message"
            >
              the house picked
            </motion.div>

            {machineChoice && <div className="machineChoicePlaceHolder"></div>}
          </div>
        </div>
      </motion.section>

      <section className="game-result-container">
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
              className="game-result"
            >
              <div className="game-result__message">{loseOrWin}</div>
              <motion.button
                whileTap={{ scale: 0.8 }}
                className="game-result__btn btn"
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


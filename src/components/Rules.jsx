import React from "react";
import rulesImg from "../assets/images/image-rules.svg";
import { Close } from "../assets/images";
import { RulesContext } from "./../App";
import { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Rules() {
  const { showRules, setShowRules } = useContext(RulesContext);

  return (
    <AnimatePresence>
      {showRules &&
        <motion.div
          initial={{ scale: 0, borderRadius:80}}
          animate={showRules && { scale: 1, borderRadius:0 }}
          // transition={{ duration: 3 }}
          exit={{ scale: 0, opacity: 0, borderRadius: 80}}
          className={"rules"}
        >
          {/* <header className={"rules__header rules-header"}> */}
            <p className="rules__title">rules</p>
          {/* </header> */}
          <img src={rulesImg} alt="rules" className="rules__img" />
          <motion.button
          initial={{scale:1}}
          whileTap={{scale:.6}}
            onClick={() => {
              setShowRules(!showRules);
              // console.log("exit rules clicked")
            }}
            className="rules__exit-btn btn"
          >
            <Close />
            {/* test */}
          </motion.button>
        </motion.div>}
    </AnimatePresence>
  );
}

export default Rules;

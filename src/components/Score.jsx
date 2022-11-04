import React from "react";
import { Logo } from "../assets/images";
import { useEffect } from "react";
import { useState } from "react";
import { motion } from "framer-motion";

function Score({ scoreValue, initialScore }) {
  useEffect(() => {
    console.log(scoreValue, " current score");
    console.log(initialScore, " initial score");
    console.log(scoreValue !== initialScore);
  });

  return (
    <section className={"score"}>
      <Logo />
      <motion.div
        initial={{ rotate: 0 }}
        animate={initialScore !== scoreValue ? { rotate: 360 } : {}}
        className="score__container"
      >
        <p className={"score__container-title"}>score</p>
        <p className="score__container-value">
          {" "}{scoreValue}
        </p>
      </motion.div>
    </section>
  );
}

export default Score;

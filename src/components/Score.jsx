import { Logo } from "../assets/images";
import { motion } from 'framer-motion';


function Score({ scoreValue }) {

  return (
    <section className={"score"}>
      <Logo />
      <div
        className="score__container"
      >
        <p className={"score__container-title"}>score</p>
        {/* change key prop of the element showing score-value to make react treat it as a new element in order to play it's animation every time score changes */}
        <motion.p key={scoreValue} initial={{scale:.5}} animate={{scale:1}} className="score__container-value">
          {scoreValue}
        </motion.p>
      </div>
    </section>
  );
}

export default Score;

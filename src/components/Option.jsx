import { motion } from "framer-motion";



function Option({ name, img,callBack, animate}) {

  return (

    <motion.div
      onClick={() => {
        if(callBack){
          callBack(name)
        }
      }}
      animate={animate}
      whileTap={{scale:.8}}
      className={
           `game-options__option game-options__option--${name}`
      }
    >
      <motion.img
      whileTap={{rotate:45}}
        className="game-options__option-img"
        src={img}
        alt={name}
      />      
    </motion.div>
  );
}

export default Option;



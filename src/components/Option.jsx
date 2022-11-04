import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChoiceContext } from "../App";



function Option({ name, img,callBack, setYourChoice, className, animate, transition, variants, style, tapGesture}) {

  // const {isSelected, setIsSelected} = useContext(ChoiceContext)
  const {isReset} = useContext(ChoiceContext)
  const [isSelected, setIsSelected] = useState(false)
  // useEffect(() => {
  // //  console.log(isSelected, " this is the isSelected"); 
  // // setIsSelected(false)
  // console.log(isSelected, " isSelected from local state");
  // console.log(isReset, " isReset from global state");
  // console.log(name, " the choice name");
  // })
  // useEffect(() => {
    // setIsSelected(false)
    // console.log("here is the bug you must do something !!!");
  // },[isReset])
  return (

    // <div className="test">
    <motion.div
      onClick={() => {
        if(callBack){
          callBack(name)
       setIsSelected(true) 
        }
      //  console.log("option clicked")
      }}
      // style={{zIndex:2}}
      // transition={transition}
      
      // transition={{duration:0}}
      animate={animate}
      whileTap={{scale:.8}}
      className={
        // isSelected
        //   ?  `game-options__option game-options__option--${className} option-active`
        //   : 
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




// </div>
  );
}

export default Option;



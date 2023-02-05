import { motion } from "framer-motion";

function Option({ name, img, callBack, animate, showHalo }) {
  return (
    <motion.div
      onClick={() => {
        if (callBack) {
          callBack(name);
        }
      }}
      animate={animate}
      whileTap={!showHalo && { scale: 0.9 }}
      className={`game__option game__option--${name}`}
    >
      <motion.img
        whileTap={{ rotate: 45 }}
        className="game__option-img"
        src={img}
        alt={name}
      />
      {showHalo && (
        <svg
          className="game__option-halo"
          xmlns="http://www.w3.org/2000/svg"
          width="200"
          height="200"
          viewBox="0 0 270 270"
        >
          <g id="halo" transform="translate(-768 -143)">
            <motion.circle
              initial={{ r: 0 }}
              animate={{ r: 110 }}
              transition={{ delay: 1.1 }}
              className="game__option-halo--out"
              id="out"
              cx="135"
              cy="135"
              transform="translate(768 143)"
              fill="#fcfcfc99"
              opacity={0.04}
            />

            <motion.circle
              initial={{ r: 0 }}
              animate={{ r: 84 }}
              transition={{ delay: 1.2 }}
              className="game__option-halo--mid"
              id="mid"
              cx="100.5"
              cy="100.5"
              transform="translate(803 178)"
              fill="#f3f3f399"
              opacity={0.05}
            />

            <motion.circle
              initial={{ r: 0 }}
              animate={{ r: 63 }}
              transition={{ delay: 1.3 }}
              className="game__option-halo--in"
              id="in"
              cx="71"
              cy="71"
              transform="translate(833 207)"
              fill="#ebebeb99"
              opacity={0.04}
            />
          </g>
        </svg>
      )}
    </motion.div>
  );
}

export default Option;

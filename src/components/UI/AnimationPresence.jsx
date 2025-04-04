import { motion, AnimatePresence } from "motion/react";

const AnimationPresence = ({
  children,
  condition,
  options,
  parentStyles,
  onClick,
}) => {
  return (
    <AnimatePresence>
      {condition && (
        <motion.div
          className={`animationpresence ${parentStyles}`}
          initial={options.initial}
          animate={options.animate}
          exit={options.exit}
          onClick={onClick}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AnimationPresence;

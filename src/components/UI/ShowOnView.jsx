import { motion } from "motion/react";

const ShowOnView = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: "-100px" }}
      whileInView={{ opacity: 1, x: 0, transition: "linear" }}
      viewport={{ amount: 0.2 }} // Trigger the animation when 20% of the element is on the viewport
    >
      {children}
    </motion.div>
  );
};

export default ShowOnView;

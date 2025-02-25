import { motion } from "framer-motion";

const AnimatedElement = ({ children, direction = "up", delay = 0, duration = 0.4 }) => {
  const variants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -50 : direction === "right" ? 50 : 0,
      y: direction === "up" ? 50 : direction === "down" ? -80 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration, delay, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // Se activa cuando el 20% del elemento es visible
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedElement;

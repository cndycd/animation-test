import { motion } from "framer-motion";

export const Reveal = ({ children, ...rest }) => {
  return (
    <motion.div
      initial="hidden"
      transition={{
        type: "spring",
        duration: 1.5,
        bounce: 0,
      }}
      whileInView="visible"
      viewport={{ once: true, amount: 0.1, margin: "200px 0px 0px 0px" }}
      variants={variants}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

const variants = {
  hidden: {
    willChange: "transform,opacity",
    y: 200,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};

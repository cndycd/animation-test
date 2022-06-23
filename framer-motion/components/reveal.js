import cx from "clsx";
import { motion } from "framer-motion";

export const Reveal = ({ className = "", children, ...rest }) => {
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
      className={cx("will-change-[transform,opacity]", className)}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

const variants = {
  hidden: {
    transform: "translate3d(0, 200px, 0)",
    opacity: 0,
  },
  visible: {
    transform: "translate3d(0, 0px, 0)",
    opacity: 1,
  },
};

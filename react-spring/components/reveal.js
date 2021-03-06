import cx from "clsx";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

export const Reveal = ({ className = "", children, ...rest }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
    rootMargin: "200px 0px 0px 0px",
  });

  const styles = useSpring({
    y: inView ? 0 : 200,
    opacity: inView ? 1 : 0,
    config: {
      mass: 1,
      tension: 280,
      friction: 70,
      clamp: true,
    },
  });

  return (
    <animated.div
      ref={ref}
      className={cx(!inView && "will-change-[transform,opacity]", className)}
      style={styles}
      {...rest}
    >
      {children}
    </animated.div>
  );
};

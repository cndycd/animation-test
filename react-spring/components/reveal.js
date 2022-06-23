import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

export const Reveal = ({ children, ...rest }) => {
  const [styles, api] = useSpring(() => {
    return {
      y: 200,
      opacity: 0,
      config: {
        mass: 1,
        tension: 280,
        friction: 70,
        clamp: true,
      },
    };
  });

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
    rootMargin: "200px 0px 0px 0px",
    onChange: (inView) => {
      if (inView) {
        api.start({
          y: 0,
          opacity: 1,
        });
      }
    },
  });

  return (
    <animated.div ref={ref} style={styles} {...rest}>
      {children}
    </animated.div>
  );
};

// const styles = useSpring({
//   y: inView ? 0 : 200,
//   opacity: inView ? 1 : 0,
//   config: {
//     mass: 1,
//     tension: 280,
//     friction: 70,
//     clamp: true,
//   },
// });

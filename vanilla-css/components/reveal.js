import cx from "clsx";
import { useInView } from "react-intersection-observer";

export const Reveal = ({ className = "", children, ...rest }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
    rootMargin: "200px 0px 0px 0px",
  });

  return (
    <div
      ref={ref}
      className={cx(
        inView ? "translate-y-0 opacity-100" : "translate-y-[200px] opacity-0",
        "duration-[1500ms] ease-out will-change-[transform,opacity]",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

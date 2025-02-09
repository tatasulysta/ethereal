import gsap from "gsap";
import _ScrollTrigger from "gsap/dist/ScrollTrigger";
import React from "react";

gsap.registerPlugin(_ScrollTrigger);

interface Props {
  scrollTriggerStart?: string;
  scrollTriggerAction?: string;
  modifier?: (index: number) => gsap.TweenVars;
}

export default function useAnimationEntrance<T = HTMLDivElement>(props: Props) {
  const containerRef = React.useRef<(T | null)[]>([]);
  const {
    scrollTriggerAction = "play none none none",
    scrollTriggerStart = "top 80%",
    modifier,
  } = props;
  React.useEffect(() => {
    containerRef.current.forEach((item, index) => {
      if (item) {
        gsap.from(item, {
          opacity: 0,
          y: 100,
          duration: 1.5,
          ease: "power1.out",
          delay: index * 0.1,
          scrollTrigger: {
            trigger: item as any,
            start: scrollTriggerStart,
            toggleActions: scrollTriggerAction,
          },
          ...modifier?.(index),
        });
      }
    });
  }, []);

  return { containerRef };
}

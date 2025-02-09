import React from "react";
import gsap from "gsap";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";

interface ScrollContextType {
  navRef: React.RefObject<HTMLDivElement | null>;

  scrollToSection: (id: string) => void;
}

interface Props {
  children?: React.ReactNode;
}

const ScrollContext = React.createContext<ScrollContextType>(undefined as any);
gsap.registerPlugin(ScrollToPlugin);

export function ScrollProvider(props: Props) {
  const navRef = React.useRef<HTMLDivElement>(null);
  const scrollToSection = React.useCallback(
    (id: string) => {
      const targetElement =
        (document.getElementById(id) as HTMLDivElement)?.getBoundingClientRect()
          .top + window.scrollY;
      const nav = navRef?.current?.offsetHeight || 0;

      if (targetElement) {
        gsap.to(window, {
          duration: 1,
          scrollTo: targetElement ? targetElement - nav : targetElement + nav,
          ease: "power2.out",
        });
      }
    },
    [navRef],
  );
  return (
    <ScrollContext.Provider
      value={{
        navRef,
        scrollToSection,
      }}
    >
      {props.children}
    </ScrollContext.Provider>
  );
}

export function useScrollContext() {
  const context = React.useContext(ScrollContext);

  return context;
}

"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { RouteEnum } from "../../utils/route-list";
import Logo from "../modules/components/logo";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/all";

type Route = {
  label: string;
  route: RouteEnum;
};

const routes: Route[] = [
  { label: "Home", route: RouteEnum.Home },
  { label: "Features", route: RouteEnum.Features },
  { label: "Contact", route: RouteEnum.CTA },
];

gsap.registerPlugin(ScrollToPlugin);

export default function Navbar() {
  const [mounted, setMounted] = useState<boolean>(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSection = useCallback(
    (id: string) => {
      const targetElement =
        (document.getElementById(id) as HTMLDivElement)?.getBoundingClientRect()
          .top + window.scrollY;
      const nav = navRef?.current?.offsetHeight || 0;
      console.log(targetElement, nav);
      if (targetElement) {
        gsap.to(window, {
          duration: 1,
          scrollTo: targetElement - nav,
          ease: "power2.out",
        });
      }
    },
    [navRef],
  );

  if (!mounted) return null;

  return (
    <nav
      ref={navRef}
      id="navbar"
      className="bg-black z-10 fixed w-full top-0 left-0 flex justify-center items-center"
    >
      <div className="max-w-xl md:max-w-screen-2xl flex gap-10 items-center py-4 px-2 sm:px-20 sm:py-6 lg:py-8 justify-between flex-1">
        <Logo />
        <ul className="flex gap-8 lg:gap-10 justify-center">
          {routes.map((route, index) => (
            <li
              key={`route-${index}`}
              className="font-primary text-sm font-semibold cursor-pointer"
              onClick={() => scrollToSection(route.route)}
            >
              {route.label}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

"use client";

import React from "react";
import { RouteEnum } from "../../utils/route-list";
import Logo from "../modules/components/logo";
import { useScrollContext } from "@/hooks/use-scroll-to";

type Route = {
  label: string;
  route: RouteEnum;
};

const routes: Route[] = [
  { label: "Home", route: RouteEnum.Home },
  { label: "Features", route: RouteEnum.Features },
  { label: "Popular Collection", route: RouteEnum.Populars },
  { label: "Contact", route: RouteEnum.CTA },
];

export default function Navbar() {
  const { navRef, scrollToSection } = useScrollContext();

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
              role="button"
            >
              {route.label}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

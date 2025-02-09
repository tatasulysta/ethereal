"use client";

import React from "react";
import Logo from "../../modules/components/logo";
import { useScrollContext } from "@/hooks/use-scroll-to";
import { ROUTE } from "./route";
import Dropdown from "./dropdown-menu";
import Link from "./link";

export default function Navbar() {
  const { navRef } = useScrollContext();
  return (
    <nav
      ref={navRef}
      id="navbar"
      className="bg-black z-10 fixed w-full top-0 left-0 flex justify-center items-center"
    >
      <div className="max-w-xl md:max-w-screen-2xl flex gap-10 items-center py-4 px-2 sm:px-6 sm:py-6  justify-between flex-1">
        <Logo />
        <ul className="flex gap-8 lg:gap-10 justify-center max-md:hidden font-semibold">
          {ROUTE.map((route, index) => (
            <Link key={`route-lg-${index}`} {...route} />
          ))}
        </ul>
        <Dropdown />
      </div>
    </nav>
  );
}

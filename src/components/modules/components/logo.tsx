import { useScrollContext } from "@/hooks/use-scroll-to";
import { RouteEnum } from "@/utils/route-list";
import React from "react";

export default function Logo() {
  const { scrollToSection } = useScrollContext();
  return (
    <p
      className="font-tertiary text-xl sm:text-2xl md:text-3xl col-span-1  text-white"
      role="button"
      onClick={() => scrollToSection(RouteEnum.Home)}
    >
      Ethereal
    </p>
  );
}

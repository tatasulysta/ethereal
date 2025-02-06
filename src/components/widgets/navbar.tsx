import React from "react";
import { RouteEnum } from "../../utils/route-list";
type Route = {
  label: string;
  route: RouteEnum;
};

const routes: Route[] = [
  {
    label: "Home",
    route: RouteEnum.Home,
  },
  {
    label: "Explore",
    route: RouteEnum.Explore,
  },
  {
    label: "Contact",
    route: RouteEnum.Contact,
  },
];

export default function Navbar() {
  return (
    <nav className="flex gap-10 items-center py-4 sm:py-6 lg:py-8">
      <p className="font-secondary xs:text-xl sm:text-2xl md:text-3xl">
        Ethereal
      </p>
      <ul className="flex gap-8 lg:gap-10 flex-1 justify-center">
        {routes.map((route, index) => (
          <li
            key={`route-${index}`}
            className="font-primary text-sm font-semibold"
          >
            {route.label}
          </li>
        ))}
      </ul>
    </nav>
  );
}

import React from "react";
import { RouteEnum } from "../../utils/route-list";
import Logo from "../modules/components/logo";
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
    <nav className=" bg-black z-10 fixed w-full top-0 left-0 flex justify-center items-center ">
      <div className="max-w-xl md:max-w-screen-2xl flex gap-10 items-center py-4 px-2 sm:px-20  sm:py-6 lg:py-8 justify-between flex-1">
        <Logo />
        <ul className="flex gap-8 lg:gap-10 justify-center">
          {routes.map((route, index) => (
            <li
              key={`route-${index}`}
              className="font-primary text-sm font-semibold"
            >
              {route.label}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

import React from "react";
import { RouteEnum } from "../../utils/route-list";
import Logo from "../modules/components/logo";
import Link from "next/link";

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
    label: "Features",
    route: RouteEnum.Features,
  },
  {
    label: "Contact",
    route: RouteEnum.CTA,
  },
];

export default function Navbar() {
  const navRef = React.useRef(null);
  React.useEffect(() => {
    import("gsap").then((gsap) => {
      import("gsap/ScrollTrigger").then((ScrollTrigger) => {
        gsap.default.registerPlugin(ScrollTrigger.default);

        let lastScroll = 0;

        ScrollTrigger.default.create({
          start: "top top",
          end: "bottom bottom",
          onUpdate: (self) => {
            const currentScroll = self.scroll();
            if (currentScroll > lastScroll && currentScroll > 100) {
              gsap.default.to(navRef.current, {
                y: -100,
                duration: 0.3,
                ease: "power2.out",
              });
            } else {
              gsap.default.to(navRef.current, {
                y: 0,
                duration: 0.3,
                ease: "power2.out",
              });
            }
            lastScroll = currentScroll;
          },
        });
      });
    });
  }, []);

  return (
    <nav
      className=" bg-black z-10 fixed w-full top-0 left-0 flex justify-center items-center "
      ref={navRef}
    >
      <div className="max-w-xl md:max-w-screen-2xl flex gap-10 items-center py-4 px-2 sm:px-20  sm:py-6 lg:py-8 justify-between flex-1">
        <Logo />
        <ul className="flex gap-8 lg:gap-10 justify-center">
          {routes.map((route, index) => (
            <li
              key={`route-${index}`}
              className="font-primary text-sm font-semibold"
            >
              <Link href={`#${route.route}`}>{route.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

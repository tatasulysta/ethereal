import React from "react";
import Subtitle from "../../components/subtitle";
import { BiddingIcon, MarketIcon, MonitoringIcon } from "@/assets";
import { RouteEnum } from "@/utils/route-list";
import gsap from "gsap";
import useAnimationEntrance from "@/hooks/use-animation-entrance";

const DEFAULT_MODIFIER = {
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  stagger: 2,
};
export default function PointSection() {
  const { containerRef } = useAnimationEntrance<HTMLLIElement>({
    modifier(index) {
      switch (index) {
        case 0:
          return {
            x: -200,
            ...DEFAULT_MODIFIER,
          };
        case 1:
          return {
            z: 200,
            ...DEFAULT_MODIFIER,
          };
        default:
          return {
            x: 200,
            ...DEFAULT_MODIFIER,
          };
      }
    },
  });
  return (
    <section
      className="my-28 md:my-52 flex flex-col items-center justify-center"
      id={RouteEnum.Features}
    >
      <Subtitle>Game-Changer For Your Investment</Subtitle>
      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-12 mt-7 flex-1 ">
        <li
          className="flex justify-center flex-col items-center gap-6"
          ref={(el) => {
            containerRef.current[0] = el;
          }}
        >
          <MarketIcon size={62} />
          <p className="text-lg sm:text-xl md:text-xl font-primary text-center">
            Top-selling NFTs
          </p>
        </li>
        <li
          className="flex justify-center flex-col items-center gap-6"
          ref={(el) => {
            containerRef.current[1] = el;
          }}
        >
          <MonitoringIcon size={62} />
          <p className="text-lg sm:text-xl md:text-xl font-primary text-center">
            Limited edition drops
          </p>
        </li>
        <li
          className="flex justify-center flex-col items-center gap-6 sm:col-span-2 lg:col-span-1"
          ref={(el) => {
            containerRef.current[2] = el;
          }}
        >
          <BiddingIcon size={62} />
          <p className="text-lg sm:text-xl md:text-xl font-primary text-center">
            Upcoming auctions
          </p>
        </li>
      </ul>
    </section>
  );
}

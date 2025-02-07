import React from "react";
import Subtitle from "../../components/subtitle";
import { BiddingIcon, MarketIcon, MonitoringIcon } from "@/assets";

export default function PointSection() {
  return (
    <section className="mt-52 mb-52 flex flex-col items-center justify-center">
      <Subtitle>Game-Changer For Your Investment</Subtitle>
      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-12 mt-7 flex-1 ">
        <li className="flex justify-center flex-col items-center gap-6">
          <MarketIcon size={62} />
          <p className="text-lg sm:text-xl md:text-xl font-primary text-center">
            Top-selling NFTs
          </p>
        </li>
        <li className="flex justify-center flex-col items-center gap-6">
          <MonitoringIcon size={62} />
          <p className="text-lg sm:text-xl md:text-xl font-primary text-center">
            Limited edition drops
          </p>
        </li>
        <li className="flex justify-center flex-col items-center gap-6 sm:col-span-2 lg:col-span-1">
          <BiddingIcon size={62} />
          <p className="text-lg sm:text-xl md:text-xl font-primary text-center">
            Upcoming auctions
          </p>
        </li>
      </ul>
    </section>
  );
}

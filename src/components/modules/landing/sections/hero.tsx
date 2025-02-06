import React from "react";

export default function HeroSection() {
  return (
    <div className="flex items-center flex-col gap-5 md:gap-7">
      <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-5xl font-tertiary text-center lg:max-w-screen-md mt-10 md:mt-20">
        Discover the{" "}
        <strong className="font-normal text-primary">Future</strong> of
        Decentralized
        <strong className="font-normal text-primary"> Art & Finance</strong>
      </h1>
      <h2 className="text-gray-400 font-primary text-sm">
        Start Making Money with NFTs
      </h2>
    </div>
  );
}

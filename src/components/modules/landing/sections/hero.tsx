import Button from "@/components/common/button";
import Image from "next/image";
import React from "react";

import Collection1 from "@/assets/nft-1.png";
import Collection2 from "@/assets/nft-2.png";
import Collection3 from "@/assets/nft-3.png";
import CutEdge from "@/components/common/cut-edge";

export default function HeroSection() {
  return (
    <section>
      <div className="flex items-center flex-col gap-6 md:gap-10 mt-10 md:mt-20">
        <h1 className="font-primary text-gray-300 text-center text-xs md:text-base">
          &rdquo;
          <span className="font-semibold font-primary">Ethereal</span>:
          empowering collectors with access to unique digital treasures&ldquo;
        </h1>
        <div className="flex flex-col gap-2">
          <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-5xl font-tertiary text-center lg:max-w-screen-md">
            Discover the{" "}
            <strong className="font-normal text-primary">Future</strong> of
            Decentralized
            <strong className="font-normal text-primary"> Art & Finance</strong>
          </h2>
          <h3 className="text-gray-400 font-primary text-sm text-center">
            Start Making Money with NFTs
          </h3>
        </div>
      </div>

      <div className="mt-8 sm:mt-14 flex justify-center">
        <Button variant="primary" size="small">
          Let&apos;s Get Started
        </Button>
      </div>
      <div className="flex flex-1 justify-center">
        <div className="grid grid-cols-10 mt-10 sm:mt-20 gap-4 md:gap-9 max-w-sm  md:max-w-2xl">
          <div className="relative aspect-square col-span-3">
            <CutEdge filled={false} colors="weak" className="p-2">
              <CutEdge filled={false} colors="weak">
                <Image src={Collection1} alt="nft-1-collection" />
              </CutEdge>
            </CutEdge>
          </div>
          <div className="relative aspect-square col-span-4">
            <CutEdge filled={false} colors="weak" className="p-2">
              <CutEdge filled={false} colors="weak">
                <Image src={Collection2} alt="nft-2-collection" />
              </CutEdge>
            </CutEdge>
          </div>
          <div className="relative aspect-square col-span-3">
            <CutEdge filled={false} colors="weak" className="p-2">
              <CutEdge filled={false} colors="weak">
                <Image src={Collection3} alt="nft-3-collection" />
              </CutEdge>
            </CutEdge>
          </div>
        </div>
      </div>
    </section>
  );
}

import Button from "@/components/common/button";
import Image, { StaticImageData } from "next/image";
import React from "react";

import CutEdge from "@/components/common/cut-edge";
import { Collection1, Collection2, Collection3, Gradient } from "@/assets";
import classNames from "classnames";
import { landingStyles } from "../styles.css";
import { RouteEnum } from "@/utils/route-list";
import useAnimationEntrance from "@/hooks/use-animation-entrance";
import gsap from "gsap";
import { useScrollContext } from "@/hooks/use-scroll-to";

function ImageContainer(props: {
  small?: boolean;
  src: StaticImageData;
  alt: string;
  ref?: React.Ref<HTMLDivElement>;
}) {
  const { small, src, alt, ref } = props;
  return (
    <div
      className={classNames(
        "relative aspect-square",
        small ? "col-span-3" : "col-span-4",
        "min-h-[100px]",
      )}
      ref={ref}
    >
      <CutEdge filled={false} colors="weak" className="p-2">
        <CutEdge filled={false} colors="weak">
          <Image src={src} alt={alt} />
        </CutEdge>
      </CutEdge>
    </div>
  );
}

export default function HeroSection() {
  const { containerRef } = useAnimationEntrance({});
  const { scrollToSection } = useScrollContext();
  const btnRef = React.useRef<HTMLButtonElement | null>(null);
  const onClick = () => {
    gsap.to(btnRef.current, {
      duration: 0.2,
      opacity: 0.5,
      ease: "power1.out",
      yoyo: true,
      repeat: 1,
    });
    scrollToSection(RouteEnum.Populars);
  };

  return (
    <section id={RouteEnum.Home}>
      <div
        className={classNames(
          "w-96 h-auto sm:w-full absolute md:-top-[20%] left-0",
          landingStyles.gradient,
        )}
      >
        <Image src={Gradient} alt="gradient" fill />
      </div>
      <div className="flex items-center flex-col gap-6 md:gap-10 pt-32 md:mt-20">
        <h1 className="font-primary text-gray-300 text-center text-xs md:text-base">
          &rdquo;
          <span className="font-semibold font-primary">Ethereal</span>:
          empowering collectors with access to unique digital treasures&ldquo;
        </h1>
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-tertiary text-center lg:max-w-screen-md">
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

      <div className="mt-10 sm:mt-14 flex justify-center">
        <Button
          variant="primary"
          size="small"
          onClick={onClick}
          ref={btnRef}
          className="px-2"
        >
          Let&apos;s Get Started
        </Button>
      </div>
      <div className="flex flex-1 justify-center">
        <div className="grid grid-cols-10 mt-10 sm:mt-20 gap-4 md:gap-9 max-w-sm  md:max-w-2xl">
          <ImageContainer
            src={Collection1}
            small
            alt="nft-1-collection"
            ref={(el) => {
              containerRef.current[0] = el;
            }}
          />
          <ImageContainer
            src={Collection2}
            alt="nft-2-collection"
            ref={(el) => {
              containerRef.current[1] = el;
            }}
          />
          <ImageContainer
            src={Collection3}
            small
            alt="nft-3-collection"
            ref={(el) => {
              containerRef.current[2] = el;
            }}
          />
        </div>
      </div>
    </section>
  );
}

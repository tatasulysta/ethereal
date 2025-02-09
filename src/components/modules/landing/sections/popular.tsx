import { RouteEnum } from "@/utils/route-list";
import React from "react";
import Subtitle from "../../components/subtitle";
import {
  Collection10,
  Collection11,
  Collection12,
  Collection13,
  Collection3,
  Collection4,
  Collection5,
  Collection6,
  Collection7,
  Collection8,
  Collection9,
} from "@/assets";
import Image, { StaticImageData } from "next/image";
import classNames from "classnames";
import CutEdge from "@/components/common/cut-edge";
import gsap from "gsap";

const IMAGES = [
  Collection3,
  Collection5,
  Collection7,
  Collection10,
  Collection11,
  Collection12,
  Collection13,
  Collection4,
  Collection6,
  Collection8,
  Collection9,
];

interface CollectionProps {
  src: StaticImageData;
  alt: string;
  ref?: React.Ref<HTMLDivElement>;
}
function ImageCollection(props: CollectionProps) {
  const { alt, src, ref } = props;
  return (
    <CutEdge filled={false} className="p-2 max-md:max-w-[100px]" ref={ref}>
      <CutEdge filled={false}>
        <div className={classNames("aspect-square relative col-span-1")}>
          <Image src={src} fill alt={alt} />
        </div>
      </CutEdge>
    </CutEdge>
  );
}

export default function PopularSection() {
  const imagesRef = React.useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const ctx = gsap.context(() => {
      imagesRef.current.forEach((img, index) => {
        gsap.to(img, {
          yPercent: index % 2 === 0 ? -30 : 30,
          ease: "power1.in",
          stagger: 2,
          scrollTrigger: {
            trigger: img,
            start: "top bottom",
            end: "bottom top",
            scrub: 2,
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="my-28 md:my-52 flex flex-col" id={RouteEnum.Populars}>
      <Subtitle>
        Popular <span className="text-primary">Collections</span>
      </Subtitle>
      <div
        className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 w-full items-center gap-10 mt-20"
        ref={containerRef}
      >
        {IMAGES.map((src, index) => (
          <ImageCollection
            src={src}
            alt={`collection-${index}`}
            ref={(el) => {
              imagesRef.current[index] = el;
            }}
          />
        ))}
      </div>
    </section>
  );
}

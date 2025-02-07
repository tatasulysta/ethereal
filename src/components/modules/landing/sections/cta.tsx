import Button from "@/components/common/button";
import CutEdge from "@/components/common/cut-edge";
import React from "react";

export default function CTASection() {
  return (
    <section className="mb-20 flex justify-center">
      <CutEdge
        filled={false}
        className="p-4 max-w-xl md:max-w-screen-xxl"
        colors="weak"
      >
        <div className="flex flex-col gap-8 justify-center py-4  sm:py-12 sm:px-8 bg-slate-900 ">
          <h4 className="text-xl md:text-3xl font-tertiary text-center">
            Never <span className="text-primary">Miss</span> a Drop!
          </h4>
          <p className="text-center font-primary text-sm sm:text-base">
            "Stay up to date with NFT launches and elevate your NFT investments
            to the next level!"
          </p>

          <div className="flex gap-8 max-sm:items-center flex-col sm:flex-row">
            <CutEdge filled={false} className="flex-1 w-full">
              <input
                type="email"
                className="bg-transparent py-3 px-4 w-full"
                placeholder="e.g user@gmail.com"
              />
            </CutEdge>
            <Button className="max-w-32">Subscribe</Button>
          </div>
        </div>
      </CutEdge>
    </section>
  );
}

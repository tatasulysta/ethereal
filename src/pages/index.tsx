"use client";
import { DM_Sans, Merriweather_Sans, Tomorrow } from "next/font/google";
import classNames from "classnames";
import LandingPage from "@/components/modules/landing";
import React from "react";
const merriweatherSans = Merriweather_Sans({
  variable: "--font-merriweather-sans",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const tomorrow = Tomorrow({
  variable: "--font-tomorrow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function Home() {
  return (
    <div
      className={classNames(
        merriweatherSans.variable,
        dmSans.variable,
        tomorrow.variable,
        "bg-black",
      )}
    >
      <div className="px-2 sm:px-8 md:px-20 lg:px-36">
        <LandingPage />
      </div>
    </div>
  );
}

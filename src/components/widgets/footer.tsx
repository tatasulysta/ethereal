import { Mailbox } from "@phosphor-icons/react";
import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="grid grid-cols-2 max-w-screen-2xl">
        <p className="font-secondary xs:text-xl sm:text-2xl md:text-3xl col-span-1">
          Ethereal
        </p>

        <div className="self-end">
          <div className="">
            <p className="font-primary text-large md:text-xl font-semibold">
              Company
            </p>
            <ul className="font-primary text-base md:text-large">
              <li>Features</li>
              <li>Join Us</li>
            </ul>
          </div>
          <div className="">
            <p className="font-primary text-large md:text-xl font-semibold">
              Company
            </p>
            <ul className="font-primary text-base md:text-large">
              <li>Features</li>
              <li>Join Us</li>
            </ul>
          </div>
        </div>
      </div>

      <p className="text-xs font-medium w-full flex justify-center py-2 font-primary">
        © {new Date().getFullYear()} Ethereal. All rights reserved.
      </p>
    </footer>
  );
}

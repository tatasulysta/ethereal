import { Mailbox } from "@phosphor-icons/react";
import React from "react";

export default function Footer() {
  return (
    <footer>
      <p className="text-md font-semibold">Contact Us</p>
      <Mailbox />
      <p className="text-xs font-medium w-full flex justify-center py-2 font-primary">
        © {new Date().getFullYear()} Ethereal. All rights reserved.
      </p>
    </footer>
  );
}

import Link from "next/link";
import React from "react";
import { DiscordLogo, InstagramLogo, XLogo } from "@phosphor-icons/react";
import { colors } from "@/utils/colors";
import Button from "../common/button";
import Logo from "../modules/components/logo";

function IconLink({
  children,
  link,
}: {
  children: (params: { size: number; color: string }) => React.ReactNode;
  link: string;
}) {
  return (
    <Button size="small" variant="secondary">
      <Link href={link} target="_blank">
        {children({ size: 22, color: colors.white })}
      </Link>
    </Button>
  );
}
export default function Footer() {
  return (
    <footer className="flex w-full justify-center flex-col items-center">
      <div className="max-w-xl md:max-w-screen-xl grid grid-cols-1 md:grid-cols-2 gap-4 px-2 pb-10 md:pb-20 items-center content-between w-full flex-1">
        <div>
          <Logo />
          <p className="text-gray-400 font-primary text-sm max-w-96 pt-2">
            Unlock your digital destiny. Elevate your investment to the next
            level.
          </p>
          <div className="flex gap-2 items-center mt-2">
            <IconLink link={"https://instagram.com"}>
              {(params) => <InstagramLogo {...params} />}
            </IconLink>
            <IconLink link={"https://x.com"}>
              {(params) => <XLogo {...params} />}
            </IconLink>
            <IconLink link={"https://discord.com"}>
              {(params) => <DiscordLogo {...params} />}
            </IconLink>
          </div>
        </div>

        <div className="lg:mt-0 lg:justify-self-center flex flex-col md:flex-row gap-4 md:gap-12 lg:justify-between ">
          <div className="">
            <p className="font-primary text-large font-semibold">Company</p>
            <ul className="font-primary text-sm md:text-large">
              <li>Features</li>
              <li>Join Us</li>
            </ul>
          </div>
          <div className="">
            <p className="font-primary text-large font-semibold">Information</p>
            <ul className="font-primary text-sm md:text-large">
              <li>ethereal.support@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>

      <p className="text-xs font-medium w-full flex justify-center py-4 font-primary border-primary border-solid border-t-2">
        © {new Date().getFullYear()} Ethereal. All rights reserved.
      </p>
    </footer>
  );
}

import { DM_Sans, Merriweather_Sans } from "next/font/google";
import classNames from "classnames";
import Navbar from "@/components/widgets/navbar";
import Footer from "@/components/widgets/footer";

const merriweatherSans = Merriweather_Sans({
  variable: "--font-merriweather-sans",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={classNames(
        merriweatherSans.variable,
        dmSans.variable,
        "bg-black",
      )}
    >
      <div className="px-2 sm:px-8 md:px-20 lg:px-36">
        <Navbar />
        <div className="bg-white w-100 h-20"></div>
        <Footer />
      </div>
    </div>
  );
}

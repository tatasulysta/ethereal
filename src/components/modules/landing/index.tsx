// import Footer from "@/components/widgets/footer";
import Navbar from "@/components/widgets/navbar";
import HeroSection from "./sections/hero";
import PointSection from "./sections/point";
import CTASection from "./sections/cta";
import Footer from "@/components/widgets/footer";
import Image from "next/image";
import { GradientTwo } from "@/assets";
import classNames from "classnames";
import { landingStyles } from "./styles.css";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <div className="relative">
        <PointSection />
        <CTASection />
        <div
          className={classNames(
            "absolute h-full  md:h-full w-1/2  -top-1/2 md:top-0 md:-right-0 -right-1/3",
            landingStyles.sphere,
          )}
        >
          <Image src={GradientTwo} alt="gradient" fill />
        </div>
        <div
          className={classNames(
            "absolute right-0 top-1/2 inset-1 -translate-x-1/2 -translate-y-1/2",
            landingStyles.sphere,
          )}
        >
          <Image src={GradientTwo} alt="gradient" fill />
        </div>
      </div>

      {/* <div className="bg-white w-100 h-20"></div> */}
      <Footer />
    </>
  );
}

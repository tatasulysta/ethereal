// import Footer from "@/components/widgets/footer";
import Navbar from "@/components/widgets/header/navbar";
import HeroSection from "./sections/hero";
import PointSection from "./sections/point";
import CTASection from "./sections/cta";
import Footer from "@/components/widgets/footer";
import Image from "next/image";
import { GradientTwo } from "@/assets";
import classNames from "classnames";
import { landingStyles } from "./styles.css";
import PopularSection from "./sections/popular";
import { ScrollProvider } from "@/hooks/use-scroll-to";

export default function LandingPage() {
  return (
    <ScrollProvider>
      <Navbar />
      <HeroSection />
      <div className="relative">
        <PointSection />
        <PopularSection />
        {/* <div
          className={classNames(
            "absolute h-full  md:h-full w-1/2  -top-16 md:top-0 md:-right-0 -right-1/3",
            landingStyles.sphere,
          )}
        >
          <Image src={GradientTwo} alt="gradient" fill />
        </div> */}
      </div>
      <CTASection />

      <Footer />
    </ScrollProvider>
  );
}

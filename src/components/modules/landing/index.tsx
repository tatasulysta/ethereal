// import Footer from "@/components/widgets/footer";
import Navbar from "@/components/widgets/navbar";
import HeroSection from "./sections/hero";
import PointSection from "./sections/point";
import CTASection from "./sections/cta";
import Footer from "@/components/widgets/footer";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <PointSection />
      <CTASection />
      {/* <div className="bg-white w-100 h-20"></div> */}
      <Footer />
    </>
  );
}

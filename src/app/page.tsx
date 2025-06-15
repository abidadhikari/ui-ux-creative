import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import LatestProject from "@/components/LatestProject";
import StepsSection from "@/components/StepsSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <LatestProject />
      <StepsSection />
      <Footer />
    </div>
  );
}

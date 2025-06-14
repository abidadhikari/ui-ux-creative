import HeroSection from "@/components/HeroSection";
import LatestProject from "@/components/LatestProject";
import MarqueeSection from "@/components/MarqueeSection";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <LatestProject />
      <MarqueeSection />
    </div>
  );
}

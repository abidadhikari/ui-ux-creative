import CursorFollower from "@/components/CursorFollower";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import LatestProject from "@/components/LatestProject";
import NavBar from "@/components/NavBar";
import StepsSection from "@/components/StepsSection";

export default function Home() {
  return (
    <div>
      <CursorFollower />
      <NavBar />
      <HeroSection />
      <LatestProject />
      <StepsSection />
      <Footer />
    </div>
  );
}

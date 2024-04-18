import HeroSection from "@/components/Homepage/HeroSection";
import { heroData } from "@/config/homepage/heroData";

export default function Home() {
  return (
    <main className="flex flex-col items-center  p-24">
      <HeroSection heroProps={heroData}></HeroSection>
    </main>
  );
}

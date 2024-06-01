import HeroSection from "./_home-page-sections/HeroSection";
import StillDecideSection from "./_home-page-sections/StillDecideSection";

export default function Home() {
  return (
    <main className="grow flex flex-col gap-y-16">
      <HeroSection />
      <StillDecideSection />
    </main>
  );
}

import HeroSection from "./_home-page-sections/HeroSection";
import StillDecideSection from "./_home-page-sections/StillDecideSection";
import OrderKitchenSection from "./_home-page-sections/OrderKitchenSection";
import OurWorksSection from "./_home-page-sections/OurWorksSection";
import OurAdvantagesSection from "./_home-page-sections/OurAdvantagesSection";

export default function Home() {
  return (
    <main className="grow flex flex-col gap-y-16">
      <HeroSection />
      <StillDecideSection />
      <OrderKitchenSection />
      <OurWorksSection />
      <OurAdvantagesSection />
    </main>
  );
}

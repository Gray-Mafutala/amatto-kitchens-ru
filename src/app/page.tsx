import HeroSection from "./_home-page-sections/HeroSection";
import StillDecideSection from "./_home-page-sections/StillDecideSection";
import OrderKitchenSection from "./_home-page-sections/OrderKitchenSection";
import OurWorksSection from "./_home-page-sections/OurWorksSection";

export default function Home() {
  return (
    <main className="grow flex flex-col gap-y-16">
      <HeroSection />
      <StillDecideSection />
      <OrderKitchenSection />
      <OurWorksSection />
    </main>
  );
}

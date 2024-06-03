import HeroSection from "./_home-page-sections/HeroSection";
import StillDecideSection from "./_home-page-sections/StillDecideSection";
import FourMistakesSection from "./_home-page-sections/FourMistakesSection";
import OrderKitchenSection from "./_home-page-sections/OrderKitchenSection";
import OurWorksSection from "./_home-page-sections/OurWorksSection";
import OurAdvantagesSection from "./_home-page-sections/OurAdvantagesSection";
import BuyInInstallmentsSection from "./_home-page-sections/BuyInInstallmentsSection";
import GetFreeKitchenDesignSection from "./_components/common/GetFreeKitchenDesignSection";
import BlogSection from "./_home-page-sections/BlogSection";
import AboutUsSection from "./_home-page-sections/AboutUsSection";

export default function Home() {
  return (
    <main
      className="grow flex flex-col gap-y-6 mobileXL:gap-y-8 tablet:gap-y-12
      laptop:gap-y-16"
    >
      <HeroSection />
      <StillDecideSection />
      <FourMistakesSection />
      <OrderKitchenSection />
      <OurWorksSection />
      <OurAdvantagesSection />
      <BuyInInstallmentsSection />
      <AboutUsSection />
      <GetFreeKitchenDesignSection />
      <BlogSection />
    </main>
  );
}

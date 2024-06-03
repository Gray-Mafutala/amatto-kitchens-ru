import React from "react";

const HeroSection = () => {
  return (
    <section
      className="section-full-w py-40 tablet:py-32 bg-primary-yellow
      bg-subscription-section-mask bg-no-repeat bg-center bg-cover"
    >
      <h1
        className="uppercase font-playfair-display text-[32px] mobileL:text-4xl
        mobileXL:text-6xl tablet:text-7xl font-extrabold text-center"
      >
        Блог
      </h1>
    </section>
  );
};

export default HeroSection;

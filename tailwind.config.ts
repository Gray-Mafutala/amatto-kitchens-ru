import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-yellow": "#ffcc29",
        "dark-gray": "#39373a",
      },

      fontFamily: {
        commissioner: ["var(--font-commissioner)"],
        "playfair-display": ["var(--font-playfair-display)"],
      },

      backgroundImage: {
        "order-kitchen":
          'url("../assets/images/home-page__bg-order-kitchen.png")',
        "subscription-section-mask":
          'url("../assets/images/subscription-bg-mask.svg")',
      },

      animation: {
        smoothAppearHorizontal: "smooth-appear-horizontal .4s ease forwards",
        changeBgHeroSection:
          "change-bg-hero-section 7.5s ease-in infinite alternate",
      },

      keyframes: {
        "smooth-appear-horizontal": {
          to: {
            opacity: "1",
            transform: "translateX(0)",
          },
        },

        "change-bg-hero-section": {
          // bg-1
          "0%, 33%": {
            backgroundImage:
              'url("../assets/images/home-page__bg-1-hero-section.jpg")',
          },

          // bg-2
          "34%, 67%": {
            backgroundImage:
              'url("../assets/images/home-page__bg-2-hero-section.jpg")',
          },

          // bg-3
          "68%, 100%": {
            backgroundImage:
              'url("../assets/images/home-page__bg-3-hero-section.jpg")',
          },
        },
      },

      screens: {
        mobile: "320px",
        mobileM: "475px",
        mobileL: "580px",
        mobileXL: "640px",
        tablet: "768px",
        tabletM: "896px",
        tabletL: "920px",
        laptop: "1024px",
        laptopM: "1200px",
        laptopL: "1340px",
        desktop: "1480px",
      },
    },
  },
  plugins: [],
};
export default config;

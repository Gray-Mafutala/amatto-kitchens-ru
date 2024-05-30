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

      backgroundImage: {
        "bg-hero-section":
          'url("../assets/images/home-page__bg-hero-section.jpg")',
      },

      fontFamily: {
        commissioner: ["var(--font-commissioner)"],
        "playfair-display": ["var(--font-playfair-display)"],
      },

      animation: {
        smoothAppearHorizontal: "smooth-appear-horizontal .4s ease forwards",
      },

      keyframes: {
        "smooth-appear-horizontal": {
          to: {
            opacity: "1",
            transform: "translateX(0)",
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

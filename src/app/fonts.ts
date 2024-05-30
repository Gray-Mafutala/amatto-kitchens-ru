import { Commissioner, Playfair_Display } from "next/font/google";

export const playfairDisplay = Playfair_Display({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["cyrillic"],
  display: "swap",
  variable: "--font-playfair-display",
});

export const commissioner = Commissioner({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["cyrillic"],
  display: "swap",
  variable: "--font-commissioner",
});

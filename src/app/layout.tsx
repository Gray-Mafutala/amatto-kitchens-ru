import type { Metadata } from "next";
import { commissioner, playfairDisplay } from "./fonts";
import "./globals.css";
import Header from "./_components/layout/Header";
import Footer from "./_components/layout/Footer";

export const metadata: Metadata = {
  title: "Amatto Kitchens",
  description:
    "Custom kitchen designs, offering personalized and elegant solutions to meet unique client needs",
  icons: {
    icon: "/amatto-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${commissioner.variable} ${playfairDisplay.variable} antialiased
        min-h-screen flex flex-col justify-between responsive-px`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

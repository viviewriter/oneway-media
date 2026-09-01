import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

const dm = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
  weight: ["300", "400", "600"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  style: ["italic"],
});

export const metadata: Metadata = {
  title: "OneWay Media — Design. Print. Brand.",
  description:
    "Nairobi's trusted partner for graphic design, large format printing, vehicle branding, signage, and events. 10+ years turning ideas into reality.",
  keywords: "printing nairobi, branding kenya, graphic design nairobi, vehicle branding, signage kenya",
  openGraph: {
    title: "OneWay Media — Design. Print. Brand.",
    description: "We make businesses look irresistibly good.",
    url: "https://onewaymedia.co.ke",
    siteName: "OneWay Media",
    locale: "en_KE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${bebas.variable} ${dm.variable} ${playfair.variable} font-dm antialiased`}>
        {children}
      </body>
    </html>
  );
}

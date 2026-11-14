import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Scarlet Ibis Escapes | Luxury Group Travel for Naples Ladies",
  description:
    "Curated luxury escapes for the ladies of Naples — every detail handled, every moment savored. Boutique group trips for women 50+ by Scarlet Ibis Travel.",
  openGraph: {
    title: "Scarlet Ibis Escapes",
    description:
      "Curated luxury escapes for the ladies of Naples — every detail handled, every moment savored.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <body className="font-body bg-cream text-charcoal antialiased">
        {children}
      </body>
    </html>
  );
}

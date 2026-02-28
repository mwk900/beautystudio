import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const headingSerif = Playfair_Display({
  variable: "--font-heading-serif",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const bodySans = DM_Sans({
  variable: "--font-body-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Velvet Bloom Studio | Luxury Colour and Styling",
  description:
    "Boutique salon appointments for colour, precision cuts and polished styling in Nottingham.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${headingSerif.variable} ${bodySans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

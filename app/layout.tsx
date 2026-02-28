import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const headingSerif = Cormorant_Garamond({
  variable: "--font-heading-serif",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const bodySans = Manrope({
  variable: "--font-body-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Premium Hair and Beauty Studio | Velvet Bloom",
  description:
    "Professional hair styling, colour and treatments in a welcoming salon environment.",
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

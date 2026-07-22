import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Instrument_Serif,
} from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Maison KEMEL",
  description: "Maison de services premium",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`
        ${geistSans.variable}
        ${geistMono.variable}
        ${instrumentSerif.variable}
        h-full
        antialiased
      `}
    >
      <body className="flex min-h-screen flex-col bg-[#F8F5F0] text-[#2D2D2D]">
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
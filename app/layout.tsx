import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Techwave Elecso",
  description: "Powering Your Business, Connecting Your Future with end-to-end power backup, network setups, and green energy solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable}`}>
        <Navbar />
        <main style={{ minHeight: 'calc(100vh - 350px)' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Niken Hapsari",
  description:
    "This is a personal website of Niken Hapsari. Consist of projects, blog and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head></head>{" "}
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

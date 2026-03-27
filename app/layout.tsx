import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  icons: {
    icon: '/logo/black-removebg-preview.png',
  },
  title: "Nestbotics | Automation Without Complexity",
  description: "Nestbotics provides robotic welding integration, programming, and automation support to manufacturers looking to improve productivity, consistency, and efficiency.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className={`${inter.className} min-h-full flex flex-col`}>
        <Navbar />
        <main className="flex-grow flex flex-col pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

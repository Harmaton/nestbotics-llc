import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  metadataBase: new URL('https://nestboticsllc.com'),

  icons: {
    icon: '/logo/logo.png',
    shortcut: '/logo/logo.png',
    apple: '/logo/logo.png',
  },

  title: {
    default: "Nestbotics — Robotic Welding Integration & Automation",
    template: "%s | Nestbotics",
  },

  description: "Nestbotics helps manufacturers integrate robotic welding systems — from programming and commissioning to ongoing support. Improve throughput, reduce rework, and scale with confidence.",

  keywords: [
    "robotic welding integration",
    "welding automation",
    "robotic programming",
    "manufacturing automation",
    "MIG TIG welding robots",
    "FANUC welding",
    "ABB robotic welding",
    "industrial automation",
    "weld cell integration",
  ],

  authors: [{ name: "Nestbotics", url: "https://nestboticsllc.com" }],
  creator: "Nestbotics",
  publisher: "Nestbotics",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nestboticsllc.com",
    siteName: "Nestbotics",
    title: "Nestbotics — Robotic Welding Integration & Automation",
    description: "Robotic welding integration, programming, and automation support for manufacturers. Improve throughput, reduce rework, and scale with confidence.",
    images: [
      {
        url: "/logo/logo.png",
        alt: "Nestbotics — Robotic Welding Integration",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Nestbotics — Robotic Welding Integration & Automation",
    description: "Robotic welding integration, programming, and automation support for manufacturers.",
    images: ["/logo/logo.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://nestboticsllc.com",
  },
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

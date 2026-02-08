import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "RevdCars — Peer-to-Peer Car Sharing",
  description:
    "Seattle's premier peer-to-peer car sharing platform. Rent premium electric vehicles instantly or share your car to earn extra income. Secure, sustainable, and community-driven.",
  keywords: ["car sharing", "peer to peer", "car rental", "electric vehicles", "Seattle", "EV rental"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

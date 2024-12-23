import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HeaderMenu from "@/components/Header";
import Footer from "@/components/Footer";
import AccordionComponent from "@/components/accordion";
import Categories from "@/components/Categories";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       <div className="flex flex-col min-h-screen">
       <div className="z-50">
       <HeaderMenu/>
       </div>
        <main className="">
        {children}
        </main>
        <Categories/>
        <Footer/>
       </div>
      </body>
    </html>
  );
}

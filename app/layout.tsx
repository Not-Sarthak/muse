import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DigitalHippo",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head></head>
      <body
        className={cn("relative h-full font-sans antialiased", inter.className)}
      >
        <Navbar />
        <main className="relative flex flex-col min-h-screen">
          <div className="flex-grow flex-1"> {children}</div>
        </main>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import BackgroundSpotlights from "@/components/Spotlight";
import Contact from "@/components/Contact";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chris Miller's Personal Website",
  description:
    "Personal Website for Chris Miller, here you can find links to my published projects, contact page and a blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const padding: string = "xl:px-56 lg:px-32 px-10";
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-darkred-background overflow-hidden`}
      >
        <Header padding={padding} />
        <main className={`flex flex-col min-h-screen ${padding}`}>
          {children}
        </main>
        <Contact />
      </body>
    </html>
  );
}

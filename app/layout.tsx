import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";



export const metadata: Metadata = {
  title: "Просто про AI",
  description: "Просто про AI",
};

export default function RootLayout({ children: children }: { children: React.ReactNode }) {
  return (
    <html lang="uk">
      <body className="bg-white text-black">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

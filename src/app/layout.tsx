import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { headerData } from "@/config/headerData";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CoinLiquidator",
  description: "Automate your Crypto exit strategy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header headerProps={headerData}></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}

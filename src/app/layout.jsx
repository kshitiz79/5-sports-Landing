import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "5 Sports Health",
  description: "India's first sports health and wellness platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/pp.png" type="image/png" />
      </head>
      <body className="bg-white">
        <Header />
        {children}
      </body>
    </html>
  );
}

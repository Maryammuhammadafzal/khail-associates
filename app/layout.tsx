import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css"

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100" , "200" , "300" , "400" , "500" , "600" , "700" , "800" ,"900"]
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100" , "200" , "300" , "400" , "500" , "600" , "700" , "800" ,"900"]
});

export const metadata: Metadata = {
  title: "Khail Associates",
  description: "Khail Associates delivers innovative architectural and design solutions for residential, commercial, and urban projects, combining creativity, functionality, and sustainability to shape inspiring spaces.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${inter.variable} antialiased w-full flex justify-center mx-auto h-auto bg-white dark:bg-black overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}

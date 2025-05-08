import type { Metadata } from "next";
import { Raleway, Open_Sans } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["400", "700"], // adjust weights as needed
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "700"], // adjust weights as needed
});

export const metadata: Metadata = {
  title: "Yuvabe",
  description:
    "Dive into a world where passion meets purpose, offering two unique paths: Yuvabe Education for hands-on learning and Yuvabe Studios for future-focused ...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.variable} ${openSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

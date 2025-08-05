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
  title: "Yuvabe - Work. Serve. Evolve",
  description:
    "Dive into a world where passion meets purpose, offering two unique paths: Yuvabe Education for hands-on learning and Yuvabe Studios for future-focused ...",
  openGraph: {
    title: "Yuvabe - Work. Serve. Evolve",
    description:
      "Dive into a world where passion meets purpose, offering two unique paths: Yuvabe Education for hands-on learning and Yuvabe Studios for future-focused ...",
    url: "https://yuvabe.com", // replace with your actual domain
    siteName: "Yuvabe",
    images: [
      {
        url: "https://yuvabe.com/images/logo.png", // replace with your logo URL
        width: 1200,
        height: 630,
        alt: "Yuvabe Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yuvabe - Work. Serve. Evolve",
    description:
      "Dive into a world where passion meets purpose, offering two unique paths: Yuvabe Education and Yuvabe Studios.",
    images: ["https://yuvabe.com/images/logo.png"], // same image URL
  },
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

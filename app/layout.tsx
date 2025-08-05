import type { Metadata } from "next";
import { Raleway, Open_Sans } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["400", "700"], 
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "700"], 
});

export const metadata: Metadata = {
  title: "Yuvabe - Work. Serve. Evolve",
  description:
    "Dive into a world where passion meets purpose, offering two unique paths: Yuvabe Education for hands-on learning and Yuvabe Studios for future-focused ...",
  openGraph: {
    title: "Yuvabe - Work. Serve. Evolve",
    description:
      "Dive into a world where passion meets purpose, offering two unique paths: Yuvabe Education for hands-on learning and Yuvabe Studios for future-focused ...",
    url: "https://yuvabe.com", 
    siteName: "Yuvabe",
    images: [
      {
        url: "https://yuvabe.com/images/logo.png", 
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
    images: ["https://yuvabe.com/images/logo.png"], 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XHWGNKDQCD"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XHWGNKDQCD');
          `}
        </Script>
      </head>
      <body className={`${raleway.variable} ${openSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

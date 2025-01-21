import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL("https://milanfulop.com"),
  title: "Milan Fulop",
  description: "A space where I share my projects, write about myself, and just have a cool corner of the web to call my own.",
  openGraph: {
    title: "Milan Fulop",
    description: "A space where I share my projects, write about myself, and just have a cool corner of the web to call my own.",
    url: "https://milanfulop.com",
    siteName: "Milan Fulop",
    images: [
      {
        url: "/childhood-photo.webp",
        width: 720,
        height: 960,
        alt: "An old photo of me",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@milanfulopp",
    creator: "@milanfulopp",
    images: ["/childhood-photo.webp"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

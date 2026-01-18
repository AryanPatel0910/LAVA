import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lavanya Patil | ECD @ IIIT Hyderabad",
  description: "Research portfolio of Lavanya Patil, an Electronics & Communication Design undergraduate at IIIT Hyderabad with interests in computational mathematics, graph theory, and social systems analysis.",
  keywords: ["Lavanya Patil", "IIIT Hyderabad", "ECD", "Research", "Linear Algebra", "Graph Theory", "Computational Social Science"],
  authors: [{ name: "Lavanya Patil" }],
  openGraph: {
    title: "Lavanya Patil | ECD @ IIIT Hyderabad",
    description: "Research portfolio of Lavanya Patil, an Electronics & Communication Design undergraduate at IIIT Hyderabad.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0a0a0f] text-[#e5e5e7]`}
      >
        {children}
      </body>
    </html>
  );
}

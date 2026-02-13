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
  title: {
    default: "VikizCode - Tech Trends 2026",
    template: "%s | VikizCode",
  },
  description:
    "Insights into 2026 Tech Trends: AI, Web Dev, Cloud, and Startups. Your guide to the future of technology.",
  keywords: ["Tech 2026", "AI", "Web Development", "Cloud Computing", "Startups"],
  authors: [{ name: "VikizCode Team" }],
  verification: {
    google: "DhVRSrgSCtnVy2kd4exrGYroEOYP_2ZTz6I1PzFSXR0",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

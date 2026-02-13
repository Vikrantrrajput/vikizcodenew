import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
    google: "PASTE_YOUR_GOOGLE_VERIFICATION_CODE_HERE",
  },
  openGraph: {
  title: "VikizCode - Tech Trends 2026",
  description:
    "Insights into 2026 Tech Trends: AI, Web Dev, Cloud, and Startups.",
  url: "https://vikizcode.in",
  siteName: "VikizCode",
  images: [
    {
      url: "https://vikizcode.in/blog-images/ogimage.png",
      width: 1200,
      height: 630,
    },
  ],
  locale: "en_IN",
  type: "website",
},

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-HZEJELYB13"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HZEJELYB13');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

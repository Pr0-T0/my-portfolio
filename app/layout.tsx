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
  metadataBase: new URL("https://sarathkumar.vercel.app"),
  verification: {
    google : "rppGcg4--pp1NnN24JnSmabmTrcmpsidHKP16G48PDY",
  },

  title: {
    default: "Sarathkumar",
    template: "%s · Sarathkumar",
  },

  description:
    "Computer science student interested in backend systems, databases, and agentic AI. Portfolio showcasing selected projects and work.",

  keywords: [
    "Sarathkumar",
    "Computer Science Student",
    "Backend Systems",
    "Databases",
    "AI Portfolio",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://sarathkumar.vercel.app",
  },

  openGraph: {
    title: "Sarathkumar",
    description:
      "Computer science student focused on backend systems, databases, and agentic AI.",
    siteName: "Sarathkumar Portfolio",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Sarathkumar Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sarathkumar",
    description:
      "Computer science student interested in backend systems, databases, and agentic AI.",
    images: ["/og.png"],
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

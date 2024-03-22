import { GeistSans } from "geist/font/sans";
import { cn } from "../lib/utils"
import { fontSans } from "@/lib/fonts"
import "./globals.css";

export const metadata = {
  title: "Ticket Freedom - Los Angeles Traffic Ticket Lawyer",
  description:
    "Get your traffic tickets handled by a professional lawyer in Los Angeles. Fast, efficient, and reliable legal services to fight your traffic ticket violations. Save time, money, and stress with Ticket Freedom.",
  keywords: [
    "Traffic Ticket",
    "Los Angeles Lawyer",
    "Traffic Violation",
    "Legal Services",
    "Ticket Freedom",
    "DUI Lawyer"
  ],
  metadataBase: new URL("https://www.ticketfreedom.com"),
  openGraph: {
    url: "https://www.ticketfreedom.com",
    type: "website",
    title: "Ticket Freedom - Los Angeles Traffic Ticket Lawyer",
    description:
     "Professional legal services in Los Angeles for fighting your traffic ticket violations. Contact us today to save on fines and avoid points on your license.",
     images: [
      {
        url: "https://www.ticketfreedom.com/og-image.jpg",
        width: 1120,
        height: 676,
        alt: "Buisness Card of Ticket Freedom"
      }
    ]
  },
  alternates: {
    canonical: "https://www.ticketfreedom.com"
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: "index, follow"
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        type: "image/x-icon"
      },
    ],
  },
  shortcut: [
    {
      url: "/favicon.ico",
      type: "image/x-icon"
    }
  ],
}

export default function RootLayout({children}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className={cn(
          "min-h-screen bg-background font-sans subpixel-antialiased",
          fontSans.className
        )}>
        <main className="">
          {children}
        </main>
      </body>
    </html>
  );
}

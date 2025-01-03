import { GeistSans } from "geist/font/sans";
import { cn } from "../lib/utils"
import { fontSans } from "@/lib/fonts"
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";
import NavBar from "@/components/NavBar";

export const metadata = {
  title: "Affordable Traffic Ticket Lawyer Los Angeles | Ticket Freedom",
  description:
    "Get your traffic tickets handled by an experienced and affordable lawyer in Los Angeles. Fight your speeding, red light, and other traffic violations with Ticket Freedom.",
  keywords: [
    "Traffic Ticket Lawyer",
    "Traffic ticket lawyer in los angeles ",
    "traffic ticket attorney los angeles ca",
    "la ticket lawyer",
    "Ticket Freedom",
    "Criminal Lawyer Los Angeles"
  ],
  metadataBase: new URL("https://www.ticketfreedom.com"),
  openGraph: {
    url: "https://www.ticketfreedom.com",
    type: "website",
    title: "Affordable Traffic Ticket Lawyer Los Angeles | Ticket Freedom",
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
          <NavBar />
          {children}
          <Analytics />
        </main>
      </body>
    </html>
  );
}

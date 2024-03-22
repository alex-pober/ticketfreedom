import { GeistSans } from "geist/font/sans";
import { cn } from "../lib/utils"
import { fontSans } from "@/lib/fonts"
import Head from "next/head";
import "./globals.css";

export default function RootLayout({children}) {
  return (
    <html lang="en" className={GeistSans.className}>
         <Head>
        <title>Ticket Freedom - Los Angeles Traffic Ticket Lawyer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="utf-8" />
        <meta name="description" content="Get your traffic tickets handled by a professional lawyer in Los Angeles. Fast, efficient, and reliable legal services to fight your traffic ticket violations. Save time, money, and stress with Ticket Freedom." />
        <meta name="keywords" content="Traffic Ticket, Los Angeles Lawyer, Traffic Violation, Legal Services, Ticket Freedom" />
        <meta name="author" content="Ticket Freedom" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ticketfreedom.com/" />
        <meta property="og:title" content="Ticket Freedom - Los Angeles Traffic Ticket Lawyer" />
        <meta property="og:description" content="Professional legal services in Los Angeles for fighting your traffic ticket violations. Contact us today to save on fines and avoid points on your license." />
        <meta property="og:image" content="https://www.ticketfreedom.com/og-image.jpg" />

        {/* Add additional meta tags here as needed */}

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
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

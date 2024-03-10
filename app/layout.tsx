import { GeistSans } from "geist/font/sans";
import { Inter as FontSans } from "next/font/google"
import { cn } from "../lib/utils"
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "We handle your traffic ticket",
  description: "The fastest way to build apps with Next.js and Supabase",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className={cn(
          "min-h-screen bg-background font-sans subpixel-antialiased",
          fontSans.variable
        )}>
        <main className="">
          {children}
        </main>
      </body>
    </html>
  );
}

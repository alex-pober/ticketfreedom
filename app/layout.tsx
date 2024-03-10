import { GeistSans } from "geist/font/sans";
import { cn } from "../lib/utils"
import { fontSans } from "@/lib/fonts"
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
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
          fontSans.className
        )}>
        <main className="">
          {children}
        </main>
      </body>
    </html>
  );
}

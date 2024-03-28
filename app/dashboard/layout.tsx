"use client";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { usePathname } from "next/navigation";
import LogoWhite from "@/app/LogoWhiteSvg";
export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const route = usePathname()

  return (
    <div className="w-full">
      {/* Include shared UI here e.g. a header or sidebar */}
      <div className="bg-black p-2">
        <LogoWhite />
      </div>
      <Tabs className="mt-1">
        <TabsList className="inline-flex h-9 items-center text-muted-foreground w-full justify-start rounded-none border-b bg-transparent p-0">
          <Link href="/dashboard/tickets" legacyBehavior passHref>
            <TabsTrigger
              className="inline-flex items-center justify-center whitespace-nowrap py-1 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
              value="account"
              data-state={route === "/dashboard/tickets" ? "active" : "inactive"}
            >
              Tickets
            </TabsTrigger>
          </Link>
          <Link href="/dashboard/clients" legacyBehavior passHref>
            <TabsTrigger
              className="inline-flex items-center justify-center whitespace-nowrap py-1 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
              value="clients"
              data-state={route === "/dashboard/clients" ? "active" : "inactive"}

            >
              Clients
            </TabsTrigger>
          </Link>

          <Link href="/dashboard/pending-tickets" legacyBehavior passHref>
            <TabsTrigger
              className="inline-flex items-center justify-center whitespace-nowrap py-1 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
              value="pending"
              data-state={route === "/dashboard/pending-tickets" ? "active" : "inactive"}
            >
              Pending Tickets
            </TabsTrigger>
          </Link>
        </TabsList>
      </Tabs>
      {children}
    </div>
  );
}

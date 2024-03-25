"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import Link from "next/link";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <NavigationMenu className="p-1 m-auto max-w-screen-lg wrap">
        <NavigationMenuList>
          <span className="text-lg font-bold">TicketFreedom</span>
        </NavigationMenuList>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/dashboard/tickets" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Tickets
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="/dashboard/clients" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Clients
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="/dashboard/pending-tickets" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Pending Tickets
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {children}
    </section>
  );
}

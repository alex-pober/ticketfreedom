"use client";
import * as React from "react";

import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "./ui/badge";

export function ServicesDialog() {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="ghost" size="sm" className="text-[#ffd35c]">
            Services
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] bg-white">
          <DialogHeader>
            <DialogTitle>
              <h1 className="text-3xl font-bold tracking-tight text-black">
                We do more than just tickets.
              </h1>
            </DialogTitle>
          </DialogHeader>
          <ProfileForm />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button
          className="lg:hidden bg-black border-black"
          size="icon"
          variant="outline"
        >
          <MenuIcon className="h-6 w-6" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>
            <h1 className="text-3xl font-bold tracking-tight text-black m-3">
              We do more than just tickets.
            </h1>
          </DrawerTitle>
        </DrawerHeader>
        <ProfileForm className="px-4" />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

function ProfileForm({ className }: React.ComponentProps<"div">) {
  return (
    <div className={cn("grid items-start gap-6", className)}>
      <div className="bg-[#ffd35c] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 p-6 flex flex-col items-center gap-2">
        <h1 className="text-2xl font-bold text-black">Criminal</h1>
        <p className="text-black/80 text-center">Misdemeanor & Felonies</p>
      </div>

      <div className="bg-[#ffd35c] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 p-6 flex flex-col items-center gap-2">
        <h1 className="text-2xl font-bold text-black">Injury & Accidents</h1>
        <p className="text-black/80 text-center">Personal Injury Cases</p>
      </div>

      <div className="bg-[#ffd35c] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 p-6 flex flex-col items-center gap-2">
        <h1 className="text-2xl font-bold text-black">Restraining Orders</h1>
        <p className="text-black/80 text-center">Protection & Legal Support</p>
      </div>

      <div className="flex flex-col gap-3 items-center m-3">
        <h1 className="text-[2.5rem] leading-[2.5rem] font-bold tracking-tighter xl:text-4xl/none text-black">
          Give us a call
        </h1>
        <a
          href="tel:8888583736"
          className="text-[2.5rem] leading-[2.5rem] font-bold tracking-tighter xl:text-5xl/none text-black"
        >
          888-858-3736
        </a>
      </div>
    </div>
  );
}

function MenuIcon(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#ffd35c"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="3" x2="21" y1="6" y2="6" />
      <line x1="3" x2="21" y1="12" y2="12" />
      <line x1="3" x2="21" y1="18" y2="18" />
    </svg>
  );
}

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
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>
              <h1 className="text-[2.5rem] leading-[2.5rem] font-bold tracking-tighter xl:text-6xl/none text-black m-3">
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
            <h1 className="text-[2.5rem] leading-[2.5rem] font-bold tracking-tighter xl:text-6xl/none text-black m-3">
              We do more than just tickets.
            </h1>
          </DrawerTitle>
        </DrawerHeader>
        <ProfileForm className="m-3" />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button>Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

function ProfileForm({ className }: React.ComponentProps<"div">) {
  return (
    <div className={cn("grid items-start gap-4", className)}>
      <Badge
        variant="outline"
        className="bg-[#ffd35c] justify-center outline outline-4 outline-{#ffd35c} text-4xl"
      >
        Car accidents
      </Badge>
      <Badge
        variant="outline"
        className="bg-[#ffd35c] justify-center outline outline-4 outline-{#ffd35c} text-4xl"
      >
        Personal Injury
      </Badge>
      <Badge
        variant="outline"
        className="bg-[#ffd35c] justify-center outline outline-4 outline-{#ffd35c} text-4xl"
      >
        Insurance Claim
      </Badge>
      <Badge
        variant="outline"
        className="bg-[#ffd35c] justify-center outline outline-4 outline-{#ffd35c} text-4xl"
      >
        Uninsured Motorist
      </Badge>
      <div className="flex flex-col gap-3 items-center m-3">
        <h1 className="text-[2.5rem] leading-[2.5rem] font-bold tracking-tighter xl:text-6xl/none text-black">
          Give us a call
        </h1>
        <a
          href="tel:8888583736"
          className="text-[2.5rem] leading-[2.5rem] font-bold tracking-tighter xl:text-6xl/none text-black"
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
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <line x1="3" x2="21" y1="6" y2="6" />
      <line x1="3" x2="21" y1="12" y2="12" />
      <line x1="3" x2="21" y1="18" y2="18" />
    </svg>
  );
}

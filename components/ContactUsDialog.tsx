import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChevronRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { PhoneCall } from 'lucide-react';

export function ContactUsDialog() {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="ghost">
            Contact us <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </DialogTrigger>
        <DialogContent className="w-11/12 max-w-xl max-h-screen p-9 sm:grid-cols-2 sm:items-center">
          <DialogHeader>
            <DialogTitle>
              <h1 className="text-4xl font-bold tracking-tighter xl:text-5xl/none text-black">
                Call us.
                <br data-owner="balance-text" aria-hidden="true" />
                Text us.
              </h1>
            </DialogTitle>
            <DialogDescription className="sm:m-auto/none">
              (we got imessage)
            </DialogDescription>
            <DialogTitle>
              <a href="tel:8189307774"className={buttonVariants({ variant: "default", size: 'lg'})}>
                <PhoneCall className="mr-2 h-4 w-4"/>
                  (818) 930 - 7774
              </a>
              <h1 className="text-xl font-simibold text-black m-1">
                info@ticketfreedom.com
              </h1>
            </DialogTitle>
          </DialogHeader>
          <div className="flex justify-around flex-wrap gap-2">
            <div>
              <p className="font-bold">Spanish</p>
              <a href="tel:8888583736"className={buttonVariants({ variant: "default", size: 'sm'})}>
                <PhoneCall className="mr-2 h-4 w-4"/>
                (888) 858-3736
              </a>
            </div>
            <div>
              <p className="font-bold">Russian</p>
              <a href="tel:8189307774"className={buttonVariants({ variant: "default", size: 'sm'})}>
                <PhoneCall className="mr-2 h-4 w-4"/>
                (818) 930-7774
              </a>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

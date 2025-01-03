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
          <Button variant="ghost" className="hover:bg-[#ffd35c]/10 transition-colors">
            Contact us <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </DialogTrigger>
        <DialogContent className="w-11/12 max-w-xl max-h-screen p-8 sm:grid-cols-2 sm:items-center bg-white border-none shadow-lg">
          <DialogHeader className="space-y-6">
            <DialogTitle>
              <h1 className="text-4xl font-bold tracking-tight text-black">
                Call us.
                <br />
                Text us.
              </h1>
            </DialogTitle>
            <DialogDescription className="text-lg text-black/70 italic">
              (we got iMessage)
            </DialogDescription>
            <div className="space-y-4 flex flex-col items-center">
              <a 
                href="tel:8189307774"
                className={buttonVariants({ 
                  variant: "default", 
                  size: 'lg',
                  className: "w-full max-w-xs justify-center bg-[#ffd35c] hover:bg-[#ffd35c]/90 font-semibold shadow-md transition-all hover:shadow-lg"
                })}
              >
                <PhoneCall className="mr-2 h-5 w-5"/>
                (818) 930-7774
              </a>
              <div className="text-center">
                <h2 className="text-lg font-medium text-black/80 hover:text-black transition-colors">
                  info@ticketfreedom.com
                </h2>
              </div>
            </div>
          </DialogHeader>
          
          <div className="mt-8 flex flex-col gap-8 items-center">
            <div className="flex-1 max-w-[240px] space-y-1">
              <p className="font-semibold text-black/80 text-center">Spanish</p>
              <a 
                href="tel:8888583736"
                className={buttonVariants({ 
                  variant: "default", 
                  size: 'default',
                  className: "w-full justify-center bg-[#ffd35c]/90 hover:bg-[#ffd35c] font-medium shadow-sm transition-all hover:shadow-md whitespace-nowrap"
                })}
              >
                <PhoneCall className="mr-2 h-4 w-4 flex-shrink-0"/>
                (888) 858-3736
              </a>
            </div>
            <div className="flex-1 max-w-[240px] space-y-1">
              <p className="font-semibold text-black/80 text-center">Russian</p>
              <a 
                href="tel:8189307774"
                className={buttonVariants({ 
                  variant: "default", 
                  size: 'default',
                  className: "w-full justify-center bg-[#ffd35c]/90 hover:bg-[#ffd35c] font-medium shadow-sm transition-all hover:shadow-md whitespace-nowrap"
                })}
              >
                <PhoneCall className="mr-2 h-4 w-4 flex-shrink-0"/>
                (818) 930-7774
              </a>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

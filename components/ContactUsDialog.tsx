import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ChevronRight } from "lucide-react";
export function ContactUsDialog() {
  return (
    <>

    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost">
          Contact us <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="w-11/12 max-h-screen">
        <DialogHeader>
          <DialogTitle>
            <h1 className="text-4xl font-bold tracking-tighter xl:text-5xl/none text-black">
              Call us.
              <br data-owner="balance-text" aria-hidden="true" />
              Text us.
            </h1>
          </DialogTitle>
          <DialogDescription className="m-2">
            (we got imessage)
          </DialogDescription>
          <DialogTitle>
            <h1 className="text-4xl font-bold tracking-tighter xl:text-5xl/none text-black">
              1 (818) 930 - 7774
            </h1>
            <h1 className="text-xl font-simibold text-black m-1">
              info@ticketfreedom.com
            </h1>
          </DialogTitle>
        </DialogHeader>
        <div className="flex justify-around">
          <div>
            <p className="font-bold">Spanish:</p> 1 (888) 858-3736
            <br data-owner="balance-text" aria-hidden="true" />
          </div>
          <div>
            <p className="font-bold">Russian:</p> 1 (818) 930-7774
            <br data-owner="balance-text" aria-hidden="true" />
          </div>
        </div>
      </DialogContent>
    </Dialog>
    </>
  )
}

import Link from "next/link";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Rearviewimage from "@/app/rearviewimage.png";
import { ContactUsDialog } from "./ContactUsDialog";
import NewRearViewImage from '@/app/rearviewimage.png'
export default function LandingPageHero() {
  return (
    <div className="flex flex-col gap-16 items-center">
      <section className="w-full lg:pt-8">
        <div className="container px-0 p-6 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="flex flex-col items-center justify-center gap-1 mt-3">
              <h1
                className="text-[2.5rem] leading-[2.5rem] font-bold tracking-tighter xl:text-6xl/none text-black"
              >
                You got a ticket.
                <br data-owner="balance-text" aria-hidden="true" />
                We will take it from here.
              </h1>
              <p className="max-w-[700px] text-gray-500 md:text-2xl dark:text-gray-400">
                Our team skillfully manages traffic tickets, ensuring the best
                outcomes.
              </p>
            </div>

            <div className="call-to-action-buttons flex gap-4">
              <Button asChild>
                <Link href="/upload">
                  Let us handle it <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <ContactUsDialog />
            </div>

            <Image
              alt="image of cop in rear view mirror"
              src={NewRearViewImage}
              width={700}
              height={200}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

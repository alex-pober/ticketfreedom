import Link from "next/link";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Rearviewimage from "@/app/rearviewimage.png";
import { ContactUsDialog } from "./ContactUsDialog";
import NewRearViewImage from "@/app/landing-page-new.png";
import Step1Image from "@/app/snap-phot-dl.png";
import Step2Image from "@/app/snap-photo-ticket.png";
import Step3Image from "@/app/payment-received.png";

export default function ThreeSteps() {
  return (
    <section className="flex flex-col justify-center flex-row gap-6 items-center">
      <h1 className="text-[2.5rem] leading-[2.5rem] font-bold tracking-tighter xl:text-6xl/none text-black">
        3 Easy Steps
      </h1>

      <div className="images flex flex-wrap justify-center gap-5">
        <div className="max-w-60 flex flex-col justify-center items-center align-center">
        <h1 className="min-h-16 text-2xl font-bold tracking-tighter text-black flex flex-wrap content-center">
          Photo of your ID
        </h1>
          <Image
            className="border-8 border-[#ffd35c] rounded-lg outline outline-4 outline-black"
            alt="image of cop in rear view mirror"
            src={Step1Image}
            width={250}
            height={250}
          />
        </div>

        <div className="max-w-60 flex flex-col justify-center items-center align-center">
        <h1 className="min-h-16 text-2xl font-bold tracking-tighter text-black flex flex-wrap content-center">
            Photo of your ticket
          </h1>
          <Image
            className="border-8 border-[#ffd35c] rounded-lg outline outline-4 outline-black"
            alt="image of cop in rear view mirror"
            src={Step2Image}
            width={250}
            height={250}
          />
        </div>

        <div className="max-w-60 flex flex-col justify-center items-center align-center">
        <h1 className="min-h-16 text-2xl font-bold tracking-tighter text-black flex flex-wrap content-center">
          Send payment
        </h1>
          <Image
            className="border-8 border-[#ffd35c] rounded-lg outline outline-4 outline-black"
            alt="image of cop in rear view mirror"
            src={Step3Image}
            width={250}
            height={250}
          />
        </div>
      </div>

      <Button
            asChild
            className="text-2xl text-[#ffd35c] border-[#ffd35c] mt-5"
            size="lg"
          >
            <Link href="/upload">Get Started</Link>
          </Button>
    </section>
  );
}

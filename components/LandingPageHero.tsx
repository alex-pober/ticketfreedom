import Link from "next/link";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Rearviewimage from "@/app/rearviewimage.png";
import { ContactUsDialog } from "./ContactUsDialog";
import NewRearViewImage from "@/app/rearviewimage.webp";
import YellowWave from "@/app/YellowWave.svg";

export default function LandingPageHero() {
  return (
    <div className="flex flex-col gap-16 items-center">
      <section className="w-full">
        <div className="">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="flex flex-col items-center items-center gap-1">
              <div
                className="w-screen items-center flex flex-col bg-top pt-20 p-10 xs:pt-10 "
                style={{
                  backgroundImage: "url(/YellowWave.svg)",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPositionY: "-240px",
                  backgroundClip: 'border-box',
                }}
              >
                <h1 className="max-w-[700px] text-[2rem] leading-[2rem] font-bold tracking-tighter text-black text-center">
                  Experienced Traffic Ticket Lawyer in Los Angeles
                </h1>
                <p className="max-w-[700px] text-gray-500  dark:text-gray-400 text-center mt-4">
                  At Ticket Freedom, we specialize in providing{" "}
                  <strong>affordable traffic ticket defense</strong> in Los
                  Angeles. Our <strong>experienced traffic attorneys</strong>{" "}
                  are dedicated to helping you{" "}
                  <strong>fight traffic violations</strong> and avoid points on
                  your driving record.
                </p>

                <div className="call-to-action-buttons m-auto max-w-[700px] mt-10 mb-16 flex gap-4">
                  <Button asChild>
                    <Link href="/upload">
                      Let us handle it <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>

                  <ContactUsDialog />
                </div>
              </div>

              <Image
                className="-mt-12"
                priority
                alt="image of cop in rear view mirror"
                src={NewRearViewImage}
                width={700}
                height={200}
              />

              <div className="flex flex-row flex-wrap justify-center gap-20 xs:gap-10 mb-28">
                <div className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 mt-6">
                  <h2 className="text-2xl font-bold text-black">
                    Our Services
                  </h2>
                  <ul className="list-none text-left mt-4">
                    <li>🚗💰 Affordable traffic ticket defense</li>
                    <li>👩‍⚖️👨‍⚖️ Experienced traffic attorneys</li>
                    <li>🚦⚖️ Fight traffic violations</li>
                    <li>🚫📈 Avoid points on your driving record</li>
                  </ul>
                </div>
                <div className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 mt-6">
                  <h2 className="text-2xl font-bold text-black">
                    Why Choose Us?
                  </h2>
                  <ul className="list-none text-left mt-4">
                    <li>⚖️👨‍⚖️ Expert legal representation</li>
                    <li>🏆📈 Proven track record of success</li>
                    <li>🆓📞 Free initial consultation</li>
                    <li>📝🔍 Personalized legal strategies</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* <div className="flex flex-col items-center justify-center gap-1 mt-3">
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
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
}

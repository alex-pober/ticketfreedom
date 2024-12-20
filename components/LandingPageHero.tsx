import Link from "next/link";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Rearviewimage from "@/app/rearviewimage.png";
import { ContactUsDialog } from "./ContactUsDialog";
import NewRearViewImage from "@/app/rearviewimage.webp";

export default function LandingPageHero() {
  return (
    <div className="flex flex-col gap-16 items-center">
      <section className="w-full">
        <div className="">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="flex flex-col items-center items-center gap-1">
              <div
                className="w-screen items-center flex flex-col bg-top pt-20 p-10 xs:pt-10 relative overflow-hidden"
                style={{
                  backgroundColor: '#FFF',
                  minHeight: '700px'
                }}
              >
                <div 
                  className="absolute inset-0 w-full h-full"
                  style={{
                    backgroundImage: `url('/SimpleHeroBg.svg')`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: 1,
                    zIndex: 0,
                  }}
                />

<div className="relative z-10 flex flex-col items-center w-full max-w-6xl mx-auto">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black text-center leading-tight">
                    <span className="bg-gradient-to-r from-[#ffd35c] to-[#000000]/50 bg-[length:100%_20%] bg-no-repeat bg-bottom">Experienced</span>{" "}
                    <span className="bg-gradient-to-r from-[#ffd35c] to-[#000000]/50 bg-[length:100%_20%] bg-no-repeat bg-bottom">Traffic Ticket</span>{" "}
                    <span className="bg-gradient-to-r from-[#ffd35c] to-[#000000]/50 bg-[length:100%_20%] bg-no-repeat bg-bottom">Lawyer</span>
                    <br />in Los Angeles
                  </h1>
                  <p className="max-w-[700px] text-lg md:text-xl text-gray-600 text-center mt-6">
                    At Ticket Freedom, we specialize in providing{" "}
                    <strong>affordable traffic ticket defense</strong> in Los
                    Angeles. Our <strong>experienced traffic attorneys</strong>{" "}
                    are dedicated to helping you{" "}
                    <strong>fight traffic violations</strong> and avoid points on
                    your driving record.
                  </p>

                  <div className="call-to-action-buttons mt-12 flex gap-4 flex-wrap justify-center">
                    <Button size="lg" className="text-lg px-8" asChild>
                      <Link href="/handle-ticket">
                        Let us handle it <ChevronRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                    <ContactUsDialog />
                  </div>
                </div>

              <Image
                className="relative z-10 w-full max-w-[800px] h-auto rounded-lg"
                priority
                alt="image of cop in rear view mirror"
                src={NewRearViewImage}
                width={800}
                height={300}
              />

              </div>

              

              <div className="flex flex-row flex-wrap justify-center gap-20 xs:gap-10 mb-28 max-w-6xl mx-auto px-4">
                <div className="flex-1 min-w-[300px] text-gray-600 mt-6">
                  <h2 className="text-3xl font-bold text-black mb-6">
                    Our Services
                  </h2>
                  <ul className="space-y-4 text-lg">
                    <li className="flex items-center gap-3">
                      <span className="text-2xl">💰</span>
                      <span>Affordable traffic ticket defense</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-2xl">👨‍⚖️</span>
                      <span>Experienced traffic attorneys</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-2xl">⚖️</span>
                      <span>Fight traffic violations</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-2xl">🚫</span>
                      <span>Avoid points on your driving record</span>
                    </li>
                  </ul>
                </div>
                <div className="flex-1 min-w-[300px] text-gray-600 mt-6">
                  <h2 className="text-3xl font-bold text-black mb-6">
                    Why Choose Us?
                  </h2>
                  <ul className="space-y-4 text-lg">
                    <li className="flex items-center gap-3">
                      <span className="text-2xl">⚖️</span>
                      <span>Expert legal representation</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-2xl">🏆</span>
                      <span>Proven track record of success</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-2xl">📞</span>
                      <span>Free initial consultation</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-2xl">📝</span>
                      <span>Personalized legal strategies</span>
                    </li>
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

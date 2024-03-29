import { createClient } from "@/utils/supabase/server";
import LandingPageHero from "@/components/LandingPageHero";
import NavBarResponsive from "@/components/NavBar";
import LandingPageTicketStepper from "@/components/LandingPageTicketStepper";
import ThreeSteps from "@/components/ThreeSteps";
export default async function Index() {
  return (
    <div className="flex flex-col items-center">
      <svg
        className="absolute -z-50 mt-20 sm:m-7 lg:mt-7"
        xmlns="http://www.w3.org/2000/svg"
        id="visual"
        viewBox="0 0 960 960"
        version="1.1"
      >
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="M0 275L32 273.5C64 272 128 269 192 258.7C256 248.3 320 230.7 384 237.7C448 244.7 512 276.3 576 278.2C640 280 704 252 768 247C832 242 896 260 928 269L960 278"
          fill="none"
          stroke="#ffd35c"
          strokeWidth="440"
          strokeLinecap="round"
          strokeLinejoin="miter"
        />
      </svg>
      <NavBarResponsive />

      <div className="animate-in flex-1 flex flex-col opacity-0 max-w-4xl px-4 items-center">
        <LandingPageHero />
        {/* <LandingPageTicketStepper /> */}
        <ThreeSteps />
      </div>

      <footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs mt-20">
        <span>
        Copyright © 2024 , Ticket Freedom Professional Law Corporation. All Rights Reserved
        </span>
      </footer>
    </div>
  );
}

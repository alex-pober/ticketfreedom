import { createClient } from "@/utils/supabase/server";
import LandingPageHero from "@/components/LandingPageHero";
import NavBarResponsive from "@/components/NavBar";
import LandingPageTicketStepper from "@/components/LandingPageTicketStepper";
import ThreeSteps from "@/components/ThreeSteps";
export default async function Index() {
  return (
    <div className="flex flex-col items-center">
      <div className="animate-in flex-1 flex flex-col opacity-0 items-center">
        <LandingPageHero />
        {/* <LandingPageTicketStepper /> */}
        <ThreeSteps />
      </div>

      <footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs mt-20">
        <span>
        Copyright © 2025 , Ticket Freedom Professional Law Corporation. All Rights Reserved
        </span>
      </footer>
    </div>
  );
}

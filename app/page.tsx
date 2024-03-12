import { createClient } from "@/utils/supabase/server";
import LandingPageHero from "@/components/LandingPageHero";
import NavBarResponsive from "@/components/NavBar";
import LandingPageTicketStepper from "@/components/LandingPageTicketStepper";

export default async function Index() {
  return (
    <div className="flex flex-col items-center">
      <svg
        className="absolute -z-50 mt-12"
        xmlns="http://www.w3.org/2000/svg"
        id="visual"
        viewBox="0 0 960 540"
        version="1.1"
      >
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="M0 275L32 273.5C64 272 128 269 192 258.7C256 248.3 320 230.7 384 237.7C448 244.7 512 276.3 576 278.2C640 280 704 252 768 247C832 242 896 260 928 269L960 278"
          fill="none"
          stroke="#ffd35c"
          stroke-width="450"
          stroke-linecap="round"
          stroke-linejoin="miter"
        />
      </svg>
      <NavBarResponsive />

      <div className="animate-in flex-1 flex flex-col opacity-0 max-w-4xl px-4 items-center">
        <LandingPageHero />
        <LandingPageTicketStepper />
      </div>

      <footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs">
        <p>
          Powered by{" "}
          <a
            href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
            target="_blank"
            className="font-bold hover:underline"
            rel="noreferrer"
          >
            Supabase
          </a>
        </p>
      </footer>
    </div>
  );
}

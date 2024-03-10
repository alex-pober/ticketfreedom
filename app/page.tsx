import DeployButton from "../components/DeployButton";
import AuthButton from "../components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import ConnectSupabaseSteps from "@/components/ConnectSupabaseSteps";
import SignUpUserSteps from "@/components/SignUpUserSteps";
import LandingPageHero from "@/components/LandingPageHero";
import NavBar from "@/components/NavBar"
import NavBarResponsive from "@/components/NavBar";
import LandingPageTicketStepper from "@/components/LandingPageTicketStepper";

export default async function Index() {

  return (
    <div className="flex flex-col items-center">
      <NavBarResponsive />

      <div className="animate-in flex-1 flex flex-col opacity-0 max-w-4xl px-4 items-center">
        <LandingPageHero />
        <AuthButton />
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

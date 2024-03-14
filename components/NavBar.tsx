/**
 * v0 by Vercel.
 * @see https://v0.dev/t/CowzfwdSDEY
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
import { Separator } from "./ui/separator";
import AuthButton from "./AuthButton";
import LogoSvgWhite from "@/app/logo-new-white.svg";
import { Badge } from "./ui/badge";
import { ServicesDialog } from "./ServicesDialog";

export default function NavBar() {
  return (
    <div className="flex items-center justify-between min-w-full p-4 bg-black dark:bg-gray-800">
      <Link className="flex items-center gap-2" href="#">
        <Image alt="logo image" src={LogoSvgWhite} width={200} height={60} />
      </Link>
      <div className="flex gap-4">
        <ServicesDialog />
        <div className="hidden md:flex items-center space-x-4 text-sm ">
          <Button
            asChild
            variant="outline"
            className="text-[#ffd35c] border-[#ffd35c] bg-transparent"
            size="sm"
          >
            <Link href="/upload">Fight my ticket</Link>
          </Button>
          <AuthButton />
        </div>
      </div>
    </div>
  );
}

function MenuIcon(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#ffd35c"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="3" x2="21" y1="6" y2="6" />
      <line x1="3" x2="21" y1="12" y2="12" />
      <line x1="3" x2="21" y1="18" y2="18" />
    </svg>
  );
}

function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

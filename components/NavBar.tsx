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
import LogoWhite from "@/app/LogoWhiteSvg";
import { Badge } from "./ui/badge";
import { ServicesDialog } from "./ServicesDialog";

export default function NavBar() {
  return (
    <div className="flex items-center justify-between min-w-full p-4 bg-black dark:bg-gray-800">
      <Link className="flex items-center gap-2" href="/">
        <LogoWhite />
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

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
        <Image priority alt="logo image" src={LogoSvgWhite} width={200} height={60} />
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

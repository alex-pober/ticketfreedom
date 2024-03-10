/**
 * v0 by Vercel.
 * @see https://v0.dev/t/CowzfwdSDEY
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"
import { Separator } from "./ui/separator"
export default function NavBar() {
  return (
    <div className="flex items-center justify-between min-w-full p-4 bg-white dark:bg-gray-800">
      <Link className="flex items-center gap-2" href="#">
        <MountainIcon className="h-6 w-6" />
        <span className="text-lg font-semibold">1-888-TKT-FRDM</span>
      </Link>
      <div className="hidden lg:flex items-center h-3 space-x-4 text-sm">
        <Link className="text-s" href="#">
          Services
        </Link>
        <Separator orientation="vertical" />
        <Button size="sm">
            Fight my ticket
          </Button>
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <Button className="lg:hidden" size="icon" variant="outline">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="grid w-full p-4">
            <Link className="text-lg font-medium hover:underline underline-offset-4" href="#">
              Home
            </Link>
            <Link className="text-lg font-medium hover:underline underline-offset-4" href="#">
              About
            </Link>
            <Link className="text-lg font-medium hover:underline underline-offset-4" href="#">
              Services
            </Link>
            <Link className="text-lg font-medium hover:underline underline-offset-4" href="#">
              Portfolio
            </Link>
            <Link className="text-lg font-medium hover:underline underline-offset-4" href="#">
              Contact
            </Link>
        </SheetContent>
      </Sheet>
    </div>
  )
}

function MenuIcon(props: any) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
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
  )
}

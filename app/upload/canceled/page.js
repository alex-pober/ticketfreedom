import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Canceled() {
  return (
    <div className="flex h-dvh m-3">
      <div className="flex m-auto flex-col items-center gap-3 max-w-md">
        <Card>
          <CardHeader className="flex flex-col items-center gap-2">
            <CardTitle className="font-normal">No Payment Received</CardTitle>
            <CardTitle className="text-4xl animate-in">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ff4d4d"
                strokeWidth="2.25"
                strokeLinecap="round"
                strokeLinejoin="round"
                class="lucide lucide-circle-x"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="m15 9-6 6" />
                <path d="m9 9 6 6" />
              </svg>
            </CardTitle>
            <CardDescription className="text-center">
              <a>
              Oops! It looks like there was an issue with your payment or it was cancelled. No worries, though! Just send us a quick text at (818) 930-7774 and we'll help sort everything out for you.              </a>
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <Button asChild size="sm" className="">
              <Link href="/">Understood</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

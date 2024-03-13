import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Success() {
  return (
    <div className="flex h-dvh m-3">
      <div className="flex m-auto flex-col items-center gap-3 max-w-md">
        <Card>
          <CardHeader className="flex flex-col items-center gap-2">
            <CardTitle className="font-normal">Payment Successful</CardTitle>
            <CardTitle className="text-4xl animate-in">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#50d05c"
                stroke-width="2.25"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-circle-check-big"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <path d="m9 11 3 3L22 4" />
              </svg>
            </CardTitle>
            <CardDescription className="text-center">
              <a>We received your information and someone will reach out to you soon.</a>
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <Button asChild size='sm' className="bg-[#50d05c]">
              <Link href="/">Done</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

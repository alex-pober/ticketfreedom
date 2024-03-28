'use client'
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import ZelleQRCode from "@/app/zelle/qr-enroll-zellepay.svg";
import { useRouter } from "next/navigation";

export default function Zelle() {
  const router = useRouter();

  return (
    <div className="flex h-dvh mx-3">
      <div className="flex m-auto flex-col items-center gap-4 max-w-md">
        <Card>
          <CardHeader className="flex flex-col items-center gap-2">
            <CardTitle className="font-simibold text-3xl">
              Send Money with Zelle
            </CardTitle>
            <CardDescription className="text-center text-lg">
              After you send Zelle payment, we will reach out to you.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-2 items-center">
            {/* <StripeCheckout handleUpload={insertDataAndUploadImage} /> */}
            <span className="font-bold text-2xl">(818) 930-7774</span>
            <Image alt="QR code" src={ZelleQRCode} height={250} width={250} />
            <Button
              variant="outline"
              className="w-64 m-auto outline outline-2 outline-[#671CCA]"
              onClick={() => router.push("/")}
            >
              Done
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

"use client";
import { useState, ChangeEvent, useEffect, Suspense } from "react";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { ComboboxDemo } from "@/components/ComboBox";
import { createClient } from "@/utils/supabase/client";
import StripeCheckout from "@/components/CheckoutTicket";
import Loading from "./loading";
import { useRouter } from "next/navigation";
import LoadingWithMessages from "./uploading";

export default function Upload() {
  const supabase = createClient();
  const router = useRouter();
  const [uploading, setUploading] = useState(false);
  const [activeStep, setActiveStep] = useState(1);
  const [fullName, setFullName] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [email, setEmail] = useState(null);
  const [driverLicense, setDriverLicense] = useState(null);
  const [ticket, setTicket] = useState(null);

  let images = [ticket, driverLicense];

  const handleNameInputChange = (e) => {
    const { value } = e?.target;
    setFullName(value.replace(",", ""));
  };

  const handleTicket = (e) => {
    const selectedFile = e.target.files && e.target.files[0];
    if (selectedFile) {
      setTicket(selectedFile);
    }
  };

  const handleDriverLicense = (e) => {
    const selectedFile = e.target.files && e.target.files[0];
    if (selectedFile) {
      setDriverLicense(selectedFile);
    }
  };

  const handleCancelForm = () => {
    //ADD TO REDIRECT BACK TO HOME PAGE
    setActiveStep(1);
    setFullName("");
    setDriverLicense(null);
    setTicket(null);
    router.push('/')
  };

  async function insertDataAndUploadImage() {
    setUploading(true);
    let uuid = self.crypto.randomUUID();

    // Upload images to storage bucket
    const uploadPromises = images.map(async (imageFile, index) => {
      const filePath = `/tickets/${fullName?.replace(/\s+/g, "-")}/${
        index === 0 ? "ticket" : "driver-license"
      }-${uuid}`;
      try {
        const result = await supabase.storage
          .from("ticketfreedom-files")
          .upload(filePath, imageFile);
        return result?.data?.path;
      } catch (error) {
        // Handle error here
      }
    });

    const uploadResults = await Promise.all(uploadPromises);

    // Insert data and file paths into table
    const data = await supabase
      //data is empty had has status code
      .from("pending-tickets")
      .insert({
        name: fullName,
        number: phoneNumber,
        email: email,
        files: uploadResults,
      });

    if (uploadResults) {
      setUploading(false);
    }
  }

  if (uploading) {
    return <LoadingWithMessages />
  }

  return (
    <Suspense fallback={<Loading />}>
      <div className="flex h-dvh m-3">
        <div className="flex m-auto flex-col items-center gap-4 max-w-md">
          {activeStep !== 4 && (
            <h2 className="text-3xl font-semibold tracking-tight first:mt-0">
              {activeStep === 1
                ? "We just need a few things"
                : activeStep === 2
                ? "Traffic Ticket Photo"
                : "Driver License Photo"}
            </h2>
          )}

          {activeStep !== 4 && (
            <div className="animate-in stepper flex flex-row items-center space-x-4 text-sm">
              <Avatar>
                <AvatarFallback
                  className={activeStep === 1 ? "bg-black	text-white " : ""}
                >
                  1
                </AvatarFallback>
              </Avatar>
              <Separator className="w-5" />
              <Avatar>
                <AvatarFallback
                  className={activeStep === 2 ? "bg-black	text-white " : ""}
                >
                  2
                </AvatarFallback>
              </Avatar>
              <Separator className="w-5" />
              <Avatar>
                <AvatarFallback
                  className={activeStep === 3 ? "bg-black	text-white " : ""}
                >
                  3
                </AvatarFallback>
              </Avatar>
            </div>
          )}

          <Card
            className={`${
              activeStep === 1 ? "w-full max-w-4xl mx-auto" : "hidden"
            }`}
          >
            <CardHeader className="flex flex-col gap-2">
              <CardTitle>Basic Info</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <Input
                type="text"
                placeholder="First name Last name"
                value={fullName || ""}
                onChange={handleNameInputChange}
              />
              <CardDescription className="text-xs m-auto mt-[-12px]">
                spelled exactly like on your driver license
              </CardDescription>
              <Input
                type="text"
                placeholder="Phone number"
                value={phoneNumber || ""}
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                }}
              />
              <Input
                type="email"
                placeholder="Email"
                value={email || ""}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <ComboboxDemo />
              <div className="grid gap-4">
                <CardDescription className="text-xs m-auto mt-[-12px]">
                  (we only offer services in LA, OC, Riverside)
                </CardDescription>
                <Button
                  disabled={!fullName || !fullName.includes(" ")}
                  size="sm"
                  onClick={() =>
                    setActiveStep((prev) => (prev === null ? null : prev + 1))
                  }
                >
                  Next
                </Button>
                <Button size="sm" variant="outline" onClick={handleCancelForm}>
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card
            className={`${
              activeStep === 2 ? "w-full max-w-4xl mx-auto" : "hidden"
            }`}
          >
            <CardHeader className="flex flex-col gap-2">
              {/* <CardTitle>Photo of the ticket</CardTitle> */}
              <CardDescription>
                Upload a clear photo of your ticket's front side with the ticket
                number in the top right corner.{" "}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <div className="border-dashed border-2 border-gray-200 rounded-lg w-full h-32 flex items-center justify-center transition-colors border-gray-300 border-dashed dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-400">
                <input
                  className="h-[inherit] outline-red absolute opacity-0 cursor-pointer"
                  type="file"
                  onChange={handleTicket}
                />
                <div className="flex flex-col items-center gap-1 text-center">
                  <UploadIcon className="h-6 w-6" />
                  <div className="text-sm">
                    {ticket ? ticket?.name : "Drag and drop your file here"}
                  </div>
                  <Button size="sm">
                    {ticket ? "Replace File" : "Select File"}
                  </Button>
                </div>
              </div>
              <div className="grid gap-4">
                <Button
                  disabled={!ticket}
                  size="sm"
                  onClick={() =>
                    setActiveStep((prev) => (prev === null ? null : prev + 1))
                  }
                >
                  Next
                </Button>
                <Button size="sm" variant="outline" onClick={handleCancelForm}>
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card
            className={`${
              activeStep === 3 ? "w-full max-w-4xl mx-auto" : "hidden"
            }`}
          >
            <CardHeader className="flex flex-col gap-2">
              {/* <CardTitle>Picture upload</CardTitle> */}
              <CardDescription>
                Upload a clear photo of the front side of your driver's license.{" "}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <div className="border-dashed border-2 border-gray-200 rounded-lg w-full h-32 flex items-center justify-center transition-colors border-gray-300 border-dashed dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-400">
                <input
                  className="h-[inherit] outline-red absolute opacity-0 cursor-pointer"
                  type="file"
                  onChange={handleDriverLicense}
                />
                <div className="flex flex-col items-center gap-1 text-center">
                  <UploadIcon className="h-6 w-6" />
                  <div className="text-sm">
                    {driverLicense
                      ? driverLicense?.name
                      : "Drag and drop your file here"}
                  </div>
                  <Button size="sm">
                    {driverLicense ? "Replace File" : "Select File"}
                  </Button>
                </div>
              </div>
              <div className="grid gap-4">
                <Button
                  size="sm"
                  onClick={() =>
                    setActiveStep((prev) => (prev === null ? null : prev + 1))
                  }
                >
                  Next
                </Button>
                <Button size="sm" variant="outline" onClick={handleCancelForm}>
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card
            className={`${
              activeStep === 4 ? "w-full max-w-4xl mx-auto" : "hidden"
            }`}
          >
            <CardHeader className="flex flex-col items-center gap-2">
              <CardTitle className="font-normal">
                Traffic Ticket Legal Service
              </CardTitle>
              <CardTitle className="text-4xl">$150</CardTitle>
              <CardDescription className="text-center">
                We can't guarantee 100% dismissal, but our lawyers will give it
                their all for your best shot.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <StripeCheckout handleUpload={insertDataAndUploadImage} />
            </CardContent>
          </Card>
        </div>
      </div>
    </Suspense>
  );
}

function UploadIcon(props) {
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
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </svg>
  );
}

import { createClient } from "@/utils/supabase/server";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { getPageFiles } from "next/dist/server/get-page-files";
import { isTemplateLiteralTypeNode } from "typescript";
import MoveToTickets from "../components/MoveToTickets";


export default async function PendingTickets() {
  const supabase = createClient();

  async function fetchTickets() {
    let { data, error } = await supabase.from("pending-tickets").select("*");
    if (error) {
      console.error("Error fetching tickets:", error.message);
      throw error;
    }
    return data;
  }

  async function getPhotoUrls(photo) {
    const { data, error } = await supabase.storage
          .from("ticketfreedom-files")
          .getPublicUrl(photo, 60 * 60);
        if (error) {
          console.error("Error generating signed url", error);
          return null;
        }
        return (data.publicUrl);
  }

  async function processData(data) {
    // Map over each item in the data array
    const processedData = await Promise.all(data.map(async (item) => {
        // Process each file in the files array of the item
        const processedFiles = await Promise.all(item.files.map(async (file) => {
            // Process each file through the processFiles function
            return await getPhotoUrls(file);
        }));
        // Return an object with id and the processed files array
        return {
            id: item.id,
            processedFiles: processedFiles
        };
    }));

    return processedData;
}


  const tickets = await fetchTickets()
  const allPhotoLinks = await processData(tickets)


  return (
    <div className="flex flex-col gap-2 max-w-screen-sm w-screen m-auto p-1">
      {tickets?.map(({id, name, number, email, files, created_at, driver_license_number }) => {
        const photoLinkItem = allPhotoLinks?.find(item => item.id === id);
        return (
          <Card key={id} className="flex flex-col justify-between">
            <div className="flex flex-row justify-between">
            <CardHeader className="p-2">
              <CardTitle>{name}</CardTitle>
              <CardDescription>{driver_license_number}</CardDescription>
              <CardDescription>{email}</CardDescription>
              <CardDescription>{number}</CardDescription>
              <CardDescription className="text-xs	">
                {new Date(created_at).toLocaleString()}
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0 max-h-52 flex">
              {photoLinkItem && photoLinkItem.processedFiles && photoLinkItem.processedFiles?.map((file, index) => (
                file ? (
                  <Image
                  priority
                  style={{objectFit: 'contain'}}
                  src={file}
                  alt={`Image ${index}`}
                  key={index}
                  sizes="(max-width: 100px)"
                  width={100}
                  height={100}
                />
                ) : (
                  null
                )
              ))}
            </CardContent>
            </div>
            <MoveToTickets key={id} pendingTicketInfo={{id, name, number, email, files, created_at, driver_license_number}}/>
          </Card>
        );
      })}
    </div>
  );
}

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
import MoveToTickets from "./components/MoveToTickets";
import NoPendingTickets from "./components/NoPendingTickets";

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

  const tickets = await fetchTickets();

  return (
    <div className="flex flex-col gap-2 max-w-screen-sm w-screen m-auto p-1">
      {tickets.length === 0 ? (
        <NoPendingTickets />
      ) : (
        tickets?.map(
          ({
            id,
            name,
            number,
            email,
            files,
            created_at,
            driver_license_number,
          }) => {
            return (
              <Card key={id} className="flex flex-col justify-between">
                <div className="flex flex-row justify-between">
                  <CardHeader className="p-2 max-w-52">
                    <CardTitle>{name}</CardTitle>
                    <CardDescription>{driver_license_number}</CardDescription>
                    <CardDescription>{email}</CardDescription>
                    <CardDescription>{number}</CardDescription>
                    <CardDescription className="text-xs	">
                      {new Date(created_at).toLocaleString()}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-2 gap-1 max-h-52 flex">
                    {files.map((image) => {
                      return (
                        <Image
                          key={image}
                          width={100}
                          height={100}
                          src={`https://izssqldldcgykfuoqepr.supabase.co/storage/v1/object/public/ticketfreedom-files/${image}`}
                        />
                    )
                    })}
                  </CardContent>
                </div>
                <div className="m-2 flex flex-row-reverse">
                  <MoveToTickets
                    key={id}
                    pendingTicketInfo={{
                      id,
                      name,
                      number,
                      email,
                      files,
                      created_at,
                      driver_license_number,
                    }}
                  />
                </div>
              </Card>
            );
          }
        )
      )}
    </div>
  );
}

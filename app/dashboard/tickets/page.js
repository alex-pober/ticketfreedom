"use client";
import { useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import {
  Phone,
  Mail,
  CalendarDays,
  MapPin,
  Hash,
  SquareMenu,
} from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import EditTicket from "./components/EditStatus";
import EditCourtDate from "./components/EditCourtDate";

export default function Tickets() {
  const supabase = createClient();
  const [tickets, setTickets] = useState([]);


  useEffect(() => {
    async function fetchTickets() {
      let { data: tickets, error } = await supabase
        .from("tickets")
        .select("*, client_id(*)");

      if (error) {
        console.error("Error fetching tickets:", error.message);
        throw error;
      }
      setTickets(tickets);
    }

    fetchTickets();
  }, []);

  return (
    <div className="flex flex-col gap-2 max-w-screen-sm mt-5 m-auto items-center">
      {tickets?.map((ticket) => {
        return (
          <Card
            key={ticket.id}
            className="flex flex-col justify-between w-11/12"
          >
            <CardHeader className="p-3">
              <CardTitle className="flex justify-between items-center gap-3">
                <div>{ticket.client_id.name}</div>
                <div className="flex flex-row items-center gap-2">
                  <div className="flex flex-col">
                    <h6 className="flex flex-row-reverse gap-1 text-xs w-[90px] text-right font-medium text-gray-400 tracking-tighter leading-3">
                      <Hash height={12} width={12} /> citation
                    </h6>
                    <span className="text-black text-xs text-right">
                      {ticket.ticket_number}
                    </span>
                  </div>
                  <DropdownOptions />
                </div>
              </CardTitle>
              <CardDescription className="flex flex-row gap-4">
                <span className="flex gap-1 items-center">
                  <Phone width={16} /> {ticket.client_id.phone}
                </span>
                <span className="flex gap-1 items-center">
                  <Mail width={16} />
                  {ticket.client_id.email}
                </span>
                <Badge
                  variant={ticket.payment === "Paid" ? "green" : "destructive"}
                >
                  {ticket.payment}
                </Badge>
              </CardDescription>
            </CardHeader>
            <Separator />
            <CardContent className="flex gap-5 p-3 justify-between md:justify-evenly">
              <div className="flex flex-col">
                <label className="mb-1 text-xs font-medium text-gray-400 tracking-tighter leading-3">
                  status
                </label>
                {/* <span className="text-black text-xs">{ticket.status}</span> */}
                <EditTicket ticketInfo={ticket}/>
              </div>
              <div className="flex flex-col max-w-20">
                <label className="mb-1 flex items-center gap-1 text-xs font-medium text-gray-400 tracking-tighter leading-3">
                  court <CalendarDays width={12} height={12} />
                </label>
                <span className="text-black text-xs">
                  {/* {new Date(ticket.court_date).toLocaleString()} */}
                  <EditCourtDate ticket={ticket}/>
                </span>
              </div>
              <div className="flex flex-col max-w-16">
                <label className="mb-1 flex items-center gap-1 text-xs font-medium text-gray-400 tracking-tighter leading-3">
                  court <MapPin width={12} height={12} />
                </label>
                <span className="text-black text-xs">
                  {ticket.court_location}
                </span>
              </div>
              <div className="flex flex-row gap-2">
                {ticket.files.map((image) => {
                  return (
                    <Dialog className="touch-auto">
                      <DialogTrigger asChild>
                        <Image
                          width={50}
                          height={50}
                          src={`https://izssqldldcgykfuoqepr.supabase.co/storage/v1/object/public/ticketfreedom-files/${image}`}
                        />
                      </DialogTrigger>
                      <DialogContent className="touch-auto">
                        <Image
                          style={{ objectFit: "contain" }}
                          width={500}
                          height={500}
                          src={`https://izssqldldcgykfuoqepr.supabase.co/storage/v1/object/public/ticketfreedom-files/${image}`}
                        />
                      </DialogContent>
                    </Dialog>
                  );
                })}
              </div>
            </CardContent>
            <Separator />
          </Card>
        );
      })}
    </div>
  );
}

function DropdownOptions() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="p-0 m-0" variant="ghost" size="icon">
          <Ellipsis />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-42">
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <span>Edit</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span>Delete</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span>Mark as Complete</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}


function Ellipsis() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#9ca3af"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      class="lucide lucide-ellipsis-vertical"
    >
      <circle cx="12" cy="12" r="1" />
      <circle cx="12" cy="5" r="1" />
      <circle cx="12" cy="19" r="1" />
    </svg>
  );
}

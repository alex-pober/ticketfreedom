'use client'
import {useState, useEffect} from "react"
import { createClient } from "@/utils/supabase/client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Phone, Mail } from "lucide-react";
export default function Tickets() {
  const supabase = createClient();
  const [tickets, setTickets] = useState([])
  console.log(tickets)

  useEffect(() => {
    async function fetchTickets() {
      let { data: tickets, error } = await supabase
      .from('tickets')
      .select('*, client_id(*)')

      if (error) {
        console.error("Error fetching tickets:", error.message);
        throw error;
      }
      setTickets(tickets);
    }

    fetchTickets()
  }, [])



  return(
    <div className="flex flex-col gap-2 max-w-screen-md mt-5 m-auto items-center">
      {tickets?.map((ticket) => {
        console.log(ticket)
        return(
          <Card key={ticket.id} className="flex flex-col justify-between w-11/12">
            <CardHeader>
              <CardTitle className="flex justify-between items-center gap-3">
                {ticket.client_id.name}
              <div className="flex flex-col">
                  <h6 className="text-xs font-medium text-gray-400 tracking-normal leading-3">ticket number</h6>
                  <span className="text-black text-xs">{ticket.ticket_number}</span>
                </div>
              </CardTitle>
              <CardDescription className="flex flex-row gap-4">
                <span className="flex gap-1 items-center"><Phone width={16}/> {ticket.client_id.phone}</span>
                <span className="flex gap-1 items-center"><Mail width={16}/>{ticket.client_id.email}</span>
              </CardDescription>
            </CardHeader>
            <Separator />
            <CardContent className="flex gap-5 pt-3">
              <div className="flex flex-col w-[100px]">
                <label className="text-xs text-gray-400">status</label>
                <span className="text-black text-xs">{ticket.status}</span>
              </div>
              <Separator orientation="vertical" className="h-5 my-auto"/>
              <div className="flex flex-col w-[100px]">
                <label className="text-xs text-gray-400">court date</label>
                <span className="text-black text-xs w-[100px]">{new Date(ticket.court_date).toLocaleString()}</span>
              </div>
              <Separator orientation="vertical" className="h-5 my-auto"/>

              <div className="flex flex-col w-[100px]">
                <label className="text-xs text-gray-400">court location</label>
                <span className="text-black text-xs">{ticket.court_location}</span>
              </div>
            </CardContent>
        </Card>
        )
      })}
    </div>
  )
}

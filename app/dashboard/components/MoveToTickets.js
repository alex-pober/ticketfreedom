"use client";
import React, { useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function MoveToTickets({ pendingTicketInfo }) {
  const supabase = createClient();
  const [existingClients, setExistingClients] = useState([])
  // Client Info
  const [existingClientId, setExistingClientId] = useState(null)
  const [name, setName] = useState(pendingTicketInfo.name);
  const [email, setEmail] = useState(pendingTicketInfo.email);
  const [phoneNumber, setPhoneNumber] = useState(pendingTicketInfo.number);
  const [address, setAddress] = useState();
  const [driverLicense, setDriverLicense] = useState();
  const [dob, setDob] = useState();

  //Ticket Info
  const [status, setStatus] = useState();
  const [ticketNumber, setTicketNumber] = useState();
  const [courtDate, setCourtDate] = useState();
  const [courtLocation, setCourtLocation] = useState();
  const [notes, setNotes] = useState();
  const [payment, setPayment] = useState();
  const [files, setFile] = useState();

  const debounce = (func, delay) => {
    let timeoutId;
    return function (...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
  };

  const searchClients = async (searchTerm) => {
    console.log("TERM", searchTerm)
    const { data, error } = await supabase
      .from('clients')
      .select('*')
      .filter('name', 'ilike', `%${searchTerm}%`)

    console.log(data)
    if (error) {
      console.error('Error searching clients:', error.message);
      return;
    }
    setExistingClients(null)
    setExistingClients(data);
  };

  const debouncedSearchClients = debounce(searchClients, 900); // Adjust debounce delay as needed

  const handleSearchChange = (e) => {
    const searchTerm = e.target.value;
    setName(searchTerm);
    debouncedSearchClients(searchTerm);
  };

  const upsertBothTables = async () => {
    const { data: client, error: clientError } = await supabase
      .from('clients')
      .upsert([
        { name: name,
        dob: dob,
        email: email,
        phone: phoneNumber,
        address: address,
        driver_license: driverLicense},
      ])
      .select()
      console.log(client[0].id)

    const { data: tickets, error: ticketsError } = await supabase
      .from('tickets')
      .upsert([
        { status: status,
        client_id: client[0]?.id,
        ticket_number: ticketNumber,
        court_date: courtDate,
        court_location: courtLocation,
        payment: payment,
        files: files },
      ])
      .select()

    if (clientError || ticketsError) {
      console.log("client Error", clientError)
      console.log("ticket Error", ticketsError)
      return
    } else {
      console.log(tickets)
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Move to tickets</Button>
      </DialogTrigger>
      <DialogContent className="w-11/12 overflow-y-scroll max-h-screen">
        <DialogHeader>
          <DialogTitle>Client Info</DialogTitle>
          <DialogDescription>Fillout all info on client.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Popover>

              <PopoverTrigger  className="col-span-3">
               <Input
                  id="name"
                  className="col-span-3"
                  value={name}
                  onChange={handleSearchChange}
                />
              </PopoverTrigger>

              <PopoverContent className="w-80">
                {existingClients.map((client, index) => (
                  <div key={index}>{client.name}</div>
                ))}
              </PopoverContent>
            </Popover>
            {/* <Input
              id="name"
              className="col-span-3"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            /> */}
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input
              id="email"
              className="col-span-3"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="phone-number" className="text-right">
              Phone number
            </Label>
            <Input
              id="phone-number"
              className="col-span-3"
              value={phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="address" className="text-right">
              Address
            </Label>
            <Input
              id="address"
              className="col-span-3"
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="driver-license" className="text-right">
              Driver License
            </Label>
            <Input
              id="driver-license"
              className="col-span-3"
              value={driverLicense}
              onChange={(e) => {
                setDriverLicense(e.target.value);
              }}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="dob" className="text-right">
              DOB
            </Label>
            <Input
              id="dob"
              placeholder="xx/xx/xxxx"
              className="col-span-3"
              value={dob}
              onChange={(e) => {
                setDob(e.target.value);
              }}
            />
          </div>
        </div>

        <Separator />

        <DialogHeader>
          <DialogTitle>Ticket Info</DialogTitle>
          <DialogDescription>
            Fillout all info related to ticket.
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="driver-license" className="text-right">
            Status
          </Label>
          <Select
            onValueChange={(value) => {
              setStatus(value);
            }}
          >
            <SelectTrigger className="col-span-2">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Not Started">Not Started</SelectItem>
              <SelectItem value="Arraignment Scheduled">
                Arraignment Scheduled
              </SelectItem>
              <SelectItem value="Trail Scheduled">Trail Scheduled</SelectItem>
              <SelectItem value="Done">Done</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="driver-license" className="text-right">
            Ticket Number
          </Label>
          <Input
            id="ticket-number"
            className="col-span-3"
            value={ticketNumber}
            onChange={(e) => {
              setTicketNumber(e.target.value);
            }}
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="driver-license" className="text-right">
            Court Date
          </Label>
          <Input
            id="court-date"
            className="col-span-3"
            value={courtDate}
            onChange={(e) => {
              setCourtDate(e.target.value);
            }}
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="driver-license" className="text-right">
            Court Location
          </Label>
          <Input
            id="court-location"
            className="col-span-3"
            value={courtLocation}
            onChange={(e) => {
              setCourtLocation(e.target.value);
            }}
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="driver-license" className="text-right">
            Notes
          </Label>
          <Textarea
            id="notes"
            className="col-span-3"
            value={notes}
            onChange={(e) => {
              setNotes(e.target.value);
            }}
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="driver-license" className="text-right">
            Payment
          </Label>
          <Select
            onValueChange={(value) => {
              setPayment(value);
            }}
          >
            <SelectTrigger className="col-span-2">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Received">Received</SelectItem>
              <SelectItem value="Not Received">Not Received</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <DialogFooter>
          <Button onClick={upsertBothTables}>Move to tickets</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

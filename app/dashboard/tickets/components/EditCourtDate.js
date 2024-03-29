'use client'
import { useState, useEffect } from "react"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Input } from "@/components/ui/input"
import { createClient } from "@/utils/supabase/client";

export default function EditCourtDate({ticket}){
  const supabase = createClient();
  const [date, setDate] = useState(ticket.court_date)
  const [hours, setHours] = useState('')
  console.log('state', date)

  useEffect(() => {
    async function UpdateCourtDate(ticket){
      const { data, error } = await supabase
      .from('tickets')
      .update({ court_date: date })
      .eq('id', ticket.id)

    }

    UpdateCourtDate(ticket)
    setHours(date.substring(11, 16))
  }, [date])

  const handleTimeChange = (e) => {
    const newTime = e.target.value; // Extract new time from the event

    // Construct a new date-time string with the new time
    const newDateTime = date.substring(0, 11) + newTime + date.substring(16);

    // Update the state with the new date-time
    setDate(newDateTime);
  };

  return (
    <Popover>
      <PopoverTrigger className="text-left text-xs">
        {new Date(date).toLocaleDateString('en-US', {timeZone: 'UTC', month: '2-digit', day: '2-digit', year: 'numeric'}) + " " + new Date(date).toLocaleTimeString(['en-US'], {timeZone: 'UTC', hour: '2-digit', minute:"2-digit"})}
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="center">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
        />
        <div className="flex flex-row items-center gap-2 justify-center">
          <label className="text-sm font-medium ">Start time: </label>
          <Input className="w-min border-none" type="time" onChange={handleTimeChange} value={defaultTimeValue}/>
        </div>
      </PopoverContent>
    </Popover>

  )
}

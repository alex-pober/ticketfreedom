"use client"

import React, {useState} from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { ScrollArea } from "./ui/scroll-area"

const frameworks = [
  {
    value: "Airport Courthouse",
    label: "Airport Courthouse",
  },
  {
    value: "Alhambra Courthouse",
    label: "Alhambra Courthouse",
  },
  {
    value: "Bellflower Courthouse",
    label: "Bellflower Courthouse",
  },
  {
    value: "Beverly Hills Courthouse",
    label: "Beverly Hills Courthouse",
  },
  {
    value: "Burbank Courthouse",
    label: "Burbank Courthouse",
  },
  {
    value: "Calabasas Courthouse",
    label: "Calabasas Courthouse",
  },
  {
    value: "Catalina Courthouse",
    label: "Catalina Courthouse",
  },
  {
    value: "Central Arraignment Courthouse",
    label: "Central Arraignment Courthouse",
  },
  {
    value: "Chatsworth Courthouse",
    label: "Chatsworth Courthouse",
  },
  {
    value: "Compton Courthouse",
    label: "Compton Courthouse",
  },
  {
    value: "Culver City Courthouse",
    label: "Culver City Courthouse",
  },
  {
    value: "Downey Courthouse",
    label: "Downey Courthouse",
  },
  {
    value: "East Los Angeles Courthouse",
    label: "East Los Angeles Courthouse",
  },
  {
    value: "El Monte Courthouse",
    label: "El Monte Courthouse",
  },
  {
    value: "Glendale Courthouse",
    label: "Glendale Courthouse",
  },
  {
    value: "Governor George Deukmejian Courthouse",
    label: "Governor George Deukmejian Courthouse",
  },
  {
    value: "Hollywood Courthouse",
    label: "Hollywood Courthouse",
  },
  {
    value: "Huntington Park Courthouse",
    label: "Huntington Park Courthouse",
  },
  {
    value: "Inglewood Courthouse",
    label: "Inglewood Courthouse",
  },
  {
    value: "Lynwood Regional Justice Center",
    label: "Lynwood Regional Justice Center",
  },
  {
    value: "Malibu Courthouse",
    label: "Malibu Courthouse",
  },
  {
    value: "Metropolitan Courthouse",
    label: "Metropolitan Courthouse",
  },
  {
    value: "Michael Antonovich Antelope Valley Courthouse",
    label: "Michael Antonovich Antelope Valley Courthouse",
  },
  {
    value: "Monrovia Courthouse",
    label: "Monrovia Courthouse",
  },
  {
    value: "Pasadena Courthouse",
    label: "Pasadena Courthouse",
  },
  {
    value: "Pomona Courthouse North",
    label: "Pomona Courthouse North",
  },
  {
    value: "Redondo Beach Courthouse",
    label: "Redondo Beach Courthouse",
  },
  {
    value: "San Fernando Courthouse",
    label: "San Fernando Courthouse",
  },
  {
    value: "San Pedro Courthouse",
    label: "San Pedro Courthouse",
  },
  {
    value: "Santa Clarita Courthouse",
    label: "Santa Clarita Courthouse",
  },
  {
    value: "Santa Monica Courthouse",
    label: "Santa Monica Courthouse",
  },
  {
    value: "South Gate Courthouse",
    label: "South Gate Courthouse",
  },
  {
    value: "Torrance Courthouse",
    label: "Torrance Courthouse",
  },
  {
    value: "Van Nuys Courthouse West",
    label: "Van Nuys Courthouse West",
  },
  {
    value: "West Covina Courthouse",
    label: "West Covina Courthouse",
  },
  {
    value: "West Los Angeles Courthouse",
    label: "West Los Angeles Courthouse",
  },
  {
    value: "West Valley Ticket Payment Office",
    label: "West Valley Ticket Payment Office",
  },
  {
    value: "Whittier Courthouse",
    label: "Whittier Courthouse",
  },
  {
    value: "Orange County Courthouse",
    label: "Orange County Courthouse",
  },
  {
    value: "Riverside Courthouse",
    label: "Riverside Courthouse",
  },
]

export function ComboboxDemo({onChange}: {onChange: any}) {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")

  return (
    <Popover modal open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[300px] justify-between"
        >
          {value
            ? value
            : "Where is the court location?"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0 h-60">
        <Command>
          <CommandInput placeholder="Search court..." />
          <CommandEmpty>No court found.</CommandEmpty>
          <ScrollArea>
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setValue(framework.value)
                    setOpen(false)
                    onChange(framework.value)
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === framework.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {framework.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </ScrollArea>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

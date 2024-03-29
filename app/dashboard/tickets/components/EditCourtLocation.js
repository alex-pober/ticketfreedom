'use client'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function EditCourtLocation(){
  return (
    <Select>
    <SelectTrigger className="[&>span]:line-clamp-none [&>span]:w-20 [&>span]:leading-4 gap-1 py-5 px-0 h-2 border-none">
      <SelectValue placeholder={ticketInfo.status} />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>Change status</SelectLabel>
        <SelectItem value="apple">Not Started</SelectItem>
        <SelectItem value="banana">Arraignment Scheduled</SelectItem>
        <SelectItem value="blueberry">Trial Scheduled</SelectItem>
        <SelectItem value="grapes">Trial by Dec.</SelectItem>
        <SelectItem value="pineapple">Trial by Dec. <br/> NOT PAID</SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
  )
}

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function NoPendingTickets(){
  return (
    <Card className="w-[350px] m-auto mt-10">
      <CardHeader>
        <CardTitle>No Pending Tickets</CardTitle>
        <CardDescription>Theres no pending tickets to manage.</CardDescription>
      </CardHeader>
    </Card>
  )
}

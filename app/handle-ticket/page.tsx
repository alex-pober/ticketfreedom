import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Handle My Traffic Ticket - Ticket Freedom",
  description: "Let us handle your traffic ticket. Fill out our form and we'll take care of the rest.",
}

export default function HandleTicketPage() {
  return (
    <div className="container bg-[#FFD35C] mx-auto py-8 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Let Us Handle Your Ticket</h1>
        <div className="bg-white rounded-lg shadow-lg ">
          <iframe 
            src="https://law-offices-of-david-wallin.mycase.com/contact_us/WUMVoTyPScJqmRMcGuJiGuzQ" 
            title="Contact Us Form" 
            className="w-full h-dvh border-none bg-[#FFD35C]"
          />
        </div>
      </div>
    </div>
  )
}

import NextLogo from "./NextLogo";
import SupabaseLogo from "./SupabaseLogo";
import Link from "next/link";
import { Separator } from "./ui/separator";
import { Badge } from "@/components/ui/badge";

export default function LandingPageTicketStepper() {
  return (
    <>
      <div className="flex flex-col gap-2 min-[400px]:flex-row pt-10">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-3xl xl:text-4xl/none bg-clip-text mb-5">
          Theres 2 options
        </h1>
      </div>
      <div className="flex flex-row gap-5 ">
        <section className="w-full border-solid border-2 rounded-lg p-4">
          <div className="flex flex-col items-center mb-5">
            <h1 className="pt-1 text-2xl font-bold tracking-tighter sm:text-xl md:text-2xl xl:text-2xl/none bg-clip-text">
              Do it yourself
            </h1>
            <h1 className="max-w-[700px] text-gray-500 md:text-l dark:text-gray-400">
              (good luck!)
            </h1>
          </div>
          <div className="w-full max-w-xs relative">
            <div>
              <div className="flex flex-row gap-1">
                <Badge>Step 1: Get Notified</Badge>
                {/* <ActivityIcon className="" /> */}
              </div>
              <div className="flex flex-row gap-5 m-1">
                <Separator orientation="vertical" className="h-100" />
                <div>
                  When you're stopped by law enforcement, you'll receive a
                  notification detailing the violation.
                </div>
              </div>
            </div>

            <div>
              <div className="flex flex-row gap-1">
                <Badge>Step 2: Understand the Violation</Badge>
              </div>
              <div className="flex flex-row gap-5 m-1">
                <Separator orientation="vertical" className="h-100" />
                <div>
                  Take a moment to understand the nature of the violation and
                  the options available to you.
                </div>
              </div>
            </div>

            <div>
              <div className="flex flex-row gap-1">
                <Badge>Step 3: Choose Your Course of Action</Badge>
              </div>
              <div className="flex flex-row gap-5 m-1">
                <Separator orientation="vertical" className="h-100" />
                <div>
                  Decide whether to pay the fine or contest the citation.
                </div>
              </div>
            </div>

            <div>
              <div className="flex flex-row gap-1">
                <Badge>Step 4: Request an Arraignment Date</Badge>
              </div>
              <div className="flex flex-row gap-5 m-1">
                <Separator orientation="vertical" className="h-100" />
                <div>
                  If you choose to contest, you can request an arraignment date.
                </div>
              </div>
            </div>

            <div>
              <div className="flex flex-row gap-1">
                <Badge>Step 5: Attend the Arraignment</Badge>
              </div>
              <div className="flex flex-row gap-5 m-1">
                <Separator orientation="vertical" className="h-100" />
                <div>
                  Appear in court for the arraignment and enter a plea (guilty,
                  not guilty, or no contest).
                </div>
              </div>
            </div>

            <div>
              <div className="flex flex-row gap-1">
                <Badge>Step 6: Await the Trial Date</Badge>
              </div>
              <div className="flex flex-row gap-5 m-1">
                <Separator orientation="vertical" className="h-100" />
                <div>
                  If you plead not guilty, the court will set a trial date.
                </div>
              </div>
            </div>

            <div>
              <div className="flex flex-row gap-1">
                <Badge>Step 7: Present Your Case</Badge>
              </div>
              <div className="flex flex-row gap-5 m-1">
                <Separator orientation="vertical" className="h-100" />
                <div>Attend the trial and present your side of the story.</div>
              </div>
            </div>

            <div>
              <div className="flex flex-row gap-1">
                <Badge>Step 8: Await the Verdict</Badge>
              </div>
              <div className="flex flex-row gap-5 m-1">
                <Separator orientation="vertical" className="h-100" />
                <div>
                  The judge or jury will make a decision based on the evidence
                  presented.
                </div>
              </div>
            </div>

            <div>
              <div className="flex flex-row gap-1">
                <Badge>Step 9: Appeal if Necessary</Badge>
              </div>
              <div className="flex flex-row gap-5 m-1">
                <Separator orientation="vertical" className="h-100" />
                <div>
                  If you're not satisfied with the outcome, you have the option
                  to appeal.
                </div>
              </div>
            </div>

            <div>
              <div className="flex flex-row gap-1">
                <Badge>Step 10: Fulfill Your Obligation</Badge>
              </div>
              <div className="flex flex-row gap-5 m-1">
                <Separator orientation="vertical" className="h-100" />
                <div>
                  If found guilty, pay the fine by the specified deadline.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full border-solid border-2 rounded-lg p-4">
          <div className="flex flex-col items-center mb-5">
            <h1 className="pt-1 text-2xl font-bold tracking-tighter sm:text-xl md:text-2xl xl:text-2xl/none bg-clip-text">
              Let us handle it
            </h1>
            <h1 className="max-w-[700px] text-gray-500 md:text-l dark:text-gray-400">
              from $149*
            </h1>
          </div>
          <div className="w-full max-w-xs relative">
            <div>
              <div className="flex flex-row gap-1">
                <Badge>Step 1: Send us info</Badge>
                {/* <ActivityIcon className="" /> */}
              </div>
              <div className="flex flex-row gap-5 m-1">
                <Separator orientation="vertical" className="h-100" />
                <div>We just need your Driver License and Traffic Ticket</div>
              </div>
            </div>

            <div>
              <div className="flex flex-row gap-1">
                <Badge>Done</Badge>
              </div>
              <div className="flex flex-row gap-5 m-1">
                <Separator orientation="vertical" className="h-100" />
                <div>
                  Well let you know the outcome of your ticket and what needs to
                  be done.
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

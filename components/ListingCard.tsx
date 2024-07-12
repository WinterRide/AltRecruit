"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ListingCard({
  company,
  jobdesc,
  criteria,
  salary,
  workStatus,
  requirement,
}: {
  company: string;
  jobdesc: string;
  criteria: string[];
  salary: number;
  workStatus: string;
  requirement: string[];
}) {
  const [reqOpen, setReqOpen] = useState(false);

  return (
    <>
      <Card className="w-full shadow">
        <CardHeader className="space-y-0 flex md:flex-row items-center justify-between gap-4 md:gap-16">
          <CardTitle className="text-3xl">{company}</CardTitle>
          <p className="text-2xl">{jobdesc}</p>
        </CardHeader>
        <CardContent className="text-lg flex flex-col md:flex-row md:items-start justify-between gap-4 md:gap-16">
          <div>
            <ul className="list-disc pl-4">
              {criteria.slice(0, 3).map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
            {criteria.length > 3 && (
              <p className="text-muted-foreground">
                {criteria.length - 3} more...
              </p>
            )}
          </div>
          <div className="md:text-right flex flex-col gap-2">
            <p className="font-bold">{workStatus}</p>
            <p>
              {salary.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
              })}{" "}
              / hour
            </p>
          </div>
        </CardContent>
        <CardFooter className="flex flex-row items-start justify-between">
          <Button
            onClick={() => setReqOpen(!reqOpen)}
            variant="link"
            className="text-lg p-0 max-md:hidden"
          >
            View requirements
            <ChevronDown
              className={cn(
                "w-6 h-6 ml-2 transition-all",
                reqOpen && "transform -rotate-180"
              )}
            />
          </Button>
          <Button className="rounded-lg px-16 max-md:w-full">Details</Button>
        </CardFooter>
      </Card>
      <CardContent
        className={cn(
          "text-lg bg-muted rounded-md shadow transition-all overflow-hidden",
          reqOpen ? "max-h-screen py-6" : "max-h-0 py-0"
        )}
      >
        <ul className="list-disc pl-6">
          {requirement.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>
      </CardContent>
    </>
  );
}

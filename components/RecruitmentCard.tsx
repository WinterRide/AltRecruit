import router from "next/router";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

export default function RecruitmentCard({
  id,
  company,
  jobdesc,
  status,
  dateStart,
  dateEnd,
}: {
  id: number;
  company: string;
  jobdesc: string;
  status: string;
  dateStart: string;
  dateEnd: string;
}) {
  return (
    <Card className="w-full shadow">
      <CardHeader className="space-y-0 flex md:flex-row items-start justify-between gap-4 md:gap-16">
        <CardTitle className="text-3xl">{company}</CardTitle>
        <div className="text-right">
          <p className="text-2xl">{jobdesc}</p>
          <p>
            {new Date(dateStart).toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}{" "}
            -{" "}
            {new Date(dateEnd).toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </CardHeader>
      <CardFooter className="flex flex-row items-end justify-between">
        <p>{status}</p>
        <Button
          className="rounded-lg px-16 max-md:w-full"
          onClick={() => {
            router.push(`/jobs/${id}`);
          }}
        >
          Details
        </Button>
      </CardFooter>
    </Card>
  );
}

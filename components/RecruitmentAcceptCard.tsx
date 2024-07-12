import React from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const RecruitmentAcceptCard = ({
  company,
  jobdesk,
  status,
  startDate,
  endDate,
}: {
  company: string;
  jobdesk: string;
  status: string;
  startDate: string;
  endDate: string;
}) => {
  const router = useRouter();

  return (
    <div className="flex justify-between items-center w-full bg-white p-6 rounded-lg shadow-md mb-4">
      <div className="flex flex-col">
        <p className="text-2xl font-bold">{company}</p>
        <div className="flex flex-col mt-2">
          <span className="text-gray-600 mt-1">
            {startDate} - {endDate}
          </span>
          <span
            className={`text-lg ${
              status === "On going" ? "text-green-500" : "text-red-500"
            }`}
          >
            Status : {status}
          </span>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <span className="text-gray-600">Job Description</span>
        <span className="text-xl font-semibold">{jobdesk}</span>

        <div className="flex gap-2 mt-4">
          <Button
            variant="default"
            className="bg-black text-white"
            onClick={() => router.push("/jobs/1")}
          >
            Details
          </Button>
          <Button variant="default" className="bg-gray-500 text-white">
            Cancel Recruitment
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RecruitmentAcceptCard;

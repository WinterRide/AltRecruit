"use client";

import PopularTab from "@/components/PopularTab";
import RecruitmentAcceptCard from "@/components/RecruitmentAcceptCard";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Index() {
  const router = useRouter();
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      router.push("/account/login");
    }
    const role = user ? JSON.parse(user).role : "jobseeker";
    if (role === "jobseeker") {
      router.push("/jobs");
    }
  }, []);

  function handleCreateRecruitment() {
    router.push("/recruits/create");
  }

  const popularRoles = [
    {
      role: "Gardener",
      requirements: "Can cut trees and flowers.",
      hired: 122600,
    },
    {
      role: "ART Worker",
      requirements: "Able to handle a baby and cook foods.",
      hired: 30000,
    },
    {
      role: "Office Boy",
      requirements: "Can clean the necessities.",
      hired: 10000,
    },
  ];

  const topRecruiters = [
    {
      role: "Tokopedia",
      hired: 60000,
    },
    {
      role: "GoClean",
      hired: 45000,
    },
  ];

  const recruitmentData = {
    company: "PT Tokopedia",
    jobdesk: "Gardener",
    status: "On going",
    startDate: "Monday, 15 July 2024",
    endDate: "Sunday, 21 July 2024",
  };

  return (
    <>
      <div className="mx-auto w-full py-16 flex flex-col items-center gap-16 justify-center">
        <Button
          onClick={handleCreateRecruitment}
          className="flex gap-4 text-3xl py-10 px-16"
        >
          <Plus size={32} strokeWidth={1.5} />
          Create New Recruitment
        </Button>
      </div>

      <div className="flex w-full px-8 gap-8">
        <div className="flex flex-col w-full">
          <div className="w-full">
            <p className="text-3xl font-bold self-start">
              Requirement Request Status
            </p>
            <div className="flex w-full mt-5 flex-col">
              <div className="w-full">
                <RecruitmentAcceptCard {...recruitmentData} />
              </div>
              <div className="w-full">
                <RecruitmentAcceptCard {...recruitmentData} />
              </div>
              <div className="w-full">
                <RecruitmentAcceptCard {...recruitmentData} />
              </div>
            </div>
          </div>
          <div className="w-full">
            <p className="text-3xl font-bold self-start mt-10">
              Requirement Request Status
            </p>
            <div className="flex w-full mt-5 flex-col">
              <div className="w-full">
                <RecruitmentAcceptCard {...recruitmentData} />
              </div>
              <div className="w-full">
                <RecruitmentAcceptCard {...recruitmentData} />
              </div>
              <div className="w-full">
                <RecruitmentAcceptCard {...recruitmentData} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[20%] bg-white shadow-lg rounded-lg px-6 py-4 h-[calc(100vh-8rem)] sticky top-[1rem] max-lg:hidden">
          <PopularTab
            popularroles={popularRoles}
            toprecruiters={topRecruiters}
          />
        </div>
      </div>
    </>
  );
}

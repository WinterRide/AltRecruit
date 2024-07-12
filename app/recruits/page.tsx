"use client";

import RecruitmentCard from "@/components/RecruitmentCard";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function Index() {
  useEffect(() => {
    // const user = localStorage.getItem("user");
    // if (!user) {
    //   redirect("/account/login");
    // }
    // const role = user ? JSON.parse(user).role : "jobseeker";
    // if (role === "jobseeker") {
    //   redirect("/jobs");
    // }
  }, []);

  function handleCreateRecruitment() {
    // ! CEK DETAILS

    redirect("/recruits/create");
  }

  return (
    <div className="max-w-[min(1200px,90vw)] mx-auto w-full py-16 flex flex-col items-center gap-16 justify-center">
      <Button
        onClick={handleCreateRecruitment}
        className="flex gap-4 text-3xl py-10 px-16"
      >
        <Plus size={32} strokeWidth={1.5} />
        Create New Recruitment
      </Button>
      <div className="grid grid-cols-[0.8fr,0.2fr] w-full">
        <div className="w-full flex flex-col gap-8">
          <div className="w-full flex flex-col gap-8">
            <h2 className="text-3xl font-semibold">On-Going Recruitments</h2>
            <div className="w-full">
              <RecruitmentCard
                id={0}
                company={"Tokopedia"}
                jobdesc={"Kerjaan"}
                status={"On Going"}
                dateStart={"08/22/2021"}
                dateEnd={"03/09/2021"}
              />
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

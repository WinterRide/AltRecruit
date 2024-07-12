"use client";

import React, { useEffect, useState } from "react";
import ListingCard from "@/components/ListingCard";
import { Separator } from "@/components/ui/separator";
import FilterComponent from "@/components/FIlterComponent";
import PopularTab from "@/components/PopularTab";
import { redirect } from "next/navigation";

export default function SearchPage() {
  const [reqOpen, setReqOpen] = useState(false);
  const workStatus = ["Full time", "Part time", "One time job"];
  const requirements = ["Citizen Card", "Birth Certificate", "Resume / CV"];

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      redirect("/account/login");
    }
    const role = user ? JSON.parse(user).role : "jobseeker";
    if (role === "company") {
      redirect("/recruits");
    }
  }, []);

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

  const testCases = [
    {
      id: 1,
      company: "Company 1",
      jobdesc: "Job Description 1",
      criteria: ["Criteria 1", "Criteria 2", "Criteria 3", "test", "test"],
      salary: 600000,
      workStatus: "Full time",
      requirement: ["Requirement 1", "Requirement 2", "Requirement 3"],
    },
    {
      id: 2,
      company: "Company 2",
      jobdesc: "Job Description 2",
      criteria: ["Criteria 1", "Criteria 2", "Criteria 3", "test"],
      salary: 2500000,
      workStatus: "Part time",
      requirement: ["Requirement 1", "Requirement 2", "Requirement 3"],
    },
    {
      id: 3,
      company: "Company 3",
      jobdesc: "Job Description 3",
      criteria: [
        "Criteria 1",
        "Criteria 2",
        "Criteria 3",
        "test",
        "test",
        "test",
      ],
      salary: 50000,
      workStatus: "One time job",
      requirement: ["Requirement 1", "Requirement 2", "Requirement 3"],
    },
  ];

  return (
    <>
      <main className="flex w-full justify-center gap-6 p-6">
        {/* Filters */}
        <FilterComponent
          workstatus={workStatus}
          requirements={requirements}
        ></FilterComponent>

        {/* Listings */}
        <div className="flex flex-col w-[60%] gap-2 max-lg:w-full">
          {testCases.map((testCase, i) => (
            <ListingCard key={i} {...testCase} />
          ))}
        </div>

        {/* Popular */}
        <div className="flex flex-col w-[20%] bg-white shadow-md rounded-lg px-6 py-4 h-[calc(100vh-8rem)] sticky top-[1rem] max-lg:hidden">
          <PopularTab
            popularroles={popularRoles}
            toprecruiters={topRecruiters}
          />
        </div>
      </main>
    </>
  );
}

"use client";

import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import ListingCard from "@/components/ListingCard";
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import FilterComponent from "@/components/FIlterComponent";

export default function SearchPage() {
  const [reqOpen, setReqOpen] = useState(false);
  const workStatus = ["Full time", "Part time", "One time job"];
  const requirements = ["Citizen Card", "Birth Certificate", "Resume / CV"];

  const testCases = [
    {
      company: "Company 1",
      jobdesc: "Job Description 1",
      criteria: ["Criteria 1", "Criteria 2", "Criteria 3", "test", "test"],
      salary: 600000,
      workStatus: "Full time",
      requirement: ["Requirement 1", "Requirement 2", "Requirement 3"],
    },
    {
      company: "Company 2",
      jobdesc: "Job Description 2",
      criteria: ["Criteria 1", "Criteria 2", "Criteria 3", "test"],
      salary: 2500000,
      workStatus: "Part time",
      requirement: ["Requirement 1", "Requirement 2", "Requirement 3"],
    },
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
      company: "Company -",
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
        <div className="flex flex-col w-[60%] gap-2">
          {testCases.map((testCase, i) => (
            <ListingCard key={i} {...testCase} />
          ))}
        </div>

        {/* Popular */}
        <div className="flex flex-col w-[20%] bg-red-600">3</div>
      </main>
    </>
  );
}

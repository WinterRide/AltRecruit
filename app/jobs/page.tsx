import React from "react";
import ListingCard from "@/components/ListingCard";

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
];

export default function SearchPage() {
  return (
    <>
      <main className="flex px-6 w-full justify-center gap-6 bg-[#efefef]">
        {/* Filters */}
        <div className="flex flex-col w-[20%] bg-red-600 px-6 py-4">
          <p className="w-full justify-start items-center text-2xl font-bold">
            Filters
          </p>
          <div className="flex flex-col w-full">
            <p>Salary</p>
          </div>
        </div>

        {/* Listings */}
        <div className="flex flex-col w-[60%]">
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

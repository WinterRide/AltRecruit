"use client";

import DetailsSchedulesCard from "@/components/DetailsSchedulesCard";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Banknote,
  BriefcaseBusiness,
  Clock,
  Map,
} from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function JobPage() {
  const router = useRouter();

  const { id } = useParams();

  const [job, setJob] = useState<Job>({
    id: "1",
    company: "Company",
    position: "Gardener",
    location: "ISS",
    shift: "Morning",
    salary: 5000000,
    description: "Gardening in the International Space Station",
    criteria: [
      "Able to work in space",
      "Able to work with plants",
      "Able to work with robots",
    ],
    workStatus: "Full time",
    requirement: [
      "Able to work in space",
      "Able to work with plants",
      "Able to work with robots",
    ],
  });

  const [test, setTest] = useState<Test>({
    details: ["test", "test", "test"],
    schedule: [
      {
        name: "Test 1",
        date: "2022-12-12",
        duration: "1 hour",
      },
      {
        name: "Test 2",
        date: "2022-12-12",
        duration: "1 hour",
      },
    ],
  });

  useEffect(() => {
    // ! Fetch job data by id
    // ! Fetch test data by id
  }, [id]);

  async function handleApply() {
    // ! API CALL HERE
    // ! Add the listing to the user's history, applied
  }

  function goBack() {
    window.history.length > 1 ? router.back() : router.push("/jobs");
  }

  const separator = <hr className="border-primary" />;

  return (
    <div className="max-w-[min(1200px,90vw)] w-full grid grid-cols-[minmax(0,0.65fr),0.35fr] gap-32 items-start py-16">
      <div className="flex flex-col gap-4 w-full">
        <Button
          variant="link"
          className="self-start p-0 text-lg flex gap-2"
          onClick={goBack}
        >
          <ArrowLeft size={24} strokeWidth={1.5} />
          Back
        </Button>
        <h2 className="text-4xl font-bold">{job.company}</h2>
        <div className="text-lg flex flex-col gap-1">
          <h3 className="text-2xl font-semibold">Job Details</h3>
          {separator}
          <div className="grid grid-cols-[0.2fr,minmax(0,0.8fr)]">
            <h4 className="text-lg flex gap-2 items-center">
              <BriefcaseBusiness size={18} strokeWidth={1.5} />
              Position
            </h4>
            <p>: {job.position}</p>
            <h4 className="text-lg flex gap-2 items-center">
              <Map size={18} strokeWidth={1.5} />
              Location
            </h4>
            <p>: {job.location}</p>
            <h4 className="text-lg flex gap-2 items-center">
              <Clock size={18} strokeWidth={1.5} />
              Shift
            </h4>
            <p>: {job.shift}</p>
            <h4 className="text-lg flex gap-2 items-center">
              <Banknote size={18} strokeWidth={1.5} />
              Salary
            </h4>
            <p>
              :{" "}
              {job.salary.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
              })}{" "}
              / hour
            </p>
          </div>
          <br />
          <p>{job.description}</p>
        </div>
        <div className="text-lg flex flex-col gap-1">
          <h3 className="text-2xl font-semibold">Criteria</h3>
          {separator}
          <ul className="list-disc pl-6">
            {job.criteria.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
        <div className="text-lg flex flex-col gap-1">
          <h3 className="text-2xl font-semibold">Requirement</h3>
          {separator}
          <ul className="list-disc pl-6">
            {job.requirement.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </div>
        <div className="text-lg flex flex-col gap-1">
          <h3 className="text-2xl font-semibold">Test Details</h3>
          {separator}
          <ul className="list-disc pl-6">
            {test.details.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </div>
      </div>
      <DetailsSchedulesCard schedule={test.schedule} onApply={handleApply} />
    </div>
  );
}

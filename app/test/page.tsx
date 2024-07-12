"use client";
import React, { useState } from "react";
import { ArrowLeft, PencilLine, Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function MakeTest() {
  const router = useRouter();
  const [criteria, setCriteria] = useState([""]);
  const [req, setReq] = useState([""]);
  const [test, setTest] = useState([""]);

  const reqs = ["Citizen Card", "Driving License", "Passport"];

  function goBack() {
    window.history.length > 1 ? router.back() : router.push("/");
  }

  const addCriteria = () => {
    if (criteria.length < 10) {
      setCriteria([...criteria, ""]);
    }
  };

  const addReq = () => {
    if (req.length < 100) {
      setReq([...req, ""]);
    }
  };

  const addtest = () => {
    if (test.length < 100) {
      setTest([...test, ""]);
    }
  };

  return (
    <>
      <main className="flex flex-col justify-center items-center w-full mt-4 px-48 max-lg:px-24 max-md:px-16 max-sm:px-2">
        <Button
          variant="link"
          className="self-start p-0 text-lg flex gap-2"
          onClick={goBack}
        >
          <ArrowLeft size={24} strokeWidth={1.5} />
          Back
        </Button>
        <div className="w-full bg-white py-10 rounded-lg shadow-md mt-2 px-24 outline outline-1 max-sm:px-4">
          <p className="font-semibold text-3xl">Make Test</p>
          <p className="font-semibold text-2xl mt-10">Job Details</p>
          <Separator className="w-full mt-4 bg-black p-[0.7px]" />

          <div className="flex flex-col space-y-1.5 mt-6">
            <div className="flex flex-col gap-2 relative">
              <Label htmlFor="name" className="font-semibold">
                Job Description
              </Label>
              <div className="relative">
                <Input
                  id="name"
                  placeholder="Enter Job Description..."
                  className="border border-black bg-white"
                />
                <PencilLine className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-1.5 mt-6">
            <div className="flex flex-col gap-2 relative">
              <Label htmlFor="salary" className="font-semibold">
                Salary
              </Label>
              <div className="relative">
                <Input
                  id="salary"
                  placeholder="Enter Salary..."
                  className="border border-black bg-white"
                />
                <PencilLine className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-1.5 mt-6">
            <Label htmlFor="criteria" className="font-semibold">
              Criteria{" "}
              <span className="text-sm text-neutral-700 font-normal">
                (max: 10)
              </span>
            </Label>
            {criteria.map((criterion, index) => (
              <div key={index} className="relative flex items-center">
                <Input
                  id={`criteria-${index}`}
                  value={criterion}
                  placeholder="Enter Criteria..."
                  className="border border-black bg-white"
                />
                <PencilLine className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              </div>
            ))}
            {criteria.length < 10 && (
              <Button
                onClick={addCriteria}
                className="flex w-[15rem] items-center mt-4 max-sm:w-full"
              >
                <Plus className="mr-2" /> Add new criteria
              </Button>
            )}
          </div>

          <div className="flex flex-col space-y-1.5 mt-6">
            <Label htmlFor="criteria" className="font-semibold">
              Requirements
            </Label>
            {req.map((r, index) => (
              <div key={index} className="relative flex items-center">
                <Select>
                  <SelectTrigger className="w-full bg-white border border-black">
                    <SelectValue placeholder="Select requirement..." />
                  </SelectTrigger>
                  <SelectContent>
                    {reqs.map((req, index) => (
                      <SelectItem value={req}>{req}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            ))}
            {req.length < 100 && (
              <Button
                onClick={addReq}
                className="flex w-[15rem] items-center mt-4 max-sm:w-full"
              >
                <Plus className="mr-2" /> Add new requirement
              </Button>
            )}
          </div>

          <p className="font-semibold text-2xl mt-10">Test Details</p>
          <Separator className="w-full mt-4 bg-black p-[0.7px]" />

          <div className="flex flex-col space-y-1.5 mt-6">
            <div className="flex flex-col gap-2 relative">
              <Label htmlFor="test" className="font-semibold">
                Test Name
              </Label>
              <div className="flex gap-2 w-full">
                <div className="relative w-full">
                  <Input
                    id="test"
                    placeholder="Enter Test Name..."
                    className="border border-black bg-white"
                  />
                  <PencilLine className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                </div>
                <Button onClick={() => router.push("/test-details")}>
                  Test Content
                </Button>
              </div>
              {test.length < 100 && (
                <Button
                  onClick={addtest}
                  className="flex w-[15rem] items-center mt-4 max-sm:w-full"
                >
                  <Plus className="mr-2" /> Add new test
                </Button>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

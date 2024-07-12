import React, { useState } from "react";
import { ChevronUp } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const FilterComponent = ({
  workstatus,
  requirements,
}: {
  workstatus: string[];
  requirements: string[];
}) => {
  const [reqOpen, setReqOpen] = useState(false);
  const [reqOpen2, setReqOpen2] = useState(false);

  return (
    <div className="flex flex-col w-[20%] bg-white shadow-md rounded-lg px-6 py-4 h-[calc(100vh-8rem)] sticky top-[1rem]">
      <p className="w-full justify-start items-center text-2xl font-bold">
        Filters
      </p>
      <div className="flex flex-col w-full mt-6 gap-2">
        <p className="w-full font-semibold text-lg">Salary</p>
        <div className="flex space-x-2 mt-2">
          <input
            type="text"
            placeholder="from"
            className="border rounded p-2 w-full outline outline-2"
          />
          <span className="p-2">-</span>
          <input
            type="text"
            placeholder="to"
            className="border rounded p-2 w-full outline outline-2"
          />
        </div>
      </div>
      <Separator className="mt-10 bg-black py-[0.7px]" />
      <div className="w-full flex flex-col mt-4">
        <div className="flex">
          <p className="text-lg font-semibold items-center justify-between w-full">
            Work Status
          </p>
          <ChevronUp
            onClick={() => setReqOpen(!reqOpen)}
            className={cn(
              "w-6 h-6 ml-2 transition-all",
              reqOpen && "transform -rotate-180"
            )}
          />
        </div>
        <div
          className={cn(
            "text-lg gap-4 transition-all overflow-hidden flex flex-col",
            !reqOpen ? "max-h-screen py-6" : "max-h-0 py-0"
          )}
        >
          {workstatus.map((status) => (
            <div
              key={status}
              className="flex items-center space-x-2 justify-between"
            >
              <label
                htmlFor={status}
                className="leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {status}
              </label>
              <Checkbox id={status} />
            </div>
          ))}
        </div>
      </div>
      <Separator className="mt-10 bg-black py-[0.7px]" />
      <div className="w-full flex flex-col mt-4">
        <div className="flex">
          <p className="text-lg font-semibold items-center justify-between w-full">
            Requirements
          </p>
          <ChevronUp
            onClick={() => setReqOpen2(!reqOpen2)}
            className={cn(
              "w-6 h-6 ml-2 transition-all",
              reqOpen && "transform -rotate-180"
            )}
          />
        </div>
        <div
          className={cn(
            "text-lg gap-4 transition-all overflow-hidden flex flex-col",
            !reqOpen2 ? "max-h-screen py-6" : "max-h-0 py-0"
          )}
        >
          {requirements.map((req) => (
            <div
              key={req}
              className="flex items-center space-x-2 justify-between"
            >
              <label
                htmlFor={req}
                className="leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {req}
              </label>
              <Checkbox id={req} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterComponent;

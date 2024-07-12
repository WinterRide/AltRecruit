import React, { useState } from "react";
import { ScrollText, Users } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const PopularTab = () => {
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

  return (
    <>
      <p className="w-full justify-start items-center text-2xl font-bold mt-2">
        Top Popular Jobs
      </p>
      {popularRoles.map((role, index) => (
        <Card className="w-full mt-6">
          <CardHeader className="flex justify-start">
            <CardTitle className="text-xl">{role.role}</CardTitle>
            <CardDescription className="flex flex-col w-full gap-1">
              <div className="flex gap-2 items-center">
                <ScrollText size={17} />
                <p>{role.requirements}</p>
              </div>
              <div className="flex gap-2 items-center">
                <Users size={17} />
                <p>
                  {role?.hired.toLocaleString("id-ID", {
                    style: "decimal",
                  })}
                </p>
              </div>
            </CardDescription>
          </CardHeader>
        </Card>
      ))}

      <Separator className="mt-6 bg-black py-[0.4px]" />

      <p className="w-full justify-start items-center text-2xl font-bold mt-6">
        Top Recruiters
      </p>
      {topRecruiters.map((rec, index) => (
        <Card className="w-full mt-6">
          <CardHeader className="flex justify-start">
            <CardTitle className="text-xl">{rec.role}</CardTitle>
            <CardDescription className="flex flex-col w-full gap-1">
              <div className="flex gap-2 items-center">
                <Users size={17} />
                <p>
                  {rec?.hired.toLocaleString("id-ID", {
                    style: "decimal",
                  })}{" "}
                  Hired
                </p>
              </div>
            </CardDescription>
          </CardHeader>
        </Card>
      ))}
    </>
  );
};

export default PopularTab;

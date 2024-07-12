"use client";
import React, { useState } from "react";
import { ArrowLeft, Edit3 } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function MakeTest() {
  const router = useRouter();

  function goBack() {
    window.history.length > 1 ? router.back() : router.push("/");
  }

  return (
    <>
      <main className="flex flex-col justify-center items-center w-full mt-4 px-10">
        <Button
          variant="link"
          className="self-start p-0 text-lg flex gap-2"
          onClick={goBack}
        >
          <ArrowLeft size={24} strokeWidth={1.5} />
          Back
        </Button>
        <div className="w-full bg-white p-6 rounded-lg shadow-md mt-2 pl-16">
          <p className="font-semibold text-3xl">Make Test</p>
        </div>
      </main>
    </>
  );
}

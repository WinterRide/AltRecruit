"use client";
import React, { useState } from "react";
import { ArrowLeft, Plus, Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function TestDetails() {
  const router = useRouter();
  const [questions, setQuestions] = useState([
    {
      question: "",
      type: "Multiple Choice",
      options: [""],
    },
  ]);

  function goBack() {
    window.history.length > 1 ? router.back() : router.push("/");
  }

  const addQuestion = () => {
    setQuestions([
      ...questions,
      { question: "", type: "Multiple Choice", options: [""] },
    ]);
  };

  const addOption = (index: any) => {
    const newQuestions = [...questions];
    newQuestions[index].options.push("");
    setQuestions(newQuestions);
  };

  const handleQuestionChange = (index: any, value: any) => {
    const newQuestions = [...questions];
    newQuestions[index].question = value;
    setQuestions(newQuestions);
  };

  const handleOptionChange = (qIndex: any, oIndex: any, value: any) => {
    const newQuestions = [...questions];
    newQuestions[qIndex].options[oIndex] = value;
    setQuestions(newQuestions);
  };

  const handleTypeChange = (index: any, value: any) => {
    const newQuestions = [...questions];
    newQuestions[index].type = value;
    setQuestions(newQuestions);
  };

  const removeQuestion = (index: any) => {
    const newQuestions = [...questions];
    newQuestions.splice(index, 1);
    setQuestions(newQuestions);
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
          <p className="text-2xl">Test Name</p>
          <Separator className="w-full mt-4 bg-black p-[0.7px]" />

          {questions.map((question, qIndex) => (
            <div key={qIndex} className="mt-6 border rounded-lg p-4">
              <div className="flex justify-between items-center mb-4">
                <Input
                  value={question.question}
                  onChange={(e) => handleQuestionChange(qIndex, e.target.value)}
                  placeholder="Enter a Question..."
                  className="w-full mr-4 bg-white border border-black"
                />
                <Select
                  value={question.type}
                  onValueChange={(value) => handleTypeChange(qIndex, value)}
                >
                  <SelectTrigger className="w-1/4 bg-white border border-black">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Multiple Choice">
                      Multiple Choice
                    </SelectItem>
                    <SelectItem value="Essay">Essay</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {question.options.map((option, oIndex) => (
                <div key={oIndex} className="flex items-center mb-2">
                  <Input
                    value={option}
                    onChange={(e) =>
                      handleOptionChange(qIndex, oIndex, e.target.value)
                    }
                    placeholder={`Option ${oIndex + 1}`}
                    className="w-full bg-white border border-black"
                  />
                </div>
              ))}
              <div className="flex items-center justify-between">
                <Button
                  variant="link"
                  className="flex items-center mt-2 pl-1"
                  onClick={() => addOption(qIndex)}
                >
                  <Plus className="mr-2" /> Add new option
                </Button>
                <Button variant="ghost" onClick={() => removeQuestion(qIndex)} className="items-center flex pt-4">
                  <Trash className="text-red-500" />
                </Button>
              </div>
            </div>
          ))}

          <Button className="flex items-center mt-6" onClick={addQuestion}>
            <Plus className="mr-2" /> Add new question
          </Button>
        </div>
      </main>
    </>
  );
}

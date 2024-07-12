"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { capitalize, splitCamelCase } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { Pencil } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  company: z.string().min(3, {
    message: "Company name must be at least 3 characters long",
  }),
  position: z.string().min(3, {
    message: "Position must be at least 3 characters long",
  }),
  location: z.string().min(3, {
    message: "Location must be at least 3 characters long",
  }),
  shift: z.string().min(3, {
    message: "Shift must be at least 3 characters long",
  }),
  salary: z.string(),
  description: z.string().min(3, {
    message: "Description must be at least 3 characters long",
  }),
  criteria: z.string().min(3, {
    message: "Criteria must be at least 3 characters long",
  }),
  workStatus: z.string().min(3, {
    message: "Work status must be at least 3 characters long",
  }),
  requirement: z.string().min(3, {
    message: "Requirement must be at least 3 characters long",
  }),
});

export default function CreateRec() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      company: "",
      position: "",
      location: "",
      shift: "",
      salary: "",
      description: "",
      criteria: "",
      workStatus: "",
      requirement: "",
    },
  });

  function handleSubmit(values: z.infer<typeof formSchema>) {
    // ! SUBMIT

    console.log(values);
  }

  const [fields, setFields] = useState<
    {
      field: keyof (typeof formSchema)["shape"];
      description?: string;
      editing: boolean;
    }[]
  >([
    { field: "company", editing: true },
    { field: "position", editing: true },
    { field: "location", editing: true },
    { field: "shift", editing: true },
    { field: "salary", editing: true, description: "In IDR" },
    { field: "description", editing: true },
    {
      field: "criteria",
      editing: true,
      description: "Separate each criteria with a comma.",
    },
    { field: "workStatus", editing: true },
    {
      field: "requirement",
      editing: true,
      description: "Separate each requirement with a comma.",
    },
  ]);

  return (
    <div className="p-16 w-full max-w-[min(1200px,90vw)]">
      <h2 className="text-3xl font-semibold">Create Recruitment</h2>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="w-full grid gap-16 py-8"
        >
          <div className="flex flex-col gap-2">
            {fields.map(({ field, description, editing }) => (
              <FormField
                key={field}
                control={form.control}
                name={field}
                render={({ field }) => (
                  <FormItem className="relative flex flex-col gap-0">
                    <FormLabel>
                      {capitalize(splitCamelCase(field.name))}
                    </FormLabel>
                    <FormControl>
                      <Input
                        disabled={!editing}
                        className="border-muted-foreground disabled:opacity-100"
                        placeholder={capitalize(splitCamelCase(field.name))}
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>{description}</FormDescription>
                    <FormMessage />
                    {editing ? (
                      <></>
                    ) : (
                      <Button
                        type="button"
                        variant="ghost"
                        className="aspect-square w-10 h-10 p-0 grid place-items-center absolute right-0 top-3 bottom-0 hover:bg-transparent hover:opacity-50 transition-opacity"
                        onClick={() => {
                          setFields((prev) =>
                            prev.map((f) =>
                              f.field === field.name
                                ? { ...f, editing: !f.editing }
                                : f
                            )
                          );
                          form.setFocus(field.name);
                        }}
                      >
                        <Pencil size={16} />
                      </Button>
                    )}
                  </FormItem>
                )}
              />
            ))}
          </div>

          {fields.filter((f) => f.editing).length > 0 && (
            <Button type="submit">Save</Button>
          )}
        </form>
      </Form>
    </div>
  );
}

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
  name: z.string().min(3, {
    message: "Name must be at least 3 characters long",
  }),
  email: z.string().email(),
  phone: z.string().min(10, {
    message: "Phone number must be at least 10 characters long",
  }),
  companyName: z.string().min(3, {
    message: "Name must be at least 3 characters long",
  }),
  companyAddress: z.string(),
  companyWebsite: z.string().url(),
  companyEmail: z.string().email(),
  companyNumber: z.string(),
});

export default function ProfileForm({ user }: { user: User }) {
  const details = (user.details ?? {}) as RecruiterDetails;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: user.name || "",
      email: user.email || "",
      phone: user.phone || "",
      companyName: details.companyName || "",
      companyAddress: details.companyAddress || "",
      companyWebsite: details.companyWebsite || "",
      companyEmail: details.companyEmail || "",
      companyNumber: details.companyNumber || "",
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
    { field: "name", editing: false },
    { field: "email", editing: false },
    {
      field: "phone",
      editing: false,
      description: "This field is required to create requirements",
    },
    {
      field: "companyName",
      editing: false,
      description: "This field is required to create requirements",
    },
    {
      field: "companyAddress",
      editing: false,
      description: "This field is required to create requirements",
    },
    {
      field: "companyWebsite",
      editing: false,
      description: "This field is required to create requirements",
    },
    {
      field: "companyEmail",
      editing: false,
      description: "This field is required to create requirements",
    },
    {
      field: "companyNumber",
      editing: false,
      description: "This field is required to create requirements",
    },
  ]);

  return (
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
  );
}

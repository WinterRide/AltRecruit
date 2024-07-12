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
import { capitalize, cn, getInitials } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { Pencil } from "lucide-react";
import { useRef, useState } from "react";
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
  city: z.string(),
  country: z.string(),
  domicile: z.string(),
  avatar: z.any(),
});

export default function ProfileForm({ user }: { user: User }) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: user,
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
      description: "This field is required to apply for jobs",
    },
    {
      field: "city",
      editing: false,
      description: "This field is required to apply for jobs",
    },
    {
      field: "country",
      editing: false,
      description: "This field is required to apply for jobs",
    },
    {
      field: "domicile",
      editing: false,
      description: "This field is required to apply for jobs",
    },
  ]);

  const avatarInput = useRef<HTMLInputElement>(null);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="w-full grid grid-cols-[0.7fr,0.3fr] gap-16 py-8"
      >
        <div className="flex flex-col gap-2">
          {fields.map(({ field, description, editing }) => (
            <FormField
              control={form.control}
              name={field}
              render={({ field }) => (
                <FormItem className="relative flex flex-col gap-0">
                  <FormLabel>{capitalize(field.name)}</FormLabel>
                  <FormControl>
                    <Input
                      disabled={!editing}
                      className="border-muted-foreground disabled:opacity-100"
                      placeholder={capitalize(field.name)}
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
        <FormField
          control={form.control}
          name="avatar"
          render={({ field }) => (
            <FormItem className="relative flex flex-col items-center gap-2">
              <FormControl>
                <div className="grid place-items-center">
                  <Button
                    type="button"
                    variant="outline"
                    className="rounded-full p-0 w-full h-full aspect-square border-muted-foreground row-start-1 row-end-1 col-start-1 col-end-1"
                  >
                    <Avatar className="w-full h-full">
                      <AvatarImage
                        className="object-cover"
                        src={field.value}
                        alt={field.name}
                      />
                      <AvatarFallback className="text-primary">
                        {getInitials(form.getValues("name") as string)}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                  <Input
                    type="file"
                    className="row-start-1 row-end-1 col-start-1 col-end-1 w-full h-full rounded-full aspect-square opacity-0"
                    {...field}
                  />
                </div>
              </FormControl>
              <FormLabel className="text-xl">Profile Picture</FormLabel>
              <FormMessage />
            </FormItem>
          )}
        />
        {fields.filter((f) => f.editing).length > 0 && (
          <Button type="submit">Save</Button>
        )}
      </form>
    </Form>
  );
}

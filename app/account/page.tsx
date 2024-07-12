"use client";

import UserForm from "./UserForm";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

export default function Index() {
  const [user, setUser] = useState<User>({
    name: "User",
    role: "user",
    email: "example@mail.com",
    phone: "08123456789",
    details: {
      city: "Jakarta",
      country: "Indonesia",
      domicile: "Jakarta",
      avatar:
        "https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    },
  });

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    // ! utk testing, uncomment aj utk store dummy user
    // localStorage.setItem("user", JSON.stringify(user));

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      redirect("/account/login");
    }
  }, []);

  return (
    <div className="flex flex-col h-full w-full max-w-[min(1200px,90vw)] mx-auto py-16">
      <h2 className="text-3xl font-bold">Account Information</h2>
      {user.role === "user" ? <UserForm user={user} /> : <></>}
    </div>
  );
}

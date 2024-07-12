"use client";

import UserForm from "./UserForm";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import CompanyForm from "./CompanyForm";

export default function Index() {
  const [user, setUser] = useState<User>();

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      redirect("/account/login");
    }
  }, []);

  if (!user) {
    return <></>;
  }

  return (
    <div className="flex flex-col h-full w-full max-w-[min(1200px,90vw)] mx-auto py-16">
      <h2 className="text-3xl font-bold">Account Information</h2>
      {user.role === "jobseeker" ? (
        <UserForm user={user} />
      ) : (
        <CompanyForm user={user} />
      )}
    </div>
  );
}

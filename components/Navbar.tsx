"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import UserDropdown from "./UserDropdown";

export default function Navbar() {
  const [user, setUser] = useState<{
    name: string;
    avatar: string;
    role: string;
  }>({
    name: "User",
    avatar:
      "https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    role: "user",
  });

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
    }
  }, []);

  function getInitials(name: string) {
    return name
      .split(" ")
      .map((n) => n[0].toLocaleUpperCase())
      .join("");
  }

  return (
    <nav className="flex justify-between items-center px-8 py-6 bg-primary text-background">
      <div className="flex justify-center items-center gap-8">
        <h1 className="text-2xl font-bold">SeekJob</h1>
        <div className="flex justify-center gap-4">
          <Button
            variant="link"
            className="text-primary-foreground text-[1rem]"
          >
            <Link href="/">Home</Link>
          </Button>
          <Button
            variant="link"
            className="text-primary-foreground text-[1rem]"
          >
            <Link href="/jobs">Find Jobs</Link>
          </Button>
          <Button
            variant="link"
            className="text-primary-foreground text-[1rem]"
          >
            <Link href="/history">History</Link>
          </Button>
        </div>
      </div>
      <div>
        {user ? (
          <UserDropdown role={user.role}>
            <button className="flex items-center gap-4 hover:opacity-75 transition-opacity">
              <p className="text-[1rem]">Hi, {user.name}</p>
              <Avatar>
                <AvatarImage
                  className="object-cover"
                  src={user.avatar}
                  alt={user.name}
                />
                <AvatarFallback className="text-primary">
                  {getInitials(user.name)}
                </AvatarFallback>
              </Avatar>
            </button>
          </UserDropdown>
        ) : (
          <Button className="bg-primary-foreground text-[1rem] text-foreground hover:bg-primary-foreground/75">
            <a href="/account/login">Login</a>
          </Button>
        )}
      </div>
    </nav>
  );
}

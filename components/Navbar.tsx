"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import UserDropdown from "./UserDropdown";
import { getInitials } from "@/lib/utils";

export default function Navbar() {
  const [user, setUser] = useState<{
    name: string;
    avatar: string;
    role: string;
  }>();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
    }
  }, []);

  const routes = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: user?.role === "jobseeker" ? "Find Jobs" : "Find Recruits",
      url: user?.role === "jobseeker" ? "/jobs" : "/recruits",
    },
    {
      name: "About",
      url: "/about",
    },
  ];

  return (
    <nav className="flex justify-between items-center px-8 py-6 bg-primary text-background">
      <div className="flex justify-center items-center gap-8">
        <h1 className="text-2xl font-semibold md:hidden">AR</h1>
        <h1 className="text-2xl font-semibold max-md:hidden">AltRecruit</h1>
        <div className="flex justify-center md:gap-4">
          {routes.map((route) => (
            <Link key={route.name} href={route.url}>
              <Button
                variant="link"
                className="text-primary-foreground text-[1rem]"
              >
                {route.name}
              </Button>
            </Link>
          ))}
        </div>
      </div>
      <div>
        {user ? (
          <UserDropdown role={user.role}>
            <button className="flex items-center gap-4 hover:opacity-75 transition-opacity">
              <p className="text-[1rem] max-md:hidden">Hi, {user.name}</p>
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
          <Link href="/account/login">
            <Button className="bg-primary-foreground text-[1rem] text-foreground hover:bg-primary-foreground/75">
              Login
            </Button>
          </Link>
        )}
      </div>
    </nav>
  );
}

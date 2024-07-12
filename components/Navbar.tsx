"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import UserDropdown from "./UserDropdown";
import { getInitials } from "@/lib/utils";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
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
    <nav className="flex justify-between items-center px-8 py-4 bg-primary text-background">
      <div className="flex justify-center items-center gap-8">
        <h1 className="text-2xl font-semibold md:hidden">AR</h1>
        <svg
          className="w-full"
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          height="60.000000pt"
          width="70.000000pt"
          viewBox="0 0 283.000000 272.000000"
          preserveAspectRatio="xMidYMid meet"
          onClick={() => router.push("/")}
        >
          <g
            transform="translate(0.000000,272.000000) scale(0.100000,-0.100000)"
            fill="#fff"
            stroke="none"
          >
            <path
              d="M831 2138 c-10 -27 -44 -127 -112 -323 -26 -77 -88 -257 -137 -400
-218 -632 -242 -702 -242 -708 0 -4 65 -7 144 -7 l144 0 11 33 c50 162 86 268
101 302 10 22 33 90 50 150 37 127 196 636 212 680 6 17 14 33 18 38 3 4 62
-172 129 -390 68 -219 155 -490 192 -603 l68 -205 150 -3 150 -3 -85 248 c-47
137 -96 279 -109 316 -14 38 -25 70 -25 73 0 9 176 3 213 -7 43 -12 97 -56
126 -102 15 -24 110 -303 176 -514 5 -15 175 -19 175 -4 0 5 -11 42 -24 82
-13 41 -45 142 -71 224 -71 221 -115 299 -196 341 -42 21 -36 39 24 63 124 51
195 136 218 261 32 178 -43 349 -183 421 -103 52 -100 52 -620 56 l-488 4 -9
-23z m1015 -158 c93 -46 134 -174 103 -321 -8 -37 -22 -64 -51 -95 -60 -65
-101 -75 -299 -72 l-164 3 -20 60 c-11 33 -23 65 -27 70 -3 6 -36 87 -73 180
-37 94 -69 176 -72 183 -4 9 55 12 278 12 264 0 285 -1 325 -20z"
            />
            <path
              d="M2202 840 c-22 -21 -30 -82 -14 -106 10 -15 47 -34 67 -34 29 0 65
46 65 84 0 63 -73 98 -118 56z"
            />
          </g>
        </svg>
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

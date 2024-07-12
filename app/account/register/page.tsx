"use client";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useAuth } from "@/hooks/auth";
import { register } from "module";

export default function Index() {
  const router = useRouter();

  const { register } = useAuth({
    middleware: "guest",
    redirectIfAuthenticated: "/",
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [shouldRemember, setShouldRemember] = useState(false);
  const [errors, setErrors] = useState([]);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    if (router.reset?.length > 0 && errors.length === 0) {
      setStatus(atob(router.reset));
    } else {
      setStatus(null);
    }
  });

  const submitForm = async (event: any) => {
    event.preventDefault();

    register({
      name,
      email,
      password,
      password_confirmation: confPassword,
      remember: shouldRemember,
      setErrors,
      setStatus,
    });
  };

  return (
    <div className="w-[90vw] max-h-[90vh] m-auto rounded-lg border shadow lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="hidden bg-muted lg:block">
        <Image
          src="/asset/yaha.jpeg"
          alt="Image"
          width={1920}
          height={1080}
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale rounded-l-md"
        />
      </div>
      <div className="flex items-center justify-center py-12">
        <form onSubmit={submitForm} className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Register</h1>
            <p className="text-balance text-muted-foreground">
              Create an account to get started
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                type="text"
                name="name"
                value={name}
                placeholder="Full Name"
                required
                onChange={(event) => setName(event.target.value)}
                autoFocus
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                name="email"
                value={email}
                placeholder="email@example.com"
                required
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                name="password"
                value={password}
                placeholder="••••••••"
                onChange={(event) => setPassword(event.target.value)}
                required
                autoComplete="current-password"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="confPassword">Confirm Password</Label>
              <Input
                id="confPassword"
                type="password"
                name="confPassword"
                value={confPassword}
                placeholder="••••••••"
                onChange={(event) => setConfPassword(event.target.value)}
                required
                autoComplete="current-password"
              />
            </div>
            <Button type="submit" className="w-full">
              Sign Up
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Already have an account? &nbsp;
            <Link href="/account/login" className="underline">
              Sign In
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

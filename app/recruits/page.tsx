"use client";

import { redirect } from "next/navigation";
import { use, useEffect } from "react";

export default function Index() {
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      redirect("/account/login");
    }
    const role = user ? JSON.parse(user).role : "jobseeker";
    if (role === "jobseeker") {
      redirect("/jobs");
    }
  }, []);

  return <div>Index</div>;
}

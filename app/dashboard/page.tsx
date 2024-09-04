"use client";

import { useRouter } from "next/navigation";
import { useAuth } from "@clerk/nextjs";

export default function DashboardPage() {
  const { isSignedIn } = useAuth();
  const router = useRouter();

  if (!isSignedIn) {
    router.push("/sign-in");
    return null;
  }

  return (
    <div>
      <h1>Welcome to your Dashboard</h1>
      <p>This is protected content.</p>
    </div>
  );
}

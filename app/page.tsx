"use client";
import { useRouter } from "next/navigation";
import { SignOutButton, useAuth } from "@clerk/nextjs";

export default function DashboardPage() {
  const { isSignedIn } = useAuth();
  const router = useRouter();

  if (!isSignedIn) {
    router.push("/sign-in");
    return null;
  }

  return (
    <div>
      <SignOutButton>
        <button>Đăng xuất</button>
      </SignOutButton>
    </div>
  );
}

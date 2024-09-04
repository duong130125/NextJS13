import React from "react";
import { auth, currentUser } from "@clerk/nextjs/server";
import { SignInButton, SignOutButton } from "@clerk/nextjs";

export default async function Page() {
  const { userId } = auth();
  const user = await currentUser();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Trang cá nhân</h1>

      {userId ? (
        <div>
          <p className="mb-2">
            Họ và tên: {user?.firstName} {user?.lastName}
          </p>
          <p className="mb-4">Email: {user?.emailAddresses[0]?.emailAddress}</p>
          <SignOutButton>
            <button>Đăng xuất</button>
          </SignOutButton>
        </div>
      ) : (
        <div>
          <p className="mb-4">Vui lòng đăng nhập để xem thông tin cá nhân.</p>
          <SignInButton mode="modal">
            <button>Đăng nhập</button>
          </SignInButton>
        </div>
      )}
    </div>
  );
}

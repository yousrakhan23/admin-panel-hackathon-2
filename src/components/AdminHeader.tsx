"use client";

import { LayoutDashboard } from "lucide-react";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { logout } from "@/services/auth";

export function AdminHeader() {
  const router = useRouter();

  // ✅ Logout handler
  const handleLogout = async () => {
    await logout(); // Call the server function
    router.push("/sign-in"); // Redirect to sign-in page after logout
  };

  return (
    <header className="flex h-16 items-center gap-4 border-b bg-gradient-to-br from-[#e9ecef] to-[#40d5e2] dark:bg-gradient-to-br dark:from-[#e9ecef] dark:to-[#40d5e2] px-6">
      <div className="flex items-center gap-2 font-semibold">
        <div className="size-8 rounded bg-primary text-primary-foreground grid place-items-center">
          <LayoutDashboard size={24} />
        </div>
        Dashboard
      </div>
      <div className="flex-1"></div>

      {/* ✅ User Profile and Logout Button */}
      <div className="flex items-center gap-4">
        <Button variant="destructive" onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </header>
  );
}
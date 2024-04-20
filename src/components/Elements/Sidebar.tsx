"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { buttonVariants } from "../ui/button";
import { Home } from "lucide-react";
import { Settings } from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <ul className="space-y-2">
      {/* Hardcoded sidebar links */}
      <li>
        <Link
          className={cn(
            buttonVariants({ variant: "ghost", size: "lg" }),
            pathname === "/dashboard/overview" ? "bg-gray-200 w-40" : "w-40"
          )}
          href="/dashboard/overview"
        >
          <Home className="mr-2"></Home> Overview
        </Link>
      </li>
      <li className="flex">
        <Link
          className={cn(
            buttonVariants({ variant: "ghost", size: "lg" }),
            pathname === "/dashboard/settings" ? "bg-gray-200 w-40" : "w-40"
          )}
          href="/dashboard/settings"
        >
          <Settings className="mr-2"></Settings>Settings
        </Link>
      </li>
      {/* Add more sidebar links as needed */}
    </ul>
  );
}

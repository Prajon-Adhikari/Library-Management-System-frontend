"use client";

import { Bell, MoonIcon } from "lucide-react";
import { usePathname } from "next/navigation";
export default function Topbar() {
  const pathname = usePathname();

  if (pathname.startsWith("/books/")) return null;

  if (["/login", "/signup"].includes(pathname)) return null;

  return (
    <header className="h-16 bg-white  border-b border-[#e2d8cc] flex items-center justify-between px-8">
      {/* Search */}
      <div>
        <h6 className="text-sm font-semibold text-gray-500">
          Hello, Prajon Adhikari
        </h6>
        <h1 className="text-xl font-bold">Welcome to MyApp</h1>
      </div>
      <div className="flex items-center gap-6">
        <MoonIcon className="text-gray-500" />
        <Bell className="text-gray-500" />
        <input
          placeholder="Search ..."
          className="w-50 px-4 py-1.25 rounded-md border-2 border-gray-400 focus:outline-none"
        />
      </div>
    </header>
  );
}

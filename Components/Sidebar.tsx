"use client";

import {
  Download,
  FileText,
  PenTool,
  Settings,
  Users,
  Home,
  Bookmark,
  BookA,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function Sidebar() {
  const pathname = usePathname();

  if (pathname.startsWith("/books/")) return null;

  if (["/login", "/signup"].includes(pathname)) return null;

  const { user } = useAuth();

  return (
    <aside className="w-64 h-screen bg-white border-r flex flex-col justify-between">
      {/* Top */}
      <div>
        {/* Logo */}
        <div className="flex items-center gap-3 px-6 py-5">
          {/* <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center text-white font-bold">
            ▲
          </div> */}
          <div>
            <h1 className="font-semibold text-xl text-gray-900">
              Library Management
            </h1>
          </div>
        </div>

        {/* Menu */}
        <nav className="px-3">
          <Section title="ACTIVITY">
            <Item icon={<Home size={18} />} label="Home" />
            <Item icon={<BookA size={18} />} label=" Books" />
            <Item icon={<Download size={18} />} label="Downloads" badge={5} />
            <Item icon={<Bookmark size={18} />} label="Saved Books" />
          </Section>

          <Section title="CONTENT">
            <Item icon={<FileText size={18} />} label="Documents" />
            <Item icon={<PenTool size={18} />} label="Posts" />
          </Section>

          <Section title="ACCOUNT">
            <Item icon={<Settings size={18} />} label="Settings" />
            <Item icon={<Users size={18} />} label="Manage" badge={2} active />
          </Section>
        </nav>
      </div>

      {/* User */}
      <div className="flex items-center gap-3 px-6 py-4 border-t">
        <img
          src="https://i.pravatar.cc/40"
          className="w-10 h-10 rounded-full"
        />
        <div>
          <p className="text-sm font-medium">{user?.fullName}</p>
          <p className="text-xs text-gray-400">user.name@email.com</p>
        </div>
      </div>
    </aside>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-6">
      <p className="px-3 text-xs text-gray-400 font-semibold mb-2">{title}</p>
      <ul className="space-y-1">{children}</ul>
    </div>
  );
}

function Item({
  icon,
  label,
  badge,
  active,
}: {
  icon: React.ReactNode;
  label: string;
  badge?: number;
  active?: boolean;
}) {
  return (
    <li
      className={`flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer transition
      ${
        active ? "bg-gray-100 text-gray-900" : "text-gray-600 hover:bg-gray-100"
      }`}
    >
      <div className="flex items-center gap-3">
        {icon}
        <span className="text-sm font-medium">{label}</span>
      </div>

      {badge && (
        <span className="text-xs bg-gray-200 text-gray-700 px-2 py-0.5 rounded-full">
          {badge}
        </span>
      )}
    </li>
  );
}

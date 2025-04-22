"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookOpen,
  Code2,
  Database,
  Table2,
  Boxes,
  Brain,
  FormInput,
  Shield,
  AlertTriangle,
  Lightbulb,
} from "lucide-react";

const sidebarItems = [
  {
    title: "Best Practices",
    href: "/tal/best-practices",
    icon: Lightbulb,
  },
  {
    title: "Learning Resources",
    href: "/tal/learning-resources",
    icon: BookOpen,
  },
  {
    title: "Fetch",
    href: "/tal/fetch",
    icon: Code2,
  },
  {
    title: "CRUD",
    href: "/tal/crud",
    icon: Database,
  },
  {
    title: "Table",
    href: "/tal/table",
    icon: Table2,
  },
  {
    title: "Combo Compo",
    href: "/tal/combo-compo",
    icon: Boxes,
  },
  {
    title: "State Management",
    href: "/tal/state-management",
    icon: Brain,
  },
  {
    title: "Form Handling",
    href: "/tal/form-handling",
    icon: FormInput,
  },
  {
    title: "Authentication",
    href: "/tal/authentication",
    icon: Shield,
  },
  {
    title: "Error Handling",
    href: "/tal/error-handling",
    icon: AlertTriangle,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 h-[calc(100vh-4rem)] fixed left-0 top-16 border-r bg-white overflow-y-auto">
      <nav className="p-4">
        <div className="mb-4 px-4">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
            TAL Resources
          </h2>
        </div>
        <ul className="space-y-1">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center px-4 py-2 rounded-md transition-colors ${
                    isActive
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <Icon className="w-5 h-5 mr-3" />
                  <span className="text-sm font-medium">{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

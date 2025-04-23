"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
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
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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

interface SidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: (value: boolean) => void;
}

export default function Sidebar({ isCollapsed, setIsCollapsed }: SidebarProps) {
  const pathname = usePathname();

  useEffect(() => {
    const checkMobile = () => {
      if (window.innerWidth < 768) {
        setIsCollapsed(true);
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, [setIsCollapsed]);

  return (
    <TooltipProvider>
      <div
        className={`fixed left-0 top-16 h-[calc(100vh-4rem)] border-r bg-white overflow-y-auto transition-all duration-300 ${
          isCollapsed ? "w-24" : "w-72"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Logo and Toggle */}
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center space-x-2">
              <span
                className={`font-bold ${isCollapsed ? "text-sm" : "text-xl"}`}
              >
                TAL
              </span>
            </div>
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="p-1 rounded-md hover:bg-gray-100"
            >
              {isCollapsed ? (
                <ChevronRight className="w-5 h-5" />
              ) : (
                <ChevronLeft className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Navigation Items */}
          <nav className="p-4 flex-1">
            {!isCollapsed && (
              <div className="mb-4 px-4">
                <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                  TAL Resources
                </h2>
              </div>
            )}
            <ul className="space-y-1">
              {sidebarItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Link
                          href={item.href}
                          className={`flex items-center px-4 py-2 rounded-md transition-colors ${
                            isActive
                              ? "bg-blue-50 text-blue-600"
                              : "text-gray-700 hover:bg-gray-50"
                          }`}
                        >
                          <Icon className="w-5 h-5" />
                          {!isCollapsed && (
                            <span className="ml-3 text-sm font-medium">
                              {item.title}
                            </span>
                          )}
                        </Link>
                      </TooltipTrigger>
                      {isCollapsed && (
                        <TooltipContent side="right">
                          {item.title}
                        </TooltipContent>
                      )}
                    </Tooltip>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </TooltipProvider>
  );
}

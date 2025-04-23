"use client";
import Sidebar from "./components/Sidebar";
import { useState } from "react";

export default function TALLayout({ children }: { children: React.ReactNode }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 h-16 border-b bg-white z-50">
        <div className="flex items-center justify-between h-full px-4">
          <div className="flex items-center space-x-2">
            <span className="font-bold text-xl">TAL Learning</span>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex pt-16">
        <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
        <main
          className={`flex-1 transition-all duration-300 ${
            isCollapsed ? "ml-16" : "ml-64"
          }`}
        >
          <div className="p-6">{children}</div>
        </main>
      </div>
    </div>
  );
}

'use client';
import Sidebar from './components/Sidebar';
import { useState } from 'react';

export default function TALLayout({ children }: { children: React.ReactNode }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <div className="flex pt-16">
        <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
        <main className={`flex-1 transition-all duration-300 ${isCollapsed ? 'ml-24' : 'ml-72'}`}>
          <div className="p-6">{children}</div>
        </main>
      </div>
    </div>
  );
}

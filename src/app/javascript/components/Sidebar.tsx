'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import {
  AlertTriangle,
  Lightbulb,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const sidebarItems = [
  {
    title: 'Basic Talk',
    href: '/javascript/basic',
    icon: Lightbulb,
    subItems: [
      { title: 'Variables', href: '/javascript/basic/variables' },
      { title: 'Functions', href: '/javascript/basic/functions' },
      { title: 'Loops', href: '/javascript/basic/loops' },
    ],
  },
  {
    title: 'Intermediate Talk',
    href: '/javascript/intermediate',
    icon: AlertTriangle,
    subItems: [
      { title: 'Closures', href: '/javascript/intermediate/closures' },
      { title: 'Promises', href: '/javascript/intermediate/promises' },
    ],
  },
  {
    title: 'Advanced Talk',
    href: '/javascript/advanced',
    icon: AlertTriangle,
    subItems: [
      { title: 'Design Patterns', href: '/javascript/advanced/design-patterns' },
      { title: 'Performance', href: '/javascript/advanced/performance' },
    ],
  },
];

interface SidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: (value: boolean) => void;
}

export default function Sidebar({ isCollapsed, setIsCollapsed }: SidebarProps) {
  const pathname = usePathname();
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const checkMobile = () => {
      if (window.innerWidth < 768) {
        setIsCollapsed(true);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [setIsCollapsed]);

  const toggleExpand = (title: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <TooltipProvider>
      <div
        className={`fixed left-0 top-16 h-[calc(100vh-4rem)] border-r bg-white overflow-y-auto transition-all duration-300 ${
          isCollapsed ? 'w-24' : 'w-72'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Logo and Toggle */}
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center space-x-2">
              <Image
                src="/images/js_logo.png"
                alt="TAL Logo"
                width={isCollapsed ? 52 : 52}
                height={isCollapsed ? 52 : 52}
                className="rounded"
              />
              {!isCollapsed && <span className="font-bold text-xl">Javascript</span>}
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
              {sidebarItems.map(item => {
                const Icon = item.icon;
                const isActive =
                  pathname === item.href ||
                  item.subItems?.some(subItem => pathname === subItem.href);
                const isExpanded = expandedItems[item.title] && !isCollapsed;

                return (
                  <li key={item.href}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div>
                          <div
                            className={`flex items-center justify-between px-4 py-2 rounded-md transition-colors cursor-pointer ${
                              isActive
                                ? 'bg-blue-50 text-blue-600'
                                : 'text-gray-700 hover:bg-gray-50'
                            }`}
                            onClick={() => !isCollapsed && toggleExpand(item.title)}
                          >
                            <div className="flex items-center">
                              <Icon className="w-5 h-5" />
                              {!isCollapsed && (
                                <span className="ml-3 text-sm font-medium">{item.title}</span>
                              )}
                            </div>
                            {!isCollapsed &&
                              item.subItems &&
                              (isExpanded ? (
                                <ChevronUp className="w-4 h-4" />
                              ) : (
                                <ChevronDown className="w-4 h-4" />
                              ))}
                          </div>

                          {!isCollapsed && isExpanded && item.subItems && (
                            <ul className="ml-10 mt-1 space-y-1">
                              {item.subItems.map(subItem => {
                                const isSubItemActive = pathname === subItem.href;
                                return (
                                  <li key={subItem.href}>
                                    <Link
                                      href={subItem.href}
                                      className={`flex items-center px-3 py-1.5 text-sm rounded-md transition-colors ${
                                        isSubItemActive
                                          ? 'bg-blue-100 text-blue-600'
                                          : 'text-gray-600 hover:bg-gray-100'
                                      }`}
                                    >
                                      {subItem.title}
                                    </Link>
                                  </li>
                                );
                              })}
                            </ul>
                          )}
                        </div>
                      </TooltipTrigger>
                      {isCollapsed && <TooltipContent side="right">{item.title}</TooltipContent>}
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

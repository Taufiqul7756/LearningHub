'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { TalAuthDialog } from '@/components/auth/TalAuthDialog';
import { Lock } from 'lucide-react';

const cards = [
  {
    title: 'TAL',
    description: 'Tech Analyica Ltd resources and best practices',
    href: '/tal',
    requiresAuth: true,
  },
  {
    title: 'JavaScript',
    description: 'JavaScript fundamentals and advanced concepts',
    href: '/javascript',
    requiresAuth: false,
  },
  {
    title: 'TypeScript',
    description: 'TypeScript patterns and type safety',
    href: '/typescript',
    requiresAuth: false,
  },
  {
    title: 'UI Library',
    description: 'Collection of reusable UI components and patterns',
    href: '/ui-library',
    requiresAuth: false,
  },
  {
    title: 'CSE Graduate',
    description: 'Resources for computer science graduates',
    href: '/cse-graduate',
    requiresAuth: false,
  },
  {
    title: 'Problem Solving',
    description: 'Algorithms, data structures, and coding challenges',
    href: '/problem-solving',
  },
  {
    title: 'Cheat Sheet',
    description: 'Quick reference guides for various technologies',
    href: '/cheat-sheet',
    requiresAuth: false,
  },
  {
    title: 'Hello Juniors',
    description: 'Resources for junior developers',
    href: '/hello-juniors',
    requiresAuth: false,
  },
  {
    title: 'Zustand',
    description: 'State management with Zustand',
    href: '/zustand',
    requiresAuth: false,
  },
  {
    title: 'Best Components',
    description: 'Collection of reusable components',
    href: '/components',
    requiresAuth: false,
  },
];

export default function Home() {
  const [isAuthDialogOpen, setIsAuthDialogOpen] = useState(false);

  const handleCardClick = (card: (typeof cards)[0]) => {
    if (card.requiresAuth) {
      setIsAuthDialogOpen(true);
    }
  };

  return (
    <main className="min-h-screen px-8 pt-24">
      <h1 className="text-4xl font-bold mb-8 text-center">Learning Hub</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        {cards.map(card => (
          <div
            key={card.title}
            onClick={() => handleCardClick(card)}
            className="cursor-pointer relative"
          >
            {card.requiresAuth ? (
              <Card className="hover:bg-blue-50 transition-colors h-full">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-blue-600">{card.title}</CardTitle>
                    <Lock className="h-4 w-4 text-blue-600" />
                  </div>
                  <CardDescription>{card.description}</CardDescription>
                </CardHeader>
              </Card>
            ) : (
              <Link href={card.href}>
                <Card className="hover:bg-blue-50 transition-colors h-full">
                  <CardHeader>
                    <CardTitle className="text-blue-600">{card.title}</CardTitle>
                    <CardDescription>{card.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            )}
          </div>
        ))}
      </div>
      <TalAuthDialog open={isAuthDialogOpen} onOpenChange={setIsAuthDialogOpen} />
    </main>
  );
}

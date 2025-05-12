'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { TalAuthDialog } from '@/components/auth/TalAuthDialog';
import { Lock } from 'lucide-react';
import Image from 'next/image';

// Define the type for the card
interface CardType {
  title: string;
  description: string;
  href: string;
  requiresAuth: boolean;
  logo: string;
}

const cards: CardType[] = [
  {
    title: 'TAL',
    description: 'Tech Analytica Ltd resources and best practices',
    href: '/tal',
    requiresAuth: true,
    logo: '/images/tal_logo.jpg',
  },
  {
    title: 'JavaScript',
    description: 'JavaScript fundamentals and advanced concepts',
    href: '/javascript',
    requiresAuth: false,
    logo: '/images/js.jpg',
  },
  {
    title: 'TypeScript',
    description: 'TypeScript patterns and type safety',
    href: '/typescript',
    requiresAuth: false,
    logo: '/images/ts.png',
  },
  {
    title: 'UI Library',
    description: 'Collection of reusable UI components and patterns',
    href: '/ui-library',
    requiresAuth: false,
    logo: '/images/compo_library.png',
  },
  {
    title: 'CSE Graduate',
    description: 'Resources for computer science graduates',
    href: '/cse-graduate',
    requiresAuth: false,
    logo: '/images/cs_grads.webp',
  },
  {
    title: 'Problem Solving',
    description: 'Algorithms, data structures, and coding challenges',
    href: '/problem-solving',
    requiresAuth: false,
    logo: '/images/problem_solving.jpg',
  },
  {
    title: 'Cheat Sheet',
    description: 'Quick reference guides for various technologies',
    href: '/cheat-sheet',
    requiresAuth: false,
    logo: '/images/cheat_sheet.jpg',
  },
  {
    title: 'Hello Juniors',
    description: 'Resources for junior developers',
    href: '/hello-juniors',
    requiresAuth: false,
    logo: '/images/junior.jpg',
  },
  {
    title: 'Zustand',
    description: 'State management with Zustand',
    href: '/zustand',
    requiresAuth: false,
    logo: '/images/zustand.jpg',
  },
  {
    title: 'Best Components',
    description: 'Collection of reusable components',
    href: '/components',
    requiresAuth: false,
    logo: '/images/components.png',
  },
];

export default function Home() {
  const [isAuthDialogOpen, setIsAuthDialogOpen] = useState(false);

  const handleCardClick = (card: CardType) => {
    if (card.requiresAuth) {
      setIsAuthDialogOpen(true);
    }
  };

  return (
    <main className="min-h-screen px-8 pt-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 mt-8 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        {cards.map(card => (
          <div
            key={card.title}
            onClick={() => handleCardClick(card)}
            className="cursor-pointer relative"
          >
            {card.requiresAuth ? (
              <Card className="hover:bg-blue-50 transition-colors h-full">
                <CardContent className="p-0">
                  <div className="w-full h-48 overflow-hidden rounded-t-lg">
                    <Image
                      src={card.logo}
                      alt={`${card.title} logo`}
                      width={500}
                      height={200}
                      className="w-full h-full object-fit"
                    />
                  </div>
                </CardContent>
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
                  <CardContent className="p-0">
                    <div className="w-full h-48  overflow-hidden rounded-t-lg">
                      <Image
                        src={card.logo}
                        alt={`${card.title} logo`}
                        width={500}
                        height={200}
                        className="w-full h-full object-fit"
                      />
                    </div>
                  </CardContent>
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

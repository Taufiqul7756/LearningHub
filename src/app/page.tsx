import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const cards = [
  {
    title: "TAL",
    description: "Tech Analyica Ltd resources and best practices",
    href: "/tal",
  },
  {
    title: "JavaScript",
    description: "JavaScript fundamentals and advanced concepts",
    href: "/javascript",
  },
  {
    title: "TypeScript",
    description: "TypeScript patterns and type safety",
    href: "/typescript",
  },
  {
    title: "UI Library",
    description: "Collection of reusable UI components and patterns",
    href: "/ui-library",
  },
  {
    title: "CSE Graduate",
    description: "Resources for computer science graduates",
    href: "/cse-graduate",
  },
  {
    title: "Problem Solving",
    description: "Algorithms, data structures, and coding challenges",
    href: "/problem-solving",
  },
  {
    title: "Cheat Sheet",
    description: "Quick reference guides for various technologies",
    href: "/cheat-sheet",
  },
  {
    title: "Hello Juniors",
    description: "Resources for junior developers",
    href: "/hello-juniors",
  },
  {
    title: "Zustand",
    description: "State management with Zustand",
    href: "/zustand",
  },
  {
    title: "Best Components",
    description: "Collection of reusable components",
    href: "/components",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8 text-center"> Learning Hub</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        {cards.map((card) => (
          <Link key={card.title} href={card.href}>
            <Card className="hover:bg-blue-50 transition-colors h-full">
              <CardHeader>
                <CardTitle className="text-blue-600">{card.title}</CardTitle>
                <CardDescription>{card.description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </main>
  );
}

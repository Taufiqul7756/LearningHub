import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const cheatSheets = [
  {
    title: "Tailwind CSS",
    description: "Utility-first CSS framework cheat sheet",
    href: "/cheat-sheet/tailwind",
  },
  {
    title: "HTML",
    description: "HTML elements and attributes reference",
    href: "/cheat-sheet/html",
  },
  {
    title: "CSS",
    description: "CSS properties and selectors guide",
    href: "/cheat-sheet/css",
  },
  {
    title: "JavaScript",
    description: "JavaScript syntax and methods reference",
    href: "/cheat-sheet/javascript",
  },
  {
    title: "Next.js",
    description: "Next.js features and best practices",
    href: "/cheat-sheet/nextjs",
  },
  {
    title: "TypeScript",
    description: "TypeScript types and features guide",
    href: "/cheat-sheet/typescript",
  },
];

export default function CheatSheetPage() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Cheat Sheets</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        {cheatSheets.map((sheet) => (
          <Link key={sheet.title} href={sheet.href}>
            <Card className="hover:bg-blue-50 transition-colors h-full">
              <CardHeader>
                <CardTitle className="text-blue-600">{sheet.title}</CardTitle>
                <CardDescription>{sheet.description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </main>
  );
}

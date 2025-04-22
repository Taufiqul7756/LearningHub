"use client";

import { useEffect } from "react";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen flex items-center justify-center p-8">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-blue-600 text-4xl">Oops!</CardTitle>
          <CardDescription className="text-xl">
            Something went wrong
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            We&apos;re sorry, but something went wrong. Please try again later.
          </p>
          <div className="flex gap-4">
            <button
              onClick={reset}
              className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
            >
              Try again
            </button>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-md border border-gray-300 px-4 py-2 text-sm font-medium hover:bg-gray-50 transition-colors"
            >
              Return Home
            </Link>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}

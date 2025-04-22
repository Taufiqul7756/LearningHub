"use client";
import { usePathname } from "next/navigation";

export default function ContentWrapper() {
  const pathname = usePathname();
  const title =
    pathname.split("/").pop()?.replace(/-/g, " ") || "TAL Resources";

  return (
    <div className="ml-64 p-8">
      <h1 className="text-4xl font-bold mb-8 capitalize">Hello {title}</h1>
      <div className="prose max-w-none">
        {/* Content will be added based on the route */}
      </div>
    </div>
  );
}

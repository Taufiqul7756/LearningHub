'use client';
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';
import { toast } from 'sonner';

const GetSingleData = () => {
  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    toast.success('Code copied to clipboard!');
  };

  return (
    <div className="">
      <h2 className="text-2xl font-semibold  mb-4">
        GET SINGLE DATA <span className="italic text-lg text-green-400 underline">GET</span>
      </h2>

      <div className="flex flex-col sm:flex-row gap-4">
        {/* Left Column - Code */}
        <div className="w-[300px] md:w-3/5">
          <Tabs defaultValue="code" className="w-full">
            <TabsList className="grid grid-cols-2 bg-gray-800">
              <TabsTrigger value="code" className="cursor-pointer">
                Code
              </TabsTrigger>

              <TabsTrigger className="cursor-pointer" value="type">
                Type
              </TabsTrigger>
            </TabsList>
            {/* //code  */}
            <TabsContent value="code">
              <div className="rounded-lg">
                <div className="flex justify-end items-center">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="cursor-pointer"
                    onClick={() =>
                      handleCopy(`import { get } from "@/lib/api/handlers";
import { useSession } from "next-auth/react";

const { data: session } = useSession();
const id = session?.user.id || "";

const GetSingleData = async (id: string) => {

const response = await get<SingleApiResponse>(
    \`/content/club/\${id}\`,
    {
      Authorization: \`Bearer \${session?.accessToken}\`,
    }
  );

  if (!response) {
    throw new Error("Failed to fetch events");
  }

  return response;
};

const {
  data,
  loading,
  error,
  error,
} = useQuery({
  queryKey: ["getsingle"],
  queryFn: () => GetSingleData(id),
});`)
                    }
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
                <pre className="bg-gray-800 h-[500px] text-white p-4 rounded-lg overflow-x-auto">
                  {`import { get } from "@/lib/api/handlers";
import { useSession } from "next-auth/react";

const { data: session } = useSession();
const id = session?.user.id || "";

const GetSingleData = async (id: string) => {

const response = await get<SingleApiResponse>(
    \`/content/club/\${id}\`,
    {
      Authorization: \`Bearer \${session?.accessToken}\`,
    }
  );

  if (!response) {
    throw new Error("Failed to fetch events");
  }

  return response;
};

const {
  data,
  loading,
  error,
  error,
} = useQuery({
  queryKey: ["getsingle"],
  queryFn: () => GetSingleData(id),
});`}
                </pre>
              </div>
            </TabsContent>

            {/* //type  */}
            <TabsContent value="type">
              <div className="rounded-lg">
                <div className="flex justify-end items-center">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="cursor-pointer"
                    onClick={() =>
                      handleCopy(`export interface SingleApiResponse {
  success: boolean;
  message: string;
  data: {
    id: string;
    name: string;
    description: string;
    createdAt: string;
    updatedAt: string;

    // add more fields as needed
  };
  error: string | null;
}
`)
                    }
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
                <pre className="bg-gray-800 h-[500px] text-white p-4 rounded-lg overflow-x-auto">
                  {`export interface SingleApiResponse {
  success: boolean;
  message: string;
  data: {
    id: string;
    name: string;
    description: string;
    createdAt: string;
    updatedAt: string;

    // add more fields as needed
  };
  error: string | null;
}
`}
                </pre>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Right Column - Explanation */}
        <div className="w-[280px] md:w-2/5 bg-gray-100 p-6 mt-20 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">How This Code Works</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">1. Code Tab</h4>
              <p className="text-gray-700">
                This shows how to fetch all users using TanStack Query and our custom API handler.
                The code:
              </p>
              <ul className="list-disc pl-5 mt-2 text-gray-700">
                <li>Uses the `get` function from our API handlers</li>
                <li>Handles authentication with Bearer token</li>
                <li>Uses TanStack Query for data fetching and caching</li>
                <li>You need to pass the id of the data you want to get</li>
                <li>Provides loading and error states</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">2. Type Tab</h4>
              <p className="text-gray-700">
                This shows the TypeScript types used in the implementation:
              </p>
              <ul className="list-disc pl-5 mt-2 text-gray-700">
                <li>User interface for data structure</li>
                <li>Single API response type example</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetSingleData;

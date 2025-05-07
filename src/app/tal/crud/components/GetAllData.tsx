'use client';
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';
import { toast } from 'sonner';

const GetAllData = () => {
  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    toast.success('Code copied to clipboard!');
  };

  return (
    <div className="">
      <h2 className="text-2xl font-semibold  mb-4">
        GET ALL DATA <span className="italic text-lg text-green-400 underline">GET</span>
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

const GetAllUsers = async () => {
  const response = await get<UserApiResponse>(\`/users/user\`, {
    Authorization: \`Bearer \${session?.accessToken}\`,
  });

  if (!response) {
    throw new Error("Failed to fetch users");
  }

  return response;
};

const {
  data: UserData,
  isLoading,
  error,
} = useQuery({
  queryKey: ["users"],
  queryFn: () => GetAllUsers(),
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

const GetAllUsers = async () => {
  const response = await get<UserApiResponse>(\`/users/user\`, {
    Authorization: \`Bearer \${session?.accessToken}\`,
  });

  if (!response) {
    throw new Error("Failed to fetch users");
  }

  return response;
};

const {
  data: UserData,
  isLoading,
  error,
} = useQuery({
  queryKey: ["users"],
  queryFn: () => GetAllUsers(),
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
                      handleCopy(`export interface Address {
  id: string;
  type: string;
  thana?: string | null;
  createdAt: string;
  updatedAt: string;
}
export interface User {
  id: string;
  userId?: string | null;
  thumbnail?: string;
  firstName: string;
  addresses: Address[];

  // add more fields as needed
 
}

export interface UserApiResponse {
  success: boolean;
  message: string;
  data: {
    users: User[];  // look at your api response type
    currentPage: number;
    limit: number;
    totalUsers: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
  error?: string | null;
}
`)
                    }
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
                <pre className="bg-gray-800 h-[500px] text-white p-4 rounded-lg overflow-x-auto">
                  {`export interface Address {
  id: string;
  type: string;
  thana?: string | null;
  createdAt: string;
  updatedAt: string;
}
export interface User {
  id: string;
  userId?: string | null;
  thumbnail?: string;
  firstName: string;
  addresses: Address[];

  // add more fields as needed
 
}

export interface UserApiResponse {
  success: boolean;
  message: string;
  data: {
    users: User[];  // look at your api response type
    currentPage: number;
    limit: number;
    totalUsers: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
  error?: string | null;
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
                <li>API response type</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetAllData;

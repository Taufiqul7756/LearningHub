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
    <div className="p-4">
      <h2 className="text-2xl font-semibold">
        GET ALL DATA <span className="italic text-lg text-green-400">GET</span>
      </h2>
      <Tabs defaultValue="code" className="w-full ">
        <TabsList className="grid grid-cols-3 bg-gray-800 ">
          <TabsTrigger value="code" className="cursor-pointer">
            Code
          </TabsTrigger>
          <TabsTrigger className="cursor-pointer" value="handler">
            Handler
          </TabsTrigger>
          <TabsTrigger className="cursor-pointer" value="type">
            Type
          </TabsTrigger>
        </TabsList>

        <TabsContent value="code">
          <div className=" rounded-lg">
            <div className="flex  justify-end items-center">
              <Button
                variant="ghost"
                size="icon"
                className="cursor-pointer "
                onClick={() =>
                  handleCopy(`import { get } from "@/lib/api/handlers";

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
                <Copy className="h-4 w-4 " />
              </Button>
            </div>
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              {`import { get } from "@/lib/api/handlers";

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

        <TabsContent value="handler">
          <div className=" rounded-lg">
            <div className="flex justify-end items-center ">
              <Button
                variant="ghost"
                size="icon"
                className="cursor-pointer"
                onClick={() =>
                  handleCopy(`import axios, {
  AxiosError,
  AxiosResponse,
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
} from "axios";
import config from "@/types/Config";
import { HttpHeaders, HttpMethod } from "@/types/Types";

const instance = axios.create({
  baseURL: config.apiUrl,
});

// Request interceptor
instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// Response interceptor
instance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

const call = async <T>(
  method: HttpMethod,
  uri: string | (() => string),
  headers: HttpHeaders,
  body: object | undefined = undefined,
  shouldRefresh: boolean = true,
  baseUrl: string = config.apiUrl
): Promise<T> => {
  const url = typeof uri === "string" ? config.makeApiUrl(uri, baseUrl) : uri();

  const options: AxiosRequestConfig = {
    method,
    url,
    headers,
    data: body,
  };

  try {
    const response: AxiosResponse<T> = await instance(options);

    return response.data as T;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw axiosError;
  }
};

// updated all the helper functions to support multiple url

export function get<T>(
  uri: string,
  headers: HttpHeaders = {},
  baseUrl: string = config.apiUrl
): Promise<T> {
  return call(HttpMethod.get, uri, headers, undefined, true, baseUrl);
}

export function post<T>(
  uri: string,
  body: object,
  headers: HttpHeaders = {},
  baseUrl: string = config.apiUrl
): Promise<T> {
  return call(HttpMethod.post, uri, headers, body, true, baseUrl);
}

export function put<T>(
  uri: string,
  body: object,
  headers: HttpHeaders = {},
  baseUrl: string = config.apiUrl
): Promise<T> {
  return call(HttpMethod.put, uri, headers, body, true, baseUrl);
}

export function patch<T>(
  uri: string,
  body: object,
  headers: HttpHeaders = {},
  baseUrl: string = config.apiUrl
): Promise<T> {
  return call(HttpMethod.patch, uri, headers, body, true, baseUrl);
}

export function del<T>(
  uri: string,
  headers: HttpHeaders = {},
  baseUrl: string = config.apiUrl
): Promise<T> {
  return call(HttpMethod.del, uri, headers, undefined, true, baseUrl);
}

export function delMany<T>(
  uri: string,
  body: object,
  headers: HttpHeaders = {},
  baseUrl: string = config.apiUrl,
): Promise<T> {
  return call(HttpMethod.del, uri, headers, body, true, baseUrl);
}
`)
                }
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              {`import axios, {
  AxiosError,
  AxiosResponse,
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
} from "axios";
import config from "@/types/Config";
import { HttpHeaders, HttpMethod } from "@/types/Types";

const instance = axios.create({
  baseURL: config.apiUrl,
});

// Request interceptor
instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// Response interceptor
instance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

const call = async <T>(
  method: HttpMethod,
  uri: string | (() => string),
  headers: HttpHeaders,
  body: object | undefined = undefined,
  shouldRefresh: boolean = true,
  baseUrl: string = config.apiUrl
): Promise<T> => {
  const url = typeof uri === "string" ? config.makeApiUrl(uri, baseUrl) : uri();

  const options: AxiosRequestConfig = {
    method,
    url,
    headers,
    data: body,
  };

  try {
    const response: AxiosResponse<T> = await instance(options);

    return response.data as T;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw axiosError;
  }
};

// updated all the helper functions to support multiple url

export function get<T>(
  uri: string,
  headers: HttpHeaders = {},
  baseUrl: string = config.apiUrl
): Promise<T> {
  return call(HttpMethod.get, uri, headers, undefined, true, baseUrl);
}

export function post<T>(
  uri: string,
  body: object,
  headers: HttpHeaders = {},
  baseUrl: string = config.apiUrl
): Promise<T> {
  return call(HttpMethod.post, uri, headers, body, true, baseUrl);
}

export function put<T>(
  uri: string,
  body: object,
  headers: HttpHeaders = {},
  baseUrl: string = config.apiUrl
): Promise<T> {
  return call(HttpMethod.put, uri, headers, body, true, baseUrl);
}

export function patch<T>(
  uri: string,
  body: object,
  headers: HttpHeaders = {},
  baseUrl: string = config.apiUrl
): Promise<T> {
  return call(HttpMethod.patch, uri, headers, body, true, baseUrl);
}

export function del<T>(
  uri: string,
  headers: HttpHeaders = {},
  baseUrl: string = config.apiUrl
): Promise<T> {
  return call(HttpMethod.del, uri, headers, undefined, true, baseUrl);
}

export function delMany<T>(
  uri: string,
  body: object,
  headers: HttpHeaders = {},
  baseUrl: string = config.apiUrl,
): Promise<T> {
  return call(HttpMethod.del, uri, headers, body, true, baseUrl);
}
`}
            </pre>
          </div>
        </TabsContent>

        <TabsContent value="type">
          <div className=" rounded-lg">
            <div className="flex justify-end items-center ">
              <Button
                variant="ghost"
                className="cursor-pointer"
                size="icon"
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
}`)
                }
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
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
}`}
            </pre>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default GetAllData;

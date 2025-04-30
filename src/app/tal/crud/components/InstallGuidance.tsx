'use client';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Copy } from 'lucide-react';
import React from 'react';
import { toast } from 'sonner';

const InstallGuidance = () => {
  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    toast.success('Code copied to clipboard!');
  };

  return (
    <div className="space-y-6">
      <div className="prose prose-sm max-w-none">
        <h2 className="text-2xl font-semibold mb-4">Efficient API Handling for CRUD Operations</h2>
        <p className="text-gray-700">
          In this documentation, you&aposll find comprehensive examples of efficient API handling
          for CRUD (Create, Read, Update, Delete) operations using:
        </p>
        <ul className="list-disc pl-5 mt-2 text-gray-700">
          <li>
            <strong>TanStack Query</strong> - For powerful data fetching, caching, and state
            management
          </li>
          <li>
            <strong>Axios</strong> - For making HTTP requests with interceptors and error handling
          </li>
          <li>
            <strong>Custom API Handler</strong> - For type-safe, reusable API calls with consistent
            error handling
          </li>
        </ul>
        <p className="text-gray-700 mt-4">
          The examples below demonstrate how to implement these technologies together to create
          robust, type-safe, and maintainable API interactions in your React applications.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        {/* Left Column - Code */}
        <div className="w-[300px] md:w-3/5">
          <Tabs defaultValue="handler" className="w-full">
            <TabsList className="grid grid-cols-2 bg-gray-800">
              <TabsTrigger className="cursor-pointer" value="handler">
                Handler
              </TabsTrigger>
              <TabsTrigger className="cursor-pointer" value="install-type">
                Type
              </TabsTrigger>
            </TabsList>

            {/* //handler  */}
            <TabsContent value="handler">
              <div className="rounded-lg">
                <div className="flex justify-end items-center">
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
                <pre className="bg-gray-800 h-[500px] text-white p-4 rounded-lg overflow-x-auto">
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
            {/* //type  */}
            <TabsContent value="install-type">
              <div className="rounded-lg">
                <div className="flex justify-end items-center">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="cursor-pointer"
                    onClick={() =>
                      handleCopy(`
type HttpHeaders = {
  [key: string]: string;
};

enum HttpMethod {
  get = "GET",
  post = "POST",
  put = "PUT",
  patch = "PATCH",
  del = "DELETE",
}`)
                    }
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                  {`

type HttpHeaders = {
  [key: string]: string;
};

enum HttpMethod {
  get = "GET",
  post = "POST",
  put = "PUT",
  patch = "PATCH",
  del = "DELETE",
}`}
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
              <h4 className="font-medium mb-2">1. Handler Tab</h4>
              <p className="text-gray-700">This shows our custom API handler implementation:</p>
              <ul className="list-disc pl-5 mt-2 text-gray-700">
                <li>Uses Axios for HTTP requests</li>
                <li>Includes request and response interceptors</li>
                <li>Handles error cases</li>
                <li>Provides type safety with TypeScript</li>
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
                <li>HTTP headers type</li>
                <li>HTTP method enum</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstallGuidance;

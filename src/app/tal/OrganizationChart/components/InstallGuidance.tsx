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
        <h2 className="text-2xl font-semibold mb-4">Organizational Structure</h2>
        <p className="text-gray-700">
          In this documentation, you will find comprehensive examples of creating an organizational
          structure using:
        </p>
        <ul className="list-disc pl-5 mt-2 text-gray-700">
          <li>
            <strong>react-organizational-chart</strong> - For rendering organizational charts
          </li>
          <li>
            <strong>lodash</strong> - For utility functions
          </li>
        </ul>
        <p className="text-gray-700 mt-4">
          To get started, you need to install the following dependencies:
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mt-4">
          {/* First Code Block */}
          <div>
            <div className="flex justify-end items-center">
              <Button
                variant="ghost"
                size="icon"
                className="cursor-pointer"
                onClick={() => handleCopy('npm install react-organizational-chart')}
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              {`npm install react-organizational-chart`}
            </pre>
          </div>

          {/* Second Code Block */}
          <div>
            <div className="flex justify-end items-center">
              <Button
                variant="ghost"
                size="icon"
                className="cursor-pointer"
                onClick={() => handleCopy('npm install lodash')}
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              {`npm install lodash`}
            </pre>
          </div>

          {/* Third Code Block */}
          <div>
            <div className="flex justify-end items-center">
              <Button
                variant="ghost"
                size="icon"
                className="cursor-pointer"
                onClick={() => handleCopy('npm i --save-dev @types/lodash')}
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              {`npm i --save-dev @types/lodash`}
            </pre>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        {/* Left Column - Code */}
        <div className="w-[300px] md:w-3/5">
          <Tabs defaultValue="code" className="w-full">
            <TabsList className="grid grid-cols-2 bg-gray-800">
              <TabsTrigger className="cursor-pointer" value="code">
                Code
              </TabsTrigger>
              <TabsTrigger className="cursor-pointer" value="data">
                Data
              </TabsTrigger>
            </TabsList>

            {/* //handler  */}
            <TabsContent value="code">
              <div className="rounded-lg">
                <div className="flex justify-end items-center">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="cursor-pointer"
                    onClick={() =>
                      handleCopy(`/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React from 'react';
import { Tree, TreeNode } from 'react-organizational-chart';
import _ from 'lodash';
import organization from '../data/org.json';

export interface Organization {
  name: string;
  designation: string;
  image: string;
  Child?: Organization[];
  collapsed?: boolean | undefined;
}

export interface OrganizationProps {
  org: Organization;
  onCollapse: () => void;
  collapsed: boolean | undefined;
}

export interface NodeProps {
  o: Organization;
  parent?: Organization;
}

const Organization: React.FC<OrganizationProps> = ({ org, onCollapse, collapsed }) => {
  return (
    <div className="grid items-center justify-center gap-2 rounded-lg bg-white p-4 shadow">
      <div className="grid items-center justify-center gap-2">
        <div className="ml-12">
          <img src={org.image} alt={org.name} className="mr-4 h-12 w-12 rounded-full" />
        </div>
        <div>
          <h2 className="text-lg font-semibold">{org.name}</h2>
          <p className="text-sm text-gray-600">{org.designation}</p>
        </div>
      </div>
      <div>
        <button className="ml-auto text-gray-500 hover:text-gray-700" onClick={onCollapse}>
          <svg
            className={\`h-6 w-6 transform \${collapsed ? 'rotate-0' : 'rotate-180'}\`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

const Node: React.FC<NodeProps> = ({ o, parent }) => {
  const [collapsed, setCollapsed] = React.useState(o.collapsed);

  const handleCollapse = () => {
    setCollapsed(!collapsed);
  };

  React.useEffect(() => {
    o.collapsed = collapsed;
  }, [collapsed, o]);

  const T = parent
    ? TreeNode
    : (props: any) => (
        <Tree {...props} lineWidth={'2px'} lineColor={'#bbc'} lineBorderRadius={'12px'}>
          {props.children}
        </Tree>
      );

  return collapsed ? (
    <T label={<Organization org={o} onCollapse={handleCollapse} collapsed={collapsed} />} />
  ) : (
    <T label={<Organization org={o} onCollapse={handleCollapse} collapsed={collapsed} />}>
      {_.map(o.Child, (c: any) => (
        <Node o={c} parent={o} key={c.name} />
      ))}
    </T>
  );
};

const OrganigramChart: React.FC = () => {
  return (
    <div className="bg-gray-100 p-4">
      <Node o={organization} />
    </div>
  );
};

export default OrganigramChart;
                      `)
                    }
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
                <pre className="bg-gray-800 h-[600px] text-white p-4 rounded-lg overflow-x-auto">
                  {`/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React from 'react';
import { Tree, TreeNode } from 'react-organizational-chart';
import _ from 'lodash';
import organization from '../data/org.json';

export interface Organization {
  name: string;
  designation: string;
  image: string;
  Child?: Organization[];
  collapsed?: boolean | undefined;
}

export interface OrganizationProps {
  org: Organization;
  onCollapse: () => void;
  collapsed: boolean | undefined;
}

export interface NodeProps {
  o: Organization;
  parent?: Organization;
}

const Organization: React.FC<OrganizationProps> = ({ org, onCollapse, collapsed }) => {
  return (
    <div className="grid items-center justify-center gap-2 rounded-lg bg-white p-4 shadow">
      <div className="grid items-center justify-center gap-2">
        <div className="ml-12">
          <img src={org.image} alt={org.name} className="mr-4 h-12 w-12 rounded-full" />
        </div>
        <div>
          <h2 className="text-lg font-semibold">{org.name}</h2>
          <p className="text-sm text-gray-600">{org.designation}</p>
        </div>
      </div>
      <div>
        <button className="ml-auto text-gray-500 hover:text-gray-700" onClick={onCollapse}>
          <svg
            className={\`h-6 w-6 transform \${collapsed ? 'rotate-0' : 'rotate-180'}\`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

const Node: React.FC<NodeProps> = ({ o, parent }) => {
  const [collapsed, setCollapsed] = React.useState(o.collapsed);

  const handleCollapse = () => {
    setCollapsed(!collapsed);
  };

  React.useEffect(() => {
    o.collapsed = collapsed;
  }, [collapsed, o]);

  const T = parent
    ? TreeNode
    : (props: any) => (
        <Tree {...props} lineWidth={'2px'} lineColor={'#bbc'} lineBorderRadius={'12px'}>
          {props.children}
        </Tree>
      );

  return collapsed ? (
    <T label={<Organization org={o} onCollapse={handleCollapse} collapsed={collapsed} />} />
  ) : (
    <T label={<Organization org={o} onCollapse={handleCollapse} collapsed={collapsed} />}>
      {_.map(o.Child, (c: any) => (
        <Node o={c} parent={o} key={c.name} />
      ))}
    </T>
  );
};

const OrganigramChart: React.FC = () => {
  return (
    <div className="bg-gray-100 p-4">
      <Node o={organization} />
    </div>
  );
};

export default OrganigramChart;
                  `}
                </pre>
              </div>
            </TabsContent>
            {/* //type  */}
            <TabsContent value="data">
              <div className="rounded-lg">
                <div className="flex justify-end items-center">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="cursor-pointer"
                    onClick={() =>
                      handleCopy(`
{
  "name": "Taufiqul Islam 1st",
  "image": "https://randomuser.me/api/portraits/men/83.jpg",
  "designation": "President",
  "Child": [
    {
      "name": "Taufiqul Islam 2nd",
      "image": "https://randomuser.me/api/portraits/men/66.jpg",
      "designation": "Senior Vice President",
      "Child": [
        {
          "name": "Taufiqul 3rd 1st",
          "image": "https://randomuser.me/api/portraits/men/67.jpg",
          "designation": "Vice President",
          "Child": [
            {
              "name": "Taufiqul 4th 1",
              "image": "https://randomuser.me/api/portraits/men/96.jpg",
              "designation": "President"
            },
            {
              "name": "Taufiqul 4th 2",
              "image": "https://randomuser.me/api/portraits/men/25.jpg",
              "designation": "President"
            }
          ]
        },
        {
          "name": "Taufiqul Islam 3rd 2nd",
          "image": "https://randomuser.me/api/portraits/men/26.jpg",
          "designation": "General Secretary"
        },
        {
          "name": "Taufiqul Islam 3rd 3rd",
          "image": "https://randomuser.me/api/portraits/men/26.jpg",
          "designation": "President",
          "Child": [
            {
              "name": "Taufiqul 4th 3",
              "image": "https://randomuser.me/api/portraits/men/16.jpg",
              "designation": "President"
            },
            {
              "name": "Taufiqul 4th 4",
              "image": "https://randomuser.me/api/portraits/men/15.jpg",
              "designation": "President",
              "Child": [
                {
                  "name": "Taufiqul 4th 3",
                  "image": "https://randomuser.me/api/portraits/men/18.jpg",
                  "designation": "President"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
                      `)
                    }
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
                <pre className="bg-gray-800 h-[600px] text-white p-4 rounded-lg overflow-x-auto">
                  {`{
  "name": "Taufiqul Islam 1st",
  "image": "https://randomuser.me/api/portraits/men/83.jpg",
  "designation": "President",
  "Child": [
    {
      "name": "Taufiqul Islam 2nd",
      "image": "https://randomuser.me/api/portraits/men/66.jpg",
      "designation": "Senior Vice President",
      "Child": [
        {
          "name": "Taufiqul 3rd 1st",
          "image": "https://randomuser.me/api/portraits/men/67.jpg",
          "designation": "Vice President",
          "Child": [
            {
              "name": "Taufiqul 4th 1",
              "image": "https://randomuser.me/api/portraits/men/96.jpg",
              "designation": "President"
            },
            {
              "name": "Taufiqul 4th 2",
              "image": "https://randomuser.me/api/portraits/men/25.jpg",
              "designation": "President"
            }
          ]
        },
        {
          "name": "Taufiqul Islam 3rd 2nd",
          "image": "https://randomuser.me/api/portraits/men/26.jpg",
          "designation": "General Secretary"
        },
        {
          "name": "Taufiqul Islam 3rd 3rd",
          "image": "https://randomuser.me/api/portraits/men/26.jpg",
          "designation": "President",
          "Child": [
            {
              "name": "Taufiqul 4th 3",
              "image": "https://randomuser.me/api/portraits/men/16.jpg",
              "designation": "President"
            },
            {
              "name": "Taufiqul 4th 4",
              "image": "https://randomuser.me/api/portraits/men/15.jpg",
              "designation": "President",
              "Child": [
                {
                  "name": "Taufiqul 4th 3",
                  "image": "https://randomuser.me/api/portraits/men/18.jpg",
                  "designation": "President"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
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
              <h4 className="font-medium mb-2">1. Organizational Chart : Code tab</h4>
              <p className="text-gray-700">
                This component renders an organizational chart using the following technologies:
              </p>
              <ul className="list-disc pl-5 mt-2 text-gray-700">
                <li>
                  <strong>react-organizational-chart</strong>: For rendering the organizational
                  chart structure.
                </li>
                <li>
                  <strong>lodash</strong>: For utility functions to handle data manipulation.
                </li>
                <li>
                  <strong>TypeScript</strong>: For type safety and better development experience.
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">2. Data Structure : data </h4>
              <p className="text-gray-700">
                The data structure used in this implementation includes:
              </p>
              <ul className="list-disc pl-5 mt-2 text-gray-700">
                <li>
                  <strong>Organization Interface</strong>: Defines the structure of each
                  organization node.
                </li>
                <li>
                  <strong>OrganizationProps Interface</strong>: Defines the props for the
                  Organization component.
                </li>
                <li>
                  <strong>NodeProps Interface</strong>: Defines the props for the Node component.
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">3. Collapsible Nodes</h4>
              <p className="text-gray-700">
                Each node in the organizational chart can be collapsed or expanded:
              </p>
              <ul className="list-disc pl-5 mt-2 text-gray-700">
                <li>Clicking the button toggles the collapsed state of the node.</li>
                <li>The state is managed using React s useState hook.</li>
                <li>The collapsed state is propagated to child nodes.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstallGuidance;

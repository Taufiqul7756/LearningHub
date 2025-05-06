/* eslint-disable @typescript-eslint/no-explicit-any */
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
            className={`h-6 w-6 transform ${collapsed ? 'rotate-0' : 'rotate-180'}`}
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

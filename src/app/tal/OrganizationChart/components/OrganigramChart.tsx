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

const OrganizationComponent: React.FC<OrganizationProps> = ({ org, onCollapse, collapsed }) => {
  return (
    <div className="inline-block h-36 w-36 flex-col justify-between rounded-lg bg-white p-4 shadow-md">
      <div className="grid items-center space-x-4">
        <div className="flex items-center justify-center">
          <img src={org.image} alt={org.name} className="h-12 w-12 rounded-full" />
        </div>
        <div>
          <h2 className="text-sm font-semibold">{org.name}</h2>
          <p className="text-[10px] text-gray-600">{org.designation}</p>
        </div>
      </div>
      {org.Child && org.Child.length > 0 && (
        <div className="mt-0">
          <button className="text-gray-500 hover:text-gray-700" onClick={onCollapse}>
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
      )}
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
    <T
      label={<OrganizationComponent org={o} onCollapse={handleCollapse} collapsed={collapsed} />}
    />
  ) : (
    <T label={<OrganizationComponent org={o} onCollapse={handleCollapse} collapsed={collapsed} />}>
      {_.map(o.Child, (c: any) => (
        <Node o={c} parent={o} key={c.name} />
      ))}
    </T>
  );
};

const OrganigramChart: React.FC = () => {
  return (
    <div className="overflow-x-auto bg-gray-100 p-4" style={{ maxWidth: '100vw' }}>
      <div style={{ width: '100%', overflowX: 'auto' }}>
        <Node o={organization} />
      </div>
    </div>
  );
};

export default OrganigramChart;

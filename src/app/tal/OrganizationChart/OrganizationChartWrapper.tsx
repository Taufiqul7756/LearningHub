import React from 'react';
// import OrganigramChart from './components/OrganigramChart';
import InstallGuidance from './components/InstallGuidance';
import { Toaster } from 'sonner';
import dynamic from 'next/dynamic';

const OrganigramChart = dynamic(() => import('./components/OrganigramChart'), { ssr: false });

const OrganizationChartWrapper = () => {
  return (
    <div>
      <div>
        <InstallGuidance />
      </div>
      <div className="py-10">
        <span className="text-2xl font-bold ">Preview</span>
        <OrganigramChart />
      </div>
      <Toaster position="bottom-right" />
    </div>
  );
};

export default OrganizationChartWrapper;

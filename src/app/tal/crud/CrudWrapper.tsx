'use client';
import React from 'react';
import GetAllData from './components/GetAllData';
import { Toaster } from 'sonner';
import InstallGuidance from './components/InstallGuidance';
import GetSingleData from './components/GetSingleData';

const CrudWrapper = () => {
  return (
    <div className="">
      <h1 className="text-4xl font-bold mb-8">TAL CRUD Operations Guide</h1>
      <div className="mb-4">
        <InstallGuidance />
      </div>
      <div className="pt-18">
        <GetAllData />
      </div>
      <div className="pt-18">
        <GetSingleData />
      </div>

      <Toaster position="bottom-right" />
    </div>
  );
};

export default CrudWrapper;

import React from 'react';
import GetAllData from './components/GetAllData';
import { Toaster } from 'sonner';

const CrudWrapper = () => {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-8">TAL CRUD Operations Guide</h1>
      <GetAllData />
      <Toaster position="bottom-right" />
    </div>
  );
};

export default CrudWrapper;


import React from 'react';
import WorkflowEditor from '../components/WorkflowEditor';
import { Header } from '../components/Header';

const Index = () => {
  return (
    <div className="flex flex-col h-screen w-full bg-slate-50">
      <Header />
      <div className="flex-1 overflow-hidden p-4">
        <div className="h-full w-full rounded-lg border border-slate-200 bg-white shadow-sm overflow-hidden">
          <WorkflowEditor />
        </div>
      </div>
    </div>
  );
};

export default Index;

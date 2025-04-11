
import React from 'react';
import { FileDown, FileUp, Plus, Save, Workflow } from 'lucide-react';
import { Button } from './ui/button';

export const Header = () => {
  return (
    <header className="border-b border-slate-200 bg-white p-4 shadow-sm">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Workflow className="h-6 w-6 text-indigo-600" />
          <h1 className="text-xl font-bold text-slate-800">Workflow Builder</h1>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="flex items-center gap-1 text-slate-700">
            <FileUp size={16} />
            <span>Import</span>
          </Button>
          <Button variant="outline" size="sm" className="flex items-center gap-1 text-slate-700">
            <FileDown size={16} />
            <span>Export</span>
          </Button>
          <Button variant="outline" size="sm" className="flex items-center gap-1 text-slate-700">
            <Save size={16} />
            <span>Save</span>
          </Button>
          <Button size="sm" className="flex items-center gap-1 bg-indigo-600 hover:bg-indigo-700">
            <Plus size={16} />
            <span>New Node</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

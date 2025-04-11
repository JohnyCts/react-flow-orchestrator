
import React from 'react';
import { FileDown, FileUp, Save, Workflow, Bot, Plus } from 'lucide-react';
import { Button } from './ui/button';

export const Header = () => {
  return (
    <header className="border-b border-slate-200 bg-white py-4 px-6 shadow-sm">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 text-white p-1.5 rounded-md">
            <Bot className="h-5 w-5" />
          </div>
          <h1 className="text-xl font-bold text-slate-800">Workflow Builder</h1>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" className="text-slate-700">
            <FileUp size={16} className="mr-1" />
            Import
          </Button>
          <Button variant="outline" size="sm" className="text-slate-700">
            <FileDown size={16} className="mr-1" />
            Export
          </Button>
          <Button variant="outline" size="sm" className="text-slate-700">
            <Save size={16} className="mr-1" />
            Save
          </Button>
          <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
            <Plus size={16} className="mr-1" />
            New Node
          </Button>
        </div>
      </div>
    </header>
  );
};

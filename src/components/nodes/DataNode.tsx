
import React, { memo } from 'react';
import { Handle, Position } from '@xyflow/react';
import { Database } from 'lucide-react';

interface DataNodeProps {
  data: {
    label: string;
  };
  selected: boolean;
}

const DataNode = ({ data, selected }: DataNodeProps) => {
  return (
    <div 
      className={`p-4 rounded-md border-2 shadow-sm bg-white ${
        selected ? 'border-teal-500' : 'border-teal-300'
      }`}
    >
      <Handle type="target" position={Position.Top} className="w-3 h-3 bg-teal-500" />
      <div className="flex items-center gap-2">
        <Database size={16} className="text-teal-500" />
        <div className="text-sm font-medium text-slate-700">{data.label}</div>
      </div>
      <Handle type="source" position={Position.Bottom} className="w-3 h-3 bg-teal-500" />
    </div>
  );
};

export default memo(DataNode);

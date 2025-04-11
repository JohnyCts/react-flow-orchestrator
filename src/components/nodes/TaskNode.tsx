
import React, { memo } from 'react';
import { Handle, Position } from '@xyflow/react';
import { Box } from 'lucide-react';

interface TaskNodeProps {
  data: {
    label: string;
  };
  selected: boolean;
}

const TaskNode = ({ data, selected }: TaskNodeProps) => {
  return (
    <div 
      className={`p-4 rounded-md border-2 shadow-sm bg-white ${
        selected ? 'border-indigo-500' : 'border-indigo-300'
      }`}
    >
      <Handle type="target" position={Position.Top} className="w-3 h-3 bg-indigo-500" />
      <div className="flex items-center gap-2">
        <Box size={16} className="text-indigo-500" />
        <div className="text-sm font-medium text-slate-700">{data.label}</div>
      </div>
      <Handle type="source" position={Position.Bottom} className="w-3 h-3 bg-indigo-500" />
    </div>
  );
};

export default memo(TaskNode);

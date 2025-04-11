
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
    <div className={`p-3 rounded-md border-2 shadow-sm bg-white ${selected ? 'border-blue-500' : 'border-blue-300'}`}>
      <Handle type="target" position={Position.Top} className="w-3 h-3 bg-blue-500" />
      <div className="flex items-center gap-2">
        <Box size={16} className="text-blue-500" />
        <div className="text-sm font-medium">{data.label}</div>
      </div>
      <Handle type="source" position={Position.Bottom} className="w-3 h-3 bg-blue-500" />
    </div>
  );
};

export default memo(TaskNode);

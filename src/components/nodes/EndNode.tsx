
import React, { memo } from 'react';
import { Handle, Position } from '@xyflow/react';
import { CircleOff } from 'lucide-react';

interface EndNodeProps {
  data: {
    label: string;
  };
  selected: boolean;
}

const EndNode = ({ data, selected }: EndNodeProps) => {
  return (
    <div 
      className={`p-4 rounded-md border-2 shadow-sm bg-white ${
        selected ? 'border-rose-500' : 'border-rose-300'
      }`}
    >
      <Handle type="target" position={Position.Top} className="w-3 h-3 bg-rose-500" />
      <div className="flex items-center gap-2">
        <CircleOff size={16} className="text-rose-500" />
        <div className="text-sm font-medium text-slate-700">{data.label}</div>
      </div>
    </div>
  );
};

export default memo(EndNode);


import React, { memo } from 'react';
import { Handle, Position } from '@xyflow/react';
import { CirclePlay } from 'lucide-react';

interface StartNodeProps {
  data: {
    label: string;
  };
  selected: boolean;
}

const StartNode = ({ data, selected }: StartNodeProps) => {
  return (
    <div 
      className={`p-4 rounded-md border-2 shadow-sm bg-white ${
        selected ? 'border-emerald-500' : 'border-emerald-300'
      }`}
    >
      <div className="flex items-center gap-2">
        <CirclePlay size={16} className="text-emerald-500" />
        <div className="text-sm font-medium text-slate-700">{data.label}</div>
      </div>
      <Handle type="source" position={Position.Bottom} className="w-3 h-3 bg-emerald-500" />
    </div>
  );
};

export default memo(StartNode);

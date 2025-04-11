
import React, { memo } from 'react';
import { Handle, Position } from '@xyflow/react';
import { Clock } from 'lucide-react';

interface TimerNodeProps {
  data: {
    label: string;
  };
  selected: boolean;
}

const TimerNode = ({ data, selected }: TimerNodeProps) => {
  return (
    <div 
      className={`p-4 rounded-md border-2 shadow-sm bg-white ${
        selected ? 'border-amber-500' : 'border-amber-300'
      }`}
    >
      <Handle type="target" position={Position.Top} className="w-3 h-3 bg-amber-500" />
      <div className="flex items-center gap-2">
        <Clock size={16} className="text-amber-500" />
        <div className="text-sm font-medium text-slate-700">{data.label}</div>
      </div>
      <Handle type="source" position={Position.Bottom} className="w-3 h-3 bg-amber-500" />
    </div>
  );
};

export default memo(TimerNode);

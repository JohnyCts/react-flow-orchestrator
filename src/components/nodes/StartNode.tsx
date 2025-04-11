
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
    <div className={`p-3 rounded-md border-2 shadow-sm bg-white ${selected ? 'border-green-500' : 'border-green-300'}`}>
      <div className="flex items-center gap-2">
        <CirclePlay size={16} className="text-green-500" />
        <div className="text-sm font-medium">{data.label}</div>
      </div>
      <Handle type="source" position={Position.Bottom} className="w-3 h-3 bg-green-500" />
    </div>
  );
};

export default memo(StartNode);

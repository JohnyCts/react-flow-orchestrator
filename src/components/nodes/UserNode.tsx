
import React, { memo } from 'react';
import { Handle, Position } from '@xyflow/react';
import { User } from 'lucide-react';

interface UserNodeProps {
  data: {
    label: string;
  };
  selected: boolean;
}

const UserNode = ({ data, selected }: UserNodeProps) => {
  return (
    <div 
      className={`p-4 rounded-md border-2 shadow-sm bg-white ${
        selected ? 'border-pink-500' : 'border-pink-300'
      }`}
    >
      <Handle type="target" position={Position.Top} className="w-3 h-3 bg-pink-500" />
      <div className="flex items-center gap-2">
        <User size={16} className="text-pink-500" />
        <div className="text-sm font-medium text-slate-700">{data.label}</div>
      </div>
      <Handle type="source" position={Position.Bottom} className="w-3 h-3 bg-pink-500" />
    </div>
  );
};

export default memo(UserNode);

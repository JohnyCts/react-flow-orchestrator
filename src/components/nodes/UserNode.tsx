
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
      className={`p-4 rounded-lg border-2 shadow-md bg-gradient-to-br from-pink-50 to-white ${
        selected ? 'border-pink-500 ring-2 ring-pink-200 ring-opacity-50' : 'border-pink-300'
      }`}
    >
      <Handle type="target" position={Position.Top} className="w-3 h-3 bg-pink-500" />
      <div className="flex items-center gap-2">
        <div className="bg-pink-100 p-1.5 rounded-full">
          <User size={18} className="text-pink-600" />
        </div>
        <div className="text-sm font-medium text-gray-800">{data.label}</div>
      </div>
      <Handle type="source" position={Position.Bottom} className="w-3 h-3 bg-pink-500" />
    </div>
  );
};

export default memo(UserNode);


import React, { memo } from 'react';
import { Handle, Position } from '@xyflow/react';
import { Mail } from 'lucide-react';

interface EmailNodeProps {
  data: {
    label: string;
  };
  selected: boolean;
}

const EmailNode = ({ data, selected }: EmailNodeProps) => {
  return (
    <div 
      className={`p-4 rounded-lg border-2 shadow-md bg-gradient-to-br from-blue-50 to-white ${
        selected ? 'border-blue-500 ring-2 ring-blue-200 ring-opacity-50' : 'border-blue-300'
      }`}
    >
      <Handle type="target" position={Position.Top} className="w-3 h-3 bg-blue-500" />
      <div className="flex items-center gap-2">
        <div className="bg-blue-100 p-1.5 rounded-full">
          <Mail size={18} className="text-blue-600" />
        </div>
        <div className="text-sm font-medium text-gray-800">{data.label}</div>
      </div>
      <Handle type="source" position={Position.Bottom} className="w-3 h-3 bg-blue-500" />
    </div>
  );
};

export default memo(EmailNode);

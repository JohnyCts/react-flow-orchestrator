
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
      className={`p-4 rounded-md border-2 shadow-sm bg-white ${
        selected ? 'border-sky-500' : 'border-sky-300'
      }`}
    >
      <Handle type="target" position={Position.Top} className="w-3 h-3 bg-sky-500" />
      <div className="flex items-center gap-2">
        <Mail size={16} className="text-sky-500" />
        <div className="text-sm font-medium text-slate-700">{data.label}</div>
      </div>
      <Handle type="source" position={Position.Bottom} className="w-3 h-3 bg-sky-500" />
    </div>
  );
};

export default memo(EmailNode);

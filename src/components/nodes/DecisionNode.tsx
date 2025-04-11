
import React, { memo } from 'react';
import { Handle, Position } from '@xyflow/react';
import { Activity } from 'lucide-react';

interface DecisionNodeProps {
  data: {
    label: string;
  };
  selected: boolean;
}

const DecisionNode = ({ data, selected }: DecisionNodeProps) => {
  return (
    <div className={`p-3 rounded-md border-2 shadow-sm bg-white ${selected ? 'border-purple-500' : 'border-purple-300'}`}>
      <Handle type="target" position={Position.Top} className="w-3 h-3 bg-purple-500" />
      <div className="flex items-center gap-2">
        <Activity size={16} className="text-purple-500" />
        <div className="text-sm font-medium">{data.label}</div>
      </div>
      <Handle type="source" position={Position.Bottom} className="w-3 h-3 bg-purple-500" />
      <Handle type="source" position={Position.Right} className="w-3 h-3 bg-purple-500" id="right" />
      <Handle type="source" position={Position.Left} className="w-3 h-3 bg-purple-500" id="left" />
    </div>
  );
};

export default memo(DecisionNode);

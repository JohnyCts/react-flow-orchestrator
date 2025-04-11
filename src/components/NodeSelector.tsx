
import React from 'react';
import { Activity, Box, CircleOff, CirclePlay, Mail, Clock, Database, User } from 'lucide-react';

type NodeType = {
  type: string;
  name: string;
  icon: React.ElementType;
  color: string;
  bgColor: string;
  borderColor: string;
};

const nodeTypes: NodeType[] = [
  { 
    type: 'startNode', 
    name: 'Start', 
    icon: CirclePlay, 
    color: 'text-emerald-600', 
    bgColor: 'bg-emerald-50', 
    borderColor: 'border-emerald-200'
  },
  { 
    type: 'taskNode', 
    name: 'Task', 
    icon: Box, 
    color: 'text-indigo-600', 
    bgColor: 'bg-indigo-50', 
    borderColor: 'border-indigo-200'
  },
  { 
    type: 'decisionNode', 
    name: 'Decision', 
    icon: Activity, 
    color: 'text-purple-600', 
    bgColor: 'bg-purple-50', 
    borderColor: 'border-purple-200'
  },
  { 
    type: 'emailNode', 
    name: 'Email', 
    icon: Mail, 
    color: 'text-blue-600', 
    bgColor: 'bg-blue-50', 
    borderColor: 'border-blue-200'
  },
  { 
    type: 'timerNode', 
    name: 'Timer', 
    icon: Clock, 
    color: 'text-amber-600', 
    bgColor: 'bg-amber-50', 
    borderColor: 'border-amber-200'
  },
  { 
    type: 'dataNode', 
    name: 'Data', 
    icon: Database, 
    color: 'text-teal-600', 
    bgColor: 'bg-teal-50', 
    borderColor: 'border-teal-200'
  },
  { 
    type: 'userNode', 
    name: 'User', 
    icon: User, 
    color: 'text-pink-600', 
    bgColor: 'bg-pink-50', 
    borderColor: 'border-pink-200'
  },
  { 
    type: 'endNode', 
    name: 'End', 
    icon: CircleOff, 
    color: 'text-rose-600', 
    bgColor: 'bg-rose-50', 
    borderColor: 'border-rose-200'
  },
];

export const NodeSelector = () => {
  const onDragStart = (event: React.DragEvent<HTMLDivElement>, nodeType: string, nodeName: string) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.setData('application/nodeName', nodeName);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div className="flex flex-col gap-3">
      <p className="text-sm font-semibold text-slate-700 mb-1">Add Nodes</p>
      <div className="grid grid-cols-2 gap-2">
        {nodeTypes.map((node) => (
          <div
            key={node.type}
            className={`cursor-grab p-2 rounded-lg ${node.bgColor} ${node.borderColor} border flex items-center gap-2 hover:shadow-md transition-all duration-200 hover:translate-y-[-2px]`}
            onDragStart={(event) => onDragStart(event, node.type, node.name)}
            draggable
          >
            <node.icon size={16} className={node.color} />
            <span className="text-sm font-medium text-gray-700">{node.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

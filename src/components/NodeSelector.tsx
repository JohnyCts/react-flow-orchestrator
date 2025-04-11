
import React from 'react';
import { Activity, Box, CircleOff, CirclePlay, Mail, Clock, Database, User } from 'lucide-react';

type NodeType = {
  type: string;
  name: string;
  icon: React.ElementType;
  color: string;
};

const nodeTypes: NodeType[] = [
  { type: 'startNode', name: 'Start', icon: CirclePlay, color: 'bg-green-100 border-green-300 text-green-700' },
  { type: 'taskNode', name: 'Task', icon: Box, color: 'bg-blue-100 border-blue-300 text-blue-700' },
  { type: 'decisionNode', name: 'Decision', icon: Activity, color: 'bg-purple-100 border-purple-300 text-purple-700' },
  { type: 'emailNode', name: 'Email', icon: Mail, color: 'bg-sky-100 border-sky-300 text-sky-700' },
  { type: 'timerNode', name: 'Timer', icon: Clock, color: 'bg-amber-100 border-amber-300 text-amber-700' },
  { type: 'dataNode', name: 'Data', icon: Database, color: 'bg-teal-100 border-teal-300 text-teal-700' },
  { type: 'userNode', name: 'User', icon: User, color: 'bg-pink-100 border-pink-300 text-pink-700' },
  { type: 'endNode', name: 'End', icon: CircleOff, color: 'bg-red-100 border-red-300 text-red-700' },
];

export const NodeSelector = () => {
  const onDragStart = (event: React.DragEvent<HTMLDivElement>, nodeType: string, nodeName: string) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.setData('application/nodeName', nodeName);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm font-medium text-slate-700 mb-1">Add Nodes</p>
      <div className="grid grid-cols-2 gap-2">
        {nodeTypes.map((node) => (
          <div
            key={node.type}
            className={`cursor-grab p-2 rounded border ${node.color} flex items-center gap-2 hover:shadow-md transition-shadow duration-200`}
            onDragStart={(event) => onDragStart(event, node.type, node.name)}
            draggable
          >
            <node.icon size={16} />
            <span className="text-sm font-medium">{node.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

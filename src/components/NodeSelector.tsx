
import React from 'react';
import { Activity, Box, CircleOff, CirclePlay } from 'lucide-react';

type NodeType = {
  type: string;
  name: string;
  icon: React.ElementType;
  color: string;
};

const nodeTypes: NodeType[] = [
  { type: 'taskNode', name: 'Task', icon: Box, color: 'bg-blue-100 border-blue-300 text-blue-700' },
  { type: 'decisionNode', name: 'Decision', icon: Activity, color: 'bg-purple-100 border-purple-300 text-purple-700' },
  { type: 'startNode', name: 'Start', icon: CirclePlay, color: 'bg-green-100 border-green-300 text-green-700' },
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
      <div className="flex flex-col gap-2">
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

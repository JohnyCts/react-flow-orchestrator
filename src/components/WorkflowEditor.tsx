
import React, { useState, useCallback, useRef } from 'react';
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  addEdge,
  useNodesState,
  useEdgesState,
  Panel,
  Connection,
  Edge,
  MarkerType,
  BackgroundVariant,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { useToast } from './ui/use-toast';
import { NodeSelector } from './NodeSelector';
import TaskNode from './nodes/TaskNode';
import DecisionNode from './nodes/DecisionNode';
import StartNode from './nodes/StartNode';
import EndNode from './nodes/EndNode';
import EmailNode from './nodes/EmailNode';
import TimerNode from './nodes/TimerNode';
import DataNode from './nodes/DataNode';
import UserNode from './nodes/UserNode';

// Initial nodes and edges
const initialNodes = [
  {
    id: 'start',
    type: 'startNode',
    data: { label: 'Start' },
    position: { x: 250, y: 0 },
  },
];

const initialEdges: Edge[] = [];

// Custom node types
const nodeTypes = {
  taskNode: TaskNode,
  decisionNode: DecisionNode,
  startNode: StartNode,
  endNode: EndNode,
  emailNode: EmailNode,
  timerNode: TimerNode,
  dataNode: DataNode,
  userNode: UserNode,
};

const WorkflowEditor = () => {
  const reactFlowWrapper = useRef<HTMLDivElement>(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [reactFlowInstance, setReactFlowInstance] = useState<any>(null);
  const { toast } = useToast();

  // Handle connections between nodes
  const onConnect = useCallback(
    (params: Connection) => {
      // Create a new edge with a nice curved style and arrow marker
      const newEdge = {
        ...params,
        type: 'smoothstep',
        animated: false,
        style: { stroke: '#6366f1', strokeWidth: 2 },
        markerEnd: { type: MarkerType.ArrowClosed, color: '#6366f1' },
      };
      setEdges((eds) => addEdge(newEdge, eds));
    },
    [setEdges]
  );

  // Handle adding a new node when dropped in the editor
  const onDrop = useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();

      if (reactFlowWrapper.current && reactFlowInstance) {
        const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
        const type = event.dataTransfer.getData('application/reactflow');
        const nodeName = event.dataTransfer.getData('application/nodeName');

        if (typeof type === 'undefined' || !type) {
          return;
        }

        // Get position from the drop event
        const position = reactFlowInstance.screenToFlowPosition({
          x: event.clientX - reactFlowBounds.left,
          y: event.clientY - reactFlowBounds.top,
        });

        // Create a unique ID for the new node
        const newId = `${type}-${Date.now()}`;

        // Create a new node object
        const newNode = {
          id: newId,
          type,
          position,
          data: { label: nodeName || type },
        };

        // Add the new node to the graph
        setNodes((nds) => nds.concat(newNode));

        // Show a success toast
        toast({
          title: "Node Added",
          description: `Added new ${nodeName || type} node to the workflow`,
        });
      }
    },
    [reactFlowInstance, setNodes, toast]
  );

  // Enable drag and drop functionality
  const onDragOver = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  return (
    <div className="h-full w-full" ref={reactFlowWrapper}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onInit={setReactFlowInstance}
        onDrop={onDrop}
        onDragOver={onDragOver}
        nodeTypes={nodeTypes}
        fitView
        snapToGrid
        snapGrid={[15, 15]}
        defaultEdgeOptions={{
          type: 'smoothstep',
          style: { strokeWidth: 2 },
        }}
        className="bg-slate-50"
      >
        <Background variant="dots" gap={12} size={1} color="#e2e8f0" />
        <Controls className="bg-white border border-slate-200 rounded-md shadow-sm" />
        <MiniMap 
          nodeStrokeWidth={3} 
          zoomable 
          pannable 
          className="bg-white border border-slate-200 rounded-md shadow-sm"
        />
        <Panel position="top-left" className="bg-white p-3 rounded-md shadow-md border border-slate-200">
          <NodeSelector />
        </Panel>
      </ReactFlow>
    </div>
  );
};

export default WorkflowEditor;

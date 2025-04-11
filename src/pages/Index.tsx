
import React from 'react';
import WorkflowEditor from '../components/WorkflowEditor';
import { Header } from '../components/Header';
import { Card, CardContent } from '@/components/ui/card';
import { Bot } from 'lucide-react';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-white to-blue-50">
      <Header />
      
      <main className="flex-1 px-4 py-8 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              An easy-to-use platform to build AI apps
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Design your workflow visually and connect different components to create powerful AI-driven applications.
            </p>
          </div>
          
          <Card className="border border-slate-200 shadow-md rounded-xl overflow-hidden bg-white mb-12">
            <CardContent className="p-0 h-[500px]">
              <WorkflowEditor />
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="p-6 rounded-xl border-blue-100 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Bot size={24} className="text-blue-600" />
                </div>
                <h3 className="font-medium text-gray-900">AI-Powered Workflows</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Create intelligent workflows that leverage the latest AI technologies with simple drag and drop.
              </p>
            </Card>
            
            <Card className="p-6 rounded-xl border-indigo-100 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-indigo-100 p-2 rounded-full">
                  <div className="w-6 h-6 flex items-center justify-center text-indigo-600 font-bold">
                    ⚡
                  </div>
                </div>
                <h3 className="font-medium text-gray-900">Instant Deployment</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Build your workflow and deploy it instantly with just a few clicks.
              </p>
            </Card>
            
            <Card className="p-6 rounded-xl border-purple-100 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-purple-100 p-2 rounded-full">
                  <div className="w-6 h-6 flex items-center justify-center text-purple-600 font-bold">
                    🔄
                  </div>
                </div>
                <h3 className="font-medium text-gray-900">Seamless Integration</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Connect to existing systems and tools with our pre-built integrations.
              </p>
            </Card>
          </div>
        </div>
      </main>
      
      <footer className="bg-blue-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center gap-2">
                <Bot size={28} />
                <h2 className="text-xl font-bold">Workflow Builder</h2>
              </div>
              <p className="text-blue-100 mt-2">Build powerful AI workflows in minutes</p>
            </div>
            
            <div className="flex gap-6">
              <button className="bg-white text-blue-600 px-5 py-2 rounded-md font-medium hover:bg-blue-50 transition-colors">
                Get Started
              </button>
              <button className="border border-white text-white px-5 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

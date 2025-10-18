import React from 'react';
import { DATA } from '../services/geminiService';

const RoadmapTab: React.FC = () => {
  const statusStyles = {
    complete: 'border-green-500 bg-green-100 text-green-700',
    active: 'border-cyan-500 bg-cyan-100 text-cyan-700 animate-pulse',
    next: 'border-gray-400 bg-gray-100 text-gray-600',
    future: 'border-gray-300 bg-white text-gray-500',
  };

  return (
    <div className="p-4 animate-fade-in">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Project Execution Plan</h1>
      <p className="text-gray-600 mb-8">Following a phased approach from prototype to full-scale deployment.</p>

      <div className="relative border-l-2 border-gray-300 ml-4 pl-8 space-y-10">
        {DATA.roadmap.map((item, index) => (
          <div key={item.phase} className="relative">
            <div className="absolute -left-10 top-1 w-6 h-6 bg-white border-4 border-cyan-500 rounded-full"></div>
            <div className={`p-4 border rounded-lg shadow-sm ${statusStyles[item.status as keyof typeof statusStyles]}`}>
              <span className={`text-xs font-semibold px-2 py-0.5 rounded-full mb-2 inline-block ${statusStyles[item.status as keyof typeof statusStyles]}`}>
                {item.status.toUpperCase()}
              </span>
              <h3 className="font-bold text-lg">
                <img src={IMAGES.brain_gallery?.[index % (IMAGES.brain_gallery?.length || 1)]} alt={`Phase ${item.phase}`} className="inline-block w-10 h-10 mr-3 align-middle rounded-md" loading="lazy" />
                {`Phase ${item.phase}: ${item.title}`}
              </h3>
              <p className="text-sm">{item.details}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoadmapTab;

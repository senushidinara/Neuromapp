import React from 'react';
import { Tab } from '../App';
import { BrainIcon, ScenarioIcon } from '../constants';

interface HomeTabProps {
    onNavigate: (tab: Tab) => void;
}

const HomeTab: React.FC<HomeTabProps> = ({ onNavigate }) => {
  return (
    <div className="h-full flex flex-col items-center justify-center text-center animate-fade-in">
      <div className="animate-glow mb-6">
        <BrainIcon className="w-28 h-28 text-cyan-500" />
      </div>
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tighter">
        Welcome to NeuroMapping
      </h1>
      <p className="text-lg md:text-xl text-gray-600 mt-3 mb-8 max-w-2xl">
        Mapping cognitive risk, empowering communities, and building open science. This interactive journey demonstrates our mission to make cognitive safety accessible to everyone.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={() => onNavigate('scenarios')}
          className="px-8 py-3 font-semibold text-white transition-all duration-300 bg-cyan-500 rounded-lg hover:bg-cyan-600 focus:bg-cyan-700 shadow-lg shadow-cyan-500/30 transform hover:scale-105 flex items-center justify-center"
        >
          <ScenarioIcon className="w-5 h-5 mr-2" />
          Explore the Scenarios
        </button>
         <button
          onClick={() => onNavigate('tech')}
          className="px-8 py-3 font-semibold text-gray-700 transition-all duration-300 bg-gray-200 rounded-lg hover:bg-gray-300 focus:bg-gray-400 transform hover:scale-105"
        >
          How It Works
        </button>
      </div>
    </div>
  );
};

export default HomeTab;
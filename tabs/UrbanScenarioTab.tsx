import React, { useState, useEffect } from 'react';
import SimulationView from '../components/ExplanationDisplay';
import Dashboard from '../components/CodeDisplay';
import { useSpeech } from '../hooks/useSpeech';
import { NARRATION } from '../services/geminiService';
import { IMAGES } from '../assets';
import ImageLightbox from '../components/ImageLightbox';
import React, { useState } from 'react';

type Phase = 'intro' | 'simulating' | 'processing' | 'dashboard';

const UrbanScenarioTab: React.FC<{onBack: () => void}> = ({ onBack }) => {
  const [phase, setPhase] = useState<Phase>('intro');
  const speakIntro = useSpeech(NARRATION.urban_intro);
  const speakResults = useSpeech(NARRATION.urban_results);

  useEffect(() => {
    if (phase === 'intro') {
      // Small delay to allow component to render
      setTimeout(speakIntro, 500);
    }
    if (phase === 'dashboard') {
      setTimeout(speakResults, 1000);
    }
  }, [phase, speakIntro, speakResults]);

  const startSimulation = () => {
    setPhase('simulating');
    setTimeout(() => setPhase('processing'), 4000);
    setTimeout(() => setPhase('dashboard'), 8000);
  };

  const resetSimulation = () => {
    setPhase('intro');
  };

  const renderContent = () => {
    switch (phase) {
      case 'simulating':
      case 'processing':
        return <SimulationView phase={phase} />;
      case 'dashboard':
        return (
            <div className="flex flex-col h-full">
                <div className="flex-grow">
                    <Dashboard />
                </div>
                 <div className="flex justify-between items-center mt-4">
                     <button onClick={onBack} className="px-4 py-2 text-sm font-semibold text-gray-700 transition-colors duration-200 bg-gray-200 rounded-md hover:bg-gray-300">
                        Back to Scenarios
                    </button>
                    <button onClick={resetSimulation} className="px-4 py-2 text-sm font-semibold text-white transition-colors duration-200 bg-cyan-600 rounded-md hover:bg-cyan-500 focus:bg-cyan-700">
                        Run Scenario Again
                    </button>
                </div>
            </div>
        );
      case 'intro':
      default:
        return (
          <div className="text-center animate-fade-in flex flex-col items-center justify-center h-full bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
             <button onClick={onBack} className="absolute top-6 left-6 text-gray-500 hover:text-gray-800">
                &larr; Back to Scenarios
            </button>
            {IMAGES.urban_gallery && IMAGES.urban_gallery.length ? (
              <div className="grid grid-cols-3 gap-2 mb-4 w-full">
                {IMAGES.urban_gallery.map((src: string, i: number) => (
                  <img key={i} src={src} alt={`Urban ${i + 1}`} className="h-20 w-full object-cover rounded-md" />
                ))}
              </div>
            ) : (
              <img src={IMAGES.urban_intro} alt="Elderly person in a modern clinic" className="w-full h-48 object-cover rounded-lg mb-6" />
            )}
            <h1 className="text-2xl font-bold text-gray-900">Urban Clinic Scenario</h1>
            <p className="text-gray-600 mt-2 mb-6 max-w-xl">
              Follow an individual's journey through a routine cognitive health assessment at a local clinic, demonstrating how NeuroMapping provides quick and actionable insights for healthcare professionals.
            </p>
            <button
              onClick={startSimulation}
              className="px-8 py-3 font-semibold text-white transition-all duration-300 bg-cyan-500 rounded-lg hover:bg-cyan-600 shadow-lg shadow-cyan-500/30 transform hover:scale-105"
            >
              Begin Assessment
            </button>
          </div>
        );
    }
  };

  return <div className="h-full relative">{renderContent()}</div>;
};

export default UrbanScenarioTab;

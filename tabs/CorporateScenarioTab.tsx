import React, { useState, useEffect } from 'react';
import SimulationView from '../components/ExplanationDisplay';
import { useSpeech } from '../hooks/useSpeech';
import { NARRATION } from '../services/geminiService';
import { IMAGES } from '../assets';
import ImageLightbox from '../components/ImageLightbox';
import React, { useState } from 'react';
import { InfoIcon } from '../constants';
import { TemporalChart, FeatureChart } from '../components/Loader';


type Phase = 'intro' | 'simulating' | 'processing' | 'dashboard';

const CorporateScenarioTab: React.FC<{onBack: () => void}> = ({ onBack }) => {
  const [phase, setPhase] = useState<Phase>('intro');
  const speakIntro = useSpeech(NARRATION.corporate_intro);
  const speakResults = useSpeech(NARRATION.corporate_results);

  useEffect(() => {
    if (phase === 'intro') setTimeout(speakIntro, 500);
    if (phase === 'dashboard') setTimeout(speakResults, 1000);
  }, [phase, speakIntro, speakResults]);

  const startSimulation = () => {
    setPhase('simulating');
    setTimeout(() => setPhase('processing'), 4000);
    setTimeout(() => setPhase('dashboard'), 8000);
  };
  
  const resetSimulation = () => setPhase('intro');

  const renderContent = () => {
    switch (phase) {
      case 'simulating':
      case 'processing':
        return <SimulationView phase={phase} />;
      case 'dashboard':
        return (
          <div className="animate-fade-in bg-white p-8 rounded-2xl shadow-lg border border-gray-200 h-full flex flex-col">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Employee Wellness Dashboard</h2>
            <p className="text-gray-600 mb-6">Personalized insights for managing cognitive load and enhancing focus.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-grow">
              <div className="bg-red-50 p-6 rounded-lg border border-red-200 text-center">
                <h3 className="font-semibold text-lg text-gray-800 mb-2">Cognitive Load</h3>
                <p className="text-5xl font-bold text-red-500">High</p>
                <p className="text-gray-500">Sustained focus detected.</p>
              </div>
              <div className="md:col-span-2 bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-lg text-gray-800 mb-2 flex items-center"><InfoIcon className="w-5 h-5 mr-2 text-cyan-500"/>Performance Tips</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start"><span className="text-cyan-500 font-bold mr-2 mt-1">&#8227;</span>Take a 5-minute mindfulness break.</li>
                  <li className="flex items-start"><span className="text-cyan-500 font-bold mr-2 mt-1">&#8227;</span>Schedule short walks between long meetings.</li>
                   <li className="flex items-start"><span className="text-cyan-500 font-bold mr-2 mt-1">&#8227;</span>Try the "Pomodoro" technique for focused work.</li>
                </ul>
              </div>
               <div className="md:col-span-3 bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-lg text-gray-800 mb-2">Focus Patterns This Week</h3>
                <div className="h-32">
                    <TemporalChart data={[80, 85, 90, 60, 70, 88, 92]} />
                </div>
              </div>
            </div>
             <div className="flex justify-between items-center mt-6">
              <button onClick={onBack} className="px-4 py-2 text-sm font-semibold text-gray-700 transition-colors duration-200 bg-gray-200 rounded-md hover:bg-gray-300">
                  Back to Scenarios
              </button>
              <button onClick={resetSimulation} className="px-4 py-2 text-sm font-semibold text-white transition-colors duration-200 bg-cyan-600 rounded-md hover:bg-cyan-500 focus:bg-cyan-700">
                  Run New Check-in
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
            {IMAGES.dashboard_gallery && IMAGES.dashboard_gallery.length ? (
            <div className="grid grid-cols-3 gap-2 mb-4 w-full">
                {IMAGES.dashboard_gallery.map((src: string, i: number) => (
                  <img key={i} src={src} alt={`Corporate ${i + 1}`} className="h-20 w-full object-cover rounded-md" />
                ))}
            </div>
          ) : (
            <img src={IMAGES.corporate_intro} alt="Employee in a modern office" className="w-full h-48 object-cover rounded-lg mb-6"/>
          )}
            <h1 className="text-2xl font-bold text-gray-900">Workplace Wellness</h1>
            <p className="text-gray-600 mt-2 mb-6 max-w-xl">
              Discover how NeuroMapping can be a tool for proactive mental health in the workplace, helping employees manage stress and optimize performance.
            </p>
            <button
              onClick={startSimulation}
              className="px-8 py-3 font-semibold text-white transition-all duration-300 bg-cyan-500 rounded-lg hover:bg-cyan-600 shadow-lg shadow-cyan-500/30 transform hover:scale-105"
            >
              Start Wellness Check-in
            </button>
          </div>
        );
    }
  };

  return <div className="h-full relative">{renderContent()}</div>;
};

export default CorporateScenarioTab;

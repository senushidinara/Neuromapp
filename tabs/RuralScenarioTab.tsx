import React, { useState, useEffect } from 'react';
import SimulationView from '../components/ExplanationDisplay';
import { useSpeech } from '../hooks/useSpeech';
import { NARRATION } from '../services/geminiService';
import { InfoIcon, CommunityIcon } from '../constants';
import { IMAGES } from '../assets';
import ImageLightbox from '../components/ImageLightbox';
import React, { useState } from 'react';


type Phase = 'intro' | 'simulating' | 'processing' | 'dashboard';

const RuralScenarioTab: React.FC<{onBack: () => void}> = ({ onBack }) => {
  const [phase, setPhase] = useState<Phase>('intro');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const speakIntro = useSpeech(NARRATION.rural_intro);
  const speakResults = useSpeech(NARRATION.rural_results);

  useEffect(() => {
    if (phase === 'intro') {
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
            <div className="animate-fade-in bg-white p-8 rounded-2xl shadow-lg border border-gray-200 h-full flex flex-col">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Community Health Worker Dashboard</h2>
                <p className="text-gray-600 mb-6">Simplified results for quick, on-site assessment and community planning.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow">
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                        <h3 className="font-semibold text-lg text-gray-800 mb-2">Participant Result</h3>
                        <p className="text-5xl font-bold text-yellow-500">Medium Risk</p>
                        <p className="text-gray-500">Cognitive risk score: 73%</p>
                    </div>
                     <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                        <h3 className="font-semibold text-lg text-gray-800 mb-2 flex items-center"><InfoIcon className="w-5 h-5 mr-2 text-cyan-500"/>Next Steps</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                             <li className="flex items-start"><span className="text-cyan-500 font-bold mr-2 mt-1">&#8227;</span>Recommend follow-up with a regional clinic.</li>
                             <li className="flex items-start"><span className="text-cyan-500 font-bold mr-2 mt-1">&#8227;</span>Provide family with educational materials.</li>
                        </ul>
                    </div>
                     <div className="md:col-span-2 bg-gray-50 p-6 rounded-lg border border-gray-200">
                        <h3 className="font-semibold text-lg text-gray-800 mb-2 flex items-center"><CommunityIcon className="w-5 h-5 mr-2 text-cyan-500"/>Village Health Snapshot</h3>
                         <p className="text-gray-600 text-sm">Screenings Today: <span className="font-bold">15</span></p>
                         <p className="text-gray-600 text-sm">Follow-ups Recommended: <span className="font-bold">4</span></p>
                    </div>
                </div>
                 <div className="flex justify-between items-center mt-6">
                    <button onClick={onBack} className="px-4 py-2 text-sm font-semibold text-gray-700 transition-colors duration-200 bg-gray-200 rounded-md hover:bg-gray-300">
                        Back to Scenarios
                    </button>
                    <button onClick={resetSimulation} className="px-4 py-2 text-sm font-semibold text-white transition-colors duration-200 bg-cyan-600 rounded-md hover:bg-cyan-500 focus:bg-cyan-700">
                        Run New Screening
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
            {IMAGES.rural_gallery && IMAGES.rural_gallery.length ? (
            <div className="grid grid-cols-3 gap-2 mb-4 w-full">
                {IMAGES.rural_gallery.map((src: string, i: number) => (
                  <img key={i} src={src} alt={`Rural ${i + 1}`} className="h-20 w-full object-cover rounded-md cursor-pointer" loading="lazy" onClick={() => { setLightboxIndex(i); setLightboxOpen(true); }} />
                ))}
            </div>
          ) : (
            <img src={IMAGES.rural_intro} alt="Health worker with elders in a village" className="w-full h-48 object-cover rounded-lg mb-6" loading="lazy"/>
          )}

          {lightboxOpen && (
            <ImageLightbox images={IMAGES.rural_gallery || [IMAGES.rural_intro]} initialIndex={lightboxIndex} onClose={() => setLightboxOpen(false)} />
          )}
            <h1 className="text-2xl font-bold text-gray-900">Rural Village Scenario</h1>
            <p className="text-gray-600 mt-2 mb-6 max-w-xl">
              Witness how a community health worker uses a portable NeuroMapping kit to run awareness sessions and perform cognitive screenings in a low-resource setting.
            </p>
            <button
              onClick={startSimulation}
              className="px-8 py-3 font-semibold text-white transition-all duration-300 bg-cyan-500 rounded-lg hover:bg-cyan-600 shadow-lg shadow-cyan-500/30 transform hover:scale-105"
            >
              Begin Screening
            </button>
          </div>
        );
    }
  };

  return <div className="h-full relative">{renderContent()}</div>;
};

export default RuralScenarioTab;

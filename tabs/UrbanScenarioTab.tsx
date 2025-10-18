import React, { useState, useEffect } from 'react';
import SimulationView from '../components/ExplanationDisplay';
import Dashboard from '../components/CodeDisplay';
import { useSpeech } from '../hooks/useSpeech';
import { NARRATION } from '../services/geminiService';
import { IMAGES } from '../assets';
import ImageLightbox from '../components/ImageLightbox';

type Phase = 'intro' | 'simulating' | 'processing' | 'dashboard';

const UrbanScenarioTab: React.FC<{onBack: () => void}> = ({ onBack }) => {
  const [phase, setPhase] = useState<Phase>('intro');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
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

  const [progress, setProgress] = useState(0);
  const timerRef = React.useRef<number | null>(null);

  const startSimulation = () => {
    setPhase('simulating');
    setProgress(0);
    let localProgress = 0;
    if (timerRef.current) window.clearInterval(timerRef.current);
    timerRef.current = window.setInterval(() => {
      localProgress += 2.5; // increments
      if (localProgress <= 50) setProgress(localProgress);
      else setProgress(50);
    }, 200);

    setTimeout(() => {
      setPhase('processing');
      // continue progress to 100
      if (timerRef.current) window.clearInterval(timerRef.current);
      timerRef.current = window.setInterval(() => {
        localProgress += 2.5;
        setProgress(Math.min(100, localProgress));
        if (localProgress >= 100 && timerRef.current) {
          window.clearInterval(timerRef.current);
          timerRef.current = null;
        }
      }, 200);
    }, 4000);

    setTimeout(() => {
      setPhase('dashboard');
      if (timerRef.current) { window.clearInterval(timerRef.current); timerRef.current = null; }
    }, 8000);
  };

  const resetSimulation = () => {
    setPhase('intro');
    setProgress(0);
    if (timerRef.current) { window.clearInterval(timerRef.current); timerRef.current = null; }
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
                     <div className="flex items-center gap-3">
                        <button onClick={onBack} className="px-4 py-2 text-sm font-semibold text-gray-700 transition-colors duration-200 bg-gray-200 rounded-md hover:bg-gray-300">
                          Back to Scenarios
                        </button>
                        <button onClick={() => { const blob = new Blob([`Scenario: Urban Clinic\nRiskScore: ${Math.round(Math.random()*40)+60}%\nConfidence: Medium`], { type: 'text/plain' }); const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = 'urban-summary.txt'; a.click(); URL.revokeObjectURL(url); }} className="px-4 py-2 text-sm font-semibold text-gray-700 bg-white rounded-md border border-gray-200 hover:bg-gray-50">Download Summary</button>
                     </div>
                     <div className="flex items-center gap-3">
                        <button onClick={resetSimulation} className="px-4 py-2 text-sm font-semibold text-white transition-colors duration-200 bg-cyan-600 rounded-md hover:bg-cyan-500 focus:bg-cyan-700">
                            Run Scenario Again
                        </button>
                        <div className="text-sm text-gray-600">Simulation progress: <span className="font-semibold">{Math.round(progress)}%</span></div>
                     </div>
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
                  <img key={i} src={src} alt={`Urban ${i + 1}`} className="h-20 w-full object-cover rounded-md cursor-pointer" loading="lazy" onClick={() => { setLightboxIndex(i); setLightboxOpen(true); }} />
                ))}
              </div>
            ) : (
              <img src={IMAGES.urban_intro} alt="Elderly person in a modern clinic" className="w-full h-48 object-cover rounded-lg mb-6" loading="lazy" />
            )}

            {lightboxOpen && (
              <ImageLightbox images={IMAGES.urban_gallery || [IMAGES.urban_intro]} initialIndex={lightboxIndex} onClose={() => setLightboxOpen(false)} />
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

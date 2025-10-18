import React, { useState, useEffect } from 'react';
import SimulationView from '../components/ExplanationDisplay';
import { useSpeech } from '../hooks/useSpeech';
import { NARRATION } from '../services/geminiService';
import { IMAGES } from '../assets';
import ImageLightbox from '../components/ImageLightbox';
import { InfoIcon } from '../constants';
import { FeatureChart } from '../components/Loader';

type Phase = 'intro' | 'simulating' | 'processing' | 'dashboard';

const EducationScenarioTab: React.FC<{onBack: () => void}> = ({ onBack }) => {
  const [phase, setPhase] = useState<Phase>('intro');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const timerRef = React.useRef<number | null>(null);
  const speakIntro = useSpeech(NARRATION.education_intro);
  const speakResults = useSpeech(NARRATION.education_results);

  useEffect(() => {
    if (phase === 'intro') setTimeout(speakIntro, 500);
    if (phase === 'dashboard') setTimeout(speakResults, 1000);
  }, [phase, speakIntro, speakResults]);

  const startSimulation = () => {
    setPhase('simulating');
    setProgress(0);
    let localProgress = 0;
    if (timerRef.current) window.clearInterval(timerRef.current);
    timerRef.current = window.setInterval(() => { localProgress += 2.5; if (localProgress <= 50) setProgress(localProgress); else setProgress(50); }, 200);
    setTimeout(() => {
      setPhase('processing');
      if (timerRef.current) window.clearInterval(timerRef.current);
      timerRef.current = window.setInterval(() => { localProgress += 2.5; setProgress(Math.min(100, localProgress)); if (localProgress >= 100 && timerRef.current) { window.clearInterval(timerRef.current); timerRef.current = null; } }, 200);
    }, 4000);
    setTimeout(() => { setPhase('dashboard'); if (timerRef.current) { window.clearInterval(timerRef.current); timerRef.current = null; } }, 8000);
  };

  const resetSimulation = () => { setPhase('intro'); setProgress(0); if (timerRef.current) { window.clearInterval(timerRef.current); timerRef.current = null; } };

  const renderContent = () => {
    switch (phase) {
      case 'simulating':
      case 'processing':
        return <SimulationView phase={phase} />;
      case 'dashboard':
        return (
          <div className="animate-fade-in bg-white p-8 rounded-2xl shadow-lg border border-gray-200 h-full flex flex-col">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Student Support Dashboard</h2>
            <p className="text-gray-600 mb-6">Objective data to help create a personalized learning plan for Leo.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow">
              <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200 text-center">
                <h3 className="font-semibold text-lg text-gray-800 mb-2">Attention Pattern</h3>
                <p className="text-4xl font-bold text-yellow-500">Inconsistent</p>
                <p className="text-gray-500">Difficulty sustaining focus detected.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-lg text-gray-800 mb-2 flex items-center"><InfoIcon className="w-5 h-5 mr-2 text-cyan-500"/>Support Strategies</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start"><span className="text-cyan-500 font-bold mr-2 mt-1">&#8227;</span>Incorporate more hands-on, interactive tasks.</li>
                  <li className="flex items-start"><span className="text-cyan-500 font-bold mr-2 mt-1">&#8227;</span>Allow for short "brain breaks" during lessons.</li>
                  <li className="flex items-start"><span className="text-cyan-500 font-bold mr-2 mt-1">&#8227;</span>Use visual aids to reinforce concepts.</li>
                </ul>
              </div>
              <div className="md:col-span-2 bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-lg text-gray-800 mb-2">Key Cognitive Indicators</h3>
                <div className="h-32">
                  <FeatureChart data={[
                    { label: 'Sustained Attention', value: 35 },
                    { label: 'Task Switching', value: 70 },
                    { label: 'Working Memory', value: 55 },
                  ]} />
                </div>
              </div>
            </div>
             <div className="flex justify-between items-center mt-6">
              <button onClick={onBack} className="px-4 py-2 text-sm font-semibold text-gray-700 transition-colors duration-200 bg-gray-200 rounded-md hover:bg-gray-300">
                  Back to Scenarios
              </button>
              <button onClick={resetSimulation} className="px-4 py-2 text-sm font-semibold text-white transition-colors duration-200 bg-cyan-600 rounded-md hover:bg-cyan-500 focus:bg-cyan-700">
                  Run New Assessment
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
            {IMAGES.education_gallery && IMAGES.education_gallery.length ? (
            <div className="grid grid-cols-3 gap-2 mb-4 w-full">
                {IMAGES.education_gallery.map((src: string, i: number) => (
                  <img key={i} src={src} alt={`Education ${i + 1}`} className="h-20 w-full object-cover rounded-md cursor-pointer" loading="lazy" onClick={() => { setLightboxIndex(i); setLightboxOpen(true); }} />
                ))}
            </div>
          ) : (
            <img src={IMAGES.education_intro} alt="Student with a school counselor" className="w-full h-48 object-cover rounded-lg mb-6" loading="lazy"/>
          )}

          {lightboxOpen && (
            <ImageLightbox images={IMAGES.education_gallery || [IMAGES.education_intro]} initialIndex={lightboxIndex} onClose={() => setLightboxOpen(false)} />
          )}
            <h1 className="text-2xl font-bold text-gray-900">Educational Support</h1>
            <p className="text-gray-600 mt-2 mb-6 max-w-xl">
              Learn how NeuroMapping provides objective insights to help educators tailor support for students with unique learning needs.
            </p>
            <button
              onClick={startSimulation}
              className="px-8 py-3 font-semibold text-white transition-all duration-300 bg-cyan-500 rounded-lg hover:bg-cyan-600 shadow-lg shadow-cyan-500/30 transform hover:scale-105"
            >
              Start Student Assessment
            </button>
          </div>
        );
    }
  };

  return <div className="h-full relative">{renderContent()}</div>;
};

export default EducationScenarioTab;

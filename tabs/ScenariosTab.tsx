import React, { useState } from 'react';
import { SCENARIOS, NARRATION } from '../services/geminiService';
import UrbanScenarioTab from './UrbanScenarioTab';
import RuralScenarioTab from './RuralScenarioTab';
import CaregiverScenarioTab from './CaregiverScenarioTab';
import CorporateScenarioTab from './CorporateScenarioTab';
import EducationScenarioTab from './EducationScenarioTab';

type ScenarioId = 'urban' | 'rural' | 'caregiver' | 'corporate' | 'education' | null;

const ScenariosTab: React.FC = () => {
  const [activeScenario, setActiveScenario] = useState<ScenarioId>(null);

  const renderScenario = () => {
    switch (activeScenario) {
      case 'urban':
        return <UrbanScenarioTab onBack={() => setActiveScenario(null)} />;
      case 'rural':
        return <RuralScenarioTab onBack={() => setActiveScenario(null)} />;
      case 'caregiver':
        return <CaregiverScenarioTab onBack={() => setActiveScenario(null)} />;
      case 'corporate':
        return <CorporateScenarioTab onBack={() => setActiveScenario(null)} />;
       case 'education':
        return <EducationScenarioTab onBack={() => setActiveScenario(null)} />;
      default:
        return <ScenarioSelector onSelect={setActiveScenario} />;
    }
  };

  return <div className="h-full">{renderScenario()}</div>;
};

const ScenarioSelector: React.FC<{ onSelect: (id: ScenarioId) => void }> = ({ onSelect }) => {
  const [expanded, setExpanded] = useState<ScenarioId>(null);
  const [simProgress, setSimProgress] = useState<number>(0);
  const [simPhase, setSimPhase] = useState<'idle' | 'running' | 'done'>('idle');
  const timerRef = React.useRef<number | null>(null);

  const togglePreview = (id: ScenarioId) => {
    if (expanded === id) {
      // collapse
      setExpanded(null);
      setSimPhase('idle');
      setSimProgress(0);
      if (timerRef.current) { window.clearInterval(timerRef.current); timerRef.current = null; }
    } else {
      // expand new preview
      setExpanded(id);
      setSimPhase('idle');
      setSimProgress(0);
      if (timerRef.current) { window.clearInterval(timerRef.current); timerRef.current = null; }
    }
  };

  const startSimulation = (id: ScenarioId) => {
    setSimPhase('running');
    setSimProgress(0);
    let local = 0;
    if (timerRef.current) { window.clearInterval(timerRef.current); }
    timerRef.current = window.setInterval(() => {
      local += Math.round(Math.random() * 15) + 5; // variable progress for realism
      setSimProgress(Math.min(100, local));
      if (local >= 100) {
        if (timerRef.current) { window.clearInterval(timerRef.current); timerRef.current = null; }
        setSimPhase('done');
      }
    }, 500);
  };

  const resetSimulation = () => {
    setSimPhase('idle');
    setSimProgress(0);
    if (timerRef.current) { window.clearInterval(timerRef.current); timerRef.current = null; }
  };

  const downloadSummary = (scenarioId: string | null) => {
    const title = scenarioId ? SCENARIOS.find((s) => s.id === scenarioId)?.title : 'Scenario';
    const content = `${title} - Simulation Summary\nProgress: ${simProgress}%\nStatus: ${simPhase}\nGenerated: ${new Date().toLocaleString()}`;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${(title || 'scenario').replace(/\s+/g, '_').toLowerCase()}_summary.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="p-4 animate-fade-in scenarios-container">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Real-World Scenarios</h1>
      <p className="text-gray-600 mb-8">Explore how NeuroMapping is designed to work in diverse, real-world situations to improve cognitive safety and well-being.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 scenarios-grid">
        {SCENARIOS.map((scenario) => (
          <div
            key={scenario.id}
            className="scenario-card bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden transform hover:-translate-y-1 transition-transform duration-300"
          >
            <div className="scenario-visual relative">
              <img
                src={scenario.image}
                alt={scenario.title}
                className="h-48 w-full object-cover scenario-image opacity-100"
                loading="lazy"
                onClick={() => togglePreview(scenario.id as ScenarioId)}
                role="button"
                aria-label={`Preview ${scenario.title}`}
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter') togglePreview(scenario.id as ScenarioId); }}
              />

              <div className="scenario-open-overlay absolute bottom-4 right-4">
                <button
                  onClick={(e) => { e.stopPropagation(); togglePreview(scenario.id as ScenarioId); }}
                  className="overlay-action inline-flex items-center gap-2 px-3 py-2 bg-white bg-opacity-90 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-300"
                  aria-label={`Open interactive preview for ${scenario.title}`}
                >
                  <img src={scenario.image} alt="" className="w-8 h-8 rounded-full object-cover" />
                  <span className="text-sm font-semibold text-gray-900">Preview</span>
                </button>
              </div>
            </div>

            <div className="p-6 scenario-card-body">
              <h3 className="font-bold text-lg text-gray-800">{scenario.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{scenario.description}</p>

              <div className="mt-4 flex items-center justify-between">
                <button
                  onClick={() => onSelect(scenario.id as ScenarioId)}
                  className="launch-simulation inline-flex items-center gap-3 px-3 py-2 bg-cyan-600 text-white rounded-md hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-300"
                >
                  <span className="text-sm font-semibold">Launch Simulation</span>
                </button>

                <button
                  onClick={() => togglePreview(scenario.id as ScenarioId)}
                  className="text-sm font-semibold text-cyan-600 hover:underline"
                >
                  {expanded === scenario.id ? 'Close Preview' : 'Interactive Preview'}
                </button>
              </div>

              {expanded === scenario.id && (
                <div className="mt-4 interactive-preview bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <p className="text-sm text-gray-700 mb-3">{(NARRATION as any)[`${scenario.id}_intro`] || scenario.description}</p>

                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden mb-3">
                    <div className="bg-cyan-500 h-3 rounded-full transition-width duration-300" style={{ width: `${simProgress}%` }} />
                  </div>

                  <div className="flex items-center gap-3">
                    {simPhase !== 'running' && (
                      <button onClick={() => startSimulation(scenario.id as ScenarioId)} className="px-3 py-2 bg-cyan-600 text-white rounded-md text-sm font-semibold">Start Simulation</button>
                    )}

                    {simPhase === 'running' && (
                      <button onClick={resetSimulation} className="px-3 py-2 bg-gray-300 text-gray-800 rounded-md text-sm font-semibold">Stop</button>
                    )}

                    {simPhase === 'done' && (
                      <button onClick={() => downloadSummary(scenario.id)} className="px-3 py-2 bg-white border border-gray-300 text-gray-800 rounded-md text-sm font-semibold">Download Summary</button>
                    )}

                    <div className="ml-auto text-sm text-gray-600">Status: <span className="font-semibold">{simPhase}</span></div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScenariosTab;

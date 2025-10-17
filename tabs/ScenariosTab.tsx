import React, { useState } from 'react';
import { SCENARIOS } from '../services/geminiService';
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

const ScenarioSelector: React.FC<{ onSelect: (id: ScenarioId) => void }> = ({ onSelect }) => (
  <div className="p-4 animate-fade-in">
    <h1 className="text-3xl font-bold text-gray-900 mb-2">Real-World Scenarios</h1>
    <p className="text-gray-600 mb-8">Explore how NeuroMapping is designed to work in diverse, real-world situations to improve cognitive safety and well-being.</p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {SCENARIOS.map((scenario) => (
        <div
          key={scenario.id}
          className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden transform hover:-translate-y-1 transition-transform duration-300 cursor-pointer group"
          onClick={() => onSelect(scenario.id as ScenarioId)}
        >
          <img src={scenario.image} alt={scenario.title} className="h-48 w-full object-cover" />
          <div className="p-6">
            <h3 className="font-bold text-lg text-gray-800">{scenario.title}</h3>
            <p className="text-sm text-gray-600 mt-1">{scenario.description}</p>
            <span className="mt-4 inline-block text-sm font-semibold text-cyan-600 group-hover:underline">
              Launch Simulation &rarr;
            </span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default ScenariosTab;
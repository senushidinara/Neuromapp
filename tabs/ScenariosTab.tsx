import React, { useState } from 'react';
import { SCENARIOS } from '../services/geminiService';
import UrbanScenarioTab from './UrbanScenarioTab';
import RuralScenarioTab from './RuralScenarioTab';
import CaregiverScenarioTab from './CaregiverScenarioTab';
import CorporateScenarioTab from './CorporateScenarioTab';
import EducationScenarioTab from './EducationScenarioTab';
import ImageLightbox from '../components/ImageLightbox';

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
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (images: string[], idx = 0) => {
    setLightboxImages(images);
    setLightboxIndex(idx);
    setLightboxOpen(true);
  };

  return (
    <div className="p-4 animate-fade-in scenarios-container">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Real-World Scenarios</h1>
      <p className="text-gray-600 mb-8">Explore how NeuroMapping is designed to work in diverse, real-world situations to improve cognitive safety and well-being.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 scenarios-grid">
        {SCENARIOS.map((scenario) => (
          <div
            key={scenario.id}
            className="scenario-card bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden transform hover:-translate-y-1 transition-transform duration-300 cursor-pointer group"
            onClick={() => onSelect(scenario.id as ScenarioId)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter') onSelect(scenario.id as ScenarioId); }}
          >
            <div className="scenario-visual relative">
              <img
                src={scenario.image}
                alt={scenario.title}
                className="h-48 w-full object-cover scenario-image"
                loading="lazy"
              />

              {/* Overlay opening button that uses an image and label */}
              <button
                className="scenario-open-overlay absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                onClick={(e) => {
                  e.stopPropagation();
                  openLightbox(scenario.imageGallery && scenario.imageGallery.length ? scenario.imageGallery : [scenario.image], 0);
                }}
                aria-label={`Open gallery for ${scenario.title}`}
              >
                <div className="overlay-content flex items-center gap-4 bg-white bg-opacity-90 rounded-full px-4 py-2">
                  <img src={scenario.image} alt={`${scenario.title} thumbnail`} className="w-12 h-12 rounded-full border-2 border-white shadow-md object-cover" />
                  <span className="text-sm font-semibold text-gray-900">View Photos</span>
                </div>
              </button>
            </div>

            <div className="p-6 scenario-card-body">
              <h3 className="font-bold text-lg text-gray-800">{scenario.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{scenario.description}</p>

              <div className="mt-4 flex items-center justify-between">
                <button
                  onClick={(e) => { e.stopPropagation(); onSelect(scenario.id as ScenarioId); }}
                  className="launch-simulation inline-flex items-center gap-3 px-3 py-2 bg-cyan-600 text-white rounded-md hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-300"
                  aria-label={`Launch ${scenario.title} simulation`}
                >
                  <img src={scenario.image} alt="" className="w-5 h-5 rounded-sm object-cover" />
                  <span className="text-sm font-semibold">Launch Simulation</span>
                </button>

                <button
                  onClick={(e) => { e.stopPropagation(); openLightbox(scenario.imageGallery && scenario.imageGallery.length ? scenario.imageGallery : [scenario.image], 0); }}
                  className="text-sm font-semibold text-cyan-600 hover:underline"
                  aria-label={`Open gallery for ${scenario.title}`}
                >
                  Open Gallery
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {lightboxOpen && (
        <ImageLightbox
          images={lightboxImages}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </div>
  );
};

export default ScenariosTab;

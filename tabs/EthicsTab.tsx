import React from 'react';
import { DATA } from '../services/geminiService';
import { EthicsIcon } from '../constants';

const EthicsTab: React.FC = () => {
  return (
    <div className="p-4 animate-fade-in">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Ethical Framework & Core Principles</h1>
      <p className="text-gray-600 mb-8">Our commitment to building responsible, accessible, and transparent technology.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {DATA.ethics.map((principle, index) => (
          <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm flex items-start">
            <div className="flex-shrink-0 mr-4">
                <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center">
                    <EthicsIcon className="w-6 h-6 text-cyan-600" />
                </div>
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-800">{principle.title}</h3>
              <p className="text-gray-600 mt-1">{principle.description}</p>
            </div>
          </div>
        ))}
      </div>
       <div className="mt-8 bg-gray-100 p-6 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-lg text-gray-800">Privacy & Security Commitment</h3>
            <p className="text-gray-600 mt-2">
                NeuroMapping is designed with privacy at its core. We adhere to HIPAA and GDPR standards, utilizing AES-256 encryption and data anonymization. Our goal is to leverage federated learning for secure model training without ever exposing personal data, ensuring user trust and safety.
            </p>
        </div>
    </div>
  );
};

export default EthicsTab;

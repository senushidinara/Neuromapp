import React from 'react';
import { BrainHeatmap } from './ExplanationDisplay';
import { Gauge } from './ActionButton';
import { TemporalChart, FeatureChart } from './Loader';
import { DATA } from '../services/geminiService';
import { InfoIcon, CommunityIcon } from '../constants';

const Dashboard: React.FC = () => {
  return (
    <div className="w-full h-full p-2 animate-fade-in">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 grid-rows-3 md:grid-rows-2 gap-4 w-full h-full">
            
            <div className="lg:col-span-1 md:col-span-1 col-span-1 row-span-1 bg-white border border-gray-200 rounded-2xl p-4 flex flex-col items-center justify-center shadow-sm">
                <h3 className="text-md font-semibold text-gray-700 mb-2">Cognitive Risk Score</h3>
                <Gauge value={DATA.riskScore} />
                <p className="text-sm text-gray-500 mt-2">Confidence: {DATA.confidence}</p>
            </div>

            <div className="lg:col-span-2 md:col-span-2 col-span-1 row-span-2 bg-white border border-gray-200 rounded-2xl p-4 flex flex-col items-center justify-center shadow-sm">
                <h3 className="text-md font-semibold text-gray-700 self-start">Topographic Activity Heatmap</h3>
                <BrainHeatmap />
            </div>

            <div className="lg:col-span-1 md:col-span-3 col-span-1 row-span-1 bg-white border border-gray-200 rounded-2xl p-4 shadow-sm flex flex-col">
                <h3 className="text-md font-semibold text-gray-700 mb-3 flex items-center"><InfoIcon className="w-5 h-5 mr-2 text-cyan-500"/>AI Recommendations</h3>
                <ul className="space-y-2 text-sm text-gray-600 flex-grow">
                    {DATA.recommendations.map((rec, i) => <li key={i} className="flex items-start"><span className="text-cyan-500 font-bold mr-2 mt-1">&#8227;</span>{rec}</li>)}
                </ul>
            </div>
            
            <div className="lg:col-span-1 md:col-span-2 col-span-1 row-span-1 bg-white border border-gray-200 rounded-2xl p-4 flex flex-col shadow-sm">
                <h3 className="text-md font-semibold text-gray-700 mb-2">Temporal Risk Evolution</h3>
                <div className="flex-grow flex items-center justify-center">
                    <TemporalChart data={DATA.temporalData} />
                </div>
            </div>

            <div className="lg:col-span-2 md:col-span-1 col-span-1 row-span-1 bg-white border border-gray-200 rounded-2xl p-4 shadow-sm flex flex-col">
                <h3 className="text-md font-semibold text-gray-700 mb-2">Key Feature Contributors</h3>
                <div className="flex-grow w-full">
                    <FeatureChart data={DATA.featureImportance} />
                </div>
            </div>

            <div className="lg:col-span-1 md:col-span-3 col-span-1 row-span-1 bg-white border border-gray-200 rounded-2xl p-4 shadow-sm flex flex-col justify-between">
                <div>
                    <h3 className="text-md font-semibold text-gray-700 mb-2 flex items-center"><CommunityIcon className="w-5 h-5 mr-2 text-cyan-500"/>Community Impact</h3>
                    <div className="text-sm space-y-1 text-gray-600">
                        <p>🏆 <span className="font-bold">{DATA.community.sessions}</span> awareness sessions attended</p>
                        <p>🏅 <span className="font-bold">{DATA.community.peers}</span> peers educated</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Dashboard;
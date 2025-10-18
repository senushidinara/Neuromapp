import React from 'react';
import { BrainIcon } from '../constants';

// Re-purposed as the Brain Heatmap for the dashboard
export const BrainHeatmap: React.FC = () => {
    return (
        <div className="relative w-full max-w-xs aspect-square flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-full h-full">
                {/* Base Brain Outline */}
                <path d="M50,5 C70,5 90,25 90,50 C90,75 70,95 50,95 C30,95 10,75 10,50 C10,25 30,5 50,5 Z" fill="none" stroke="#cbd5e1" strokeWidth="1"/>
                <path d="M50,5 Q40,30 50,50 Q60,70 50,95" fill="none" stroke="#e2e8f0" strokeWidth="0.5"/>
                <path d="M25,20 Q40,35 50,50 Q35,65 25,80" fill="none" stroke="#e2e8f0" strokeWidth="0.5"/>
                <path d="M75,20 Q60,35 50,50 Q65,65 75,80" fill="none" stroke="#e2e8f0" strokeWidth="0.5"/>
                {/* Hotspots */}
                <circle cx="65" cy="30" r="5" fill="#ef4444" className="animate-pulse" style={{ animationDuration: '2s' }} />
                <circle cx="70" cy="35" r="8" fill="#f97316" className="animate-pulse" style={{ animationDuration: '1.5s', animationDelay: '0.5s' }} />
                <circle cx="35" cy="65" r="4" fill="#eab308" className="animate-pulse" style={{ animationDuration: '2.5s', animationDelay: '1s' }} />
            </svg>
            <p className="absolute bottom-2 text-xs text-gray-400">High activity detected in frontal regions</p>
        </div>
    );
};


// Main component for simulation animations
interface SimulationViewProps {
  phase: 'simulating' | 'processing';
  progress?: number; // 0-100
}

const SimulationView: React.FC<SimulationViewProps> = ({ phase, progress = phase === 'simulating' ? 25 : 75 }) => {
    const content = {
        simulating: {
            icon: <EegWaveIcon />,
            title: "Collecting EEG Signals...",
            description: "A non-invasive headband is measuring neural activity from 32 channels."
        },
        processing: {
            icon: <BrainIcon className="w-24 h-24 text-cyan-500 animate-pulse" style={{animationDuration: '2s'}} />,
            title: "AI Model Processing...",
            description: "The CNN & Transformer ensemble is analyzing the data to calculate the cognitive risk score."
        }
    };

    const currentContent = content[phase];

    return (
        <div className="flex flex-col items-center justify-center h-full animate-fade-in text-center p-8 bg-white rounded-2xl shadow-lg border border-gray-200">
            <div className="animate-glow">
              {currentContent.icon}
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mt-6">{currentContent.title}</h2>
            <p className="text-gray-500 mt-2 max-w-md">{currentContent.description}</p>
            <div className="w-full max-w-sm bg-gray-200 rounded-full h-3 mt-8 overflow-hidden">
                <div className="bg-cyan-500 h-3 rounded-full" style={{ width: `${Math.max(0, Math.min(100, progress))}%`, transition: 'width 200ms linear' }} />
            </div>
            <div className="mt-2 text-sm text-gray-600">Progress: {Math.round(progress)}%</div>
        </div>
    );
};

const EegWaveIcon = () => (
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 50 Q 12.5 20, 25 50 T 50 50 T 75 50 T 100 50" stroke="#06b6d4" strokeWidth="2" className="animate-path-draw" style={{animationDelay: '0s'}} />
        <path d="M0 50 Q 12.5 80, 25 50 T 50 50 T 75 50 T 100 50" stroke="#0891b2" strokeWidth="2" className="animate-path-draw" style={{animationDelay: '0.5s'}} />
    </svg>
);


export default SimulationView;

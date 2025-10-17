import React from 'react';
import { BrainIcon } from '../constants';

const TechnologyTab = () => {
    const steps = [
        { title: "EEG Signal Acquisition", description: "A low-cost headband captures 32 channels of brainwave data.", color: "text-blue-500" },
        { title: "Preprocessing", description: "Raw signals are filtered to remove noise and artifacts.", color: "text-green-500" },
        { title: "Feature Extraction", description: "A CNN identifies spatial patterns, while a Transformer analyzes temporal sequences.", color: "text-yellow-500" },
        { title: "Risk Scoring Model", description: "The extracted features are fed into a model to calculate the final cognitive risk score.", color: "text-red-500" },
        { title: "Visual Dashboard", description: "Results are displayed in an intuitive interface with actionable insights.", color: "text-purple-500" },
    ];

    return (
        <div className="p-4 animate-fade-in">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">The NeuroMapping Pipeline</h1>
            <p className="text-gray-600 mb-8">Our system uses a hybrid AI model to process complex EEG signals into a clear, understandable risk score.</p>
            
            <div className="relative flex flex-col items-start space-y-4">
                {steps.map((step, index) => (
                    <React.Fragment key={index}>
                        <div 
                            className="flex items-center w-full animate-fade-in"
                            style={{ animationDelay: `${index * 300}ms`}}
                        >
                            <div className={`w-12 h-12 rounded-full border-2 border-cyan-500 flex items-center justify-center bg-white shadow-sm mr-6 ${step.color}`}>
                                <BrainIcon className="w-6 h-6" />
                            </div>
                            <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm flex-1">
                                <h3 className={`font-bold ${step.color}`}>{`Step ${index + 1}: ${step.title}`}</h3>
                                <p className="text-sm text-gray-600">{step.description}</p>
                            </div>
                        </div>
                        {index < steps.length - 1 && (
                            <div 
                                className="absolute left-6 top-12 h-full border-l-2 border-dashed border-gray-300"
                                style={{ height: `calc(100% - ${steps.length-1-index} * 6rem)`}}
                            ></div>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default TechnologyTab;

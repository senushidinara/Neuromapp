import React from 'react';

const WorldMap = () => (
    <svg viewBox="0 0 1000 500" className="w-full h-full">
        <g fill="#d1d5db">
            {/* Add paths for world map continents. This is a simplified example. */}
            <path d="M499.998 46.333c-7.973 0-15.937.135-23.882.406-3.886 19.34-11.433 38.08-22.31 55.485-11.69 18.6-26.65 35.815-44.57 51.13-1.602 1.37-3.21 2.72-4.83 4.05-.18.15-.35.3-.53.45-3.32 2.76-6.82 5.43-10.45 7.95-1.12.78-2.25 1.54-3.38 2.29-14.28 9.42-30.34 17.5-47.8 23.86-13.01 4.73-26.47 8.7-40.23 11.75-23.27 5.17-47.54 7.6-72.28 7.02-14.18-.33-28.28-1.55-42.2-3.65-21.2-3.2-41.9-8.4-61.6-15.5-12.7-4.6-25.1-10-36.9-16.1-4.7-2.4-9.4-4.9-14-7.5-2.2-1.2-4.4-2.5-6.5-3.8-13.4-8.2-25.8-17.9-36.8-28.8-11.2-11.2-20.9-23.7-28.7-37.3-5.2-9-9.5-18.5-12.9-28.3-2.3-6.5-4.1-13.2-5.4-20-1.2-6.2-1.9-12.5-2-18.8-.1-4.9-.1-9.9 0-14.8.1-6.9.5-13.8 1.4-20.6.3-2.6.7-5.1 1.2-7.7.9-4.5 2.2-9 3.9-13.4 3.4-8.8 8.2-17.2 14.2-24.9 5.8-7.4 12.6-14.1 20.2-20.1 12.1-9.5 25.5-17.4 40-23.4 13.9-5.7 28.5-9.9 43.5-12.5 29.8-5.1 60.7-5.1 90.5 0 15 .2 30 .5 45 .2 29.8-5.1 60.7-5.1 90.5 0 15 .2 30 .5 45 .2z M869.512 42.493c-1.144 2.87-2.43 5.69-3.85 8.44-.97 1.88-2 3.73-3.07 5.55-2.73 4.67-5.76 9.2-9.05 13.52-5.7 7.4-12.3 14.1-19.8 20.1-12.1 9.5-25.5 17.4-40 23.4-13.9 5.7-28.5 9.9-43.5 12.5-29.8 5.1-60.7 5.1-90.5 0-15-.2-30-.5-45-.2-29.8-5.1-60.7-5.1-90.5 0-15 .2-30 .5-45 .2z"/>
        </g>
    </svg>
);


const ImpactTab: React.FC = () => {
  return (
    <div className="p-4 animate-fade-in">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Community Engagement & Awareness</h1>
      <p className="text-gray-600 mb-8">Our mission is not just to build technology, but to empower communities through awareness and education.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm text-center">
            <p className="text-4xl font-bold text-cyan-500">12</p>
            <p className="text-gray-600">Pilot Locations</p>
        </div>
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm text-center">
            <p className="text-4xl font-bold text-cyan-500">800+</p>
            <p className="text-gray-600">Community Members Screened</p>
        </div>
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm text-center">
            <p className="text-4xl font-bold text-cyan-500">47</p>
            <p className="text-gray-600">Awareness Sessions Conducted</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
        <h2 className="font-semibold text-lg text-gray-800 mb-4">Global Pilot Program Footprint</h2>
        <div className="bg-gray-100 h-80 rounded-md flex items-center justify-center relative overflow-hidden">
            <WorldMap />
            {/* Example pilot location pings */}
             {/* North America */}
            <div className="absolute" style={{ top: '35%', left: '20%' }}>
                <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                <div className="w-3 h-3 bg-cyan-500 rounded-full absolute top-0 left-0 animate-ping-slow"></div>
            </div>
             {/* South America */}
            <div className="absolute" style={{ top: '65%', left: '30%' }}>
                <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                <div className="w-3 h-3 bg-cyan-500 rounded-full absolute top-0 left-0 animate-ping-slow" style={{animationDelay: '0.3s'}}></div>
            </div>
             {/* Europe */}
             <div className="absolute" style={{ top: '30%', left: '48%' }}>
                <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                <div className="w-3 h-3 bg-cyan-500 rounded-full absolute top-0 left-0 animate-ping-slow" style={{animationDelay: '0.6s'}}></div>
            </div>
            {/* Africa */}
            <div className="absolute" style={{ top: '55%', left: '52%' }}>
                <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                <div className="w-3 h-3 bg-cyan-500 rounded-full absolute top-0 left-0 animate-ping-slow" style={{animationDelay: '0.9s'}}></div>
            </div>
            {/* Asia */}
            <div className="absolute" style={{ top: '38%', left: '75%' }}>
                <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                <div className="w-3 h-3 bg-cyan-500 rounded-full absolute top-0 left-0 animate-ping-slow" style={{animationDelay: '1.2s'}}></div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactTab;
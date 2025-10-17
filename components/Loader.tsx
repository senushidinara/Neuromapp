import React from 'react';

// Animated Line Chart for Temporal Data
export const TemporalChart: React.FC<{ data: number[] }> = ({ data }) => {
  const width = 200;
  const height = 80;
  const points = data.map((d, i) => `${(i / (data.length - 1)) * width},${height - (d / 100) * height}`).join(' ');

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full">
      <polyline
        fill="none"
        stroke="#06b6d4"
        strokeWidth="2"
        points={points}
        className="animate-path-draw"
      />
    </svg>
  );
};

// Animated Bar Chart for Feature Importance
export const FeatureChart: React.FC<{ data: { label: string; value: number }[] }> = ({ data }) => {
  return (
    <div className="w-full h-full flex flex-col justify-around text-xs text-gray-500">
      {data.map((item, index) => (
        <div key={item.label} className="flex items-center w-full gap-2">
          <span className="w-1/3 truncate pr-2 text-right">{item.label}</span>
          <div className="w-2/3 bg-gray-200 rounded-full h-4">
            <div
              className="bg-cyan-500 h-4 rounded-full"
              style={{ width: '0%', animation: `grow 1s ease-out forwards ${index * 0.1}s` }}
              onAnimationEnd={(e) => {
                const target = e.target as HTMLDivElement;
                target.style.width = `${item.value}%`;
              }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

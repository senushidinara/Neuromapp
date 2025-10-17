import React from 'react';

interface GaugeProps {
  value: number;
}

export const Gauge: React.FC<GaugeProps> = ({ value }) => {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  // Animate the stroke-dashoffset from circumference to the target offset
  const offset = circumference - (value / 100) * circumference;

  const color = value > 70 ? 'stroke-red-500' : value > 40 ? 'stroke-yellow-400' : 'stroke-green-500';

  return (
    <div className="relative w-40 h-40">
      <svg className="w-full h-full" viewBox="0 0 120 120">
        <circle
          className="text-gray-200"
          strokeWidth="12"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx="60"
          cy="60"
        />
        <circle
          className={`${color}`}
          strokeWidth="12"
          strokeDasharray={circumference}
          strokeDashoffset={circumference} // Start fully dashed
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx="60"
          cy="60"
          transform="rotate(-90 60 60)"
        >
          <animate attributeName="stroke-dashoffset" from={circumference} to={offset} dur="1.5s" fill="freeze" begin="0.5s" calcMode="easeOut" />
        </circle>
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-4xl font-bold text-gray-800">{value}%</span>
      </div>
    </div>
  );
};

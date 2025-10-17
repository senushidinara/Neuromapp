import React from 'react';
import { Tab } from '../App';
import { BrainIcon, HomeIcon, TechIcon, ScenarioIcon, ImpactIcon, RoadmapIcon, EthicsIcon } from '../constants';

interface SidebarProps {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
}

const navItems = [
  { id: 'home', icon: HomeIcon, label: 'Home' },
  { id: 'tech', icon: TechIcon, label: 'The Technology' },
  { id: 'scenarios', icon: ScenarioIcon, label: 'Scenarios' },
  { id: 'impact', icon: ImpactIcon, label: 'Community Impact' },
  { id: 'roadmap', icon: RoadmapIcon, label: 'Project Roadmap' },
  { id: 'ethics', icon: EthicsIcon, label: 'Ethical Framework' },
];

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  return (
    <aside className="w-64 bg-white h-screen p-4 flex flex-col border-r border-gray-200 shadow-sm animate-slide-in">
      <div className="flex items-center mb-8">
        <BrainIcon className="h-10 w-10 text-cyan-500" />
        <h1 className="ml-2 text-xl font-bold text-gray-800 tracking-tighter">
          NeuroMapping
        </h1>
      </div>
      <nav className="flex flex-col space-y-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id as Tab)}
            className={`flex items-center px-4 py-2.5 text-sm font-medium rounded-lg transition-colors duration-200 ${
              activeTab === item.id
                ? 'bg-cyan-500 text-white shadow-sm'
                : 'text-gray-600 hover:bg-gray-200'
            }`}
          >
            <item.icon className="h-5 w-5 mr-3" />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
      <div className="mt-auto text-center text-xs text-gray-400">
        <p>Cognitive Safety System v3.0</p>
        <p>&copy; 2024 Open Science Initiative</p>
      </div>
    </aside>
  );
};

export default Sidebar;
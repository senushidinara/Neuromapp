import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import HomeTab from './tabs/HomeTab';
import TechnologyTab from './tabs/TechnologyTab';
import ScenariosTab from './tabs/ScenariosTab';
import ImpactTab from './tabs/ImpactTab';
import RoadmapTab from './tabs/RoadmapTab';
import EthicsTab from './tabs/EthicsTab';

export type Tab = 'home' | 'tech' | 'scenarios' | 'impact' | 'roadmap' | 'ethics';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <HomeTab onNavigate={setActiveTab} />;
      case 'tech':
        return <TechnologyTab />;
      case 'scenarios':
        return <ScenariosTab />;
      case 'impact':
        return <ImpactTab />;
      case 'roadmap':
        return <RoadmapTab />;
      case 'ethics':
        return <EthicsTab />;
      default:
        return <HomeTab onNavigate={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans flex">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-1 p-6 md:p-10 overflow-auto h-screen">
        {renderContent()}
      </main>
    </div>
  );
};

export default App;
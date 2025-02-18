import { ArrowLeft } from 'lucide-react';
import React, { useState } from 'react';
import Contacto from './components/sections/Contacto';
import FAQ from './components/sections/FAQ';
import Home from './components/sections/Home';
import Instagram from './components/sections/Instagram';
import Rifas from './components/sections/Rifas';

const App = () => {
  const [currentSection, setCurrentSection] = useState('home');

  const renderContent = () => {
    switch(currentSection) {
      case 'home':
        return <Home onNavigate={setCurrentSection} />;
      case 'rifas':
        return <Rifas />;
      case 'instagram':
        return <Instagram />;
      case 'faq':
        return <FAQ />;
      case 'contacto':
        return <Contacto />;
      default:
        return <Home onNavigate={setCurrentSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {currentSection !== 'home' && (
        <nav className="sticky top-0 bg-white shadow-sm z-50">
          <div className="w-full px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="h-14 md:h-16 flex items-center">
              <button 
                onClick={() => setCurrentSection('home')}
                className="flex items-center gap-2 px-3 md:px-4 py-2 text-black border-2 border-transparent hover:border-[#f29359] rounded-full transition-all duration-300"
              >
                <ArrowLeft size={20} className="md:w-6 md:h-6" />
                <span className="sr-only">Volver al menú</span>
              </button>
            </div>
          </div>
        </nav>
      )}

      <main className="w-full px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        {renderContent()}
      </main>
    </div>
  );
};

export default App;
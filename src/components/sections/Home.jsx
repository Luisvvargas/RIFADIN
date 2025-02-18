import React from 'react';

const Home = ({ onNavigate }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen animate-fade-in px-4">
      <img 
        src="/rifadinLogo.png"
        className="w-32 h-32 md:w-48 md:h-48 rounded-full mb-0"
        alt="Rifadín Logo"
      />
      <h1 className="text-2xl md:text-4xl font-bold text-black mb-2 md:mb-4">RIFADIN</h1>
      <p className="text-sm md:text-base text-black mb-8 md:mb-12 text-center">
        Gana regalos y experiencias únicas.
      </p>
      
      <div className="flex flex-col gap-4 md:gap-6 w-full max-w-xs">
        {[
          { id: 'rifas', label: 'Rifas' },
          { id: 'instagram', label: 'Instagram' },
          { id: 'faq', label: 'FAQ' }
        ].map(item => (
          <button 
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className="px-4 md:px-6 py-2.5 md:py-3 bg-white text-black border-2 border-gray-200 rounded-full hover-glow text-base md:text-lg font-medium"
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;
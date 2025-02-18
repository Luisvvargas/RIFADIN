import { Instagram as InstagramIcon } from 'lucide-react';
import React from 'react';

const Instagram = () => {
  return (
    <div className="flex flex-col items-center min-h-screen pt-20 md:pt-32 gap-4 md:gap-6 animate-fade-in px-4">
      <InstagramIcon size={48} className="md:w-16 md:h-16 text-[#f29359]" />
      <h2 className="text-2xl md:text-3xl font-bold text-black text-center">Síguenos en Instagram</h2>
      <a 
        href="https://instagram.com/rifadin_ens" 
        target="_blank" 
        rel="noopener noreferrer"
        className="px-4 md:px-6 py-2.5 md:py-3 bg-white text-black border-2 border-gray-200 rounded-full hover-glow text-base md:text-lg font-medium"
      >
        @rifadin_ens
      </a>
    </div>
  );
};

export default Instagram;
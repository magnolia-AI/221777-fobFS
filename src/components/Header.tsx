import React, { useState } from 'react';
import { ChevronDown, ArrowRightLeft, User, MapPin, Search, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export const Header = () => {
  const [isRegionModalOpen, setIsRegionModalOpen] = useState(false);

  const navItems = [
    "Liv & hälsa",
    "Barn & gravid",
    "Olyckor & skador",
    "Sjukdomar & besvär",
    "Undersökning & behandling",
    "Så fungerar vården"
  ];

  const regions = [
    "Blekinge", "Dalarna", "Gotland", "Gävleborg", "Halland", "Jämtland Härjedalen", "Jönköpings län",
    "Kalmar län", "Kronoberg", "Norrbotten", "Skåne", "Stockholms län", "Sörmland", "Uppsala län",
    "Värmland", "Västerbotten", "Västernorrland", "Västmanland", "Västra Götaland", "Örebro län", "Östergötland"
  ];

  return (
    <header className="w-full bg-white">
      {/* Top utility bar */}
      <div className="bg-[#fdf2f2] px-4 py-6 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-8">
            <div className="bg-[#c32139] text-white px-6 py-4 rounded-r-[40px] -ml-8 flex items-center justify-center">
              <span className="text-4xl font-bold italic tracking-tighter">1177</span>
            </div>
            
            <button 
              onClick={() => setIsRegionModalOpen(true)}
              className="flex items-center gap-2 text-[#4a4a4a] hover:underline font-semibold"
            >
              Välj region <ChevronDown size={20} className="text-[#c32139]" />
            </button>
          </div>

          <div className="flex items-center gap-8 text-[#4a4a4a] font-semibold text-sm">
            <button className="flex flex-col items-center gap-1 hover:underline group">
              <ArrowRightLeft size={24} className="text-[#4a4a4a] group-hover:text-[#c32139]" />
              <span>För vårdpersonal</span>
            </button>
            <button className="flex flex-col items-center gap-1 hover:underline group">
              <User size={24} className="text-[#4a4a4a] group-hover:text-[#c32139]" />
              <span>Logga in</span>
            </button>
            <button className="flex flex-col items-center gap-1 hover:underline group">
              <MapPin size={24} className="text-[#4a4a4a] group-hover:text-[#c32139]" />
              <span>Hitta vård</span>
            </button>
            <button className="flex flex-col items-center gap-1 hover:underline group">
              <Search size={24} className="text-[#4a4a4a] group-hover:text-[#c32139]" />
              <span>Sök</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="border-b border-gray-200 overflow-x-auto">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <ul className="flex items-center justify-between whitespace-nowrap min-w-max py-4 gap-6">
            {navItems.map((item) => (
              <li key={item}>
                <a href="#" className="text-[#c32139] font-semibold hover:underline text-lg">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Region Modal Overlay */}
      {isRegionModalOpen && (
        <div className="fixed inset-0 z-50 bg-[#fdf2f2] overflow-y-auto">
          <div className="max-w-6xl mx-auto p-8 pt-12 relative">
            <button 
              onClick={() => setIsRegionModalOpen(false)}
              className="absolute right-8 top-12 text-[#c32139]"
            >
              <X size={32} />
            </button>

            <h2 className="text-3xl font-bold text-[#c32139] mb-12">Välj region:</h2>

            <div className="flex flex-col md:flex-row gap-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-4 flex-1">
                {regions.map((region) => (
                  <button 
                    key={region}
                    className="flex items-center gap-3 text-lg font-medium text-[#4a4a4a] hover:bg-white p-2 rounded-lg transition-colors border-b border-gray-200 text-left"
                    onClick={() => setIsRegionModalOpen(false)}
                  >
                    <div className="w-5 h-5 rounded-full border-2 border-[#c32139]" />
                    {region}
                  </button>
                ))}
                
                <div className="col-span-1 md:col-span-3 mt-8">
                  <button className="flex items-center gap-3 text-lg font-medium text-[#4a4a4a] text-left">
                    <div className="w-5 h-5 rounded-full border-2 border-[#c32139]" />
                    Jag vill inte se någon regional information
                  </button>
                  <p className="ml-8 text-sm text-[#4a4a4a] mt-2 italic max-w-md">
                    Obs! Detta val innebär att du inte ser regionalt innehåll och viktig information som gäller just din region.
                  </p>
                </div>
              </div>

              <div className="w-full md:w-[300px] flex justify-center items-start">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Sweden_location_map.svg/1024px-Sweden_location_map.svg.png" 
                  alt="Stock map of Sweden" 
                  className="w-full h-auto opacity-50 grayscale hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};


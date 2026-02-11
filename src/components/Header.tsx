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
    ["Blekinge", "Kalmar län", "Värmland"],
    ["Dalarna", "Kronoberg", "Västerbotten"],
    ["Gotland", "Norrbotten", "Västernorrland"],
    ["Gävleborg", "Skåne", "Västmanland"],
    ["Halland", "Stockholms län", "Västra Götaland"],
    ["Jämtland Härjedalen", "Sörmland", "Örebro län"],
    ["Jönköpings län", "Uppsala län", "Östergötland"]
  ];

  // Flatten for mapping if needed, but the UI shows specific column organization
  const column1 = ["Blekinge", "Dalarna", "Gotland", "Gävleborg", "Halland", "Jämtland Härjedalen", "Jönköpings län"];
  const column2 = ["Kalmar län", "Kronoberg", "Norrbotten", "Skåne", "Stockholms län", "Sörmland", "Uppsala län"];
  const column3 = ["Värmland", "Västerbotten", "Västernorrland", "Västmanland", "Västra Götaland", "Örebro län", "Östergötland"];

  return (
    <header className="w-full bg-white font-sans">
      {/* Top utility bar */}
      <div className="bg-[#f9f3f3] px-4 py-4 md:px-8 border-b border-[#eee0e0]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <div className="bg-[#c32139] text-white px-8 py-5 rounded-r-[60px] -ml-8 flex items-center justify-center shadow-sm">
              <span className="text-5xl font-bold italic tracking-tighter leading-none select-none">1177</span>
            </div>
            
            <button 
              onClick={() => setIsRegionModalOpen(true)}
              className="group flex items-center gap-2 text-[#4a4a4a] hover:text-[#c32139] transition-colors"
            >
              <span className="text-lg font-medium border-b-2 border-transparent group-hover:border-[#c32139] pb-0.5">Välj region</span>
              <ChevronDown size={22} className="text-[#c32139] mt-0.5" />
            </button>
          </div>

          <div className="flex items-center gap-6 md:gap-10 text-[#4a4a4a]">
            <button className="flex flex-col items-center gap-1.5 hover:text-[#c32139] transition-all group">
              <ArrowRightLeft size={28} className="stroke-[1.5px] group-hover:scale-110 transition-transform" />
              <span className="text-[13px] font-semibold tracking-wide">För vårdpersonal</span>
            </button>
            <button className="flex flex-col items-center gap-1.5 hover:text-[#c32139] transition-all group">
              <User size={28} className="stroke-[1.5px] group-hover:scale-110 transition-transform" />
              <span className="text-[13px] font-semibold tracking-wide">Logga in</span>
            </button>
            <button className="flex flex-col items-center gap-1.5 hover:text-[#c32139] transition-all group">
              <MapPin size={28} className="stroke-[1.5px] group-hover:scale-110 transition-transform" />
              <span className="text-[13px] font-semibold tracking-wide">Hitta vård</span>
            </button>
            <button className="flex flex-col items-center gap-1.5 hover:text-[#c32139] transition-all group">
              <Search size={28} className="stroke-[1.5px] group-hover:scale-110 transition-transform" />
              <span className="text-[13px] font-semibold tracking-wide">Sök</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="border-b border-gray-100 overflow-x-auto bg-white sticky top-0 z-40 shadow-sm md:shadow-none">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <ul className="flex items-center justify-between whitespace-nowrap min-w-max py-5 gap-8">
            {navItems.map((item) => (
              <li key={item}>
                <a href="#" className="text-[#c32139] font-bold hover:underline underline-offset-4 text-[17px] tracking-tight decoration-2">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Region Modal Overlay */}
      {isRegionModalOpen && (
        <div className="fixed inset-0 z-[100] bg-[#f9f3f3] overflow-y-auto animate-in fade-in duration-300">
          <div className="max-w-7xl mx-auto p-4 md:p-12 relative min-h-screen">
            <button 
              onClick={() => setIsRegionModalOpen(false)}
              className="fixed right-6 md:right-12 top-6 md:top-12 text-[#c32139] hover:scale-110 transition-transform bg-white/50 rounded-full p-2"
              aria-label="Stäng"
            >
              <X size={36} className="stroke-[2.5px]" />
            </button>

            <h2 className="text-4xl font-bold text-[#c32139] mb-12 mt-8 md:mt-0">Välj region:</h2>

            <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
              <div className="flex-1 w-full">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 md:gap-x-12 gap-y-1">
                  {/* Column 1 */}
                  <div className="flex flex-col gap-1">
                    {column1.map((region) => (
                      <button 
                        key={region}
                        className="group flex items-center gap-4 py-3 border-b border-[#eee0e0] hover:bg-white/40 transition-colors text-left w-full px-2"
                        onClick={() => setIsRegionModalOpen(false)}
                      >
                        <div className="w-5 h-5 rounded-full border-2 border-[#c32139] flex-shrink-0 group-hover:bg-[#c32139]/10 transition-colors" />
                        <span className="text-[1.15rem] text-[#1a1a1a] font-medium leading-tight">{region}</span>
                      </button>
                    ))}
                  </div>
                  
                  {/* Column 2 */}
                  <div className="flex flex-col gap-1">
                    {column2.map((region) => (
                      <button 
                        key={region}
                        className="group flex items-center gap-4 py-3 border-b border-[#eee0e0] hover:bg-white/40 transition-colors text-left w-full px-2"
                        onClick={() => setIsRegionModalOpen(false)}
                      >
                        <div className="w-5 h-5 rounded-full border-2 border-[#c32139] flex-shrink-0 group-hover:bg-[#c32139]/10 transition-colors" />
                        <span className="text-[1.15rem] text-[#1a1a1a] font-medium leading-tight">{region}</span>
                      </button>
                    ))}
                  </div>

                  {/* Column 3 */}
                  <div className="flex flex-col gap-1">
                    {column3.map((region) => (
                      <button 
                        key={region}
                        className="group flex items-center gap-4 py-3 border-b border-[#eee0e0] hover:bg-white/40 transition-colors text-left w-full px-2"
                        onClick={() => setIsRegionModalOpen(false)}
                      >
                        <div className="w-5 h-5 rounded-full border-2 border-[#c32139] flex-shrink-0 group-hover:bg-[#c32139]/10 transition-colors" />
                        <span className="text-[1.15rem] text-[#1a1a1a] font-medium leading-tight">{region}</span>
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="mt-12 max-w-2xl">
                  <button className="group flex items-center gap-4 py-4 hover:bg-white/40 transition-colors text-left w-full px-2">
                    <div className="w-5 h-5 rounded-full border-2 border-[#c32139] flex-shrink-0" />
                    <span className="text-[1.15rem] text-[#1a1a1a] font-medium leading-tight">Jag vill inte se någon regional information</span>
                  </button>
                  <p className="ml-11 text-[15px] text-[#4a4a4a] leading-relaxed">
                    Obs! Detta val innebär att du inte ser regionalt innehåll och viktig information som gäller just din region.
                  </p>
                </div>
              </div>

              <div className="w-full lg:w-[450px] flex justify-center lg:justify-end py-8 select-none">
                <div className="relative w-full max-w-[400px]">
                  <img 
                    src="/images/sweden-map-red.webp" 
                    alt="Karta över Sveriges regioner" 
                    className="w-full h-auto drop-shadow-2xl opacity-90 hover:opacity-100 transition-all duration-500 hover:scale-[1.02]"
                  />
                  {/* Decorative elements to match the reference style */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#f9f3f3] via-transparent to-transparent pointer-events-none h-32 bottom-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

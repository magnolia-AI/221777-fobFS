import React from 'react';
import { ChevronDown, ArrowRightLeft, User, MapPin, Search } from 'lucide-react';

export const Header = () => {
  const navItems = [
    "Liv & hälsa",
    "Barn & gravid",
    "Olyckor & skador",
    "Sjukdomar & besvär",
    "Undersökning & behandling",
    "Så fungerar vården"
  ];

  const column1 = ["Blekinge", "Dalarna", "Gotland", "Gävleborg", "Halland", "Jämtland Härjedalen", "Jönköpings län"];
  const column2 = ["Kalmar län", "Kronoberg", "Norrbotten", "Skåne", "Stockholms län", "Sörmland", "Uppsala län"];
  const column3 = ["Värmland", "Västerbotten", "Västernorrland", "Västmanland", "Västra Götaland", "Örebro län", "Östergötland"];

  return (
    <header className="w-full bg-white font-sans">
      {/* Persistent Region Selector Section */}
      <div className="w-full bg-[#f9f3f3] border-b border-[#eee0e0]">
        <div className="max-w-7xl mx-auto p-6 md:p-12 relative">
          <h2 className="text-3xl font-bold text-[#c32139] mb-8">Välj region:</h2>

          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
            <div className="flex-1 w-full">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 md:gap-x-12 gap-y-1">
                {/* Column 1 */}
                <div className="flex flex-col gap-1">
                  {column1.map((region) => (
                    <button 
                      key={region}
                      className="group flex items-center gap-4 py-2.5 border-b border-[#eee0e0] hover:bg-white/40 transition-colors text-left w-full px-2"
                    >
                      <div className="w-4.5 h-4.5 rounded-full border-2 border-[#c32139] flex-shrink-0 group-hover:bg-[#c32139]/10 transition-colors" />
                      <span className="text-[1.05rem] text-[#1a1a1a] font-medium leading-tight">{region}</span>
                    </button>
                  ))}
                </div>
                
                {/* Column 2 */}
                <div className="flex flex-col gap-1">
                  {column2.map((region) => (
                    <button 
                      key={region}
                      className="group flex items-center gap-4 py-2.5 border-b border-[#eee0e0] hover:bg-white/40 transition-colors text-left w-full px-2"
                    >
                      <div className="w-4.5 h-4.5 rounded-full border-2 border-[#c32139] flex-shrink-0 group-hover:bg-[#c32139]/10 transition-colors" />
                      <span className="text-[1.05rem] text-[#1a1a1a] font-medium leading-tight">{region}</span>
                    </button>
                  ))}
                </div>

                {/* Column 3 */}
                <div className="flex flex-col gap-1">
                  {column3.map((region) => (
                    <button 
                      key={region}
                      className="group flex items-center gap-4 py-2.5 border-b border-[#eee0e0] hover:bg-white/40 transition-colors text-left w-full px-2"
                    >
                      <div className="w-4.5 h-4.5 rounded-full border-2 border-[#c32139] flex-shrink-0 group-hover:bg-[#c32139]/10 transition-colors" />
                      <span className="text-[1.05rem] text-[#1a1a1a] font-medium leading-tight">{region}</span>
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="mt-8 max-w-2xl">
                <button className="group flex items-center gap-4 py-3 hover:bg-white/40 transition-colors text-left w-full px-2">
                  <div className="w-4.5 h-4.5 rounded-full border-2 border-[#c32139] flex-shrink-0" />
                  <span className="text-[1.05rem] text-[#1a1a1a] font-medium leading-tight">Jag vill inte se någon regional information</span>
                </button>
                <p className="ml-10 text-[14px] text-[#4a4a4a] leading-relaxed">
                  Obs! Detta val innebär att du inte ser regionalt innehåll och viktig information som gäller just din region.
                </p>
              </div>
            </div>

            <div className="w-full lg:w-[320px] flex justify-center lg:justify-end select-none">
              <div className="relative w-full max-w-[280px]">
                <img 
                  src="/images/sweden-map-red.webp" 
                  alt="Karta över Sveriges regioner" 
                  className="w-full h-auto drop-shadow-xl opacity-90"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Bar with Logo and Account Links */}
      <div className="bg-[#f9f3f3] px-4 py-4 md:px-8 border-b border-[#eee0e0]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <div className="bg-[#c32139] text-white px-8 py-5 rounded-r-[60px] -ml-8 flex items-center justify-center shadow-sm">
              <span className="text-5xl font-bold italic tracking-tighter leading-none select-none">1177</span>
            </div>
            
            <div className="flex items-center gap-2 text-[#4a4a4a]">
              <span className="text-lg font-medium border-b-2 border-transparent pb-0.5">Välj region</span>
              <ChevronDown size={22} className="text-[#c32139] mt-0.5" />
            </div>
          </div>

          <div className="flex items-center gap-6 md:gap-10 text-[#4a4a4a]">
            <button className="flex flex-col items-center gap-1.5 hover:text-[#c32139] transition-all group">
              <ArrowRightLeft size={28} className="stroke-[1.5px]" />
              <span className="text-[13px] font-semibold tracking-wide">För vårdpersonal</span>
            </button>
            <button className="flex flex-col items-center gap-1.5 hover:text-[#c32139] transition-all group">
              <User size={28} className="stroke-[1.5px]" />
              <span className="text-[13px] font-semibold tracking-wide">Logga in</span>
            </button>
            <button className="flex flex-col items-center gap-1.5 hover:text-[#c32139] transition-all group">
              <MapPin size={28} className="stroke-[1.5px]" />
              <span className="text-[13px] font-semibold tracking-wide">Hitta vård</span>
            </button>
            <button className="flex flex-col items-center gap-1.5 hover:text-[#c32139] transition-all group">
              <Search size={28} className="stroke-[1.5px]" />
              <span className="text-[13px] font-semibold tracking-wide">Sök</span>
            </button>
          </div>
        </div>
      </div>

      {/* Category Navigation */}
      <nav className="border-b border-gray-100 overflow-x-auto bg-white">
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
    </header>
  );
};

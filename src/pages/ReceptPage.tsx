import React from 'react';
import { Header } from '@/components/Header';
import { Stethoscope, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ReceptPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <Link to="/" className="flex items-center gap-2 text-[#c32139] font-bold mb-8 hover:underline">
          <ArrowLeft size={20} /> Tillbaka till start
        </Link>
        <div className="bg-[#fdf2f2] p-8 rounded-3xl border border-pink-50 mb-12 flex items-center gap-8">
          <div className="bg-white p-6 rounded-2xl text-[#c32139] shadow-sm">
            <Stethoscope size={48} className="stroke-[1.5px]" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-[#c32139] mb-2">Förnya recept</h1>
            <p className="text-xl text-[#2a4365]">Här kan du begära att få dina recept förnyade digitalt.</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-[#2a4365] mb-4">Så här gör du</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Logga in för att se dina aktuella recept och skicka en förfrågan om förnyelse till din vårdcentral.
            </p>
            <button className="bg-[#41699e] text-white px-8 py-3 rounded-full font-bold hover:bg-[#2a4365] transition-all uppercase tracking-wide">
              Logga in för att förnya recept
            </button>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-[#2a4365] mb-4">Hämta ut läkemedel</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Du kan se alla dina recept som finns på apoteken genom att logga in på 1177.se.
            </p>
            <p className="text-gray-700">
              Tänkt på att det kan ta upp till några dagar innan ditt nya recept är klart.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

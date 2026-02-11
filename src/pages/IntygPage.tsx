import React from 'react';
import { Header } from '@/components/Header';
import { FileText, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function IntygPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <Link to="/" className="flex items-center gap-2 text-[#c32139] font-bold mb-8 hover:underline">
          <ArrowLeft size={20} /> Tillbaka till start
        </Link>
        <div className="bg-[#fdf2f2] p-8 rounded-3xl border border-pink-50 mb-12 flex items-center gap-8">
          <div className="bg-white p-6 rounded-2xl text-[#c32139] shadow-sm">
            <FileText size={48} className="stroke-[1.5px]" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-[#c32139] mb-2">Läsa och skicka intyg</h1>
            <p className="text-xl text-[#2a4365]">Här kan du hantera dina sjukintyg och läkarutlåtanden.</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-[#2a4365] mb-4">Dina intyg</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Logga in för att se dina elektroniska intyg och skicka dem direkt till Försäkringskassan.
            </p>
            <button className="bg-[#41699e] text-white px-8 py-3 rounded-full font-bold hover:bg-[#2a4365] transition-all uppercase tracking-wide">
              Logga in för att se intyg
            </button>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-[#2a4365] mb-4">Skicka intyg</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              De flesta läkarintyg skickas digitalt numera. Din läkare berättar om intyget finns tillgängligt på 1177.se.
            </p>
            <p className="text-gray-700">
              Du kan även ladda ner dina intyg som PDF om du behöver skriva ut dem.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

import React from 'react';
import { Header } from '@/components/Header';
import { LayoutGrid, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TjansterPage() {
  const allServices = [
    { title: "Högkostnadsskydd", desc: "Se dina utlägg för vård och medicin" },
    { title: "Hitta vård", desc: "Sök och jämför vårdmottagningar" },
    { title: "Självbetjäningshälsotest", desc: "Verktyg för att testa din hälsa" },
    { title: "Vård utomlands", desc: "Information om vård i andra länder" },
    { title: "Organ- och vävnadsdonation", desc: "Anmäl din vilja i donationsregistret" },
    { title: "Patientnämnder", desc: "Hjälp om du inte är nöjd med vården" }
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <Link to="/" className="flex items-center gap-2 text-[#c32139] font-bold mb-8 hover:underline">
          <ArrowLeft size={20} /> Tillbaka till start
        </Link>
        <div className="bg-[#fdf2f2] p-8 rounded-3xl border border-pink-50 mb-12 flex items-center gap-8">
          <div className="bg-white p-6 rounded-2xl text-[#c32139] shadow-sm">
            <LayoutGrid size={48} className="stroke-[1.5px]" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-[#c32139] mb-2">Se fler tjänster</h1>
            <p className="text-xl text-[#2a4365]">Här hittar du alla digitala tjänster som finns tillgängliga för dig.</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allServices.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <h3 className="text-xl font-bold text-[#2a4365] mb-2">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

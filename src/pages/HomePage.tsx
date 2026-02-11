import React from 'react';
import { Header } from '@/components/Header';
import { ArrowRight, Stethoscope, ClipboardList, Calendar, Inbox, FileText, LayoutGrid, ChevronRight, Play } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title }: { icon: any, title: string }) => (
  <button className="flex items-center gap-6 p-6 bg-white border border-gray-100 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)] transition-all cursor-pointer text-left w-full group">
    <div className="bg-[#fdf2f2] p-4 rounded-xl text-[#c32139] transition-colors">
      <Icon size={28} className="stroke-[1.5px]" />
    </div>
    <span className="text-xl font-bold text-[#2a4365] transition-colors">{title}</span>
  </button>
);

const ArticleCard = ({ image, title, description }: { image: string, title: string, description: string }) => (
  <div className="flex flex-col gap-4">
    <div className="aspect-video overflow-hidden rounded-lg">
      <img src={image} alt={title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
    </div>
    <h3 className="text-2xl font-bold text-[#c32139] flex items-center gap-2 hover:underline cursor-pointer group">
      <span className="bg-[#fdf2f2] p-1 rounded-full group-hover:bg-[#c32139] group-hover:text-white transition-colors">
        <ArrowRight size={20} />
      </span>
      {title}
    </h3>
    <p className="text-gray-700 leading-relaxed text-lg">{description}</p>
  </div>
);

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />

      <main>
        {/* Hero Section - Matched to reference */}
        <section className="relative overflow-hidden bg-white py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            {/* Image on the left with organic mask */}
            <div className="md:w-1/2 flex justify-center relative">
              <div className="w-full aspect-[4/3] md:aspect-square max-w-[550px] relative">
                <div 
                  className="w-full h-full object-cover relative overflow-hidden shadow-2xl"
                  style={{ borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%' }}
                >
                  <img 
                    src="/images/stress-hero.webp" 
                    alt="Lär dig hantera stress" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Content on the right */}
            <div className="md:w-1/2 flex flex-col gap-6 md:gap-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#c32139] leading-[1.1] tracking-tight">
                Lär dig hantera stress
              </h1>
              <div className="space-y-4 max-w-lg">
                <p className="text-xl md:text-2xl text-[#1a1a1a] leading-relaxed">
                  En kort paus kan göra stor skillnad. Det finns mycket du kan göra själv för att må bättre.
                </p>
              </div>
              <button className="bg-[#41699e] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#2a4365] transition-all self-start uppercase tracking-wide shadow-md hover:shadow-lg transform active:scale-95 duration-200">
                Läs mer om stresshantering och sömn
              </button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">
          <h2 className="text-4xl font-bold text-[#c32139] mb-12">Vad vill du göra?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard icon={ClipboardList} title="Läsa journalen" />
            <ServiceCard icon={Stethoscope} title="Förnya recept" />
            <ServiceCard icon={Inbox} title="Läsa och svara på meddelanden" />
            <ServiceCard icon={Calendar} title="Se bokade tider" />
            <ServiceCard icon={FileText} title="Läsa och skicka intyg" />
            <ServiceCard icon={LayoutGrid} title="Se fler tjänster" />
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <hr className="border-gray-100" />
        </div>

        {/* Articles Grid */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-20 grid grid-cols-1 md:grid-cols-3 gap-16">
          <ArticleCard 
            image="https://images.unsplash.com/photo-1576091160550-217359f42f8c?q=80&w=2070&auto=format&fit=crop"
            title="Texter på lättläst svenska"
            description="Läs korta texter om bland annat sjukdomar, graviditet och hur vården i Sverige fungerar. Texterna är skrivna på lättläst svenska."
          />
          <ArticleCard 
            image="https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=2070&auto=format&fit=crop"
            title="Sexuell hälsa"
            description="Sexuell hälsa handlar om att må bra och kunna bestämma över sin kropp och sexualitet. Läs mer om sexuell och reproduktiv hälsa."
          />
          <ArticleCard 
            image="https://images.unsplash.com/photo-1536640712247-c45474d61c2c?q=80&w=2042&auto=format&fit=crop"
            title="Barn och skärmtid"
            description="Som vuxen behöver du hjälpa ditt barn att använda skärmar på ett bra sätt. Läs om vilken skärmtid som rekommenderas beroende på barnets ålder."
          />
        </section>

        {/* Video Callout Section */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 mb-20">
          <div className="flex flex-col md:flex-row bg-[#fdf2f2] rounded-3xl overflow-hidden shadow-sm border border-pink-50">
            <div className="md:w-3/5 relative aspect-video bg-black flex items-center justify-center group overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1584362917165-526a968579e8?q=80&w=2071&auto=format&fit=crop" 
                alt="Termometer" 
                className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                <div className="bg-white/95 p-6 rounded-full text-[#c32139] shadow-2xl transform group-hover:scale-110 transition-transform duration-300">
                  <Play fill="currentColor" size={40} className="ml-1" />
                </div>
              </div>
            </div>
            <div className="md:w-2/5 p-12 md:p-16 flex flex-col justify-center gap-6">
              <h2 className="text-4xl font-bold text-[#c32139] leading-tight">Så tar du tempen i örat</h2>
              <p className="text-xl text-[#2a4365] leading-relaxed">
                Att mäta temperaturen kan hjälpa dig att förstå hur barnet mår. Här får du veta vad du ska tänka på.
              </p>
              <button className="flex items-center gap-2 text-[#c32139] font-bold text-2xl group hover:underline underline-offset-8">
                <ChevronRight size={28} className="group-hover:translate-x-1 transition-transform" />
                Läs mer
              </button>
            </div>
          </div>
        </section>

        <button className="fixed bottom-8 right-8 bg-white border border-gray-200 p-3 rounded-full shadow-lg hover:bg-gray-50 text-[#c32139] transition-colors z-50">
          <ChevronRight size={28} className="-rotate-90" />
        </button>
      </main>
    </div>
  );
}

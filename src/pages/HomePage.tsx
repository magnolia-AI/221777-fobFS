import React from 'react';
import { Header } from '@/components/Header';
import { ArrowRight, Stethoscope, ClipboardList, Calendar, Inbox, FileText, LayoutGrid, ChevronRight, Play } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title }: { icon: any, title: string }) => (
  <button className="flex items-center gap-4 p-6 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer text-left w-full group">
    <div className="bg-[#fdf2f2] p-3 rounded-lg text-[#c32139] group-hover:bg-[#c32139] group-hover:text-white transition-colors">
      <Icon size={24} />
    </div>
    <span className="text-xl font-bold text-[#2a4365] group-hover:text-[#c32139] transition-colors">{title}</span>
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
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative bg-[#fdf2f2] overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center min-h-[500px] py-12 gap-12">
            <div className="md:w-1/2 flex justify-center order-2 md:order-1 relative">
              <div className="w-[350px] h-[350px] md:w-[500px] md:h-[500px] relative">
                <div 
                  className="absolute inset-0 bg-[#c32139]/10 rounded-full translate-x-8 translate-y-8 blur-3xl" 
                />
                <div 
                  className="w-full h-full object-cover z-10 relative overflow-hidden"
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
            <div className="md:w-1/2 flex flex-col gap-8 order-1 md:order-2">
              <h1 className="text-5xl md:text-7xl font-black text-[#c32139] leading-[1.1]">
                Lär dig hantera stress
              </h1>
              <p className="text-xl md:text-2xl text-[#2a4365] leading-relaxed max-w-lg">
                En kort paus kan göra stor skillnad. Det finns mycket du kan göra själv för att må bättre.
              </p>
              <button className="bg-[#41699e] text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-[#2a4365] transition-colors self-start uppercase tracking-wider shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0 duration-200">
                Läs mer om stresshantering och sömn
              </button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-20">
          <h2 className="text-4xl font-black text-[#c32139] mb-12">Vad vill du göra?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard icon={ClipboardList} title="Läsa journalen" />
            <ServiceCard icon={Stethoscope} title="Förnya recept" />
            <ServiceCard icon={Inbox} title="Läsa och svara på meddelanden" />
            <ServiceCard icon={Calendar} title="Se bokade tider" />
            <ServiceCard icon={FileText} title="Läsa och skicka intyg" />
            <ServiceCard icon={LayoutGrid} title="Se fler tjänster" />
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <hr className="border-gray-200" />
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
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-20">
          <div className="flex flex-col md:flex-row bg-[#fdf2f2] rounded-3xl overflow-hidden shadow-sm border border-pink-100">
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
              <div className="absolute bottom-6 left-6 right-6 flex items-center gap-4 text-white">
                <span className="bg-black/60 px-3 py-1.5 rounded-md text-sm font-bold">00:00 / 02:30</span>
                <div className="flex-1 h-2 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
                  <div className="w-[10%] h-full bg-[#c32139] transition-all duration-300" />
                </div>
              </div>
            </div>
            <div className="md:w-2/5 p-12 md:p-16 flex flex-col justify-center gap-8">
              <h2 className="text-4xl font-black text-[#c32139] leading-tight">Så tar du tempen i örat</h2>
              <p className="text-xl text-[#2a4365] leading-relaxed">
                Att mäta temperaturen kan hjälpa dig att förstå hur barnet mår. Här får du veta vad du ska tänka på för att få ett så säkert resultat som möjligt.
              </p>
              <button className="flex items-center gap-2 text-[#c32139] font-black text-2xl group hover:underline underline-offset-8">
                <ChevronRight size={28} className="group-hover:translate-x-1 transition-transform" />
                Läs mer
              </button>
            </div>
          </div>
        </section>

        {/* Footer Info Section */}
        <section className="bg-[#fdf2f2] py-24 mt-20">
          <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-24">
            <div className="space-y-8">
              <h2 className="text-4xl font-black text-[#6d1321]">1177 – tryggt om din hälsa och vård</h2>
              <p className="text-xl md:text-2xl text-[#2a4365] leading-relaxed">
                På 1177.se får du råd om hälsa och information om sjukdomar och vilka mottagningar du kan kontakta. 
                Logga in för att läsa din journal och göra dina vårdärenden. Ring telefonnummer 1177 för sjukvårdsrådgivning dygnet runt. 
                1177 ger dig råd när du vill må bättre.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6 text-[#c32139] font-bold text-xl items-start">
              <a href="#" className="flex items-center gap-3 hover:translate-x-2 transition-transform group">
                <span className="bg-white p-1 rounded-full text-[#c32139] shadow-sm group-hover:bg-[#c32139] group-hover:text-white transition-colors">
                  <ChevronRight size={20} />
                </span>
                Other languages
              </a>
              <a href="#" className="flex items-center gap-3 hover:translate-x-2 transition-transform group">
                <span className="bg-white p-1 rounded-full text-[#c32139] shadow-sm group-hover:bg-[#c32139] group-hover:text-white transition-colors">
                  <ChevronRight size={20} />
                </span>
                Om 1177
              </a>
              <a href="#" className="flex items-center gap-3 hover:translate-x-2 transition-transform group">
                <span className="bg-white p-1 rounded-full text-[#c32139] shadow-sm group-hover:bg-[#c32139] group-hover:text-white transition-colors">
                  <ChevronRight size={20} />
                </span>
                Lättläst svenska
              </a>
              <a href="#" className="flex items-center gap-3 hover:translate-x-2 transition-transform group">
                <span className="bg-white p-1 rounded-full text-[#c32139] shadow-sm group-hover:bg-[#c32139] group-hover:text-white transition-colors">
                  <ChevronRight size={20} />
                </span>
                E-tjänster
              </a>
              <a href="#" className="flex items-center gap-3 hover:translate-x-2 transition-transform group">
                <span className="bg-white p-1 rounded-full text-[#c32139] shadow-sm group-hover:bg-[#c32139] group-hover:text-white transition-colors">
                  <ChevronRight size={20} />
                </span>
                Kontakt
              </a>
              <a href="#" className="flex items-center gap-3 hover:translate-x-2 transition-transform group">
                <span className="bg-white p-1 rounded-full text-[#c32139] shadow-sm group-hover:bg-[#c32139] group-hover:text-white transition-colors">
                  <ChevronRight size={20} />
                </span>
                Press
              </a>
              <a href="#" className="flex items-center gap-3 hover:translate-x-2 transition-transform group">
                <span className="bg-white p-1 rounded-full text-[#c32139] shadow-sm group-hover:bg-[#c32139] group-hover:text-white transition-colors">
                  <ChevronRight size={20} />
                </span>
                Aktuellt
              </a>
              <a href="#" className="flex items-center gap-3 hover:translate-x-2 transition-transform group">
                <span className="bg-white p-1 rounded-full text-[#c32139] shadow-sm group-hover:bg-[#c32139] group-hover:text-white transition-colors">
                  <ChevronRight size={20} />
                </span>
                Digital tillgänglighet
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Bottom Footer bar */}
      <footer className="bg-[#c32139] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-sm font-bold uppercase tracking-wider">
            1177 – en tjänst från <a href="#" className="underline decoration-2 underline-offset-4">Inera</a>.
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-sm font-bold uppercase tracking-wider">
            <a href="#" className="hover:underline decoration-2 underline-offset-4">Behandling av personuppgifter</a>
            <a href="#" className="hover:underline decoration-2 underline-offset-4">Hantering av kakor</a>
            <a href="#" className="hover:underline decoration-2 underline-offset-4">Inställningar för kakor</a>
          </div>
        </div>
      </footer>

      {/* Back to top button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-10 right-10 bg-white border-2 border-[#fdf2f2] p-5 rounded-full shadow-2xl text-[#c32139] hover:bg-[#c32139] hover:text-white transition-all duration-300 transform hover:-translate-y-2 z-40 group"
      >
        <Play size={24} className="-rotate-90 fill-current group-hover:scale-110 transition-transform" />
      </button>
    </div>
  );
}


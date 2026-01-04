
import React from 'react';
import { FEATURES } from '../constants';
import { UtensilsCrossed, Printer, Bike, CreditCard, Sparkles } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  'restaurant_menu': <UtensilsCrossed size={32} />,
  'print': <Printer size={32} />,
  'two_wheeler': <Bike size={32} />,
  'payments': <CreditCard size={32} />,
};

const Features: React.FC = () => {
  return (
    <section className="bg-background-light py-24 md:py-32" id="funcionalidades">
      <div className="mx-auto max-w-7xl px-6 lg:px-20">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-primary mb-4">
            <Sparkles size={14} className="fill-primary" />
            Funcionalidades Premium
          </span>
          <h2 className="text-4xl font-black text-text-main md:text-6xl tracking-tight">Tudo que sua cozinha precisa para escalar</h2>
          <p className="mt-8 text-lg text-text-muted leading-relaxed">Deixe a tecnologia cuidar do operacional chato enquanto você foca no que realmente importa: o sabor e a qualidade.</p>
        </div>
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature) => (
            <div key={feature.id} className="group relative rounded-[2.5rem] bg-white p-10 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-primary/5 border border-transparent hover:border-primary/10">
              <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-[#111811] shadow-inner transition-all duration-500">
                {iconMap[feature.icon]}
              </div>
              <h3 className="mb-4 text-2xl font-black text-text-main tracking-tight">{feature.title}</h3>
              <p className="text-base font-medium leading-relaxed text-text-muted">{feature.description}</p>
              
              <div className="mt-8 h-1 w-12 rounded-full bg-primary/20 group-hover:w-24 group-hover:bg-primary transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

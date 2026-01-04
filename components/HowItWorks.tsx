
import React from 'react';
import { STEPS } from '../constants';
import { MessageCircle, Pointer, Receipt, Star } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  'chat': <MessageCircle size={32} className="text-primary" />,
  'touch_app': <Pointer size={32} className="text-primary" />,
  'receipt_long': <Receipt size={32} className="text-primary" />,
};

const HowItWorks: React.FC = () => {
  return (
    <section className="bg-white py-24" id="como-funciona">
      <div className="mx-auto max-w-7xl px-6 lg:px-20">
        <div className="mb-20 text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
            <Star size={14} className="fill-primary" />
            Fluxo Automatizado
          </span>
          <h2 className="mt-4 text-3xl font-black text-text-main md:text-5xl tracking-tight">
            Do pedido à entrega em minutos
          </h2>
          <p className="mt-4 text-lg text-text-muted max-w-2xl">
            Sua operação roda no piloto automático. Menos tempo no telefone, mais tempo cuidando da qualidade.
          </p>
        </div>
        
        <div className="relative grid gap-12 lg:grid-cols-3 lg:gap-8">
          {STEPS.map((step, index) => (
            <div key={step.number} className="group relative flex flex-col items-center lg:items-start">
              {/* Number Badge */}
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#111811] text-primary shadow-xl shadow-black/10 transition-transform group-hover:scale-110">
                <span className="text-xl font-black">{step.number}</span>
              </div>
              
              <div className="text-center lg:text-left">
                <h3 className="text-xl font-bold text-text-main">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">{step.description}</p>
              </div>
              
              <div className="relative mt-8 w-full overflow-hidden rounded-[2rem] border-4 border-gray-50 bg-gray-50 shadow-lg">
                <img 
                  src={step.image} 
                  alt={step.title} 
                  className="aspect-[4/3] w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                
                {/* Visual Overlays based on step */}
                {step.number === 1 && (
                  <div className="absolute top-4 right-4 animate-bounce-slow">
                    <div className="rounded-xl bg-white p-3 shadow-lg border border-gray-100">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                        <span className="text-[10px] font-bold text-gray-800">Online Agora</span>
                      </div>
                    </div>
                  </div>
                )}
                
                {step.number === 2 && (
                  <div className="absolute inset-x-4 bottom-4">
                    <div className="rounded-xl bg-primary px-4 py-2 shadow-lg text-center">
                      <span className="text-xs font-black text-black">Pagamento Confirmado!</span>
                    </div>
                  </div>
                )}
                
                {step.number === 3 && (
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="rounded-full bg-white/90 p-4 shadow-2xl backdrop-blur-sm">
                      <Receipt size={32} className="text-primary" />
                    </div>
                  </div>
                )}
              </div>
              
              {/* Step indicator arrow for desktop */}
              {index < STEPS.length - 1 && (
                <div className="absolute top-7 left-[calc(100%-2rem)] hidden w-16 items-center justify-center lg:flex z-20">
                   <div className="h-0.5 w-full bg-gradient-to-right from-primary to-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

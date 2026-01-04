
import React from 'react';
import { PRICING_PLANS } from '../constants';
import { CheckCircle2, CreditCard, ShoppingCart, ArrowRight } from 'lucide-react';

interface PricingProps {
  onSelectPlan?: () => void;
}

const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  return (
    <section className="bg-background-light py-24 md:py-32" id="precos">
      <div className="mx-auto max-w-7xl px-6 lg:px-20">
        <div className="mb-20 text-center">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-black uppercase tracking-[0.2em] text-primary mb-4">
            Preços Transparentes
          </span>
          <h2 className="text-4xl font-black text-text-main md:text-6xl tracking-tight">Escolha o plano ideal</h2>
          <p className="mt-6 text-lg text-text-muted max-w-xl mx-auto">Cancele quando quiser. Sem taxas escondidas, sem asteriscos.</p>
        </div>
        
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2 items-stretch">
          {PRICING_PLANS.map((plan) => (
            <div 
              key={plan.name} 
              className={`relative flex flex-col rounded-[3rem] p-10 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                plan.isPopular 
                  ? 'bg-white border-4 border-primary shadow-[0_30px_60px_-15px_rgba(19,236,19,0.2)] scale-105 z-10' 
                  : 'bg-white border-2 border-gray-100 shadow-sm'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-full bg-[#111811] px-6 py-2.5 text-xs font-black uppercase tracking-widest text-primary shadow-xl whitespace-nowrap">
                  <ShoppingCart size={14} className="animate-pulse" />
                  Recomendado para Profissionais
                </div>
              )}
              
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-black text-text-main uppercase tracking-tight">{plan.name}</h3>
                {plan.isPopular && <span className="rounded-full bg-primary/20 px-4 py-1.5 text-[10px] font-black text-green-700 uppercase tracking-wider">Top Choice</span>}
              </div>
              
              <div className="mb-6 flex items-baseline gap-2">
                <span className="text-6xl font-black text-text-main tracking-tighter">{plan.price}</span>
                <span className="text-base font-bold text-gray-400">/mês</span>
              </div>
              
              <p className="mb-10 text-base font-medium text-text-muted leading-relaxed">{plan.description}</p>
              
              <div className="flex-grow">
                <p className="mb-6 text-[11px] font-black uppercase tracking-[0.2em] text-gray-400">O que você recebe:</p>
                <ul className="space-y-5">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-4 text-sm md:text-base font-bold text-text-main">
                      <CheckCircle2 className="mt-0.5 shrink-0 text-primary" size={20} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-12">
                <button 
                  onClick={onSelectPlan}
                  className={`group flex w-full items-center justify-center gap-3 rounded-[1.5rem] py-5 text-lg font-black transition-all ${
                  plan.isPopular 
                    ? 'bg-primary text-[#111811] shadow-[0_15px_30px_-5px_rgba(19,236,19,0.5)] hover:brightness-105 active:scale-95' 
                    : 'bg-[#111811] text-primary hover:bg-black active:scale-95'
                }`}>
                  <CreditCard size={22} className="transition-transform group-hover:rotate-12" />
                  {plan.isPopular ? 'Assinar Premium Now' : 'Começar Agora'}
                  <ArrowRight size={20} className="opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                </button>
                
                <div className="mt-6 flex flex-col items-center gap-4">
                  <div className="flex items-center justify-center gap-5 opacity-40 grayscale transition-all hover:opacity-80 hover:grayscale-0">
                    <img src="https://logodownload.org/wp-content/uploads/2020/02/pix-bc-logo.png" className="h-5" alt="Pix" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" className="h-3" alt="Visa" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" className="h-5" alt="Mastercard" />
                  </div>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Setup instantâneo • 7 dias grátis</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

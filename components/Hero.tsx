
import React from 'react';
import { Rocket, PlayCircle, Utensils, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenDemo: () => void;
  onStart: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenDemo, onStart }) => {
  return (
    <header className="relative overflow-hidden pt-16 pb-20 lg:pt-32 lg:pb-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-20">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col gap-8 text-center lg:text-left">
            <div className="inline-flex mx-auto lg:mx-0 w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-[10px] md:text-xs font-black uppercase tracking-widest text-green-800">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
              Integração com Pix Automático liberada
            </div>
            
            <h1 className="text-4xl font-black leading-[1.1] tracking-tight text-text-main md:text-6xl lg:text-7xl">
              Venda Mais Marmitas pelo <span className="text-primary underline decoration-primary/30 decoration-wavy decoration-4 underline-offset-8">WhatsApp</span>
            </h1>
            
            <p className="mx-auto lg:mx-0 max-w-2xl text-lg text-text-muted lg:text-xl leading-relaxed">
              Automatize seus pedidos, elimine erros de anotação e aumente seu faturamento em até 30% com nosso cardápio digital inteligente.
            </p>
            
            <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <button 
                onClick={onStart}
                className="group relative flex items-center justify-center gap-3 rounded-2xl bg-[#111811] px-10 py-5 text-base font-black text-primary shadow-2xl transition-all hover:-translate-y-1 hover:shadow-primary/20 active:scale-95"
              >
                <Rocket size={20} className="group-hover:animate-bounce" />
                Criar Cardápio Grátis
              </button>
              <button 
                onClick={onOpenDemo}
                className="flex items-center justify-center gap-3 rounded-2xl border-2 border-gray-200 bg-white px-10 py-5 text-base font-black text-text-main transition-all hover:border-primary hover:text-primary active:scale-95"
              >
                <PlayCircle size={22} />
                Ver Demo IA
              </button>
            </div>
            
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-gray-500 font-medium">
              <div className="flex items-center gap-2">
                <Sparkles size={16} className="text-primary" />
                7 Dias Grátis
              </div>
              <div className="flex items-center gap-2">
                <Sparkles size={16} className="text-primary" />
                Sem fidelidade
              </div>
              <div className="flex items-center gap-2">
                <Sparkles size={16} className="text-primary" />
                Setup em 5min
              </div>
            </div>
          </div>
          
          <div className="relative mx-auto w-full max-w-[450px] lg:max-w-none">
            <div className="absolute -left-10 -top-10 h-64 w-64 rounded-full bg-primary/20 blur-[80px] animate-pulse"></div>
            <div className="absolute -right-10 -bottom-10 h-64 w-64 rounded-full bg-blue-400/10 blur-[80px]"></div>
            
            <div className="relative aspect-[4/5] overflow-hidden rounded-[3rem] border-[12px] border-gray-900 bg-gray-100 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)]">
              <img 
                src="https://images.unsplash.com/photo-1543353071-087092ec393a?q=80&w=1000&auto=format&fit=crop" 
                className="h-full w-full object-cover grayscale-[20%] transition-transform duration-700 hover:scale-105"
                alt="Smartphone Interface"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              
              {/* Floating UI Elements */}
              <div className="absolute bottom-12 left-6 right-6 rounded-[2rem] bg-white/95 p-6 shadow-2xl backdrop-blur-md animate-bounce-slow">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary text-black shadow-lg">
                    <Utensils size={28} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-black text-gray-900">Novo Pedido Recebido!</p>
                    <p className="text-xs font-medium text-gray-500">Marmita Fitness Frango + Mix</p>
                  </div>
                  <div className="text-lg font-black text-primary">R$ 22,90</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;

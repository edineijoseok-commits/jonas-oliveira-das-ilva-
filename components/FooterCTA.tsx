
import React from 'react';
import { Rocket, Sparkles } from 'lucide-react';

interface FooterCTAProps {
  onStart?: () => void;
}

const FooterCTA: React.FC<FooterCTAProps> = ({ onStart }) => {
  return (
    <section className="relative overflow-hidden bg-[#111811] py-24 md:py-32">
      <div className="absolute left-0 top-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[120px]"></div>
      <div className="absolute bottom-0 right-0 h-96 w-96 translate-x-1/3 translate-y-1/3 rounded-full bg-primary/10 blur-[150px]"></div>
      
      <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-20">
        <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-xs font-black uppercase tracking-widest text-primary mb-8 border border-primary/20">
          <Sparkles size={16} className="fill-primary" />
          A hora de escalar é agora
        </div>
        
        <h2 className="text-4xl font-black text-white md:text-7xl leading-[1.1] tracking-tight mb-10">
          Venda muito mais com <span className="text-primary italic">atendimento instantâneo</span> e automático
        </h2>
        
        <p className="mt-8 text-xl text-gray-400 max-w-2xl mx-auto font-medium leading-relaxed">
          Transforme cada mensagem de WhatsApp em um pedido finalizado. Junte-se às mais de 500 marmitarias que já estão no próximo nível.
        </p>
        
        <div className="mt-16 flex flex-col items-center">
          <button 
            onClick={onStart}
            className="animate-glow-pulse group flex min-w-[320px] md:min-w-[400px] items-center justify-center gap-4 rounded-[2rem] bg-primary px-12 py-7 text-xl md:text-2xl font-black text-[#111811] shadow-[0_20px_50px_-10px_rgba(19,236,19,0.5)] transition-all hover:scale-105 active:scale-95"
          >
            <Rocket size={28} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            Teste Grátis por 7 Dias
          </button>
          
          <div className="mt-10 flex flex-col md:flex-row items-center gap-8 text-sm font-black text-gray-500 uppercase tracking-widest">
            <span>✓ Sem cartão de crédito</span>
            <span className="hidden md:block opacity-20">•</span>
            <span>✓ Setup em menos de 5 min</span>
            <span className="hidden md:block opacity-20">•</span>
            <span>✓ Cancele quando quiser</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterCTA;

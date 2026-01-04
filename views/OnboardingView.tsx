
import React, { useState } from 'react';
import { ChefHat, Smartphone, Store, CheckCircle, Sparkles, ArrowRight } from 'lucide-react';

interface OnboardingViewProps {
  onComplete: (data: any) => void;
}

const OnboardingView: React.FC<OnboardingViewProps> = ({ onComplete }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    restaurantName: '',
    phone: '',
    type: 'fitness'
  });

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
    else onComplete({ name: formData.restaurantName });
  };

  return (
    <div className="min-h-screen bg-[#111811] text-white flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-xl">
        {/* Progress bar */}
        <div className="mb-12 flex items-center justify-between gap-4">
          {[1, 2, 3].map((s) => (
            <div 
              key={s} 
              className={`h-2 flex-1 rounded-full transition-all duration-500 ${s <= step ? 'bg-primary shadow-[0_0_10px_rgba(19,236,19,0.5)]' : 'bg-white/10'}`}
            ></div>
          ))}
        </div>

        {step === 1 && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/20 text-primary mb-6">
              <Store size={28} />
            </span>
            <h2 className="text-4xl font-black mb-4">Qual o nome da sua cozinha?</h2>
            <p className="text-gray-400 mb-8 font-medium">Isso será exibido no topo do seu cardápio digital.</p>
            <input 
              autoFocus
              value={formData.restaurantName}
              onChange={(e) => setFormData({...formData, restaurantName: e.target.value})}
              placeholder="Ex: Sabor da Vila, Marmita Fit..."
              className="w-full bg-white/5 border-2 border-white/10 rounded-3xl p-6 text-xl font-bold focus:border-primary focus:outline-none transition-all placeholder:text-white/20"
            />
          </div>
        )}

        {step === 2 && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/20 text-primary mb-6">
              <Smartphone size={28} />
            </span>
            <h2 className="text-4xl font-black mb-4">Qual seu WhatsApp?</h2>
            <p className="text-gray-400 mb-8 font-medium">Os pedidos chegarão diretamente neste número.</p>
            <input 
              autoFocus
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              placeholder="(00) 0 0000-0000"
              className="w-full bg-white/5 border-2 border-white/10 rounded-3xl p-6 text-xl font-bold focus:border-primary focus:outline-none transition-all placeholder:text-white/20"
            />
          </div>
        )}

        {step === 3 && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/20 text-primary mb-6">
              <Sparkles size={28} />
            </span>
            <h2 className="text-4xl font-black mb-4">Tudo pronto!</h2>
            <p className="text-gray-400 mb-8 font-medium">Sua cozinha digital foi configurada. Vamos ver seu painel?</p>
            <div className="rounded-3xl bg-white/5 p-8 border border-white/10 space-y-4">
              <div className="flex items-center gap-4">
                <CheckCircle className="text-primary" />
                <span className="font-bold">Cardápio digital gerado</span>
              </div>
              <div className="flex items-center gap-4">
                <CheckCircle className="text-primary" />
                <span className="font-bold">Link do WhatsApp configurado</span>
              </div>
              <div className="flex items-center gap-4">
                <CheckCircle className="text-primary" />
                <span className="font-bold">Painel de pedidos liberado</span>
              </div>
            </div>
          </div>
        )}

        <button 
          onClick={nextStep}
          disabled={step < 3 && !formData.restaurantName && !formData.phone}
          className="mt-12 w-full flex items-center justify-center gap-3 bg-primary text-[#111811] rounded-[1.5rem] py-6 text-xl font-black shadow-2xl transition-all hover:scale-105 active:scale-95 disabled:opacity-50"
        >
          {step === 3 ? 'Acessar Painel' : 'Próximo Passo'}
          <ArrowRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default OnboardingView;

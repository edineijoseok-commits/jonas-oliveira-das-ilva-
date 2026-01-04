
import React from 'react';
import { Bot, ArrowRight } from 'lucide-react';
import { ViewState } from '../App';

interface NavbarProps {
  onNavigate: (view: ViewState) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 px-6 py-4 backdrop-blur-sm lg:px-20">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate('landing')}>
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/20 text-primary">
            <Bot size={28} />
          </div>
          <span className="text-xl font-black tracking-tight text-text-main">MarmitaBot</span>
        </div>
        
        <div className="hidden items-center gap-8 md:flex">
          <a href="#funcionalidades" className="text-sm font-bold text-text-main hover:text-primary transition-colors">Funcionalidades</a>
          <a href="#como-funciona" className="text-sm font-bold text-text-main hover:text-primary transition-colors">Como Funciona</a>
          <a href="#precos" className="text-sm font-bold text-text-main hover:text-primary transition-colors">Preços</a>
        </div>
        
        <div className="flex items-center gap-4">
          <button 
            onClick={() => onNavigate('login')}
            className="hidden text-sm font-black text-text-main hover:text-primary transition-colors md:block uppercase tracking-wider"
          >
            Login
          </button>
          <button 
            onClick={() => onNavigate('onboarding')}
            className="flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-black text-[#111811] shadow-[0_8px_20px_-6px_rgba(19,236,19,0.6)] transition-all hover:-translate-y-0.5 active:scale-95"
          >
            Começar Grátis
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

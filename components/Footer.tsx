
import React from 'react';
import { Bot, ShieldCheck, LayoutDashboard } from 'lucide-react';
import { ViewState } from '../App';

interface FooterProps {
  onNavigate?: (view: ViewState) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="border-t border-gray-100 bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16 text-center lg:text-left">
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center gap-3 justify-center lg:justify-start mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/20 text-primary">
                <Bot size={24} />
              </div>
              <span className="text-xl font-black text-text-main">MarmitaBot</span>
            </div>
            <p className="text-text-muted font-medium max-w-sm mx-auto lg:mx-0 leading-relaxed">
              A maior plataforma de automação de delivery para marmitarias do Brasil. Simplicidade, rapidez e sabor.
            </p>
          </div>
          
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-2">Plataforma</h4>
            <a href="#funcionalidades" className="text-sm font-bold text-text-muted hover:text-primary transition-colors">Funcionalidades</a>
            <a href="#como-funciona" className="text-sm font-bold text-text-muted hover:text-primary transition-colors">Como Funciona</a>
            <a href="#precos" className="text-sm font-bold text-text-muted hover:text-primary transition-colors">Preços</a>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-2">Administrativo</h4>
            <button 
              onClick={() => onNavigate?.('login')}
              className="flex items-center justify-center lg:justify-start gap-2 text-sm font-bold text-text-muted hover:text-primary transition-colors"
            >
              <LayoutDashboard size={14} /> Painel do Cliente
            </button>
            <button 
              onClick={() => onNavigate?.('superadmin')}
              className="flex items-center justify-center lg:justify-start gap-2 text-sm font-bold text-text-muted hover:text-primary transition-colors"
            >
              <ShieldCheck size={14} /> Portal do Criador
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-10 lg:flex-row border-t border-gray-50 pt-10">
          <div className="flex flex-wrap justify-center gap-10 text-xs font-bold text-gray-400 uppercase tracking-widest">
            <a href="#" className="hover:text-primary transition-colors">Termos</a>
            <a href="#" className="hover:text-primary transition-colors">Privacidade</a>
            <a href="#" className="hover:text-primary transition-colors">Cookies</a>
          </div>
          
          <p className="text-xs font-black text-gray-300 uppercase tracking-widest">
            © 2024 MarmitaBot SaaS. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

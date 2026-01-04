
import React from 'react';
import { Bot, Mail, Lock, ArrowLeft } from 'lucide-react';

interface LoginViewProps {
  onBack: () => void;
  onLogin: () => void;
}

const LoginView: React.FC<LoginViewProps> = ({ onBack, onLogin }) => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background-light p-6">
      <div className="w-full max-w-md">
        <button onClick={onBack} className="mb-8 flex items-center gap-2 text-sm font-bold text-text-muted hover:text-primary transition-colors">
          <ArrowLeft size={18} /> Voltar para o site
        </button>
        
        <div className="rounded-[2.5rem] bg-white p-10 shadow-2xl border border-gray-100">
          <div className="mb-10 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Bot size={36} />
            </div>
            <h1 className="text-3xl font-black text-text-main">Acesse o Painel</h1>
            <p className="mt-2 text-sm font-medium text-text-muted">Bem-vindo de volta à sua cozinha digital.</p>
          </div>
          
          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-gray-400">E-mail</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input 
                  type="email" 
                  placeholder="seu@email.com"
                  className="w-full rounded-2xl border-2 border-gray-50 bg-gray-50 py-4 pl-12 pr-4 font-medium transition-all focus:border-primary focus:bg-white focus:outline-none"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-gray-400">Senha</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input 
                  type="password" 
                  placeholder="••••••••"
                  className="w-full rounded-2xl border-2 border-gray-50 bg-gray-50 py-4 pl-12 pr-4 font-medium transition-all focus:border-primary focus:bg-white focus:outline-none"
                />
              </div>
            </div>
            
            <button className="w-full rounded-2xl bg-[#111811] py-5 text-base font-black text-primary shadow-xl transition-all hover:scale-[1.02] active:scale-95">
              Entrar no Painel
            </button>
          </form>
          
          <div className="mt-8 text-center">
            <a href="#" className="text-sm font-bold text-primary hover:underline">Esqueceu sua senha?</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginView;

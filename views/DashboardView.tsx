
import React, { useState } from 'react';
import { LayoutDashboard, ShoppingBag, Settings, ExternalLink, LogOut, TrendingUp, Users, Map, Bell, ChevronRight } from 'lucide-react';

interface DashboardViewProps {
  onLogout: () => void;
  onViewMenu: () => void;
  restaurantName: string;
  deliveryRadius: number;
  onUpdateConfig: (config: any) => void;
}

const DashboardView: React.FC<DashboardViewProps> = ({ onLogout, onViewMenu, restaurantName, deliveryRadius, onUpdateConfig }) => {
  const [radius, setRadius] = useState(deliveryRadius);

  const handleSaveRadius = () => {
    onUpdateConfig({ deliveryRadius: radius });
    alert("Configuração de entrega salva! A IA já está atualizada.");
  };

  return (
    <div className="flex min-h-screen bg-[#f8faf8]">
      {/* Sidebar */}
      <aside className="w-72 bg-[#111811] p-8 hidden lg:flex flex-col border-r border-white/5">
        <div className="flex items-center gap-3 mb-12">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-black">
            <LayoutDashboard size={20} />
          </div>
          <span className="text-lg font-black text-white tracking-tight">MarmitaBot</span>
        </div>
        
        <nav className="space-y-2 flex-grow">
          <button className="flex w-full items-center gap-4 rounded-2xl bg-primary px-4 py-4 font-bold text-[#111811] transition-all">
            <LayoutDashboard size={20} /> Painel Geral
          </button>
          <button className="flex w-full items-center gap-4 rounded-2xl px-4 py-4 font-bold text-gray-400 hover:bg-white/5 hover:text-white transition-all">
            <ShoppingBag size={20} /> Pedidos <span className="ml-auto bg-primary/20 text-primary px-2 py-0.5 rounded-lg text-[10px]">12</span>
          </button>
          <button className="flex w-full items-center gap-4 rounded-2xl px-4 py-4 font-bold text-gray-400 hover:bg-white/5 hover:text-white transition-all">
            <Settings size={20} /> Configurações
          </button>
        </nav>
        
        <button onClick={onLogout} className="flex w-full items-center gap-4 rounded-2xl px-4 py-4 font-bold text-red-400 hover:bg-red-400/10 transition-all mt-auto">
          <LogOut size={20} /> Sair
        </button>
      </aside>
      
      {/* Main Content */}
      <main className="flex-1 p-6 md:p-12 overflow-y-auto">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div>
            <h1 className="text-3xl font-black text-text-main">Olá, {restaurantName}!</h1>
            <p className="text-text-muted font-medium mt-1">Sua cozinha está operando normalmente hoje.</p>
          </div>
          
          <button 
            onClick={onViewMenu}
            className="group flex items-center gap-3 rounded-2xl bg-white border border-gray-200 px-6 py-4 font-black text-text-main shadow-sm hover:border-primary hover:text-primary transition-all active:scale-95"
          >
            Ver Cardápio Digital <ExternalLink size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
        </header>
        
        {/* Quick Config - Delivery Radius */}
        <div className="mb-12">
          <div className="bg-[#111811] rounded-[2.5rem] p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <Map size={32} />
              </div>
              <div>
                <h3 className="text-xl font-black">Raio de Entrega Automático</h3>
                <p className="text-gray-400 text-sm font-medium">A IA responderá aos clientes com base neste valor.</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 bg-white/5 p-2 rounded-2xl border border-white/10">
              <input 
                type="number" 
                value={radius} 
                onChange={(e) => setRadius(Number(e.target.value))}
                className="w-20 bg-transparent text-center text-2xl font-black text-primary focus:outline-none"
              />
              <span className="font-bold text-gray-400 mr-4">KM</span>
              <button 
                onClick={handleSaveRadius}
                className="bg-primary text-[#111811] px-6 py-3 rounded-xl font-black text-sm transition-all hover:scale-105 active:scale-95"
              >
                Atualizar IA
              </button>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <TrendingUp className="text-primary" size={24} />
              <span className="text-[10px] font-black bg-green-100 text-green-600 px-2 py-1 rounded-lg uppercase">+12%</span>
            </div>
            <p className="text-xs font-black text-gray-400 uppercase tracking-widest">Faturamento</p>
            <p className="text-3xl font-black text-text-main mt-1">R$ 1.240,00</p>
          </div>
          
          <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <ShoppingBag className="text-blue-500" size={24} />
              <span className="text-[10px] font-black bg-blue-100 text-blue-600 px-2 py-1 rounded-lg uppercase">Ativos</span>
            </div>
            <p className="text-xs font-black text-gray-400 uppercase tracking-widest">Pedidos Hoje</p>
            <p className="text-3xl font-black text-text-main mt-1">32</p>
          </div>

          <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <Users className="text-purple-500" size={24} />
              <span className="text-[10px] font-black bg-purple-100 text-purple-600 px-2 py-1 rounded-lg uppercase">Novos</span>
            </div>
            <p className="text-xs font-black text-gray-400 uppercase tracking-widest">Clientes</p>
            <p className="text-3xl font-black text-text-main mt-1">15</p>
          </div>
        </div>
        
        {/* Recent Orders List */}
        <div className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100">
          <div className="p-8 border-b border-gray-50 flex justify-between items-center">
            <h3 className="text-xl font-black text-text-main">Pedidos em Tempo Real</h3>
            <Bell size={20} className="text-primary animate-swing" />
          </div>
          <div className="p-4">
            {[
              { id: '#1024', name: 'João Silva', items: '2x Marmita Frango', status: 'Preparando', price: 'R$ 45,80', time: '5m atrás' },
              { id: '#1023', name: 'Maria Souza', items: '1x Feijoada G', status: 'Saiu para Entrega', price: 'R$ 35,00', time: '12m atrás' },
              { id: '#1022', name: 'Pedro Alves', items: '3x Marmita Fit', status: 'Concluído', price: 'R$ 68,70', time: '45m atrás' },
            ].map((order) => (
              <div key={order.id} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-2xl transition-all group cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className={`h-3 w-3 rounded-full ${order.status === 'Preparando' ? 'bg-orange-500' : 'bg-primary'}`}></div>
                  <div>
                    <p className="font-black text-text-main">{order.name} <span className="text-gray-400 text-xs ml-2 font-bold">{order.id}</span></p>
                    <p className="text-xs font-medium text-text-muted">{order.items} • {order.time}</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <span className="font-black text-text-main">{order.price}</span>
                  <ChevronRight size={18} className="text-gray-300 group-hover:text-primary transition-all" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardView;

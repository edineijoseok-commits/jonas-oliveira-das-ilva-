
import React from 'react';
import { 
  Users, 
  TrendingUp, 
  BarChart3, 
  Search, 
  LogOut, 
  ExternalLink, 
  MoreVertical,
  ShieldCheck,
  Package
} from 'lucide-react';

interface SuperAdminViewProps {
  onLogout: () => void;
  customers: any[];
}

const SuperAdminView: React.FC<SuperAdminViewProps> = ({ onLogout, customers }) => {
  const totalRevenue = customers.reduce((acc, curr) => acc + curr.revenue, 0);
  const totalOrders = customers.reduce((acc, curr) => acc + curr.orders, 0);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar Fictícia */}
      <aside className="w-72 bg-[#111811] p-8 hidden lg:flex flex-col border-r border-white/5">
        <div className="flex items-center gap-3 mb-12">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-black">
            <ShieldCheck size={20} />
          </div>
          <span className="text-lg font-black text-white tracking-tight italic">SuperAdmin</span>
        </div>
        
        <nav className="space-y-2 flex-grow">
          <button className="flex w-full items-center gap-4 rounded-2xl bg-primary px-4 py-4 font-bold text-[#111811]">
            <BarChart3 size={20} /> Visão Geral
          </button>
          <button className="flex w-full items-center gap-4 rounded-2xl px-4 py-4 font-bold text-gray-400 hover:bg-white/5 transition-all">
            <Users size={20} /> Marmitarias
          </button>
          <button className="flex w-full items-center gap-4 rounded-2xl px-4 py-4 font-bold text-gray-400 hover:bg-white/5 transition-all">
            <Package size={20} /> Planos e Assinaturas
          </button>
        </nav>
        
        <button onClick={onLogout} className="flex w-full items-center gap-4 rounded-2xl px-4 py-4 font-bold text-red-400 hover:bg-red-400/10 transition-all">
          <LogOut size={20} /> Sair do SaaS
        </button>
      </aside>

      <main className="flex-1 p-6 md:p-12 overflow-y-auto">
        <header className="mb-12 flex justify-between items-end">
          <div>
            <span className="text-xs font-black text-primary uppercase tracking-[0.3em] mb-2 block">Painel do Criador</span>
            <h1 className="text-4xl font-black text-text-main">Gestão do MarmitaBot</h1>
          </div>
          
          <div className="flex gap-4">
             <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input placeholder="Buscar marmitaria..." className="bg-white border border-gray-200 rounded-2xl py-4 pl-12 pr-6 text-sm font-medium focus:outline-none focus:border-primary" />
             </div>
          </div>
        </header>

        {/* Global Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-[#111811] text-white p-8 rounded-[2.5rem] shadow-xl relative overflow-hidden">
            <TrendingUp className="text-primary absolute top-8 right-8" size={32} />
            <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1">MRR (Faturamento Mensal)</p>
            <p className="text-4xl font-black">R$ {totalRevenue.toLocaleString('pt-BR')}</p>
            <div className="mt-4 flex items-center gap-2 text-xs font-bold text-primary">
               <span>+18.5% desde o último mês</span>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100">
            <Users className="text-blue-500 mb-4" size={32} />
            <p className="text-xs font-black text-gray-400 uppercase tracking-widest">Total de Clientes</p>
            <p className="text-4xl font-black text-text-main">{customers.length}</p>
          </div>

          <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100">
            <Package className="text-purple-500 mb-4" size={32} />
            <p className="text-xs font-black text-gray-400 uppercase tracking-widest">Pedidos Transacionados</p>
            <p className="text-4xl font-black text-text-main">{totalOrders}</p>
          </div>
        </div>

        {/* Customers Table */}
        <div className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-8 border-b border-gray-100 flex justify-between items-center">
            <h3 className="text-xl font-black text-text-main">Marmitarias Cadastradas</h3>
            <button className="text-xs font-black text-primary uppercase">Ver todos</button>
          </div>
          <div className="p-4 overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-[10px] font-black text-gray-400 uppercase tracking-widest border-b border-gray-50">
                  <th className="px-6 py-4 text-center w-16">ID</th>
                  <th className="px-6 py-4">Marmitaria</th>
                  <th className="px-6 py-4">Plano</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Receita Acum.</th>
                  <th className="px-6 py-4 text-right">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {customers.map((c) => (
                  <tr key={c.id} className="text-sm font-bold text-text-main hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-6 text-center text-gray-400 font-black">#{c.id}</td>
                    <td className="px-6 py-6 font-black">{c.name}</td>
                    <td className="px-6 py-6">
                       <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase ${
                          c.plan === 'Premium' ? 'bg-purple-100 text-purple-600' : 'bg-primary/10 text-primary'
                       }`}>
                          {c.plan}
                       </span>
                    </td>
                    <td className="px-6 py-6">
                      <div className="flex items-center gap-2">
                        <div className={`h-2 w-2 rounded-full ${c.status === 'Ativo' ? 'bg-primary' : 'bg-orange-400'}`}></div>
                        {c.status}
                      </div>
                    </td>
                    <td className="px-6 py-6">R$ {c.revenue.toFixed(2)}</td>
                    <td className="px-6 py-6 text-right">
                       <div className="flex justify-end gap-2">
                          <button className="p-2 hover:bg-white rounded-xl border border-transparent hover:border-gray-200 transition-all">
                             <ExternalLink size={16} className="text-gray-400" />
                          </button>
                          <button className="p-2 hover:bg-white rounded-xl border border-transparent hover:border-gray-200 transition-all">
                             <MoreVertical size={16} className="text-gray-400" />
                          </button>
                       </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SuperAdminView;

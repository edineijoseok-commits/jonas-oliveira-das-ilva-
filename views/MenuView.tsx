
import React, { useState } from 'react';
import { ShoppingCart, ArrowLeft, Plus, Minus, X } from 'lucide-react';

interface MenuViewProps {
  onBack: () => void;
  restaurant: any;
}

const MenuView: React.FC<MenuViewProps> = ({ onBack, restaurant }) => {
  const [cart, setCart] = useState<any[]>([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (item: any) => {
    setCart([...cart, item]);
  };

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="min-h-screen bg-gray-50 pb-32 font-sans">
      {/* Header */}
      <header className="bg-white px-6 py-8 shadow-sm text-center relative border-b border-gray-100">
        <button onClick={onBack} className="absolute left-6 top-1/2 -translate-y-1/2 text-text-muted hover:text-primary transition-colors">
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-2xl font-black text-text-main">{restaurant.name}</h1>
        <p className="text-xs font-black uppercase tracking-widest text-primary mt-1">Aberto Agora</p>
      </header>

      {/* Categories */}
      <div className="mx-auto max-w-lg p-6 space-y-8">
        <div>
          <h2 className="text-xl font-black text-text-main mb-6 border-l-4 border-primary pl-4">Marmitas do Dia</h2>
          <div className="space-y-4">
            {restaurant.items.map((item: any) => (
              <div key={item.id} className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 flex justify-between items-center group active:scale-[0.98] transition-all">
                <div className="flex-1">
                  <h3 className="font-black text-text-main">{item.name}</h3>
                  <p className="text-xs text-text-muted mt-1 leading-relaxed">{item.description}</p>
                  <p className="text-lg font-black text-primary mt-2">R$ {item.price.toFixed(2)}</p>
                </div>
                <button 
                  onClick={() => addToCart(item)}
                  className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-black transition-all"
                >
                  <Plus size={24} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Cart Drawer */}
      {showCart && (
        <div className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm flex items-end">
          <div className="w-full bg-white rounded-t-[3rem] p-8 max-h-[80vh] overflow-y-auto animate-in slide-in-from-bottom duration-500">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-black text-text-main">Seu Pedido</h2>
              <button onClick={() => setShowCart(false)} className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                <X size={20} />
              </button>
            </div>
            
            <div className="space-y-4 mb-10">
              {cart.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center font-bold">
                  <span>1x {item.name}</span>
                  <span>R$ {item.price.toFixed(2)}</span>
                </div>
              ))}
              {cart.length === 0 && <p className="text-center text-text-muted py-10 font-medium">Seu carrinho está vazio.</p>}
            </div>

            <div className="border-t border-gray-100 pt-6 mb-8">
              <div className="flex justify-between items-center text-2xl font-black">
                <span>Total</span>
                <span className="text-primary">R$ {total.toFixed(2)}</span>
              </div>
            </div>

            <button className="w-full rounded-[1.5rem] bg-[#111811] py-6 text-xl font-black text-primary shadow-xl disabled:opacity-50">
              Finalizar no WhatsApp
            </button>
          </div>
        </div>
      )}

      {/* Floating Checkout Button */}
      {cart.length > 0 && !showCart && (
        <div className="fixed bottom-8 left-6 right-6 z-50">
          <button 
            onClick={() => setShowCart(true)}
            className="w-full bg-[#111811] text-white p-6 rounded-[2rem] flex items-center justify-between shadow-[0_20px_50px_-10px_rgba(0,0,0,0.5)] animate-in slide-in-from-bottom-10 duration-500"
          >
            <div className="flex items-center gap-4">
              <div className="relative">
                <ShoppingCart size={28} className="text-primary" />
                <span className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-primary text-[#111811] text-xs font-black flex items-center justify-center animate-bounce">
                  {cart.length}
                </span>
              </div>
              <span className="font-black text-lg">Ver Carrinho</span>
            </div>
            <span className="text-xl font-black">R$ {total.toFixed(2)}</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default MenuView;

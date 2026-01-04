
import React from 'react';
import { QrCode, CheckCircle, ShieldCheck, ArrowLeft, Copy } from 'lucide-react';

interface CheckoutViewProps {
  onCancel: () => void;
  onConfirm: () => void;
}

const CheckoutView: React.FC<CheckoutViewProps> = ({ onCancel, onConfirm }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-lg bg-white rounded-[3rem] p-10 shadow-2xl border border-gray-100 relative overflow-hidden">
        <button onClick={onCancel} className="absolute top-8 left-8 text-gray-400 hover:text-text-main transition-colors flex items-center gap-2 font-bold text-sm">
          <ArrowLeft size={18} /> Voltar
        </button>
        
        <div className="text-center mb-10 mt-6">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-primary/10 text-primary">
            <QrCode size={40} />
          </div>
          <h1 className="text-3xl font-black text-text-main tracking-tight">Ative seu Plano</h1>
          <p className="mt-2 text-sm font-bold text-text-muted">Escaneie o QR Code abaixo para confirmar o PIX de R$ 9,99</p>
        </div>

        <div className="bg-gray-50 rounded-[2.5rem] p-8 mb-10 flex flex-col items-center border border-dashed border-gray-200">
          <div className="bg-white p-4 rounded-2xl shadow-inner mb-6">
            <img src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=marmitabot-pix-999" alt="QR Code Pix" className="rounded-lg" />
          </div>
          <div className="w-full text-center">
             <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-4">Ou copie a chave abaixo</span>
             <button className="w-full bg-white border border-gray-200 text-text-main py-4 rounded-2xl font-bold text-xs active:scale-95 transition-all flex items-center justify-center gap-3 px-4">
                <span className="truncate">00020126580014BR.GOV.BCB.PIX0136...</span>
                <Copy size={16} className="shrink-0 text-primary" />
             </button>
          </div>
        </div>

        <div className="space-y-4">
          <button 
            onClick={onConfirm}
            className="w-full bg-primary text-[#111811] py-6 rounded-3xl text-xl font-black shadow-xl hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3"
          >
            Confirmar Pagamento <CheckCircle size={24} />
          </button>
          <div className="flex items-center justify-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-widest">
            <ShieldCheck size={14} className="text-primary" /> Pagamento Seguro via Mercado Pago
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutView;

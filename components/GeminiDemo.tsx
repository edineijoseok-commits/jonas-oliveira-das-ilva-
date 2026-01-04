
import React, { useState } from 'react';
import { GoogleGenAI } from '@google/genai';
import { X, Send, Bot, User, Loader2, Sparkles, MapPin } from 'lucide-react';

interface GeminiDemoProps {
  onClose: () => void;
  deliveryRadius: number;
  restaurantName: string;
}

const GeminiDemo: React.FC<GeminiDemoProps> = ({ onClose, deliveryRadius, restaurantName }) => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{role: 'user' | 'bot', text: string}[]>([
    { role: 'bot', text: `Olá! Sou o assistente do ${restaurantName}. Como posso ajudar hoje? (Dica: Pergunte sobre o cardápio ou se entregamos na sua rua)` }
  ]);
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: {
          systemInstruction: `Você é o MarmitaBot, atendente da marmitaria "${restaurantName}".
          REGRAS CRÍTICAS:
          1. Responda APENAS o que foi perguntado. Não use frases de cortesia exageradas.
          2. Se o cliente perguntar sobre ENTREGA: Informe que nosso raio de entrega é de ${deliveryRadius}km. 
          3. Se o cliente fornecer um endereço ou perguntar se entrega em local X: Finja calcular a distância. Se parecer "perto" (menos de ${deliveryRadius}km), diga que entregamos e peça o pedido. Se parecer "longe", diga educadamente que está fora do raio de ${deliveryRadius}km.
          4. O cardápio atual é: Frango Grelhado (R$ 22,90) e Feijoada (R$ 29,90).
          5. Use emojis moderadamente e negrito para valores.
          6. Nunca invente pratos que não estão no cardápio.`,
        }
      });

      const botText = response.text || "Desculpe, não entendi. Pode repetir?";
      setMessages(prev => [...prev, { role: 'bot', text: botText }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'bot', text: "Sistema temporariamente offline. Tente novamente em instantes." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl overflow-hidden rounded-[2rem] bg-white shadow-2xl flex flex-col h-[80vh]">
        <div className="flex items-center justify-between border-b border-gray-100 bg-primary/5 p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-black">
              <Bot size={20} />
            </div>
            <div>
              <h3 className="font-bold text-text-main">Atendimento IA</h3>
              <div className="flex items-center gap-1 text-[10px] text-primary font-black uppercase tracking-wider">
                <MapPin size={10} /> Raio: {deliveryRadius}km ativo
              </div>
            </div>
          </div>
          <button onClick={onClose} className="rounded-full p-2 hover:bg-gray-100 transition-colors">
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50/50">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`flex gap-3 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                <div className={`rounded-2xl px-4 py-3 text-sm shadow-sm whitespace-pre-wrap ${msg.role === 'user' ? 'bg-gray-800 text-white rounded-tr-none' : 'bg-white text-text-main rounded-tl-none border border-gray-100'}`}>
                  {msg.text}
                </div>
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="flex gap-3 items-center text-text-muted text-xs font-bold px-4">
                <Loader2 className="animate-spin" size={14} />
                <span>Analisando solicitação...</span>
              </div>
            </div>
          )}
        </div>

        <div className="border-t border-gray-100 p-6 bg-white">
          <div className="flex gap-3">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Pergunte sobre o cardápio ou entrega..."
              className="flex-1 rounded-xl border border-gray-200 px-5 py-4 text-sm focus:border-primary focus:outline-none transition-all"
            />
            <button 
              onClick={handleSend}
              disabled={loading || !input.trim()}
              className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-black shadow-lg hover:brightness-105 active:scale-95 disabled:opacity-50 transition-all"
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeminiDemo;

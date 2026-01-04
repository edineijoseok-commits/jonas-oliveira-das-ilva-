
import { Feature, PricingPlan, FAQItem, Step } from './types';

export interface ExtendedPricingPlan extends PricingPlan {
  id: string;
  status: 'active' | 'disabled';
  highlight?: boolean;
  notes?: string[];
}

export const FEATURES: Feature[] = [
  {
    id: '1',
    title: 'Cardápio Digital',
    description: 'Seus clientes pedem sozinhos através de um link simples enviado automaticamente.',
    icon: 'restaurant_menu'
  },
  {
    id: '2',
    title: 'Impressão Automática',
    description: 'Pedidos saem direto na sua impressora térmica na cozinha, sem redigitar nada.',
    icon: 'print'
  },
  {
    id: '3',
    title: 'Gestão de Entregas',
    description: 'Organize rotas e calcule taxas de entrega por bairro automaticamente.',
    icon: 'two_wheeler'
  },
  {
    id: '4',
    title: 'Pagamento Online',
    description: 'Receba via Pix e Cartão com confirmação automática antes mesmo de preparar.',
    icon: 'payments'
  }
];

export const PRICING_PLANS: ExtendedPricingPlan[] = [
  {
    id: 'basico',
    name: 'Basico',
    status: 'active',
    price: 'R$ 9,99',
    description: 'Plano ideal para vender marmitas pelo WhatsApp com rapidez e simplicidade.',
    buttonText: 'Começar agora',
    highlight: true,
    features: [
      'Cardápio digital de marmitas',
      'Tamanhos: pequena, média e grande',
      'Escolha de 1 ou 2 carnes com preço automático',
      'Link público personalizado',
      'Pedidos enviados automaticamente para o WhatsApp',
      'Painel administrativo da empresa',
      'Controle de acesso por assinatura ativa'
    ],
    notes: [
      'Cobrança mensal via PIX',
      '7 dias grátis',
      'Setup instantâneo',
      'Sem fidelidade'
    ]
  },
  {
    id: 'premium',
    name: 'Premium',
    status: 'disabled',
    price: 'R$ 59,99',
    description: 'Plano futuro com recursos avançados de gestão e automação.',
    buttonText: 'Em breve',
    highlight: false,
    features: [
      'Gestão de estoque inteligente',
      'Relatórios de faturamento avançados',
      'Impressão automática em nuvem',
      'Controle de motoboys e entregas'
    ]
  },
  {
    id: 'pro_ai',
    name: 'PRO com IA',
    status: 'disabled',
    price: 'R$ 69,99',
    description: 'O futuro da automação. Sua cozinha atendida 100% por inteligência artificial.',
    buttonText: 'Em breve',
    highlight: false,
    features: [
      'Atendimento 100% via IA (Gemini 2.5)',
      'Previsão de demanda e vendas',
      'Marketing automático para clientes antigos',
      'IA generativa para fotos de cardápio'
    ]
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'Preciso instalar algum aplicativo?',
    answer: 'Não! O MarmitaBot funciona 100% na nuvem. Você acessa pelo navegador do seu computador ou celular. Seus clientes também não precisam baixar nada.'
  },
  {
    question: 'Funciona com WhatsApp Business?',
    answer: 'Sim, funciona perfeitamente com WhatsApp pessoal ou Business.'
  },
  {
    question: 'Posso cancelar se não gostar?',
    answer: 'Com certeza. Não temos fidelidade. Você pode cancelar sua assinatura a qualquer momento direto pelo painel.'
  },
  {
    question: 'Como recebo o dinheiro das vendas?',
    answer: 'Os pagamentos online (Pix e Cartão) caem direto na sua conta bancária cadastrada, com taxas competitivas de mercado.'
  }
];

export const STEPS: Step[] = [
  {
    number: 1,
    title: 'Cliente envia mensagem',
    description: 'O cliente chama no WhatsApp. Nosso robô atende na hora e envia o cardápio digital.',
    icon: 'chat',
    image: 'https://images.unsplash.com/photo-1551033406-611cf9a28f67?auto=format&fit=crop&q=80&w=1000'
  },
  {
    number: 2,
    title: 'Cliente escolhe e paga',
    description: 'Ele monta a marmita, escolhe adicionais e faz o pagamento via Pix ou Cartão.',
    icon: 'touch_app',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1000'
  },
  {
    number: 3,
    title: 'Pedido chega na cozinha',
    description: 'Você recebe o pedido pronto, impresso e organizado. É só preparar e entregar!',
    icon: 'receipt_long',
    image: 'https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?auto=format&fit=crop&q=80&w=1000'
  }
];

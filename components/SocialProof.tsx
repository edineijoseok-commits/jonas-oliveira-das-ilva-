
import React from 'react';
import { Salad, Wheat, Pizza, Soup, Utensils, Coffee, Leaf, Flame, Heart, Zap } from 'lucide-react';

const BRANDS = [
  { name: 'FitnessFood', icon: <Salad /> },
  { name: 'LeveSabor', icon: <Wheat /> },
  { name: 'MarmitaExpress', icon: <Pizza /> },
  { name: 'DonaMaria', icon: <Soup /> },
  { name: 'Sabor Caseiro', icon: <Utensils /> },
  { name: 'NutriGourmet', icon: <Leaf /> },
  { name: 'Ponto do Almoço', icon: <Coffee /> },
  { name: 'Chef em Casa', icon: <Flame /> },
  { name: 'Marmitaria Real', icon: <Heart /> },
  { name: 'FastMarmita', icon: <Zap /> },
];

const SocialProof: React.FC = () => {
  // We double the brands list to create a seamless infinite loop
  const duplicatedBrands = [...BRANDS, ...BRANDS];

  return (
    <section className="border-y border-gray-100 bg-white py-14 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-20 text-center">
        <p className="mb-10 text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">
          Mais de 500 cozinhas confiam no MarmitaBot
        </p>
        
        <div className="relative mask-marquee">
          <div className="flex w-fit animate-marquee items-center gap-16 md:gap-24">
            {duplicatedBrands.map((brand, idx) => (
              <div 
                key={idx} 
                className="flex items-center gap-3 whitespace-nowrap text-xl font-black text-gray-800 opacity-40 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300 cursor-default"
              >
                <span className="text-primary">{brand.icon}</span>
                {brand.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;

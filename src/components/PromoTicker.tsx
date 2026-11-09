import React from 'react';
import { Sparkles, Heart } from 'lucide-react';

export const PromoTicker: React.FC = () => {
  const promos = [
    '🧇 Waffle en Cono con helado, fresas y banano ($30.000)',
    '🍨 Cuchareables Tradicionales: Chocorramo, Leche Klim, Milo, Oreo ($14.000)',
    '👑 Cuchareables Premium: Frutos Rojos, Cripi Nutella, Chocolatina Jumbo ($16.000)',
    '✨ Combinado de Autor: Red Velvet, Frutos Rojos y Frambuesas Achocolatadas ($23.000)',
    '🥤 Malteadas: Chicle, Frutos Rojos, Brownie, Chocorramo, Flips ($16.000)',
    '📍 Local físico en Cra 11 # 8-59, Zarzal, Valle',
    '🔔 Activa el Radar de Proximidad y recibe beneficios al pasar cerca'
  ];

  return (
    <div className="bg-brand-blush/60 border-y border-brand-pink/20 py-2.5 overflow-hidden select-none">
      <div className="flex gap-8 whitespace-nowrap animate-marquee items-center text-xs sm:text-sm font-semibold text-brand-chocolate/90">
        {[...promos, ...promos].map((text, idx) => (
          <div key={idx} className="flex items-center gap-3">
            <span>{text}</span>
            <Sparkles className="w-3.5 h-3.5 text-brand-pink inline" />
            <Heart className="w-3 h-3 text-brand-coral inline fill-brand-coral" />
          </div>
        ))}
      </div>
    </div>
  );
};

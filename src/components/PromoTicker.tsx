import React from 'react';
import { Sparkles, Heart } from 'lucide-react';

export const PromoTicker: React.FC = () => {
  const promos = [
    '🧇 Waffles en Cono horneados al instante',
    '🍨 Potes Cuchareables con toppings infinitos',
    '📍 Local físico en Cra 11 # 8-59, Zarzal',
    '🍓 Fruta fresca seleccionada todos los días',
    '🔔 Activa el Radar y recibe toppings gratis al pasar cerca',
    '📲 Pedidos directos a nuestro WhatsApp con entrega rápida'
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

import React, { useState } from 'react';
import { MENU_CATEGORIES, MENU_ITEMS, MenuItem } from '../data/menuData';
import { useCart } from '../context/CartContext';
import { Sparkles, Plus, SlidersHorizontal, Heart } from 'lucide-react';

interface MenuSectionProps {
  onCustomizeItem: (item: MenuItem) => void;
  onOpenCustomizerFree: () => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onCustomizeItem, onOpenCustomizerFree }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const { addItem } = useCart();

  const filteredItems = activeCategory === 'all'
    ? MENU_ITEMS
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-softpink text-brand-pink text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>El Menú Más Delicioso de Zarzal</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-chocolate tracking-tight">
            Descubre nuestras delicias
          </h2>
          <p className="text-sm sm:text-base text-brand-chocolate/75">
            Elaborados al momento con ingredientes frescos, waffles calientes y helados de textura ultra cremosa.
          </p>
        </div>

        {/* Category Pills Navigation */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {MENU_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 ${
                  isActive
                    ? 'bg-brand-pink text-white shadow-neon-sm scale-105'
                    : 'bg-brand-softpink/60 text-brand-chocolate/80 hover:bg-brand-blush hover:text-brand-pink'
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-brand-cream/40 rounded-3xl overflow-hidden border border-brand-pink/15 shadow-sm hover:shadow-card hover:border-brand-pink/40 transition-all duration-300 flex flex-col group"
            >
              {/* Product Image */}
              <div className="relative aspect-[16/11] overflow-hidden bg-brand-softpink">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Badges */}
                {item.badge && (
                  <div className="absolute top-3 left-3 bg-brand-chocolate/90 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
                    <span>{item.badge}</span>
                  </div>
                )}

                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md text-brand-pink text-xs font-extrabold px-3 py-1 rounded-full shadow-md">
                  ${item.price.toLocaleString('es-CO')} <span className="text-[10px] text-brand-chocolate/70">COP</span>
                </div>
              </div>

              {/* Product Details */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-display font-bold text-xl text-brand-chocolate group-hover:text-brand-pink transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs text-brand-chocolate/70 mt-2 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Ingredients Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {item.ingredients.slice(0, 3).map((ing, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-medium bg-white text-brand-chocolate/70 px-2 py-0.5 rounded-md border border-brand-chocolate/5"
                    >
                      {ing}
                    </span>
                  ))}
                  {item.ingredients.length > 3 && (
                    <span className="text-[10px] font-bold text-brand-pink self-center">
                      +{item.ingredients.length - 3} más
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="pt-3 border-t border-brand-pink/10 flex items-center gap-2">
                  {item.customizable ? (
                    <>
                      <button
                        onClick={() => onCustomizeItem(item)}
                        className="flex-1 py-2.5 px-3 bg-brand-softpink text-brand-pink text-xs font-bold rounded-xl hover:bg-brand-blush transition-colors flex items-center justify-center gap-1.5 border border-brand-pink/30"
                      >
                        <SlidersHorizontal className="w-3.5 h-3.5" />
                        <span>Personalizar</span>
                      </button>

                      <button
                        onClick={() => addItem(item)}
                        className="p-2.5 bg-brand-pink text-white rounded-xl hover:bg-brand-hotpink transition-colors shadow-sm"
                        title="Agregar directamente"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => addItem(item)}
                      className="w-full py-2.5 px-4 bg-brand-pink text-white text-xs font-bold rounded-xl hover:bg-brand-hotpink transition-all flex items-center justify-center gap-1.5 shadow-sm active:scale-95"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Agregar al Pedido</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Customizer Banner */}
        <div id="personalizador" className="mt-16 rounded-3xl bg-gradient-to-r from-brand-chocolate via-brand-dark to-brand-chocolate p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-brand-pink/30 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-pink/30 text-brand-pink text-xs font-bold uppercase tracking-wider border border-brand-pink/40">
                <Sparkles className="w-3 h-3 text-brand-waffle" />
                <span>Experiencia Única</span>
              </span>
              <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
                ¿Prefieres armar tu propio pote desde cero?
              </h3>
              <p className="text-sm text-white/80 max-w-xl">
                Tú mandas: elige el tamaño, tus sabores favoritos de helado, las salsas líquidas tibias y hasta 3 toppings crujientes (Oreo, Brownie, Lucky Charms, fresas naturales).
              </p>
            </div>

            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <button
                onClick={onOpenCustomizerFree}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-brand-pink to-brand-coral text-white font-bold rounded-2xl shadow-neon-pink hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 text-base"
              >
                <span className="text-xl">🥄</span>
                <span>Armar Mi Pote Ahora</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

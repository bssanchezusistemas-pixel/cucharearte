import React, { useState } from 'react';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/menuData';
import type { MenuItem } from '../data/menuData';
import { useCart } from '../context/CartContext';
import { Sparkles, Plus, SlidersHorizontal, Image as ImageIcon, X } from 'lucide-react';

interface MenuSectionProps {
  onCustomizeItem: (item: MenuItem) => void;
  onOpenCustomizerFree: () => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onCustomizeItem, onOpenCustomizerFree }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [showOfficialMenuModal, setShowOfficialMenuModal] = useState(false);
  const [selectedOfficialImage, setSelectedOfficialImage] = useState<string | null>(null);
  const { addItem } = useCart();

  const filteredItems = activeCategory === 'all'
    ? MENU_ITEMS
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  const officialFlyers = [
    { title: 'Waffle en Cono & Malteadas', img: '/menu/menu_waffles_malteadas.jpg' },
    { title: 'Cuchareables Tradicionales & Premium', img: '/menu/menu_cuchareables_tradicionales.jpg' },
    { title: 'Combinados de Autor & Especiales', img: '/menu/menu_combinados.jpg' }
  ];

  return (
    <section id="menu" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-softpink text-brand-pink text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Carta Oficial • Zarzal, Valle</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-chocolate tracking-tight">
            Menú CuchareArte
          </h2>
          <p className="text-sm sm:text-base text-brand-chocolate/75">
            Cuchareables Tradicionales, Premium, Combinados de Autor, Waffles en Cono y Malteadas irresistibles.
          </p>

          {/* Button to view original flyers */}
          <div className="pt-2">
            <button
              onClick={() => setShowOfficialMenuModal(true)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-softpink text-brand-pink text-xs font-bold border border-brand-pink/30 hover:bg-brand-pink hover:text-white transition-all shadow-sm"
            >
              <ImageIcon className="w-4 h-4" />
              <span>Ver Fotos de la Carta Oficial (Volantes)</span>
            </button>
          </div>
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
                        <span>Personalizar / Toppings</span>
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
                <span>Experiencia Cuchareable</span>
              </span>
              <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
                Waffle en Cono & Cuchareables de Autor
              </h3>
              <p className="text-sm text-white/80 max-w-xl">
                Prueba nuestro <b>Waffle en Cono ($30.000)</b> con helado, fresas, banano y chantilly, o personaliza tu pote con toppings adicionales de Chocorramo, Leche Klim, Milo, Oreo o Frambuesas por solo +$3.000 COP.
              </p>
            </div>

            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <button
                onClick={onOpenCustomizerFree}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-brand-pink to-brand-coral text-white font-bold rounded-2xl shadow-neon-pink hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 text-base"
              >
                <span className="text-xl">🥄</span>
                <span>Personalizar Mi Antojo</span>
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Official Menu Photos Modal */}
      {showOfficialMenuModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-chocolate/80 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-brand-pink/30">
            <div className="p-5 bg-gradient-to-r from-brand-softpink via-white to-brand-softpink border-b border-brand-pink/15 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-pink text-white flex items-center justify-center text-xl shadow-neon-sm">
                  📜
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-brand-chocolate">Carta Original de CuchareArte</h3>
                  <p className="text-xs text-brand-chocolate/70">Diseños y precios oficiales del local</p>
                </div>
              </div>
              <button
                onClick={() => {
                  setShowOfficialMenuModal(false);
                  setSelectedOfficialImage(null);
                }}
                className="p-2 rounded-full hover:bg-slate-100 text-brand-chocolate"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {officialFlyers.map((flyer, idx) => (
                  <div
                    key={idx}
                    onClick={() => setSelectedOfficialImage(flyer.img)}
                    className="cursor-pointer group rounded-2xl overflow-hidden border-2 border-brand-pink/20 shadow-sm hover:shadow-card hover:border-brand-pink transition-all"
                  >
                    <div className="aspect-[9/16] overflow-hidden bg-slate-100">
                      <img
                        src={flyer.img}
                        alt={flyer.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="p-3 bg-white text-center">
                      <p className="text-xs font-bold text-brand-chocolate">{flyer.title}</p>
                      <p className="text-[10px] text-brand-pink font-semibold">Toca para ampliar</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Expanded Flyer Fullscreen Modal */}
      {selectedOfficialImage && (
        <div
          onClick={() => setSelectedOfficialImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-dark/90 backdrop-blur-md cursor-pointer animate-fadeIn"
        >
          <div className="relative max-w-sm max-h-[92vh] rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20">
            <img
              src={selectedOfficialImage}
              alt="Carta CuchareArte Ampliada"
              className="w-full h-full object-contain max-h-[90vh]"
            />
            <button
              onClick={() => setSelectedOfficialImage(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

    </section>
  );
};

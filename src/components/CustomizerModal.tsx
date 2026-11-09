import React, { useState, useEffect } from 'react';
import { X, Check, Sparkles, Plus } from 'lucide-react';
import { CUSTOMIZER_OPTIONS } from '../data/menuData';
import type { MenuItem } from '../data/menuData';
import { useCart } from '../context/CartContext';

interface CustomizerModalProps {
  isOpen: boolean;
  onClose: () => void;
  baseItem?: MenuItem | null;
}

export const CustomizerModal: React.FC<CustomizerModalProps> = ({ isOpen, onClose, baseItem }) => {
  const { addItem } = useCart();

  // Waffle en cono specific options
  const isWaffle = baseItem?.category === 'waffles';

  const [selectedIceCream, setSelectedIceCream] = useState<string>(CUSTOMIZER_OPTIONS.waffleIceCreams[0]);
  const [selectedWaffleTopping, setSelectedWaffleTopping] = useState<string>(CUSTOMIZER_OPTIONS.waffleToppings[0]);
  const [selectedWaffleSauce, setSelectedWaffleSauce] = useState<string>(CUSTOMIZER_OPTIONS.waffleSauces[0]);
  
  // Extra toppings (+$3.000 COP each as per official menu)
  const [selectedExtraToppings, setSelectedExtraToppings] = useState<string[]>([]);
  const [notes, setNotes] = useState('');

  useEffect(() => {
    if (isOpen) {
      setSelectedExtraToppings([]);
      setNotes('');
      setSelectedIceCream(CUSTOMIZER_OPTIONS.waffleIceCreams[0]);
      setSelectedWaffleTopping(CUSTOMIZER_OPTIONS.waffleToppings[0]);
      setSelectedWaffleSauce(CUSTOMIZER_OPTIONS.waffleSauces[0]);
    }
  }, [isOpen, baseItem]);

  if (!isOpen) return null;

  const basePrice = baseItem ? baseItem.price : 14000;
  const extraToppingsTotal = selectedExtraToppings.length * CUSTOMIZER_OPTIONS.toppingAdicionalPrice;
  const totalPrice = basePrice + extraToppingsTotal;

  const toggleExtraTopping = (topping: string) => {
    if (selectedExtraToppings.includes(topping)) {
      setSelectedExtraToppings(selectedExtraToppings.filter(t => t !== topping));
    } else {
      setSelectedExtraToppings([...selectedExtraToppings, topping]);
    }
  };

  const handleAddToCart = () => {
    const itemToUse: MenuItem = baseItem || {
      id: 'cuchareable-personalizado',
      name: 'Cuchareable de Autor 🥄',
      category: 'combinados',
      price: 17000,
      description: 'Cuchareable preparado a tu gusto con toppings adicionales.',
      image: '/menu/menu_combinados.jpg',
      ingredients: selectedExtraToppings.length > 0 ? selectedExtraToppings : ['Helado artesanal']
    };

    addItem(itemToUse, {
      flavors: isWaffle ? [selectedIceCream] : [],
      sauces: isWaffle ? [selectedWaffleSauce] : [],
      toppings: isWaffle
        ? [selectedWaffleTopping, ...selectedExtraToppings]
        : selectedExtraToppings,
      sizePriceExtra: extraToppingsTotal,
      notes: notes.trim() || undefined
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-chocolate/70 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-brand-pink/20">
        
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-brand-softpink via-white to-brand-softpink border-b border-brand-pink/15 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-brand-pink text-white flex items-center justify-center text-2xl shadow-neon-sm">
              {isWaffle ? '🧇' : '🍨'}
            </div>
            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-brand-chocolate">
                {baseItem ? baseItem.name : 'Personaliza tu Cuchareable'}
              </h3>
              <p className="text-xs text-brand-chocolate/70">
                {isWaffle
                  ? 'Incluye Waffle, Helado, Fresas y Banano, Chantilly, 1 Topping y 1 Salsa'
                  : 'Agrega toppings adicionales a tu pote ($3.000 c/u)'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white border border-brand-chocolate/10 flex items-center justify-center text-brand-chocolate hover:bg-brand-softpink transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          
          {/* Waffle En Cono Customization */}
          {isWaffle ? (
            <>
              {/* Included Ingredients banner */}
              <div className="p-4 rounded-2xl bg-brand-softpink/60 border border-brand-pink/20 space-y-1.5">
                <span className="text-[11px] font-bold text-brand-pink uppercase tracking-wider">
                  Ingredientes Incluidos en tu Waffle ($30.000 COP)
                </span>
                <p className="text-xs text-brand-chocolate font-medium">
                  ✓ Waffle horneado • ✓ Porción de Helado • ✓ Fresas y Banano frescos • ✓ Crema Chantilly
                </p>
              </div>

              {/* Step 1: Sabor de Helado */}
              <div>
                <h4 className="font-bold text-sm text-brand-chocolate mb-2 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-brand-pink text-white text-xs flex items-center justify-center">1</span>
                  <span>Elige el Sabor de Helado</span>
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {CUSTOMIZER_OPTIONS.waffleIceCreams.map((flavor) => {
                    const isSelected = selectedIceCream === flavor;
                    return (
                      <button
                        key={flavor}
                        type="button"
                        onClick={() => setSelectedIceCream(flavor)}
                        className={`p-3 rounded-xl border text-left text-xs font-semibold transition-all flex items-center justify-between ${
                          isSelected
                            ? 'border-brand-pink bg-brand-pink text-white shadow-sm'
                            : 'border-slate-200 bg-slate-50/50 hover:bg-brand-softpink/40 text-brand-chocolate'
                        }`}
                      >
                        <span>{flavor}</span>
                        {isSelected && <Check className="w-3.5 h-3.5 ml-1 flex-shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: 1 Topping Incluido */}
              <div>
                <h4 className="font-bold text-sm text-brand-chocolate mb-2 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-brand-pink text-white text-xs flex items-center justify-center">2</span>
                  <span>Elige 1 Topping Incluido</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {CUSTOMIZER_OPTIONS.waffleToppings.map((top) => {
                    const isSelected = selectedWaffleTopping === top;
                    return (
                      <button
                        key={top}
                        type="button"
                        onClick={() => setSelectedWaffleTopping(top)}
                        className={`p-3 rounded-xl border text-left text-xs font-semibold transition-all flex items-center justify-between ${
                          isSelected
                            ? 'border-brand-coral bg-brand-coral text-white shadow-sm'
                            : 'border-slate-200 bg-slate-50/50 hover:bg-brand-blush/30 text-brand-chocolate'
                        }`}
                      >
                        <span>{top}</span>
                        {isSelected && <Check className="w-3.5 h-3.5 ml-1 flex-shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: 1 Salsa Incluida */}
              <div>
                <h4 className="font-bold text-sm text-brand-chocolate mb-2 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-brand-pink text-white text-xs flex items-center justify-center">3</span>
                  <span>Elige 1 Salsa Incluida</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {CUSTOMIZER_OPTIONS.waffleSauces.map((sauce) => {
                    const isSelected = selectedWaffleSauce === sauce;
                    return (
                      <button
                        key={sauce}
                        type="button"
                        onClick={() => setSelectedWaffleSauce(sauce)}
                        className={`p-3 rounded-xl border text-left text-xs font-semibold transition-all flex items-center justify-between ${
                          isSelected
                            ? 'border-brand-waffle bg-brand-waffle text-white shadow-sm'
                            : 'border-slate-200 bg-slate-50/50 hover:bg-brand-waffle-light/30 text-brand-chocolate'
                        }`}
                      >
                        <span>{sauce}</span>
                        {isSelected && <Check className="w-3.5 h-3.5 ml-1 flex-shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            </>
          ) : (
            /* Non-Waffle product description */
            <div className="p-4 rounded-2xl bg-brand-softpink/40 border border-brand-pink/20 space-y-1">
              <span className="text-[11px] font-bold text-brand-pink uppercase tracking-wider">
                Receta de la Casa: {baseItem?.name}
              </span>
              <p className="text-xs text-brand-chocolate/80">
                {baseItem?.description}
              </p>
            </div>
          )}

          {/* Toppings Adicionales ($3.000 COP cada uno) */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-bold text-sm text-brand-chocolate flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-brand-waffle" />
                <span>¿Deseas Topping Adicional? (+$3.000 COP c/u)</span>
              </h4>
              <span className="text-xs text-brand-chocolate/70">
                {selectedExtraToppings.length} seleccionado(s)
              </span>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {CUSTOMIZER_OPTIONS.extraToppings.map((extra) => {
                const isSelected = selectedExtraToppings.includes(extra);
                return (
                  <button
                    key={extra}
                    type="button"
                    onClick={() => toggleExtraTopping(extra)}
                    className={`p-2.5 rounded-xl border text-left text-xs font-semibold transition-all flex items-center justify-between ${
                      isSelected
                        ? 'border-brand-pink bg-brand-softpink text-brand-pink shadow-sm font-bold'
                        : 'border-slate-200 bg-white hover:bg-slate-50 text-brand-chocolate'
                    }`}
                  >
                    <span>{extra}</span>
                    {isSelected ? <Check className="w-3.5 h-3.5 text-brand-pink" /> : <Plus className="w-3.5 h-3.5 text-slate-300" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Notas */}
          <div>
            <label className="block text-xs font-bold text-brand-chocolate mb-1.5">
              Notas o instrucciones especiales (Opcional):
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Ej: Con bastante salsa, sin banano, etc."
              rows={2}
              className="w-full text-xs p-3 rounded-xl border border-slate-200 focus:outline-none focus:border-brand-pink bg-slate-50/50"
            />
          </div>

        </div>

        {/* Footer with Price and Add Button */}
        <div className="p-5 bg-white border-t border-brand-pink/15 flex items-center justify-between gap-4">
          <div>
            <p className="text-[11px] font-semibold text-brand-chocolate/60 uppercase">Total a pagar</p>
            <p className="font-display font-bold text-2xl text-brand-pink">
              ${totalPrice.toLocaleString('es-CO')} <span className="text-xs font-normal text-brand-chocolate/70">COP</span>
            </p>
          </div>

          <button
            onClick={handleAddToCart}
            className="flex-1 max-w-xs py-3.5 px-6 rounded-2xl bg-gradient-to-r from-brand-pink to-brand-coral text-white font-bold text-sm shadow-neon-pink hover:opacity-95 active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>Agregar al Pedido 🥄</span>
          </button>
        </div>

      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { X, Check, Plus, Minus, Sparkles, Heart } from 'lucide-react';
import { CUSTOMIZER_OPTIONS, MenuItem } from '../data/menuData';
import { useCart } from '../context/CartContext';

interface CustomizerModalProps {
  isOpen: boolean;
  onClose: () => void;
  baseItem?: MenuItem | null;
}

export const CustomizerModal: React.FC<CustomizerModalProps> = ({ isOpen, onClose, baseItem }) => {
  const { addItem } = useCart();

  const [selectedSize, setSelectedSize] = useState(CUSTOMIZER_OPTIONS.sizes[0]);
  const [selectedFlavors, setSelectedFlavors] = useState<string[]>([CUSTOMIZER_OPTIONS.iceCreamFlavors[0]]);
  const [selectedSauces, setSelectedSauces] = useState<string[]>([CUSTOMIZER_OPTIONS.sauces[0]]);
  const [selectedToppings, setSelectedToppings] = useState<string[]>([CUSTOMIZER_OPTIONS.toppings[0], CUSTOMIZER_OPTIONS.toppings[1]]);
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const basePrice = baseItem ? baseItem.price : 14500;
  const totalPrice = basePrice + selectedSize.extra;

  const toggleFlavor = (flavor: string) => {
    if (selectedFlavors.includes(flavor)) {
      if (selectedFlavors.length > 1) {
        setSelectedFlavors(selectedFlavors.filter(f => f !== flavor));
      }
    } else {
      if (selectedFlavors.length < 2) {
        setSelectedFlavors([...selectedFlavors, flavor]);
      } else {
        setSelectedFlavors([selectedFlavors[1], flavor]);
      }
    }
  };

  const toggleSauce = (sauce: string) => {
    if (selectedSauces.includes(sauce)) {
      if (selectedSauces.length > 1) {
        setSelectedSauces(selectedSauces.filter(s => s !== sauce));
      }
    } else {
      if (selectedSauces.length < 2) {
        setSelectedSauces([...selectedSauces, sauce]);
      } else {
        setSelectedSauces([selectedSauces[1], sauce]);
      }
    }
  };

  const toggleTopping = (topping: string) => {
    if (selectedToppings.includes(topping)) {
      setSelectedToppings(selectedToppings.filter(t => t !== topping));
    } else {
      if (selectedToppings.length < 3) {
        setSelectedToppings([...selectedToppings, topping]);
      } else {
        // replace first
        setSelectedToppings([...selectedToppings.slice(1), topping]);
      }
    }
  };

  const handleAddToCart = () => {
    const itemToUse: MenuItem = baseItem || {
      id: 'custom-cuchareable',
      name: 'Pote Cuchareable Personalizado 🥄',
      category: 'cuchareables',
      price: 14500,
      description: 'Armado a tu gusto con tus helados, salsas y toppings favoritos.',
      image: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=800&q=80',
      ingredients: [...selectedFlavors, ...selectedSauces, ...selectedToppings]
    };

    addItem(itemToUse, {
      size: `${selectedSize.name}`,
      sizePriceExtra: selectedSize.extra,
      flavors: selectedFlavors,
      sauces: selectedSauces,
      toppings: selectedToppings,
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
              🥄
            </div>
            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-brand-chocolate">
                {baseItem ? `Personalizar: ${baseItem.name}` : 'Arma tu Cuchareable Soñado'}
              </h3>
              <p className="text-xs text-brand-chocolate/70">
                Elige tus bases, salsas calientes y toppings crocantes
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
        <div className="flex-1 overflow-y-auto p-6 space-y-8">
          
          {/* Step 1: Tamaño */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-bold text-sm sm:text-base text-brand-chocolate flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-brand-pink text-white text-xs flex items-center justify-center">1</span>
                <span>Elige el Tamaño del Pote</span>
              </h4>
              <span className="text-xs font-semibold text-brand-pink">Obligatorio</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {CUSTOMIZER_OPTIONS.sizes.map((s) => {
                const isSelected = selectedSize.id === s.id;
                return (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setSelectedSize(s)}
                    className={`p-4 rounded-2xl border-2 text-left transition-all ${
                      isSelected
                        ? 'border-brand-pink bg-brand-softpink shadow-sm'
                        : 'border-slate-100 bg-white hover:border-brand-pink/40'
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <p className="font-bold text-sm text-brand-chocolate">{s.name}</p>
                      {isSelected && <Check className="w-4 h-4 text-brand-pink" />}
                    </div>
                    <p className="text-xs text-brand-chocolate/60 mt-1">{s.desc}</p>
                    <p className="text-xs font-bold text-brand-pink mt-2">
                      {s.extra === 0 ? 'Precio Base' : `+ $${s.extra.toLocaleString('es-CO')} COP`}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Sabores de Helado */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-bold text-sm sm:text-base text-brand-chocolate flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-brand-pink text-white text-xs flex items-center justify-center">2</span>
                <span>Bolas de Helado Artesanal</span>
              </h4>
              <span className="text-xs text-brand-chocolate/70">
                Seleccionados: {selectedFlavors.length}/2
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {CUSTOMIZER_OPTIONS.iceCreamFlavors.map((flavor) => {
                const isSelected = selectedFlavors.includes(flavor);
                return (
                  <button
                    key={flavor}
                    type="button"
                    onClick={() => toggleFlavor(flavor)}
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

          {/* Step 3: Salsas */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-bold text-sm sm:text-base text-brand-chocolate flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-brand-pink text-white text-xs flex items-center justify-center">3</span>
                <span>Salsas Líquidas & Dulces</span>
              </h4>
              <span className="text-xs text-brand-chocolate/70">
                Seleccionadas: {selectedSauces.length}/2
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {CUSTOMIZER_OPTIONS.sauces.map((sauce) => {
                const isSelected = selectedSauces.includes(sauce);
                return (
                  <button
                    key={sauce}
                    type="button"
                    onClick={() => toggleSauce(sauce)}
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

          {/* Step 4: Toppings */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-bold text-sm sm:text-base text-brand-chocolate flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-brand-pink text-white text-xs flex items-center justify-center">4</span>
                <span>Toppings & Crunches</span>
              </h4>
              <span className="text-xs text-brand-chocolate/70">
                Seleccionados: {selectedToppings.length}/3
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {CUSTOMIZER_OPTIONS.toppings.map((top) => {
                const isSelected = selectedToppings.includes(top);
                return (
                  <button
                    key={top}
                    type="button"
                    onClick={() => toggleTopping(top)}
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

          {/* Step 5: Notas especiales */}
          <div>
            <label className="block text-xs font-bold text-brand-chocolate mb-1.5">
              Notas o instrucciones especiales (Opcional):
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Ej: Mucha salsa de Nutella, sin barquillo, etc."
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
            <span>Agregar a mi Pedido 🥄</span>
          </button>
        </div>

      </div>
    </div>
  );
};

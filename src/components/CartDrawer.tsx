import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, Send, Tag, ShoppingBag, CheckCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { STORE_INFO } from '../data/menuData';
import confetti from 'canvas-confetti';

export const CartDrawer: React.FC = () => {
  const {
    items,
    isCartOpen,
    setIsCartOpen,
    removeItem,
    updateQuantity,
    subtotal,
    discountAmount,
    finalTotal,
    activeCoupon,
    applyCoupon
  } = useCart();

  const [couponInput, setCouponInput] = useState('');
  const [couponError, setCouponError] = useState(false);
  const [orderType, setOrderType] = useState<'pickup' | 'delivery'>('pickup');
  const [customerName, setCustomerName] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');

  if (!isCartOpen) return null;

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    setCouponError(false);
    if (!couponInput.trim()) return;

    const ok = applyCoupon(couponInput);
    if (ok) {
      setCouponInput('');
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.8 },
          colors: ['#FF2A85', '#F59E0B', '#10B981']
        });
      } catch {}
    } else {
      setCouponError(true);
    }
  };

  const handleSendWhatsApp = () => {
    if (items.length === 0) return;

    let text = `🍦 *¡Hola CuchareArte Zarzal!* Quiero realizar un pedido desde la web:%0A%0A`;

    items.forEach((item, index) => {
      text += `*${index + 1}. ${item.quantity}x ${item.menuItem.name}* - $${(item.totalUnitPrice * item.quantity).toLocaleString('es-CO')} COP%0A`;
      if (item.customization) {
        if (item.customization.size) text += `   • *Tamaño:* ${item.customization.size}%0A`;
        if (item.customization.flavors?.length) text += `   • *Helados:* ${item.customization.flavors.join(', ')}%0A`;
        if (item.customization.sauces?.length) text += `   • *Salsas:* ${item.customization.sauces.join(', ')}%0A`;
        if (item.customization.toppings?.length) text += `   • *Toppings:* ${item.customization.toppings.join(', ')}%0A`;
        if (item.customization.notes) text += `   • *Notas:* ${item.customization.notes}%0A`;
      }
      text += `%0A`;
    });

    text += `------------------------------%0A`;
    text += `*Subtotal:* $${subtotal.toLocaleString('es-CO')} COP%0A`;
    if (activeCoupon && discountAmount > 0) {
      text += `*Cupón aplicado (${activeCoupon}):* -$${discountAmount.toLocaleString('es-CO')} COP%0A`;
    }
    text += `*TOTAL A PAGAR:* $${finalTotal.toLocaleString('es-CO')} COP%0A%0A`;

    text += `*Modalidad:* ${orderType === 'pickup' ? '🍨 Para retirar/consumir en local (Cra 11 # 8-59)' : `🛵 Domicilio en Zarzal (Dirección: ${deliveryAddress || 'Pendiente por confirmar'})`}%0A`;
    if (customerName) {
      text += `*Cliente:* ${customerName}%0A`;
    }

    text += `%0A¡Muchas gracias! Quedo a la espera de su confirmación 🥄✨`;

    // Fire celebration
    try {
      confetti({
        particleCount: 70,
        spread: 80,
        origin: { y: 0.5 }
      });
    } catch {}

    const waUrl = `https://wa.me/${STORE_INFO.phoneRaw}?text=${text}`;
    window.open(waUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="absolute inset-0 bg-brand-chocolate/60 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col border-l border-brand-pink/20">
          
          {/* Header */}
          <div className="p-6 bg-gradient-to-r from-brand-softpink via-white to-brand-softpink border-b border-brand-pink/15 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-pink text-white flex items-center justify-center shadow-neon-sm">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-brand-chocolate">Tu Antojo Cuchareable</h3>
                <p className="text-xs text-brand-chocolate/70">
                  {items.length === 0 ? 'Carrito vacío' : `${items.length} ${items.length === 1 ? 'producto' : 'productos'}`}
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 rounded-full hover:bg-slate-100 text-brand-chocolate transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items list */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-8 space-y-4">
                <div className="w-20 h-20 rounded-full bg-brand-softpink flex items-center justify-center text-4xl shadow-inner animate-bounce">
                  🥄
                </div>
                <div>
                  <h4 className="font-display font-bold text-lg text-brand-chocolate">Tu carrito está vacío</h4>
                  <p className="text-xs text-brand-chocolate/70 mt-1 max-w-xs">
                    Explora el menú y agrega un delicioso Waffle en Cono o un pote cuchareable para empezar.
                  </p>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="px-6 py-2.5 bg-brand-pink text-white text-xs font-bold rounded-xl shadow-neon-sm"
                >
                  Ver Menú Digital
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.id}
                  className="p-4 rounded-2xl bg-brand-softpink/40 border border-brand-pink/15 space-y-2 relative group"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <h4 className="font-display font-bold text-sm text-brand-chocolate">
                        {item.menuItem.name}
                      </h4>
                      <p className="text-xs font-bold text-brand-pink mt-0.5">
                        ${(item.totalUnitPrice * item.quantity).toLocaleString('es-CO')} COP
                      </p>
                    </div>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-slate-400 hover:text-red-500 p-1 transition-colors"
                      title="Eliminar"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Customization specs */}
                  {item.customization && (
                    <div className="text-[11px] text-brand-chocolate/70 bg-white/70 p-2.5 rounded-xl border border-brand-pink/10 space-y-1">
                      {item.customization.size && (
                        <p><span className="font-semibold text-brand-pink">Tamaño:</span> {item.customization.size}</p>
                      )}
                      {item.customization.flavors?.length > 0 && (
                        <p><span className="font-semibold">Helados:</span> {item.customization.flavors.join(', ')}</p>
                      )}
                      {item.customization.sauces?.length > 0 && (
                        <p><span className="font-semibold">Salsas:</span> {item.customization.sauces.join(', ')}</p>
                      )}
                      {item.customization.toppings?.length > 0 && (
                        <p><span className="font-semibold">Toppings:</span> {item.customization.toppings.join(', ')}</p>
                      )}
                      {item.customization.notes && (
                        <p className="italic text-brand-chocolate/90">"{item.customization.notes}"</p>
                      )}
                    </div>
                  )}

                  {/* Quantity bar */}
                  <div className="flex items-center justify-between pt-1">
                    <span className="text-[11px] text-brand-chocolate/60">Cantidad</span>
                    <div className="flex items-center gap-2 bg-white rounded-lg border border-brand-pink/20 px-2 py-0.5">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="text-brand-chocolate hover:text-brand-pink p-1"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="font-bold text-xs text-brand-chocolate min-w-[16px] text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="text-brand-chocolate hover:text-brand-pink p-1"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Controls & Checkout */}
          {items.length > 0 && (
            <div className="p-6 bg-white border-t border-brand-pink/15 space-y-4">
              
              {/* Delivery mode */}
              <div>
                <label className="block text-xs font-bold text-brand-chocolate mb-1.5">
                  ¿Cómo deseas tu pedido?
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setOrderType('pickup')}
                    className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all ${
                      orderType === 'pickup'
                        ? 'border-brand-pink bg-brand-softpink text-brand-pink shadow-sm'
                        : 'border-slate-200 text-brand-chocolate/70'
                    }`}
                  >
                    🍨 Retirar en Local
                  </button>
                  <button
                    type="button"
                    onClick={() => setOrderType('delivery')}
                    className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all ${
                      orderType === 'delivery'
                        ? 'border-brand-pink bg-brand-softpink text-brand-pink shadow-sm'
                        : 'border-slate-200 text-brand-chocolate/70'
                    }`}
                  >
                    🛵 Domicilio en Zarzal
                  </button>
                </div>
              </div>

              {/* Order fields */}
              <div className="space-y-2">
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="Tu Nombre (Ej: María)"
                  className="w-full text-xs p-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-brand-pink"
                />
                {orderType === 'delivery' && (
                  <input
                    type="text"
                    value={deliveryAddress}
                    onChange={(e) => setDeliveryAddress(e.target.value)}
                    placeholder="Dirección en Zarzal (Barrio, Calle, Apto)"
                    className="w-full text-xs p-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-brand-pink"
                  />
                )}
              </div>

              {/* Coupon Bar */}
              <div>
                {activeCoupon ? (
                  <div className="flex items-center justify-between p-2.5 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800 font-semibold">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle className="w-4 h-4 text-emerald-600" />
                      <span>Cupón activo: <b>{activeCoupon}</b> (-10%)</span>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleApplyCoupon} className="flex gap-2">
                    <div className="relative flex-1">
                      <Tag className="w-3.5 h-3.5 absolute left-3 top-3 text-slate-400" />
                      <input
                        type="text"
                        value={couponInput}
                        onChange={(e) => setCouponInput(e.target.value)}
                        placeholder="Cupón (ej. CERQUITA-TOPPING)"
                        className="w-full text-xs pl-8 pr-3 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-brand-pink"
                      />
                    </div>
                    <button
                      type="submit"
                      className="px-4 py-2.5 bg-brand-chocolate text-white text-xs font-bold rounded-xl hover:bg-brand-pink transition-colors"
                    >
                      Aplicar
                    </button>
                  </form>
                )}
                {couponError && (
                  <p className="text-[11px] text-red-500 mt-1">Cupón no válido. Prueba CERQUITA-TOPPING</p>
                )}
              </div>

              {/* Totals Breakdown */}
              <div className="pt-2 border-t border-slate-100 text-xs space-y-1.5">
                <div className="flex justify-between text-brand-chocolate/70">
                  <span>Subtotal</span>
                  <span>${subtotal.toLocaleString('es-CO')} COP</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-600 font-semibold">
                    <span>Descuento de Proximidad</span>
                    <span>-${discountAmount.toLocaleString('es-CO')} COP</span>
                  </div>
                )}
                <div className="flex justify-between text-base font-extrabold text-brand-chocolate pt-1 border-t border-slate-200">
                  <span>Total</span>
                  <span className="text-brand-pink">${finalTotal.toLocaleString('es-CO')} COP</span>
                </div>
              </div>

              {/* Big Green WhatsApp Button */}
              <button
                onClick={handleSendWhatsApp}
                className="w-full py-4 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-lg shadow-emerald-600/30 active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Pedir por WhatsApp 📲</span>
              </button>

              <p className="text-[10px] text-center text-slate-400">
                Se abrirá WhatsApp con tu pedido preformateado para confirmar al instante.
              </p>

            </div>
          )}

        </div>
      </div>
    </div>
  );
};

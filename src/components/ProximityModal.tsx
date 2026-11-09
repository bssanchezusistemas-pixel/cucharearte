import React from 'react';
import { Sparkles, X, Gift } from 'lucide-react';
import { useProximity } from '../context/ProximityContext';
import { useCart } from '../context/CartContext';
import { STORE_INFO } from '../data/menuData';

export const ProximityModal: React.FC = () => {
  const { showNearbyAlert, distanceMeters, dismissAlert, couponCode } = useProximity();
  const { applyCoupon, setIsCartOpen } = useCart();

  if (!showNearbyAlert) return null;

  const handleClaim = () => {
    applyCoupon(couponCode);
    dismissAlert();
    setIsCartOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-chocolate/70 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-brand-pink/30 p-6 text-center space-y-5">
        
        {/* Floating close */}
        <button
          onClick={dismissAlert}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-brand-chocolate transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Big Celebration Icon */}
        <div className="mx-auto w-20 h-20 rounded-full bg-gradient-to-tr from-brand-pink to-brand-coral flex items-center justify-center text-4xl shadow-neon-pink animate-bounce">
          🍦
        </div>

        {/* Text Details */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span>¡Estás a solo {distanceMeters ? `${distanceMeters}m` : 'unos pasos'} de nuestro local!</span>
          </div>

          <h3 className="font-display text-2xl font-extrabold text-brand-chocolate">
            ¡Antojo Detectado en Zarzal!
          </h3>

          <p className="text-xs text-brand-chocolate/75 max-w-xs mx-auto">
            Detectamos que estás pasando cerca de <b>{STORE_INFO.address}</b>. Queremos endulzar tu día con un regalo especial.
          </p>
        </div>

        {/* Coupon Card Box */}
        <div className="p-4 rounded-2xl bg-brand-softpink/80 border-2 border-dashed border-brand-pink/40 space-y-2">
          <p className="text-[11px] font-bold text-brand-pink uppercase tracking-wider flex items-center justify-center gap-1">
            <Gift className="w-3.5 h-3.5" />
            <span>Beneficio de Proximidad</span>
          </p>
          <div className="bg-white py-2 px-4 rounded-xl border border-brand-pink/20 font-mono font-extrabold text-lg text-brand-chocolate tracking-widest shadow-inner">
            {couponCode}
          </div>
          <p className="text-[11px] text-brand-chocolate/70">
            10% OFF en todo tu pedido o Topping especial gratis
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="space-y-2 pt-1">
          <button
            onClick={handleClaim}
            className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-brand-pink to-brand-coral text-white font-bold text-sm shadow-neon-pink hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>Aplicar al Pedido & Ordenar</span>
          </button>

          <a
            href="#local"
            onClick={dismissAlert}
            className="block text-xs font-bold text-brand-pink hover:underline py-1"
          >
            📍 Ver cómo llegar al local (Cra 11)
          </a>
        </div>

      </div>
    </div>
  );
};

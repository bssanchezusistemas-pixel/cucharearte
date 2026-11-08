import React, { useState, useEffect } from 'react';
import { ShoppingBag, MapPin, Radio, Clock, Menu, X, Sparkles } from 'lucide-react';
import { STORE_INFO } from '../data/menuData';
import { useCart } from '../context/CartContext';
import { useProximity } from '../context/ProximityContext';
import { isStoreOpen } from '../utils/geo';

export const Header: React.FC = () => {
  const { totalItems, setIsCartOpen } = useCart();
  const { isNearby, distanceMeters, requestRealLocation } = useProximity();
  const [storeStatus, setStoreStatus] = useState(isStoreOpen());
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setStoreStatus(isStoreOpen());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full glass-nav border-b border-brand-pink/15 transition-all">
      {/* Top micro banner */}
      <div className="bg-gradient-to-r from-brand-pink via-brand-coral to-brand-pink text-white text-xs py-1.5 px-4 text-center font-medium tracking-wide flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 animate-spin" />
        <span>¡Prueba nuestros nuevos <b>Waffles en Cono</b> y <b>Potes Cuchareables</b> en Zarzal!</span>
        <span className="hidden md:inline font-bold bg-white/20 px-2 py-0.5 rounded-full text-[10px]">
          Cra 11 # 8-59
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-brand-pink to-brand-coral p-0.5 shadow-neon-sm group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-white rounded-full flex items-center justify-center flex-col">
                <span className="text-xl">🍦</span>
              </div>
              <div className="absolute -bottom-1 -right-1 bg-brand-chocolate text-[9px] text-white font-bold px-1 rounded-full border border-white">
                VALLE
              </div>
            </div>
            <div>
              <span className="font-display font-bold text-2xl md:text-3xl tracking-tight text-brand-chocolate flex items-center gap-1">
                Cuchare<span className="text-brand-pink">Arte</span>
                <span className="text-xs bg-brand-blush text-brand-pink font-semibold px-2 py-0.5 rounded-full border border-brand-pink/20">
                  Zarzal
                </span>
              </span>
              <p className="text-[11px] font-medium text-brand-chocolate/60 -mt-1 hidden sm:block">
                Helados Cuchareables & Waffles Artesanales
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-brand-chocolate/80">
            <a href="#menu" className="hover:text-brand-pink transition-colors">
              Menú Digital
            </a>
            <a href="#personalizador" className="hover:text-brand-pink transition-colors flex items-center gap-1">
              <span>Arma tu Pote</span>
              <span className="bg-brand-pink text-white text-[10px] px-1.5 py-0.2 rounded-full">POPULAR</span>
            </a>
            <a href="#local" className="hover:text-brand-pink transition-colors flex items-center gap-1">
              <MapPin className="w-4 h-4 text-brand-pink" />
              <span>Nuestro Local</span>
            </a>
            <a href="#proximidad" className="hover:text-brand-pink transition-colors">
              Club Proximidad
            </a>
          </nav>

          {/* Actions: Store status & Cart */}
          <div className="flex items-center gap-3">
            {/* Live Store Status pill */}
            <div className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-white border border-brand-pink/20 shadow-sm">
              <span className={`w-2.5 h-2.5 rounded-full ${storeStatus.isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-amber-400'}`} />
              <Clock className="w-3.5 h-3.5 text-brand-chocolate/60" />
              <span className="text-brand-chocolate/90">{storeStatus.statusText}</span>
            </div>

            {/* Radar Proximity Button */}
            <button
              onClick={requestRealLocation}
              className={`hidden sm:flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold transition-all shadow-sm ${
                isNearby
                  ? 'bg-emerald-500 text-white animate-bounce shadow-emerald-500/30'
                  : 'bg-brand-softpink text-brand-pink border border-brand-pink/30 hover:bg-brand-pink hover:text-white'
              }`}
              title="Detectar si estás cerca del local para recibir promociones"
            >
              <Radio className={`w-3.5 h-3.5 ${isNearby ? 'animate-ping' : ''}`} />
              <span>
                {isNearby
                  ? `¡Cerquita (${distanceMeters}m)!`
                  : distanceMeters
                  ? `A ${distanceMeters < 1000 ? `${distanceMeters}m` : `${(distanceMeters / 1000).toFixed(1)}km`}`
                  : 'Radar de Ofertas'}
              </span>
            </button>

            {/* Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative flex items-center justify-center w-11 h-11 rounded-full bg-brand-pink text-white hover:bg-brand-hotpink transition-all shadow-neon-sm active:scale-95"
              aria-label="Abrir pedido"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-brand-waffle text-brand-chocolate font-bold text-xs rounded-full flex items-center justify-center border-2 border-white shadow-sm animate-pulse">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-brand-chocolate hover:bg-brand-blush/50"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-pink border-b border-brand-pink/20 px-6 py-5 space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold py-1 px-3 rounded-full bg-white/80 w-fit">
            <span className={`w-2.5 h-2.5 rounded-full ${storeStatus.isOpen ? 'bg-emerald-500' : 'bg-amber-400'}`} />
            <span>{storeStatus.statusText}</span>
          </div>
          <div className="grid gap-3 font-semibold text-brand-chocolate">
            <a
              href="#menu"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-white/60"
            >
              🍨 Menú Digital
            </a>
            <a
              href="#personalizador"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-white/60 flex items-center justify-between"
            >
              <span>🧇 Arma tu Cuchareable</span>
              <span className="bg-brand-pink text-white text-[10px] px-2 py-0.5 rounded-full">POPULAR</span>
            </a>
            <a
              href="#local"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-white/60 flex items-center gap-2"
            >
              <MapPin className="w-4 h-4 text-brand-pink" />
              <span>Local Zarzal (Cra 11)</span>
            </a>
            <a
              href="#proximidad"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-white/60"
            >
              🔔 Club Proximidad & Descuentos
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                requestRealLocation();
              }}
              className="w-full mt-2 py-2.5 bg-brand-pink text-white rounded-xl text-center text-sm font-bold shadow-neon-sm flex items-center justify-center gap-2"
            >
              <Radio className="w-4 h-4" />
              <span>Activar Radar de Proximidad</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

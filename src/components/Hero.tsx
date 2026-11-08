import React from 'react';
import { Sparkles, MapPin, ArrowRight, ShieldCheck, Heart, Flame } from 'lucide-react';
import { STORE_INFO } from '../data/menuData';

interface HeroProps {
  onOpenCustomizer: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCustomizer }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24">
      {/* Decorative background orbs with pink dessert aura */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-brand-pink/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-brand-coral/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-brand-waffle/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Story & Call to Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-softpink border border-brand-pink/30 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-brand-pink animate-ping" />
              <span className="text-xs font-bold text-brand-pink uppercase tracking-wider">
                La Heladería Más Viral de Zarzal
              </span>
              <Sparkles className="w-3.5 h-3.5 text-brand-waffle" />
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-chocolate tracking-tight leading-[1.15]">
              El arte de <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink via-brand-coral to-brand-pink">cucharear</span> cada instante dulce.
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-brand-chocolate/75 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Sumérgete en la experiencia de nuestros famosos <b>Waffles en Cono</b>, potes de helado artesanal con capas secretas y <b>Bowls de frutas</b> con Lucky Charms. Diseñados para disfrutar con cada cucharada.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#menu"
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-brand-pink to-brand-coral text-white font-bold rounded-2xl shadow-neon-pink hover:opacity-95 hover:scale-[1.02] active:scale-95 transition-all text-center flex items-center justify-center gap-2 text-base"
              >
                <span>Explorar Menú Digital</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenCustomizer}
                className="w-full sm:w-auto px-7 py-4 bg-white text-brand-chocolate font-bold rounded-2xl border-2 border-brand-pink/30 hover:border-brand-pink hover:bg-brand-softpink/50 transition-all text-center flex items-center justify-center gap-2 text-base shadow-sm group"
              >
                <span className="text-xl group-hover:rotate-12 transition-transform">🥄</span>
                <span>Arma tu Cuchareable</span>
              </button>
            </div>

            {/* Value Props Badges */}
            <div className="pt-6 border-t border-brand-pink/15 grid grid-cols-3 gap-4 text-center lg:text-left">
              <div className="space-y-1">
                <div className="flex items-center justify-center lg:justify-start gap-1 text-brand-pink font-bold text-lg sm:text-xl">
                  <Flame className="w-4 h-4" />
                  <span>100%</span>
                </div>
                <p className="text-xs text-brand-chocolate/70 font-medium">Waffles hechos al instante</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center justify-center lg:justify-start gap-1 text-brand-waffle font-bold text-lg sm:text-xl">
                  <span>+15</span>
                </div>
                <p className="text-xs text-brand-chocolate/70 font-medium">Toppings & Salsas</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center justify-center lg:justify-start gap-1 text-emerald-600 font-bold text-lg sm:text-xl">
                  <ShieldCheck className="w-4 h-4" />
                  <span>4.9 ★</span>
                </div>
                <p className="text-xs text-brand-chocolate/70 font-medium">En Zarzal, Valle</p>
              </div>
            </div>

            {/* Store Location Notice */}
            <div className="bg-white/80 rounded-2xl p-3.5 border border-brand-pink/20 flex items-center justify-between gap-3 text-left">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-softpink text-brand-pink flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-brand-chocolate">Visítanos en Zarzal</p>
                  <p className="text-xs text-brand-chocolate/70">{STORE_INFO.address} • Lunes a Domingo de 2 PM a 11 PM</p>
                </div>
              </div>
              <a
                href="#local"
                className="text-xs font-bold text-brand-pink hover:underline whitespace-nowrap hidden sm:block"
              >
                Ver Mapa →
              </a>
            </div>
          </div>

          {/* Right Column: Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              
              {/* Main Visual Card */}
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white group">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1559620192-032c4bc4674e?auto=format&fit=crop&w=1000&q=80"
                    alt="Waffle en Cono CuchareArte"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-chocolate/80 via-transparent to-transparent" />
                  
                  {/* Floating Tags on the image */}
                  <div className="absolute top-4 left-4 bg-brand-pink text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>WAFFLE EN CONO</span>
                  </div>

                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-brand-chocolate text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                    $15.000 COP
                  </div>

                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <p className="text-xs text-brand-waffle font-bold uppercase tracking-wider flex items-center gap-1">
                      <Heart className="w-3.5 h-3.5 fill-brand-waffle" />
                      Especialidad de la Casa
                    </p>
                    <h3 className="font-display text-2xl font-bold leading-tight">
                      Fresas Frescas & Perlas de Chocolate Blanco
                    </h3>
                    <p className="text-xs text-white/80 mt-1 line-clamp-1">
                      Cono artesanal tibio + Helado cremoso + Baño de Nutella
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: Proximity Offer */}
              <div className="absolute -top-6 -left-6 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-card border border-brand-pink/20 flex items-center gap-3 animate-float">
                <div className="w-10 h-10 rounded-xl bg-brand-pink text-white flex items-center justify-center font-bold text-lg">
                  🎁
                </div>
                <div>
                  <p className="text-[11px] font-bold text-brand-pink uppercase tracking-wider">
                    Alerta de Proximidad
                  </p>
                  <p className="text-xs font-bold text-brand-chocolate">
                    Topping Gratis al pasar cerca
                  </p>
                </div>
              </div>

              {/* Floating Badge 2: Lucky Charms / Toppings */}
              <div className="absolute -bottom-6 -right-4 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-card border border-brand-pink/20 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-softpink text-2xl flex items-center justify-center">
                  🌈
                </div>
                <div>
                  <div className="flex items-center gap-1 text-xs font-bold text-brand-chocolate">
                    <span>Lucky Charms & Nutella</span>
                  </div>
                  <p className="text-[11px] text-brand-chocolate/70">
                    Toppings favoritos de los clientes
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

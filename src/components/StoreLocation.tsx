import React from 'react';
import { MapPin, Navigation, Clock, Phone } from 'lucide-react';
import { STORE_INFO } from '../data/menuData';
import { isStoreOpen } from '../utils/geo';

export const StoreLocation: React.FC = () => {
  const status = isStoreOpen();

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${STORE_INFO.coords.lat},${STORE_INFO.coords.lng}`;
  const wazeUrl = `https://waze.com/ul?ll=${STORE_INFO.coords.lat},${STORE_INFO.coords.lng}&navigate=yes`;

  return (
    <section id="local" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-softpink text-brand-pink text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5" />
            <span>Zarzal, Valle del Cauca</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-chocolate tracking-tight">
            Visítanos en nuestro local rosa
          </h2>
          <p className="text-sm sm:text-base text-brand-chocolate/75">
            Un espacio mágico y acogedor con iluminación neón, música dulce y el aroma inconfundible de waffles recién horneados.
          </p>
        </div>

        {/* Content Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-brand-softpink/40 rounded-3xl p-6 sm:p-10 border border-brand-pink/20 shadow-card">
          
          {/* Left Info Column */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Live Status indicator */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-brand-pink/20 text-xs font-bold shadow-sm">
              <span className={`w-2.5 h-2.5 rounded-full ${status.isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-amber-400'}`} />
              <span className="text-brand-chocolate">{status.statusText}</span>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-pink text-white flex items-center justify-center flex-shrink-0 shadow-neon-sm">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-lg text-brand-chocolate">Dirección</h4>
                  <p className="text-sm text-brand-chocolate/80 font-medium">{STORE_INFO.address}</p>
                  <p className="text-xs text-brand-chocolate/60">{STORE_INFO.neighborhood} • {STORE_INFO.city}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-softpink text-brand-pink flex items-center justify-center flex-shrink-0 border border-brand-pink/20">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-lg text-brand-chocolate">Horario de Atención</h4>
                  <p className="text-sm text-brand-chocolate/80 font-medium">Lunes a Domingo</p>
                  <p className="text-xs text-brand-chocolate/60">2:00 PM a 11:00 PM (Jornada Continua)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-lg text-brand-chocolate">WhatsApp de Pedidos</h4>
                  <p className="text-sm text-brand-chocolate/80 font-medium">{STORE_INFO.phone}</p>
                  <p className="text-xs text-brand-chocolate/60">Atención rápida y domicilios en Zarzal</p>
                </div>
              </div>
            </div>

            {/* Action Buttons for Navigation */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-5 rounded-xl bg-brand-pink text-white text-xs font-bold flex items-center justify-center gap-2 hover:bg-brand-hotpink transition-all shadow-neon-sm"
              >
                <Navigation className="w-4 h-4" />
                <span>Abrir en Google Maps</span>
              </a>

              <a
                href={wazeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-5 rounded-xl bg-white border border-brand-pink/30 text-brand-chocolate text-xs font-bold flex items-center justify-center gap-2 hover:bg-brand-softpink transition-all"
              >
                <span>Navegar con Waze 🚗</span>
              </a>
            </div>

          </div>

          {/* Right Visual Column (Photos of local) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-xl aspect-[4/3] bg-brand-pink/10 group">
              <img
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1000&q=80"
                alt="Ambiente rosa CuchareArte Zarzal"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-chocolate/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="bg-brand-pink text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                  Experiencia en Local
                </span>
                <h4 className="font-display text-xl font-bold mt-1">Ambiente 100% Instagrameable</h4>
                <p className="text-xs text-white/80">Barra acanalada rosa pastel, luces neón y los mejores cuchareables.</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 text-center">
              <div className="p-3.5 bg-white rounded-2xl border border-brand-pink/15">
                <p className="font-bold text-sm text-brand-chocolate">Pet Friendly 🐾</p>
                <p className="text-[11px] text-brand-chocolate/60">Ven con tu peludito a la terraza</p>
              </div>
              <div className="p-3.5 bg-white rounded-2xl border border-brand-pink/15">
                <p className="font-bold text-sm text-brand-chocolate">Wi-Fi Gratis ⚡</p>
                <p className="text-[11px] text-brand-chocolate/60">Comparte tus fotos al instante</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

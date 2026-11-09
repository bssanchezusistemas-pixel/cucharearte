import React from 'react';
import { Camera, MapPin, Phone, Heart } from 'lucide-react';
import { STORE_INFO } from '../data/menuData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-chocolate text-white pt-16 pb-12 border-t border-brand-pink/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-brand-pink flex items-center justify-center text-2xl shadow-neon-sm">
                🍦
              </div>
              <div>
                <span className="font-display font-bold text-2xl tracking-tight text-white flex items-center gap-1">
                  Cuchare<span className="text-brand-pink">Arte</span>
                </span>
                <p className="text-xs text-white/60 -mt-0.5">Zarzal, Valle del Cauca</p>
              </div>
            </div>

            <p className="text-xs text-white/75 leading-relaxed max-w-sm">
              La heladería de cuchareables, waffles en cono recién horneados y bowls de fruta que endulzan los días de Zarzal. Hecho con pasión, capas generosas y la mejor vibra.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={STORE_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-brand-pink text-white flex items-center justify-center transition-colors"
                title="Instagram"
              >
                <Camera className="w-5 h-5" />
              </a>
              <a
                href={`https://wa.me/${STORE_INFO.phoneRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-emerald-600 text-white flex items-center justify-center transition-colors"
                title="WhatsApp"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-brand-pink">
              Navegación
            </h4>
            <ul className="text-xs space-y-2 text-white/80">
              <li>
                <a href="#menu" className="hover:text-brand-pink transition-colors">
                  🍨 Menú Digital
                </a>
              </li>
              <li>
                <a href="#personalizador" className="hover:text-brand-pink transition-colors">
                  🧇 Personalizador de Potes
                </a>
              </li>
              <li>
                <a href="#proximidad" className="hover:text-brand-pink transition-colors">
                  🔔 Club Proximidad & Descuentos
                </a>
              </li>
              <li>
                <a href="#local" className="hover:text-brand-pink transition-colors">
                  📍 Cómo Llegar (Cra 11)
                </a>
              </li>
            </ul>
          </div>

          {/* Hours & Contact */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-brand-pink">
              Visítanos en Zarzal
            </h4>
            <div className="text-xs text-white/80 space-y-2">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-pink flex-shrink-0 mt-0.5" />
                <span>{STORE_INFO.address}, Zarzal, Valle del Cauca</span>
              </p>
              <p className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>WhatsApp: {STORE_INFO.phone}</span>
              </p>
              <p className="text-white/60 pt-1">
                Lunes a Domingo • 2:00 PM a 11:00 PM
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50 text-center sm:text-left">
          <p>© {new Date().getFullYear()} CuchareArte Zarzal. Todos los derechos reservados.</p>
          <p className="flex items-center justify-center gap-1">
            <span>Hecho con</span>
            <Heart className="w-3.5 h-3.5 fill-brand-pink text-brand-pink" />
            <span>para los amantes de los cuchareables</span>
          </p>
        </div>

      </div>
    </footer>
  );
};

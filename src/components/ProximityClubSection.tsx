import React from 'react';
import { Radio, Bell, Gift, Sparkles, Navigation } from 'lucide-react';
import { useProximity } from '../context/ProximityContext';

export const ProximityClubSection: React.FC = () => {
  const { requestRealLocation, isNearby, distanceMeters } = useProximity();

  return (
    <section id="proximidad" className="py-16 md:py-24 bg-gradient-to-b from-white via-brand-softpink/40 to-white relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-pink/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-pink text-white text-xs font-bold uppercase tracking-wider shadow-sm">
            <Radio className="w-3.5 h-3.5 animate-pulse" />
            <span>Club CuchareArte Proximidad</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-chocolate tracking-tight">
            Notificaciones de antojo cuando pasas por el local
          </h2>
          <p className="text-sm sm:text-base text-brand-chocolate/75">
            ¿Caminas frecuentemente por la Cra 11 o el centro de Zarzal? Activa nuestro radar inteligente y recibe beneficios exclusivos y toppings gratis cada vez que estés cerca.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          
          <div className="bg-white rounded-3xl p-8 border border-brand-pink/20 shadow-card space-y-4 relative group hover:-translate-y-1 transition-transform">
            <div className="w-14 h-14 rounded-2xl bg-brand-softpink text-brand-pink flex items-center justify-center text-2xl font-bold shadow-sm">
              <Navigation className="w-7 h-7" />
            </div>
            <div className="space-y-2">
              <span className="text-xs font-extrabold text-brand-pink uppercase tracking-wider">Paso 1</span>
              <h3 className="font-display font-bold text-xl text-brand-chocolate">Activa tu Radar</h3>
              <p className="text-xs text-brand-chocolate/70 leading-relaxed">
                Presiona el botón de radar y autoriza los permisos de ubicación y notificaciones en tu navegador móvil.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-brand-pink/20 shadow-card space-y-4 relative group hover:-translate-y-1 transition-transform">
            <div className="w-14 h-14 rounded-2xl bg-brand-softpink text-brand-waffle flex items-center justify-center text-2xl font-bold shadow-sm">
              <Bell className="w-7 h-7" />
            </div>
            <div className="space-y-2">
              <span className="text-xs font-extrabold text-brand-waffle uppercase tracking-wider">Paso 2</span>
              <h3 className="font-display font-bold text-xl text-brand-chocolate">Pasa por Cra 11 # 8-59</h3>
              <p className="text-xs text-brand-chocolate/70 leading-relaxed">
                Cuando tu teléfono detecte que estás a menos de 250 metros del local, sonará una alerta con tu cupón del día.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-brand-pink/20 shadow-card space-y-4 relative group hover:-translate-y-1 transition-transform">
            <div className="w-14 h-14 rounded-2xl bg-brand-softpink text-brand-pink flex items-center justify-center text-2xl font-bold shadow-sm">
              <Gift className="w-7 h-7" />
            </div>
            <div className="space-y-2">
              <span className="text-xs font-extrabold text-brand-pink uppercase tracking-wider">Paso 3</span>
              <h3 className="font-display font-bold text-xl text-brand-chocolate">¡Disfruta tu Regalo!</h3>
              <p className="text-xs text-brand-chocolate/70 leading-relaxed">
                Muestra la notificación en caja o aplícala en tu pedido para llevarte un topping extra, salsa tibia o 10% de descuento.
              </p>
            </div>
          </div>

        </div>

        {/* Live CTA Box */}
        <div className="rounded-3xl bg-white border-2 border-brand-pink/30 p-8 shadow-card max-w-2xl mx-auto text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-softpink text-brand-pink rounded-full text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Radio de Detección: 250 metros de CuchareArte</span>
          </div>

          <h3 className="font-display text-2xl font-bold text-brand-chocolate">
            {isNearby ? '¡Ya estás en rango del local! 🎉' : '¿Quieres probarlo en este momento?'}
          </h3>

          <p className="text-xs text-brand-chocolate/75 max-w-md mx-auto">
            {distanceMeters !== null
              ? `Tu distancia calculada actualmente es de ${distanceMeters} metros al local de Zarzal.`
              : 'Presiona el botón para sincronizar tus coordenadas o utiliza el simulador interactivo de la esquina izquierda.'}
          </p>

          <div className="pt-2">
            <button
              onClick={requestRealLocation}
              className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-brand-pink to-brand-coral text-white font-bold text-sm shadow-neon-pink hover:scale-105 active:scale-95 transition-all inline-flex items-center gap-2"
            >
              <Radio className="w-4 h-4" />
              <span>{isNearby ? 'Ver Cupón Desbloqueado' : 'Activar Radar de Proximidad 🔔'}</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

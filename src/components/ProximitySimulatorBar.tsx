import React, { useState } from 'react';
import { Radio, ChevronUp, ChevronDown, Navigation, RotateCcw } from 'lucide-react';
import { useProximity } from '../context/ProximityContext';
import { STORE_INFO } from '../data/menuData';

export const ProximitySimulatorBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const {
    distanceMeters,
    isNearby,
    simulateDistance,
    requestRealLocation,
    resetNotificationState
  } = useProximity();

  return (
    <div className="fixed bottom-4 left-4 z-40 max-w-sm transition-all select-none">
      <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-brand-pink/30 overflow-hidden">
        
        {/* Toggle Bar */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-4 py-2.5 bg-gradient-to-r from-brand-chocolate to-brand-dark text-white text-xs font-bold flex items-center justify-between gap-2 hover:opacity-95 transition-opacity"
        >
          <div className="flex items-center gap-2">
            <Radio className={`w-3.5 h-3.5 text-brand-pink ${isNearby ? 'animate-ping' : ''}`} />
            <span>Simulador de Proximidad GPS</span>
            {isNearby && (
              <span className="bg-emerald-500 text-white text-[9px] px-1.5 py-0.2 rounded-full uppercase">
                ¡En Rango!
              </span>
            )}
          </div>
          {isOpen ? <ChevronDown className="w-4 h-4 text-white/70" /> : <ChevronUp className="w-4 h-4 text-white/70" />}
        </button>

        {/* Content Box */}
        {isOpen && (
          <div className="p-4 space-y-3 text-xs">
            <p className="text-[11px] text-brand-chocolate/70 leading-tight">
              Prueba en vivo cómo reacciona la web cuando un cliente camina cerca del local en <b>{STORE_INFO.address}</b>:
            </p>

            {/* Current distance display */}
            <div className="p-2.5 rounded-xl bg-brand-softpink/60 border border-brand-pink/20 flex items-center justify-between">
              <span className="font-semibold text-brand-chocolate/80">Distancia actual al local:</span>
              <span className={`font-mono font-bold ${isNearby ? 'text-emerald-600 animate-pulse' : 'text-brand-pink'}`}>
                {distanceMeters !== null
                  ? distanceMeters < 1000
                    ? `${distanceMeters} metros`
                    : `${(distanceMeters / 1000).toFixed(1)} km`
                  : 'Sin calibrar'}
              </span>
            </div>

            {/* Quick Simulation Presets */}
            <div className="grid grid-cols-3 gap-1.5">
              <button
                type="button"
                onClick={() => simulateDistance(5000)}
                className="py-2 px-1 rounded-lg border border-slate-200 hover:bg-slate-50 text-[11px] font-semibold text-center text-slate-700"
              >
                📍 A 5 km
                <span className="block text-[9px] text-slate-400">Lejos</span>
              </button>

              <button
                type="button"
                onClick={() => simulateDistance(180)}
                className="py-2 px-1 rounded-lg border-2 border-brand-pink bg-brand-softpink hover:bg-brand-blush text-[11px] font-bold text-center text-brand-pink shadow-sm"
              >
                🚶‍♂️ A 180 m
                <span className="block text-[9px] text-brand-pink/80">Cra 11 (Alerta)</span>
              </button>

              <button
                type="button"
                onClick={() => simulateDistance(15)}
                className="py-2 px-1 rounded-lg border border-emerald-300 bg-emerald-50 hover:bg-emerald-100 text-[11px] font-bold text-center text-emerald-800"
              >
                🍦 A 15 m
                <span className="block text-[9px] text-emerald-600">En Mesa</span>
              </button>
            </div>

            {/* Real GPS button & Reset */}
            <div className="flex gap-2 pt-1 border-t border-slate-100">
              <button
                type="button"
                onClick={requestRealLocation}
                className="flex-1 py-1.5 px-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-semibold flex items-center justify-center gap-1.5"
              >
                <Navigation className="w-3 h-3 text-brand-pink" />
                <span>Usar mi GPS Real</span>
              </button>

              <button
                type="button"
                onClick={resetNotificationState}
                className="p-1.5 rounded-lg border border-slate-200 text-slate-500 hover:text-brand-pink"
                title="Reiniciar estado de alerta"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};

import React, { createContext, useContext, useState, useCallback } from 'react';
import confetti from 'canvas-confetti';
import { STORE_INFO } from '../data/menuData';
import { calculateDistanceMeters } from '../utils/geo';
import { playChime } from '../utils/audio';

interface ProximityContextType {
  enabled: boolean;
  permissionStatus: 'prompt' | 'granted' | 'denied' | 'unsupported';
  distanceMeters: number | null;
  isNearby: boolean;
  hasNotified: boolean;
  showNearbyAlert: boolean;
  couponCode: string;
  isSimulated: boolean;
  requestRealLocation: () => Promise<void>;
  simulateDistance: (meters: number) => void;
  dismissAlert: () => void;
  resetNotificationState: () => void;
}

const ProximityContext = createContext<ProximityContextType | undefined>(undefined);

export const ProximityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [permissionStatus, setPermissionStatus] = useState<'prompt' | 'granted' | 'denied' | 'unsupported'>('prompt');
  const [distanceMeters, setDistanceMeters] = useState<number | null>(null);
  const [isNearby, setIsNearby] = useState(false);
  const [hasNotified, setHasNotified] = useState(false);
  const [showNearbyAlert, setShowNearbyAlert] = useState(false);
  const [isSimulated, setIsSimulated] = useState(false);
  const couponCode = 'CERQUITA-TOPPING';

  // Trigger celebration & notification
  const triggerNearbyEvent = useCallback((distance: number) => {
    setIsNearby(true);
    setShowNearbyAlert(true);
    setHasNotified(true);
    
    // Play cheerful audio chime
    playChime();

    // Fire festive confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#FF2A85', '#FF4D6D', '#F59E0B', '#FFFFFF']
      });
    } catch (e) {
      console.warn('Confetti error', e);
    }

    // Attempt Native Web Notification
    if ('Notification' in window && Notification.permission === 'granted') {
      try {
        new Notification('¡Estás cerquita de CuchareArte! 🍦🥄', {
          body: `Estás a solo ${distance}m de nuestro local en Cra 11 # 8-59. ¡Entra y reclama tu topping gratis con el código CERQUITA-TOPPING!`,
          icon: 'https://images.unsplash.com/photo-1559620192-032c4bc4674e?auto=format&fit=crop&w=128&q=80',
          badge: 'https://images.unsplash.com/photo-1559620192-032c4bc4674e?auto=format&fit=crop&w=128&q=80'
        });
      } catch (e) {
        console.warn('Native push error', e);
      }
    }
  }, []);

  // Simulator helper
  const simulateDistance = (meters: number) => {
    setIsSimulated(true);
    setDistanceMeters(meters);

    if (meters <= STORE_INFO.geofenceRadiusMeters) {
      triggerNearbyEvent(meters);
    } else {
      setIsNearby(false);
      setShowNearbyAlert(false);
    }
  };

  // Real GPS Geolocation request
  const requestRealLocation = async () => {
    if (!('geolocation' in navigator)) {
      setPermissionStatus('unsupported');
      alert('Tu navegador no soporta geolocalización. Puedes usar el simulador de cercanía en la esquina.');
      return;
    }

    // Ask for browser push notifications if possible
    if ('Notification' in window && Notification.permission === 'default') {
      try {
        await Notification.requestPermission();
      } catch (e) {
        console.warn('Notification permission error', e);
      }
    }

    setIsSimulated(false);

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPermissionStatus('granted');
        const dist = calculateDistanceMeters(pos.coords.latitude, pos.coords.longitude);
        setDistanceMeters(dist);

        if (dist <= STORE_INFO.geofenceRadiusMeters) {
          triggerNearbyEvent(dist);
        } else {
          setIsNearby(false);
        }
      },
      (err) => {
        console.warn('Geolocation error:', err);
        setPermissionStatus('denied');
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0
      }
    );

    // Watch position in background
    navigator.geolocation.watchPosition(
      (pos) => {
        if (!isSimulated) {
          const dist = calculateDistanceMeters(pos.coords.latitude, pos.coords.longitude);
          setDistanceMeters(dist);
          if (dist <= STORE_INFO.geofenceRadiusMeters && !hasNotified) {
            triggerNearbyEvent(dist);
          }
        }
      },
      () => {},
      { enableHighAccuracy: true }
    );
  };

  const dismissAlert = () => {
    setShowNearbyAlert(false);
  };

  const resetNotificationState = () => {
    setHasNotified(false);
    setShowNearbyAlert(false);
  };

  return (
    <ProximityContext.Provider
      value={{
        enabled: true,
        permissionStatus,
        distanceMeters,
        isNearby,
        hasNotified,
        showNearbyAlert,
        couponCode,
        isSimulated,
        requestRealLocation,
        simulateDistance,
        dismissAlert,
        resetNotificationState
      }}
    >
      {children}
    </ProximityContext.Provider>
  );
};

export const useProximity = () => {
  const ctx = useContext(ProximityContext);
  if (!ctx) throw new Error('useProximity must be used within ProximityProvider');
  return ctx;
};

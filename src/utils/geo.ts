import { STORE_INFO } from '../data/menuData';

/**
 * Calculates distance between two GPS coordinates using the Haversine formula
 * @returns distance in meters
 */
export function calculateDistanceMeters(
  lat1: number,
  lon1: number,
  lat2: number = STORE_INFO.coords.lat,
  lon2: number = STORE_INFO.coords.lng
): number {
  const R = 6371e3; // Earth radius in meters
  const phi1 = (lat1 * Math.PI) / 180;
  const phi2 = (lat2 * Math.PI) / 180;
  const deltaPhi = ((lat2 - lat1) * Math.PI) / 180;
  const deltaLambda = ((lon2 - lon1) * Math.PI) / 180;

  const a =
    Math.sin(deltaPhi / 2) * Math.sin(deltaPhi / 2) +
    Math.cos(phi1) * Math.cos(phi2) * Math.sin(deltaLambda / 2) * Math.sin(deltaLambda / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return Math.round(R * c);
}

export function formatDistance(meters: number): string {
  if (meters < 1000) {
    return `${meters} m`;
  }
  return `${(meters / 1000).toFixed(1)} km`;
}

/**
 * Check if the store is currently open based on current Colombia time (UTC-5)
 */
export function isStoreOpen(): { isOpen: boolean; statusText: string } {
  // Current time in Colombia
  const now = new Date();
  // Colombia is UTC-5
  const utcHours = now.getUTCHours();
  const colombiaHour = (utcHours - 5 + 24) % 24;

  const isOpen = colombiaHour >= STORE_INFO.openHour && colombiaHour < STORE_INFO.closeHour;

  if (isOpen) {
    return {
      isOpen: true,
      statusText: `Abierto Ahora • Cierra a las 11:00 PM`
    };
  } else {
    return {
      isOpen: false,
      statusText: `Cerrado • Abre hoy a las 2:00 PM`
    };
  }
}

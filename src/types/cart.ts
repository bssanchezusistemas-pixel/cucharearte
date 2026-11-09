import type { MenuItem } from '../data/menuData';

export interface CartItem {
  id: string; // unique cart line id
  menuItem: MenuItem;
  quantity: number;
  customization?: {
    size?: string;
    sizePriceExtra?: number;
    flavors: string[];
    sauces: string[];
    toppings: string[];
    notes?: string;
  };
  totalUnitPrice: number;
}

export interface ProximityState {
  enabled: boolean;
  permissionStatus: 'prompt' | 'granted' | 'denied' | 'unsupported';
  userCoords: { lat: number; lng: number } | null;
  distanceMeters: number | null;
  isNearby: boolean; // <= STORE_INFO.geofenceRadiusMeters
  hasNotified: boolean;
  couponCode: string | null;
  isSimulated: boolean;
}

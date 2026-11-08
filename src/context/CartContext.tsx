import React, { createContext, useContext, useState, useEffect } from 'react';
import { MenuItem } from '../data/menuData';
import { CartItem } from '../types/cart';

interface CartContextType {
  items: CartItem[];
  addItem: (item: MenuItem, customization?: CartItem['customization']) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, delta: number) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
  discountAmount: number;
  finalTotal: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  activeCoupon: string | null;
  applyCoupon: (code: string) => boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('cucharearte_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeCoupon, setActiveCoupon] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem('cucharearte_cart', JSON.stringify(items));
    } catch (e) {
      console.warn('Could not save cart to localStorage', e);
    }
  }, [items]);

  const addItem = (menuItem: MenuItem, customization?: CartItem['customization']) => {
    const sizeExtra = customization?.sizePriceExtra || 0;
    const totalUnitPrice = menuItem.price + sizeExtra;

    const cartLineId = customization
      ? `${menuItem.id}-${Date.now()}`
      : menuItem.id;

    setItems(prev => {
      // If it's a non-customized item and already in cart, increment quantity
      if (!customization) {
        const existing = prev.find(i => i.id === menuItem.id);
        if (existing) {
          return prev.map(i =>
            i.id === menuItem.id
              ? { ...i, quantity: i.quantity + 1 }
              : i
          );
        }
      }
      return [
        ...prev,
        {
          id: cartLineId,
          menuItem,
          quantity: 1,
          customization,
          totalUnitPrice
        }
      ];
    });

    setIsCartOpen(true);
  };

  const removeItem = (id: string) => {
    setItems(prev => prev.filter(i => i.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setItems(prev =>
      prev
        .map(i => {
          if (i.id === id) {
            const newQty = i.quantity + delta;
            return newQty > 0 ? { ...i, quantity: newQty } : null;
          }
          return i;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const applyCoupon = (code: string) => {
    const clean = code.trim().toUpperCase();
    if (clean === 'CERQUITA-TOPPING' || clean === 'ZARZAL10' || clean === 'CUCHAREARTE') {
      setActiveCoupon(clean);
      return true;
    }
    return false;
  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + item.totalUnitPrice * item.quantity, 0);

  // If coupon CERQUITA-TOPPING or ZARZAL10, grant 10% discount or free topping worth 3000 COP
  const discountAmount = activeCoupon
    ? Math.round(subtotal * 0.1)
    : 0;

  const finalTotal = Math.max(0, subtotal - discountAmount);

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalItems,
        subtotal,
        discountAmount,
        finalTotal,
        isCartOpen,
        setIsCartOpen,
        activeCoupon,
        applyCoupon
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
};

import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import { ProximityProvider } from './context/ProximityContext';
import { Header } from './components/Header';
import { PromoTicker } from './components/PromoTicker';
import { Hero } from './components/Hero';
import { MenuSection } from './components/MenuSection';
import { ProximityClubSection } from './components/ProximityClubSection';
import { StoreLocation } from './components/StoreLocation';
import { InstagramFeed } from './components/InstagramFeed';
import { Footer } from './components/Footer';
import { CustomizerModal } from './components/CustomizerModal';
import { CartDrawer } from './components/CartDrawer';
import { ProximityModal } from './components/ProximityModal';
import { ProximitySimulatorBar } from './components/ProximitySimulatorBar';
import type { MenuItem } from './data/menuData';

const MainContent: React.FC = () => {
  const [customizerOpen, setCustomizerOpen] = useState(false);
  const [itemToCustomize, setItemToCustomize] = useState<MenuItem | null>(null);

  const handleOpenCustomizerFor = (item: MenuItem) => {
    setItemToCustomize(item);
    setCustomizerOpen(true);
  };

  const handleOpenCustomizerFree = () => {
    setItemToCustomize(null);
    setCustomizerOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-brand-cream text-brand-chocolate">
      {/* Top Navigation */}
      <Header />

      {/* Sweet moving banner */}
      <PromoTicker />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onOpenCustomizer={handleOpenCustomizerFree} />
        <MenuSection
          onCustomizeItem={handleOpenCustomizerFor}
          onOpenCustomizerFree={handleOpenCustomizerFree}
        />
        <ProximityClubSection />
        <StoreLocation />
        <InstagramFeed />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals and Drawers */}
      <CustomizerModal
        isOpen={customizerOpen}
        onClose={() => setCustomizerOpen(false)}
        baseItem={itemToCustomize}
      />
      <CartDrawer />
      <ProximityModal />

      {/* Interactive GPS / Proximity Simulator for demo */}
      <ProximitySimulatorBar />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <CartProvider>
      <ProximityProvider>
        <MainContent />
      </ProximityProvider>
    </CartProvider>
  );
};

export default App;

import { useState } from 'react';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { Collection } from './components/Collection';
import { Categories } from './components/Categories';
import { About } from './components/About';
import { Lookbook } from './components/Lookbook';
import { Benefits } from './components/Benefits';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { ProductModal } from './components/ProductModal';
import { CartDrawer } from './components/CartDrawer';
import { LegalModal } from './components/LegalModal';
import { WhatsAppButton } from './components/WhatsAppButton';
import type { Product } from './data/products';

export function AppContent() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [legalModalOpen, setLegalModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#080809] text-zinc-100 flex flex-col selection:bg-white selection:text-black">
      {/* Top Navbar */}
      <Navbar onOpenLegal={() => setLegalModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero */}
        <Hero />

        {/* 2. Running Streetwear Marquee */}
        <Marquee />

        {/* 3. Nueva Colección */}
        <Collection onSelectProduct={(prod) => setSelectedProduct(prod)} />

        {/* 4. Categorías Visuales Bento */}
        <Categories />

        {/* 5. Sección de Marca / Manifiesto */}
        <About onOpenLegal={() => setLegalModalOpen(true)} />

        {/* 6. Lookbook Streetwear Archive */}
        <Lookbook />

        {/* 7. Beneficios */}
        <Benefits />

        {/* 8. Banner CTA */}
        <CTA />
      </main>

      {/* Footer */}
      <Footer onOpenLegal={() => setLegalModalOpen(true)} />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppButton />

      {/* Shopping Cart Drawer */}
      <CartDrawer />

      {/* Product Quick View / Detail Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

      {/* Legal & Chamber of Commerce Certificate Modal */}
      <LegalModal
        isOpen={legalModalOpen}
        onClose={() => setLegalModalOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}

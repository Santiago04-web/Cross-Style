import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { BUSINESS_INFO } from '../data/products';
import logoImg from '../assets/logo/cross-style-logo.jpg';

interface NavbarProps {
  onOpenLegal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const { totalItems, setIsCartOpen } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'INICIO', href: '#inicio' },
    { label: 'COLECCIÓN', href: '#coleccion' },
    { label: 'CATEGORÍAS', href: '#categorias' },
    { label: 'NOSOTROS', href: '#nosotros' },
    { label: 'CONTACTO', href: '#contacto' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#080809]/90 backdrop-blur-md border-b border-zinc-800/80 py-3 shadow-2xl'
            : 'bg-gradient-to-b from-[#080809]/80 via-[#080809]/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* LOGO & BRAND SYMBOL */}
            <a href="#inicio" className="group flex items-center gap-3">
              <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border border-zinc-700/80 p-0.5 bg-black transition-transform duration-300 group-hover:scale-105 group-hover:border-zinc-400">
                <img
                  src={logoImg}
                  alt="Cross Style Logo"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold tracking-[0.2em] text-sm sm:text-base text-white group-hover:text-zinc-200 transition-colors">
                  CROSS STYLE
                </span>
                <span className="text-[9px] tracking-[0.3em] text-zinc-400 font-mono uppercase">
                  MÁS QUE ROPA
                </span>
              </div>
            </a>

            {/* DESKTOP NAVIGATION */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs font-semibold tracking-[0.25em] text-zinc-400 hover:text-white transition-colors relative py-1 group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-white transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* RIGHT ACTIONS: WHATSAPP + CART */}
            <div className="flex items-center gap-3 sm:gap-4">
              {/* WhatsApp direct button */}
              <a
                href={BUSINESS_INFO.whatsappCatalogUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-zinc-700/80 bg-zinc-900/60 hover:bg-zinc-800 hover:border-zinc-500 text-xs font-mono tracking-wider text-zinc-200 transition-all hover:scale-105"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>WHATSAPP</span>
              </a>

              {/* Cart Drawer Trigger */}
              <button
                type="button"
                onClick={() => setIsCartOpen(true)}
                aria-label="Abrir carrito"
                className="relative p-2.5 rounded-full border border-zinc-800 hover:border-zinc-600 bg-zinc-900/80 hover:bg-zinc-800 text-white transition-all hover:scale-105"
              >
                <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-200" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-white text-black text-[10px] font-bold rounded-full flex items-center justify-center animate-pulse">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-zinc-300 hover:text-white"
                aria-label="Abrir menú"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE DRAWER MENU */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        />

        {/* Panel */}
        <div
          className={`absolute top-0 right-0 bottom-0 w-[85%] max-w-sm bg-[#0d0d11] border-l border-zinc-800 p-6 flex flex-col justify-between transition-transform duration-300 ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-zinc-800/80">
              <div className="flex items-center gap-3">
                <img
                  src={logoImg}
                  alt="Cross Style"
                  className="w-9 h-9 rounded-full object-cover border border-zinc-700"
                />
                <div>
                  <div className="font-display font-bold text-sm tracking-widest text-white">
                    CROSS STYLE
                  </div>
                  <div className="text-[9px] text-zinc-400 font-mono tracking-widest">
                    MÁS QUE ROPA
                  </div>
                </div>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-zinc-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex flex-col gap-4 mt-8">
              {navLinks.map((link, idx) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-display tracking-widest text-zinc-300 hover:text-white flex items-center justify-between py-2 border-b border-zinc-900 group"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-xs text-zinc-600 font-mono">0{idx + 1}</span>
                    {link.label}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-white transition-colors" />
                </a>
              ))}
            </nav>
          </div>

          <div className="space-y-4 pt-6 border-t border-zinc-800/80">
            <a
              href={BUSINESS_INFO.whatsappCatalogUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 bg-emerald-500/10 border border-emerald-500/40 text-emerald-400 rounded-md font-mono text-xs tracking-wider uppercase hover:bg-emerald-500/20"
            >
              <MessageCircle className="w-4 h-4" />
              <span>PEDIR POR WHATSAPP</span>
            </a>

            <div className="text-center text-[10px] text-zinc-500 font-mono">
              CALI, COLOMBIA // NIT {BUSINESS_INFO.nit}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

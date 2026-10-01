import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/products';

export const WhatsAppButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* TOOLTIP POPUP (DESKTOP) */}
      <div
        className={`hidden sm:flex items-center gap-2 px-4 py-2 bg-zinc-900/95 border border-zinc-700/80 rounded-full shadow-2xl text-xs font-mono text-zinc-200 transition-all duration-300 ${
          showTooltip ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        <span>¿Dudas o pedidos? ¡Escríbenos en WhatsApp!</span>
      </div>

      {/* FLOATING ACTION BUTTON */}
      <a
        href={BUSINESS_INFO.whatsappCatalogUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar a Cross Style por WhatsApp"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="relative group p-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black shadow-[0_10px_25px_rgba(16,185,129,0.35)] transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center"
      >
        {/* Pulse ripple */}
        <span className="absolute inset-0 rounded-full bg-emerald-400/40 animate-ping duration-1000 -z-10" />

        <MessageCircle className="w-6 h-6 text-black fill-current" />
      </a>
    </div>
  );
};

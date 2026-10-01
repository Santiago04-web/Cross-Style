import React from 'react';
import { ArrowDown, MessageCircle, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/products';
import logoImg from '../assets/logo/cross-style-logo.jpg';

export const CTA: React.FC = () => {
  return (
    <section className="relative py-32 bg-[#060608] border-t border-zinc-800/80 overflow-hidden">
      {/* BACKGROUND AMBIENT GLOW */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-zinc-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* SUBTLE BRAND SYMBOL WATERMARK */}
      <div className="absolute right-10 -bottom-10 opacity-5 pointer-events-none select-none hidden lg:block">
        <img src={logoImg} alt="" className="w-96 h-96 object-cover rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        
        {/* KICKER */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-zinc-700 bg-zinc-900/90 text-zinc-300 text-xs font-mono tracking-[0.25em] uppercase mb-8">
          <Sparkles className="w-3.5 h-3.5 text-zinc-300" />
          <span>MÁS QUE ROPA // TU IDENTIDAD</span>
        </div>

        {/* HEADLINE */}
        <h2 className="font-display font-extrabold text-4xl sm:text-7xl lg:text-8xl text-white tracking-tight uppercase leading-[0.95] mb-6">
          <span className="block text-metallic-silver">TU ESTILO.</span>
          <span className="block text-white">TUS REGLAS.</span>
        </h2>

        {/* SUBTEXT */}
        <p className="font-editorial text-lg sm:text-2xl text-zinc-300 max-w-xl mx-auto mb-10 font-light">
          Encuentra tu próxima pieza en <strong className="text-white font-semibold">Cross Style</strong>.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          {/* Button 1 */}
          <a
            href="#coleccion"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4 bg-white text-black font-display font-bold text-xs sm:text-sm tracking-[0.2em] uppercase rounded-none hover:bg-zinc-200 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.25)] hover:scale-105 active:scale-100"
          >
            <span>EXPLORAR COLECCIÓN</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          {/* Button 2 */}
          <a
            href={BUSINESS_INFO.whatsappCatalogUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4 bg-zinc-950 text-white font-display font-bold text-xs sm:text-sm tracking-[0.2em] uppercase border border-zinc-700 hover:border-emerald-500/80 hover:bg-zinc-900 transition-all duration-300 hover:scale-105 group active:scale-100"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
            <span>WHATSAPP</span>
          </a>
        </div>

        {/* MICRO TRUST NOTE */}
        <div className="mt-12 text-[11px] font-mono text-zinc-500 uppercase tracking-widest">
          ENVÍOS A TODO COLOMBIA • ATENCIÓN INMEDIATA POR WHATSAPP • CALI
        </div>

      </div>
    </section>
  );
};

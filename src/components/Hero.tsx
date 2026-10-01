import React from 'react';
import { ArrowDown, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/products';
import bannerImg from '../assets/images/cross-style-banner.png';
import logoImg from '../assets/logo/cross-style-logo.jpg';

export const Hero: React.FC = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#080809]"
    >
      {/* BACKGROUND STREETWEAR EDITORIAL COMPOSITION */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        {/* Banner Collage with overlays */}
        <div className="relative w-full h-full">
          <img
            src={bannerImg}
            alt="Cross Style Streetwear Editorial"
            className="w-full h-full object-cover object-center opacity-30 md:opacity-40 filter contrast-125 saturate-75 scale-105"
          />
          {/* Vignette & Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#080809] via-[#080809]/70 to-[#080809]/80" />
          <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#080809]/60 to-[#080809]" />
          {/* Subtle noise grid */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)`,
              backgroundSize: '32px 32px',
            }}
          />
        </div>
      </div>

      {/* METALLIC AMBIENT GLOW */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-zinc-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* MAIN CONTENT CONTAINER */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center flex flex-col items-center">
        
        {/* TOP STATUS PILL */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-zinc-700/80 bg-zinc-900/80 backdrop-blur-md mb-6 shadow-lg">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-zinc-300">
            CALI, COLOMBIA • STREETWEAR DROP 2026
          </span>
        </div>

        {/* EMBLEM BADGE (SUBTLE) */}
        <div className="mb-4 relative group">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-zinc-600/60 shadow-2xl p-0.5 bg-black transition-transform duration-500 group-hover:scale-105 group-hover:border-zinc-300">
            <img
              src={logoImg}
              alt="Cross Style Emblem"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="absolute -inset-2 bg-gradient-to-r from-zinc-500/20 via-white/10 to-transparent blur-md -z-10 opacity-70 group-hover:opacity-100 transition-opacity" />
        </div>

        {/* BRAND NAME WITH METALLIC BRUTALIST AESTHETIC */}
        <h1 className="font-display font-extrabold tracking-[-0.04em] sm:tracking-[-0.02em] uppercase text-4xl sm:text-6xl md:text-8xl lg:text-9xl text-white leading-none mb-3">
          <span className="block text-metallic-silver drop-shadow-2xl">
            CROSS STYLE
          </span>
        </h1>

        {/* SLOGAN */}
        <div className="relative mb-6">
          <p className="font-display font-bold tracking-[0.3em] sm:tracking-[0.45em] text-lg sm:text-2xl md:text-3xl text-zinc-300 uppercase">
            &ldquo;MÁS QUE ROPA&rdquo;
          </p>
          <div className="h-[2px] w-24 sm:w-32 bg-gradient-to-r from-transparent via-zinc-400 to-transparent mx-auto mt-2" />
        </div>

        {/* SECONDARY COPY */}
        <p className="font-editorial text-sm sm:text-lg md:text-xl text-zinc-300 max-w-xl mx-auto font-light tracking-wide leading-relaxed mb-10">
          Estilo, calidad y actitud.<br />
          <span className="text-white font-medium">Viste tu propia identidad.</span>
        </p>

        {/* CTA BUTTONS */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          {/* Button 1: Ver Colección */}
          <a
            href="#coleccion"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-display font-bold text-xs sm:text-sm tracking-[0.2em] uppercase transition-all duration-300 hover:bg-zinc-200 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>VER COLECCIÓN</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          {/* Button 2: Comprar por WhatsApp */}
          <a
            href={BUSINESS_INFO.whatsappCatalogUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-zinc-900/90 text-white font-display font-bold text-xs sm:text-sm tracking-[0.2em] uppercase border border-zinc-700/80 hover:border-emerald-500/80 hover:bg-zinc-800 transition-all duration-300 hover:-translate-y-0.5 group"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
            <span>COMPRAR POR WHATSAPP</span>
          </a>
        </div>

        {/* LOWER TRUST SPECS RIBBON */}
        <div className="mt-14 sm:mt-18 pt-8 border-t border-zinc-800/80 w-full max-w-4xl grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
          <div className="border-l border-zinc-800 pl-3">
            <span className="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
              UBICACIÓN
            </span>
            <span className="font-editorial text-xs sm:text-sm font-semibold text-zinc-200">
              Cali, Colombia
            </span>
          </div>
          <div className="border-l border-zinc-800 pl-3">
            <span className="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
              REGISTRO OFICIAL
            </span>
            <span className="font-editorial text-xs sm:text-sm font-semibold text-zinc-200">
              NIT 900238405-7
            </span>
          </div>
          <div className="border-l border-zinc-800 pl-3">
            <span className="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
              COLECCIÓN
            </span>
            <span className="font-editorial text-xs sm:text-sm font-semibold text-zinc-200">
              Prendas Exclusivas
            </span>
          </div>
          <div className="border-l border-zinc-800 pl-3">
            <span className="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
              ATENCIÓN DIRECTA
            </span>
            <span className="font-editorial text-xs sm:text-sm font-semibold text-emerald-400">
              WhatsApp 24/7
            </span>
          </div>
        </div>

      </div>

      {/* BOTTOM SCROLL INDICATOR */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-50 hover:opacity-100 transition-opacity">
        <span className="text-[9px] font-mono tracking-[0.3em] uppercase text-zinc-400">SCROLL</span>
        <div className="w-[1px] h-6 bg-gradient-to-b from-zinc-400 to-transparent" />
      </div>
    </section>
  );
};

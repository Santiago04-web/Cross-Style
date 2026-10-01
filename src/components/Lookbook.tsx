import React from 'react';
import { Camera } from 'lucide-react';
import logoImg from '../assets/logo/cross-style-logo.jpg';
import bannerImg from '../assets/images/cross-style-banner.png';

export const Lookbook: React.FC = () => {
  return (
    <section className="relative py-24 bg-[#080809] border-t border-zinc-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2 text-zinc-400">
              <Camera className="w-3.5 h-3.5" />
              <span className="text-[11px] font-mono tracking-[0.3em] uppercase">
                EDITORIAL STREET CULTURE
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white uppercase tracking-tight">
              LOOKBOOK // ARCHIVO 2026
            </h2>
          </div>
          <p className="text-zinc-400 font-editorial text-sm max-w-xs sm:text-right">
            La expresión del asfalto plasmada en cada fotografía y cada detalle.
          </p>
        </div>

        {/* PHOTO GRID WITH EDITORIAL STREETWEAR COLLAGE VIBE */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* PHOTO 1: BRAND LOGO CHROME MEDALLION */}
          <div className="relative group rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 aspect-[4/5] flex flex-col justify-end p-6">
            <img
              src={logoImg}
              alt="Cross Style Chrome Emblem"
              className="absolute inset-0 w-full h-full object-cover filter contrast-125 brightness-90 group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
            <div className="relative z-10">
              <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block mb-1">
                INSIGNIA OFICIAL
              </span>
              <h3 className="font-display font-bold text-xl text-white uppercase">
                CROSS STYLE EMBLEM
              </h3>
            </div>
          </div>

          {/* PHOTO 2: BANNER COLLAGE DETAILS */}
          <div className="relative group rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 aspect-[4/5] flex flex-col justify-end p-6">
            <img
              src={bannerImg}
              alt="Urban Streetwear Collage"
              className="absolute inset-0 w-full h-full object-cover object-right filter contrast-125 brightness-90 group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="relative z-10">
              <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block mb-1">
                CAMPAÑA EDITORIAL
              </span>
              <h3 className="font-display font-bold text-xl text-white uppercase">
                &ldquo;MÁS QUE ROPA&rdquo;
              </h3>
            </div>
          </div>

          {/* PHOTO 3: MODEL STREETWEAR VIBE */}
          <div className="relative group rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 aspect-[4/5] flex flex-col justify-end p-6">
            <img
              src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80"
              alt="Cross Style Street Attitude"
              className="absolute inset-0 w-full h-full object-cover filter contrast-125 brightness-90 group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="relative z-10">
              <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block mb-1">
                IDENTIDAD & ACTITUD
              </span>
              <h3 className="font-display font-bold text-xl text-white uppercase">
                CALI STREET CULTURE
              </h3>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

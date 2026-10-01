import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';

export const Categories: React.FC = () => {
  return (
    <section id="categorias" className="relative py-24 bg-[#080809] border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
            <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-zinc-400">
              ARQUITECTURA VISUAL
            </span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight">
            CATEGORÍAS
          </h2>
          <p className="mt-2 text-zinc-400 font-editorial text-base sm:text-lg">
            Piezas concebidas bajo la filosofía de la moda urbana sin restricciones.
          </p>
        </div>

        {/* ASYMMETRICAL EDITORIAL BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* MAIN HERO CARD: STREETWEAR CULTURE (Span 7 cols) */}
          <div className="md:col-span-7 relative group min-h-[420px] md:min-h-[520px] rounded-3xl overflow-hidden border border-zinc-800/80 bg-zinc-950 flex flex-col justify-end p-6 sm:p-10 transition-all duration-500 hover:border-zinc-500">
            {/* Background Image */}
            <img
              src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=85"
              alt="Streetwear Culture Cross Style"
              className="absolute inset-0 w-full h-full object-cover object-center filter contrast-125 brightness-75 group-hover:scale-105 group-hover:brightness-90 transition-all duration-700"
            />
            {/* Dark Vignette & Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            
            {/* Content */}
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 backdrop-blur-md border border-white/20 text-[10px] font-mono tracking-widest text-white uppercase mb-3">
                <Sparkles className="w-3 h-3 text-white" />
                CONCEPTO CENTRAL
              </div>
              <h3 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight leading-none mb-3">
                STREETWEAR
              </h3>
              <p className="text-zinc-300 font-editorial text-sm sm:text-base max-w-md mb-6 leading-relaxed">
                Prendas de silueta libre, estética oscura y acabados metálicos diseñadas para el asfalto.
              </p>
              <a
                href="#coleccion"
                className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-[0.2em] text-white hover:text-zinc-300 uppercase group/link"
              >
                <span>EXPLORAR TODA LA LÍNEA</span>
                <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN (Span 5 cols) - TWO STACKED TILES */}
          <div className="md:col-span-5 grid grid-cols-1 gap-6">
            
            {/* HOMBRE / MUJER DUAL TILE */}
            <div className="grid grid-cols-2 gap-4 min-h-[220px]">
              {/* Hombre */}
              <a
                href="#coleccion"
                className="relative group rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 p-5 flex flex-col justify-end hover:border-zinc-500 transition-all"
              >
                <img
                  src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=600&q=80"
                  alt="Hombre Streetwear"
                  className="absolute inset-0 w-full h-full object-cover filter contrast-110 brightness-60 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="relative z-10">
                  <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
                    LÍNEA
                  </span>
                  <h4 className="font-display font-bold text-xl text-white uppercase">
                    HOMBRE
                  </h4>
                </div>
              </a>

              {/* Mujer */}
              <a
                href="#coleccion"
                className="relative group rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 p-5 flex flex-col justify-end hover:border-zinc-500 transition-all"
              >
                <img
                  src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80"
                  alt="Mujer Streetwear"
                  className="absolute inset-0 w-full h-full object-cover filter contrast-110 brightness-60 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="relative z-10">
                  <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
                    LÍNEA
                  </span>
                  <h4 className="font-display font-bold text-xl text-white uppercase">
                    MUJER
                  </h4>
                </div>
              </a>
            </div>

            {/* BUZOS & HOODIES */}
            <a
              href="#coleccion"
              className="relative group min-h-[200px] sm:min-h-[240px] rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 p-6 flex flex-col justify-end hover:border-zinc-500 transition-all"
            >
              <img
                src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80"
                alt="Buzos y Hoodies"
                className="absolute inset-0 w-full h-full object-cover filter contrast-110 brightness-60 group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              <div className="relative z-10 flex items-end justify-between">
                <div>
                  <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
                    HEAVY FLEECE 420 GSM
                  </span>
                  <h4 className="font-display font-bold text-2xl sm:text-3xl text-white uppercase">
                    BUZOS
                  </h4>
                </div>
                <div className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </a>

          </div>

          {/* LOWER ROW (3 CARDS): CAMISETAS (4 cols), PANTALONES (4 cols), ACCESORIOS (4 cols) */}
          
          {/* Camisetas */}
          <a
            href="#coleccion"
            className="md:col-span-4 relative group min-h-[220px] rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 p-6 flex flex-col justify-end hover:border-zinc-500 transition-all"
          >
            <img
              src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=700&q=80"
              alt="Camisetas Oversized"
              className="absolute inset-0 w-full h-full object-cover filter contrast-110 brightness-60 group-hover:scale-105 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            <div className="relative z-10 flex items-end justify-between">
              <div>
                <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
                  OVERSIZED BOX FIT
                </span>
                <h4 className="font-display font-bold text-2xl text-white uppercase">
                  CAMISETAS
                </h4>
              </div>
              <ArrowUpRight className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
            </div>
          </a>

          {/* Pantalones */}
          <a
            href="#coleccion"
            className="md:col-span-4 relative group min-h-[220px] rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 p-6 flex flex-col justify-end hover:border-zinc-500 transition-all"
          >
            <img
              src="https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=700&q=80"
              alt="Pantalones Cargo"
              className="absolute inset-0 w-full h-full object-cover filter contrast-110 brightness-60 group-hover:scale-105 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            <div className="relative z-10 flex items-end justify-between">
              <div>
                <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
                  UTILITY & CARGO
                </span>
                <h4 className="font-display font-bold text-2xl text-white uppercase">
                  PANTALONES
                </h4>
              </div>
              <ArrowUpRight className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
            </div>
          </a>

          {/* Accesorios */}
          <a
            href="#coleccion"
            className="md:col-span-4 relative group min-h-[220px] rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 p-6 flex flex-col justify-end hover:border-zinc-500 transition-all"
          >
            <img
              src="https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=700&q=80"
              alt="Accesorios Streetwear"
              className="absolute inset-0 w-full h-full object-cover filter contrast-110 brightness-60 group-hover:scale-105 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            <div className="relative z-10 flex items-end justify-between">
              <div>
                <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
                  CHROME & DETAILS
                </span>
                <h4 className="font-display font-bold text-2xl text-white uppercase">
                  ACCESORIOS
                </h4>
              </div>
              <ArrowUpRight className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
            </div>
          </a>

        </div>

      </div>
    </section>
  );
};

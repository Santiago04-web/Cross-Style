import React, { useState } from 'react';
import { Eye, ArrowUpRight, Filter } from 'lucide-react';
import { PRODUCTS_DATA, type Product } from '../data/products';

interface CollectionProps {
  onSelectProduct: (product: Product) => void;
}

export const Collection: React.FC<CollectionProps> = ({ onSelectProduct }) => {
  const [activeFilter, setActiveFilter] = useState<string>('TODOS');

  const categories = ['TODOS', 'CAMISETAS', 'BUZOS', 'PANTALONES', 'ACCESORIOS'];

  const filteredProducts = activeFilter === 'TODOS'
    ? PRODUCTS_DATA
    : PRODUCTS_DATA.filter((p) => p.category === activeFilter);

  return (
    <section id="coleccion" className="relative py-24 bg-[#080809] border-t border-zinc-900 overflow-hidden">
      {/* BACKGROUND ACCENTS */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-zinc-700/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-zinc-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-zinc-800/80 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-2 text-zinc-400">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              <span className="text-[11px] font-mono tracking-[0.3em] uppercase">
                DROP 01 // ESENCIALES
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight">
              NUEVA COLECCIÓN
            </h2>
            <p className="mt-3 text-base sm:text-lg text-zinc-400 font-editorial max-w-xl">
              Descubre piezas creadas para quienes tienen su propio estilo.
            </p>
          </div>

          {/* EDITABLE NOTICE BADGE */}
          <div className="flex items-center gap-3 self-start md:self-end px-3 py-1.5 rounded-lg border border-zinc-800 bg-zinc-950/80 text-[11px] font-mono text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-amber-400/80 animate-pulse" />
            <span>Catálogo preparado para reemplazo inmediato en <code className="text-zinc-200">products.ts</code></span>
          </div>
        </div>

        {/* CATEGORY FILTER PILLS */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          <div className="flex items-center gap-2 pr-2 text-zinc-500 text-xs font-mono">
            <Filter className="w-3.5 h-3.5" />
            <span>FILTRO:</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-mono font-semibold tracking-wider uppercase transition-all whitespace-nowrap ${
                activeFilter === cat
                  ? 'bg-white text-black shadow-lg shadow-white/10'
                  : 'bg-zinc-900/80 text-zinc-400 border border-zinc-800 hover:text-white hover:border-zinc-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* PRODUCTS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <article
              key={product.id}
              className="group relative bg-[#0d0d12] border border-zinc-800/80 rounded-2xl overflow-hidden hover:border-zinc-500/80 transition-all duration-500 flex flex-col justify-between"
            >
              {/* IMAGE CONTAINER */}
              <div className="relative aspect-[4/5] overflow-hidden bg-zinc-950">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center filter contrast-110 brightness-95 group-hover:scale-105 group-hover:brightness-105 transition-all duration-700"
                />

                {/* OVERLAY VIGNETTE */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d12] via-transparent to-black/20 opacity-80" />

                {/* TAG BADGE */}
                <div className="absolute top-3 left-3 flex flex-col gap-1">
                  <span className="px-3 py-1 bg-black/80 backdrop-blur-md border border-zinc-700/80 rounded-md text-[10px] font-mono tracking-widest text-zinc-200 uppercase">
                    {product.tag}
                  </span>
                  {product.isNewDrop && (
                    <span className="px-2.5 py-0.5 bg-emerald-500/20 backdrop-blur-md border border-emerald-500/40 rounded text-[9px] font-mono tracking-widest text-emerald-300 uppercase">
                      NEW DROP
                    </span>
                  )}
                </div>

                {/* QUICK VIEW HOVER BUTTON */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
                  <button
                    type="button"
                    onClick={() => onSelectProduct(product)}
                    className="px-6 py-3 bg-white text-black font-display font-bold text-xs tracking-[0.2em] uppercase rounded-full shadow-2xl hover:scale-105 transition-transform flex items-center gap-2"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>VISTA RÁPIDA</span>
                  </button>
                </div>
              </div>

              {/* CARD INFO */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500 uppercase tracking-widest mb-1">
                    <span>{product.category}</span>
                    <span className="text-zinc-600">{product.fit}</span>
                  </div>

                  <h3 className="font-display font-bold text-lg sm:text-xl text-white tracking-wider uppercase mb-1 group-hover:text-zinc-200 transition-colors">
                    {product.name}
                  </h3>

                  <p className="text-xs text-zinc-400 line-clamp-2 font-sans mb-4">
                    {product.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between gap-2">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                      PRECIO ESTIMADO
                    </span>
                    <span className="font-display font-bold text-base sm:text-lg text-white">
                      {product.displayPrice}
                    </span>
                  </div>

                  {/* ACTION: VER PRODUCTO */}
                  <button
                    type="button"
                    onClick={() => onSelectProduct(product)}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg border border-zinc-700 bg-zinc-900/90 hover:bg-white hover:text-black hover:border-white text-xs font-mono font-bold tracking-wider text-zinc-200 transition-all duration-300 group/btn"
                  >
                    <span>VER PRODUCTO</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

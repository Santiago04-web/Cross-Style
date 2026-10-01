import React from 'react';
import { Truck, ShieldCheck, Sparkles, RefreshCw } from 'lucide-react';

export const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: Truck,
      title: 'ENVÍOS',
      description: 'A todo Colombia',
      detail: 'Cobertura nacional con seguimiento',
    },
    {
      icon: ShieldCheck,
      title: 'PAGO SEGURO',
      description: 'Compra de forma segura',
      detail: 'Transacciones directas y transparentes',
    },
    {
      icon: Sparkles,
      title: 'CALIDAD',
      description: 'Prendas seleccionadas',
      detail: 'Telas pesadas y cortes premium',
    },
    {
      icon: RefreshCw,
      title: 'NUEVAS COLECCIONES',
      description: 'Siempre algo nuevo',
      detail: 'Lanzamientos y drops exclusivos',
    },
  ];

  return (
    <section className="relative py-20 bg-[#080809] border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative p-6 sm:p-8 rounded-2xl bg-[#0e0e13] border border-zinc-800/80 hover:border-zinc-500/80 transition-all duration-300 flex flex-col justify-between"
              >
                {/* ICON BOX */}
                <div className="mb-6 flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white group-hover:scale-110 group-hover:border-zinc-500 transition-all">
                    <Icon className="w-5 h-5 text-zinc-200 group-hover:text-white" />
                  </div>
                  <span className="text-[11px] font-mono text-zinc-600">0{index + 1}</span>
                </div>

                {/* TEXT CONTENT */}
                <div>
                  <h3 className="font-display font-bold text-base sm:text-lg text-white uppercase tracking-wider mb-1">
                    {item.title}
                  </h3>
                  <p className="font-editorial text-sm font-medium text-zinc-300 mb-1">
                    &ldquo;{item.description}&rdquo;
                  </p>
                  <span className="text-xs text-zinc-500 font-sans">
                    {item.detail}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

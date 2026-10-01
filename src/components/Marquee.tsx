import React from 'react';

export const Marquee: React.FC = () => {
  const items = [
    'CROSS STYLE',
    'MÁS QUE ROPA',
    'STREETWEAR CULTURE',
    'CALI - COLOMBIA',
    'DROP 2026',
    'CALIDAD & ACTITUD',
    'IDENTIDAD PROPIA',
    'ENVÍOS A TODO COLOMBIA',
  ];

  return (
    <div className="relative w-full overflow-hidden bg-zinc-950 border-y border-zinc-800/80 py-3.5 select-none z-20">
      <div className="flex w-max animate-marquee">
        {[...items, ...items, ...items].map((text, index) => (
          <div key={index} className="flex items-center gap-6 mx-4">
            <span className="font-display font-bold text-xs sm:text-sm tracking-[0.3em] text-zinc-300 uppercase hover:text-white transition-colors">
              {text}
            </span>
            <span className="text-zinc-600 text-xs font-mono">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
};

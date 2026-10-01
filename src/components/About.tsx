import React from 'react';
import { ArrowUpRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/products';
import logoImg from '../assets/logo/cross-style-logo.jpg';
import bannerImg from '../assets/images/cross-style-banner.png';

interface AboutProps {
  onOpenLegal?: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenLegal }) => {
  return (
    <section id="nosotros" className="relative py-28 bg-[#09090c] border-t border-zinc-900 overflow-hidden">
      {/* BACKGROUND ACCENTS */}
      <div className="absolute -top-24 right-1/4 w-96 h-96 bg-zinc-700/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ASYMMETRICAL 50/50 EDITORIAL COMPOSITION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: EDITORIAL PHOTOGRAPHY & BRAND COLLAGE (7 Cols) */}
          <div className="lg:col-span-7 relative">
            
            {/* MAIN IMAGE FRAME */}
            <div className="relative rounded-3xl overflow-hidden border border-zinc-700/80 shadow-2xl bg-black group">
              <img
                src={bannerImg}
                alt="Manifiesto Cross Style"
                className="w-full h-[450px] sm:h-[540px] object-cover object-left filter contrast-125 brightness-90 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

              {/* OVERLAY BADGE */}
              <div className="absolute bottom-6 left-6 right-6 p-4 sm:p-5 rounded-2xl bg-[#0e0e14]/90 backdrop-blur-md border border-zinc-700/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-zinc-500">
                    <img src={logoImg} alt="Cross Style" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <span className="block font-display font-bold text-xs sm:text-sm text-white uppercase tracking-wider">
                      CROSS STYLE EST. 2015
                    </span>
                    <span className="block text-[10px] font-mono text-zinc-400">
                      CÁMARA DE COMERCIO DE CALI // MATRÍCULA #901513-60
                    </span>
                  </div>
                </div>

                {onOpenLegal && (
                  <button
                    onClick={onOpenLegal}
                    type="button"
                    className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-600 bg-zinc-800 text-[11px] font-mono text-zinc-200 hover:bg-zinc-700 hover:text-white transition-colors"
                  >
                    <span>VERIFICAR</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

            {/* FLOATING ACCENT CARD (OFFSET) */}
            <div className="hidden md:flex absolute -bottom-6 -right-6 p-5 rounded-2xl bg-[#14141c] border border-zinc-700 shadow-2xl items-center gap-4 max-w-xs">
              <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-emerald-400">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <span className="block font-mono text-[10px] text-zinc-400 uppercase tracking-widest">
                  EMPRESA REGISTRADA
                </span>
                <span className="block font-display font-bold text-sm text-white">
                  NIT: 900238405-7
                </span>
                <span className="block text-[10px] font-mono text-zinc-500">
                  Cali, Colombia
                </span>
              </div>
            </div>

          </div>

          {/* RIGHT: EDITORIAL BRAND MANIFESTO (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            
            <div className="inline-flex items-center gap-2 mb-4 text-zinc-400">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              <span className="text-[11px] font-mono tracking-[0.3em] uppercase">
                MANIFIESTO DE MARCA
              </span>
            </div>

            {/* MAIN STATEMENT */}
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white uppercase tracking-tight leading-tight mb-4">
              NO SE TRATA SOLO DE ROPA.
            </h2>

            <div className="relative mb-6">
              <p className="font-display font-bold text-xl sm:text-2xl text-metallic-silver tracking-wide uppercase">
                &ldquo;Se trata de cómo la llevas.&rdquo;
              </p>
              <div className="h-[2px] w-20 bg-zinc-600 mt-2" />
            </div>

            {/* DESCRIPTION FROM USER SPECIFICATION */}
            <div className="space-y-4 text-zinc-300 font-editorial text-base sm:text-lg leading-relaxed">
              <p>
                <strong className="text-white font-semibold">CROSS STYLE</strong> nace para quienes no siguen el estilo de los demás.
              </p>
              <p className="text-zinc-400">
                Creamos una identidad visual para quienes quieren vestir diferente. Cada silueta, costura y acabado está pensado para proyectar actitud pura en cada paso.
              </p>
            </div>

            {/* CORE ATTRIBUTES */}
            <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-zinc-800/80">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-zinc-400 mt-1 flex-shrink-0" />
                <div>
                  <span className="block font-display font-bold text-xs text-white uppercase tracking-wider">
                    ACTITUD
                  </span>
                  <span className="text-xs text-zinc-500 font-sans">
                    Cero genérico, siluetas con carácter.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-zinc-400 mt-1 flex-shrink-0" />
                <div>
                  <span className="block font-display font-bold text-xs text-white uppercase tracking-wider">
                    CALIDAD
                  </span>
                  <span className="text-xs text-zinc-500 font-sans">
                    Tejidos de gramaje pesado seleccionados.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-zinc-400 mt-1 flex-shrink-0" />
                <div>
                  <span className="block font-display font-bold text-xs text-white uppercase tracking-wider">
                    EXCLUSIVIDAD
                  </span>
                  <span className="text-xs text-zinc-500 font-sans">
                    Drops curados en cantidades limitadas.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-zinc-400 mt-1 flex-shrink-0" />
                <div>
                  <span className="block font-display font-bold text-xs text-white uppercase tracking-wider">
                    HECHO EN COLOMBIA
                  </span>
                  <span className="text-xs text-zinc-500 font-sans">
                    Confección y detalle desde Cali.
                  </span>
                </div>
              </div>
            </div>

            {/* CTA WHATSAPP CONTACT */}
            <div className="mt-8 pt-6 border-t border-zinc-800/80 flex items-center gap-4">
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-zinc-900 border border-zinc-700 hover:border-zinc-400 text-xs font-mono font-bold tracking-widest text-white uppercase transition-all hover:scale-105"
              >
                <span>HABLAR CON LA MARCA</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              {onOpenLegal && (
                <button
                  type="button"
                  onClick={onOpenLegal}
                  className="text-xs font-mono text-zinc-400 hover:text-white underline underline-offset-4 decoration-zinc-700"
                >
                  Ver Certificado Legal
                </button>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { MapPin, Phone, Mail, ArrowUp, ShieldCheck, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/products';
import logoImg from '../assets/logo/cross-style-logo.jpg';

interface FooterProps {
  onOpenLegal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contacto" className="relative bg-[#050507] border-t border-zinc-800/80 pt-20 pb-12 text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TOP BRAND BAR */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-12 border-b border-zinc-800/80 gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden border border-zinc-700 bg-black">
              <img src={logoImg} alt="Cross Style" className="w-full h-full object-cover" />
            </div>
            <div>
              <span className="font-display font-bold text-xl text-white tracking-[0.2em] block">
                CROSS STYLE
              </span>
              <span className="text-[11px] font-mono tracking-[0.3em] text-zinc-400 block uppercase">
                &ldquo;MÁS QUE ROPA.&rdquo;
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={BUSINESS_INFO.whatsappCatalogUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-500/10 border border-emerald-500/40 text-emerald-400 font-mono text-xs tracking-wider uppercase hover:bg-emerald-500/20 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WHATSAPP DIRECTO</span>
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full border border-zinc-800 hover:border-zinc-600 bg-zinc-900 text-zinc-300 hover:text-white transition-colors"
              aria-label="Volver arriba"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* MAIN COLUMNS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-12 border-b border-zinc-800/80">
          
          {/* COL 1: SOBRE CROSS STYLE */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-xs text-white uppercase tracking-[0.25em]">
              CROSS STYLE
            </h4>
            <p className="text-xs text-zinc-400 font-editorial leading-relaxed">
              &ldquo;MÁS QUE ROPA.&rdquo;
            </p>
            <p className="text-xs text-zinc-500 font-sans leading-relaxed">
              Marca de streetwear y moda urbana nacida en Cali, Colombia. Prendas creadas con actitud, calidad y corte propio para quienes no siguen tendencias ajenas.
            </p>
            <div className="pt-2 text-xs font-mono text-zinc-400">
              <span className="text-zinc-500">DOMINIO OFICIAL:</span><br />
              <a
                href={BUSINESS_INFO.domain}
                className="text-white hover:text-zinc-300 underline underline-offset-2"
              >
                {BUSINESS_INFO.domain}
              </a>
            </div>
          </div>

          {/* COL 2: CONTACTO */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-xs text-white uppercase tracking-[0.25em]">
              CONTACTO
            </h4>
            <ul className="space-y-3 text-xs font-mono">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-zinc-500 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-white block font-medium">Cali, Valle del Cauca</span>
                  <span className="text-zinc-500 text-[11px]">{BUSINESS_INFO.address}</span>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-zinc-500 flex-shrink-0" />
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="text-zinc-300 hover:text-white transition-colors"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-zinc-500 flex-shrink-0" />
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="text-zinc-300 hover:text-white transition-colors break-all"
                >
                  {BUSINESS_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:underline"
                >
                  WhatsApp: +57 {BUSINESS_INFO.phone}
                </a>
              </li>
            </ul>
          </div>

          {/* COL 3: INFORMACIÓN LEGAL */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-xs text-white uppercase tracking-[0.25em]">
              INFORMACIÓN LEGAL
            </h4>
            <div className="space-y-2 text-xs font-mono">
              <div>
                <span className="text-zinc-500 block text-[10px]">RAZÓN SOCIAL:</span>
                <span className="text-white font-medium">{BUSINESS_INFO.name}</span>
              </div>
              <div>
                <span className="text-zinc-500 block text-[10px]">NIT:</span>
                <span className="text-white font-medium">{BUSINESS_INFO.nit}</span>
              </div>
              <div>
                <span className="text-zinc-500 block text-[10px]">MATRÍCULA MERCANTIL:</span>
                <span className="text-zinc-300">{BUSINESS_INFO.registrationNumber} (Cali)</span>
              </div>
            </div>

            {onOpenLegal && (
              <button
                type="button"
                onClick={onOpenLegal}
                className="mt-2 inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 hover:text-emerald-300 underline underline-offset-4"
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Verificar Certificado Legal</span>
              </button>
            )}
          </div>

          {/* COL 4: ENLACES */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-xs text-white uppercase tracking-[0.25em]">
              ENLACES
            </h4>
            <ul className="space-y-2.5 text-xs font-mono">
              <li>
                <a href="#inicio" className="text-zinc-400 hover:text-white transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#coleccion" className="text-zinc-400 hover:text-white transition-colors">
                  Colección
                </a>
              </li>
              <li>
                <a href="#categorias" className="text-zinc-400 hover:text-white transition-colors">
                  Categorías
                </a>
              </li>
              <li>
                <a href="#nosotros" className="text-zinc-400 hover:text-white transition-colors">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-zinc-400 hover:text-white transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-zinc-500 gap-4">
          <p>
            © 2026 Cross Style. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            <span>Cali, Colombia</span>
            <span>•</span>
            <span>Streetwear Oficial</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

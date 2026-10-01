import React from 'react';
import { X, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/products';
import certImg from '../assets/legal/camara-comercio-cross-style.jpg';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* BACKDROP */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
      />

      {/* MODAL CONTENT */}
      <div className="relative w-full max-w-2xl bg-[#0f0f15] border border-zinc-700 rounded-2xl shadow-2xl overflow-hidden z-10 my-8">
        
        {/* HEADER */}
        <div className="flex items-center justify-between p-6 border-b border-zinc-800 bg-zinc-950">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-bold text-base text-white uppercase tracking-wider">
                CERTIFICACIÓN LEGAL COMERCIAL
              </h3>
              <p className="text-xs font-mono text-zinc-400">
                CÁMARA DE COMERCIO DE CALI - PERSONA JURÍDICA
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* BODY */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* VERIFICATION BADGE */}
          <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
            <div className="text-xs font-mono space-y-1">
              <p className="text-white font-bold">
                ESTABLECIMIENTO DE COMERCIO VERIFICADO
              </p>
              <p className="text-zinc-400">
                La empresa Cross Style cuenta con registro mercantil activo ante la Cámara de Comercio de Cali con matrícula No. 901513-60 y NIT 900238405-7.
              </p>
            </div>
          </div>

          {/* REAL DATA TABLE */}
          <div className="space-y-2 text-xs font-mono">
            <div className="flex justify-between py-2 border-b border-zinc-800 text-zinc-400">
              <span>RAZÓN SOCIAL:</span>
              <span className="text-white font-semibold">{BUSINESS_INFO.name}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-zinc-800 text-zinc-400">
              <span>NIT:</span>
              <span className="text-white font-semibold">{BUSINESS_INFO.nit}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-zinc-800 text-zinc-400">
              <span>MATRÍCULA MERCANTIL:</span>
              <span className="text-white font-semibold">{BUSINESS_INFO.registrationNumber}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-zinc-800 text-zinc-400">
              <span>DOMICILIO PRINCIPAL:</span>
              <span className="text-white font-semibold">{BUSINESS_INFO.city}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-zinc-800 text-zinc-400">
              <span>DIRECCIÓN COMERCIAL:</span>
              <span className="text-white font-semibold">{BUSINESS_INFO.address}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-zinc-800 text-zinc-400">
              <span>TELÉFONO OFICIAL:</span>
              <span className="text-white font-semibold">{BUSINESS_INFO.phoneDisplay}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-zinc-800 text-zinc-400">
              <span>CORREO DE SOPORTE:</span>
              <span className="text-white font-semibold">{BUSINESS_INFO.email}</span>
            </div>
            <div className="flex justify-between py-2 text-zinc-400">
              <span>DOMINIO WEB OFICIAL:</span>
              <span className="text-white font-semibold">{BUSINESS_INFO.domain}</span>
            </div>
          </div>

          {/* DOCUMENT PREVIEW */}
          <div className="pt-2">
            <span className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
              COPIA CERTIFICADO DE EXISTENCIA Y REPRESENTACIÓN LEGAL:
            </span>
            <div className="rounded-xl overflow-hidden border border-zinc-800 bg-black">
              <img
                src={certImg}
                alt="Certificado Cámara de Comercio Cali Cross Style"
                className="w-full h-auto filter contrast-105"
              />
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="p-4 bg-zinc-950 border-t border-zinc-800 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-white font-mono text-xs tracking-wider rounded-lg transition-colors"
          >
            Cerrar Certificación
          </button>
        </div>

      </div>
    </div>
  );
};

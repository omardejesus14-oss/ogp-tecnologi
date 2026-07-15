'use client';

import { FiShield, FiTruck } from 'react-icons/fi';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* LOGO DE OGP TECNOLOGÍA (SVG Incorporado) */}
        <div className="flex items-center gap-2">
          {/* Icono de Tecnología en SVG */}
          <svg 
            className="w-8 h-8 text-emerald-600" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3z" />
            <path d="M6 21a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3v12a3 3 0 0 0 3 3z" />
            <path d="M12 6v12" />
            <path d="M8 12h8" />
          </svg>
          
          <span className="text-xl font-black tracking-tight text-slate-800">
            OGP <span className="text-emerald-600">technology</span>
          </span>
        </div>

        {/* Garantías rápidas en PC */}
        <div className="hidden md:flex items-center gap-6 text-xs font-semibold text-slate-600">
          <div className="flex items-center gap-1.5">
            <FiTruck className="text-emerald-600 text-base" />
            <span>Envío Gratis</span>
          </div>
          <div className="flex items-center gap-1.5">
            <FiShield className="text-emerald-600 text-base" />
            <span>Pago Contra Entrega</span>
          </div>
        </div>

        {/* Botón de compra rápido */}
        <a 
          href="#ordenar" 
          className="bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-md transition-all transform active:scale-95"
        >
          Pedir Ahora
        </a>
      </div>
    </header>
  );
}
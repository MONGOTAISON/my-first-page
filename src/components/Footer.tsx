import React, { useState } from 'react';
import { Flame, ArrowUp, Mail, Copy, Check } from 'lucide-react';

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const supportEmail = 'dmaicoldias@gmail.com';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(supportEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Row: Brand & Quick Nav */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-900">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-amber-400 to-rose-500 flex items-center justify-center text-slate-950">
              <Flame className="w-3.5 h-3.5 fill-slate-950" />
            </div>
            <span className="text-base font-black text-white tracking-tight uppercase">Lo Má Duro</span>
            <span className="text-slate-600">·</span>
            <span className="text-xs text-slate-400">Origen y Evolución de la Inteligencia Artificial</span>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs text-slate-400">
            <button onClick={() => scrollToSection('origen')} className="hover:text-amber-400 transition-colors cursor-pointer">
              De Dónde Salió
            </button>
            <button onClick={() => scrollToSection('evolucion')} className="hover:text-amber-400 transition-colors cursor-pointer">
              Cómo Evolucionó
            </button>
            <button onClick={() => scrollToSection('pioneros')} className="hover:text-amber-400 transition-colors cursor-pointer">
              Pioneros
            </button>
            <button onClick={() => scrollToSection('simulador')} className="hover:text-amber-400 transition-colors cursor-pointer">
              Simulador
            </button>
            <button onClick={() => scrollToSection('quiz')} className="hover:text-amber-400 transition-colors cursor-pointer">
              Desafío
            </button>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Volver arriba"
            className="p-2 bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white rounded-lg border border-slate-800 transition-all cursor-pointer flex items-center gap-1.5"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span className="text-[11px]">Arriba</span>
          </button>
        </div>

        {/* Middle Row: Support & Contact Bar */}
        <div className="py-6 border-b border-slate-900 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-amber-400 font-semibold">
                Soporte y Contacto Oficial
              </div>
              <div className="text-xs text-slate-300">
                ¿Tienes dudas, sugerencias o requieres soporte sobre la plataforma?
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto">
            <a
              href={`mailto:${supportEmail}?subject=Soporte%20Lo%20M%C3%A1%20Duro%20IA`}
              className="px-3.5 py-2 bg-slate-900 hover:bg-slate-850 hover:text-white text-slate-200 border border-slate-800 hover:border-slate-700 rounded-lg font-mono text-xs transition-all flex items-center gap-2"
            >
              <span>{supportEmail}</span>
            </a>

            <button
              onClick={handleCopyEmail}
              title="Copiar correo de soporte"
              className="p-2 bg-slate-900 hover:bg-slate-850 text-slate-400 hover:text-white rounded-lg border border-slate-800 transition-all cursor-pointer flex items-center gap-1.5"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-[11px] text-emerald-400 font-medium">Copiado</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span className="text-[11px]">Copiar</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Bottom Row: Disclaimer and Credits */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
          <p>
            Lo Má Duro: Portal interactivo e informativo de historia, fundamentos y evolución técnica de la Inteligencia Artificial.
          </p>
          <div className="text-[11px] font-mono">
            Desde 1950 hasta la frontera moderna
          </div>
        </div>

      </div>
    </footer>
  );
}

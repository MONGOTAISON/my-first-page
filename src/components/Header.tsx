import React, { useState } from 'react';
import { Menu, X, Flame } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark: "Lo Má Duro" */}
        <a 
          href="#" 
          className="flex items-center gap-2.5 text-lg font-black tracking-tight text-white whitespace-nowrap shrink-0 hover:text-cyan-400 transition-colors"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-rose-500 flex items-center justify-center text-slate-950 font-black shadow-md shadow-amber-500/20">
            <Flame className="w-4 h-4 fill-slate-950" />
          </div>
          <span className="tracking-tighter uppercase font-extrabold text-base sm:text-lg">Lo Má Duro</span>
        </a>

        {/* Zone 2: 4-5 concise single-line nav links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
          <button 
            onClick={() => scrollToSection('origen')} 
            className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0 cursor-pointer text-left"
          >
            De Dónde Salió
          </button>
          <button 
            onClick={() => scrollToSection('evolucion')} 
            className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0 cursor-pointer text-left"
          >
            Cómo Evolucionó
          </button>
          <button 
            onClick={() => scrollToSection('pioneros')} 
            className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0 cursor-pointer text-left"
          >
            Pioneros
          </button>
          <button 
            onClick={() => scrollToSection('ramas')} 
            className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0 cursor-pointer text-left"
          >
            Ramas de IA
          </button>
          <button 
            onClick={() => scrollToSection('simulador')} 
            className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0 cursor-pointer text-left"
          >
            Simulador
          </button>
          <button 
            onClick={() => scrollToSection('quiz')} 
            className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0 cursor-pointer text-left"
          >
            Desafío
          </button>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button 
            onClick={() => scrollToSection('evolucion')}
            className="hidden sm:inline-flex px-4 py-2 text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-cyan-400 to-teal-300 rounded-lg hover:brightness-110 shadow-sm shadow-cyan-500/20 active:scale-95 transition-all whitespace-nowrap shrink-0 cursor-pointer"
          >
            Ver Evolución
          </button>
          
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menú"
            className="md:hidden p-2 text-slate-400 hover:text-white rounded-lg border border-slate-800"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-slate-950/98 px-4 pt-2 pb-5 space-y-2">
          <button 
            onClick={() => scrollToSection('origen')} 
            className="block w-full text-left py-2 px-3 text-sm font-medium text-slate-300 hover:bg-slate-900 rounded-md"
          >
            De Dónde Salió
          </button>
          <button 
            onClick={() => scrollToSection('evolucion')} 
            className="block w-full text-left py-2 px-3 text-sm font-medium text-slate-300 hover:bg-slate-900 rounded-md"
          >
            Cómo Evolucionó (7 Eras)
          </button>
          <button 
            onClick={() => scrollToSection('pioneros')} 
            className="block w-full text-left py-2 px-3 text-sm font-medium text-slate-300 hover:bg-slate-900 rounded-md"
          >
            Padres y Pioneros
          </button>
          <button 
            onClick={() => scrollToSection('ramas')} 
            className="block w-full text-left py-2 px-3 text-sm font-medium text-slate-300 hover:bg-slate-900 rounded-md"
          >
            Ramas de la IA
          </button>
          <button 
            onClick={() => scrollToSection('simulador')} 
            className="block w-full text-left py-2 px-3 text-sm font-medium text-slate-300 hover:bg-slate-900 rounded-md"
          >
            Simulador de Red Neuronal
          </button>
          <button 
            onClick={() => scrollToSection('quiz')} 
            className="block w-full text-left py-2 px-3 text-sm font-medium text-slate-300 hover:bg-slate-900 rounded-md"
          >
            Desafío / Quiz
          </button>
        </div>
      )}
    </header>
  );
}

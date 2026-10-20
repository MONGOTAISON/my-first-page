import React, { useState } from 'react';
import { EVOLUTION_ERAS } from '../data/aiContent';
import { GitBranch, ChevronLeft, ChevronRight, HardDrive, AlertTriangle, CheckCircle, Cpu, Calendar } from 'lucide-react';

export default function EvolutionErasSection() {
  const [activeEraIdx, setActiveEraIdx] = useState(0);

  const era = EVOLUTION_ERAS[activeEraIdx];

  const handlePrev = () => {
    setActiveEraIdx(prev => (prev === 0 ? EVOLUTION_ERAS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveEraIdx(prev => (prev + 1) % EVOLUTION_ERAS.length);
  };

  return (
    <section id="evolucion" className="py-20 bg-slate-900/40 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 mb-2">
              <GitBranch className="w-4 h-4" />
              <span>Cronología Evolutiva Completa</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-400">¿Cómo evolucionó la IA paso a paso?</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Las 7 Grandes Eras de la Evolución de la IA
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
              La IA no fue una línea recta: atravesó dos brutales inviernos donde casi desapareció por completo, antes de renacer como la tecnología más potente del siglo XXI.
            </p>
          </div>

          {/* Quick Era Prev/Next Buttons */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handlePrev}
              aria-label="Era anterior"
              className="p-2.5 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 text-xs font-medium"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Anterior</span>
            </button>
            <div className="px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs font-mono text-cyan-400 tabular-nums">
              Era {activeEraIdx + 1} / {EVOLUTION_ERAS.length}
            </div>
            <button
              onClick={handleNext}
              aria-label="Siguiente era"
              className="p-2.5 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 text-xs font-medium"
            >
              <span className="hidden sm:inline">Siguiente</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 7 Era Selector Buttons (Interactive Strip) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {EVOLUTION_ERAS.map((item, idx) => {
            const isSelected = activeEraIdx === idx;
            const isWinter = item.id.includes('invierno');
            
            return (
              <button
                key={item.id}
                onClick={() => setActiveEraIdx(idx)}
                className={`flex flex-col text-left p-3 rounded-xl border transition-all cursor-pointer whitespace-nowrap min-w-[170px] ${
                  isSelected
                    ? isWinter 
                      ? 'bg-blue-950/40 border-blue-400 text-blue-200 shadow-md' 
                      : 'bg-cyan-950/40 border-cyan-400 text-cyan-200 shadow-md'
                    : 'bg-slate-950/80 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                }`}
              >
                <div className="text-[10px] font-mono opacity-80 mb-0.5">{item.period}</div>
                <div className="text-xs font-bold truncate">{item.name.replace(/^\d+\.\s*/, '')}</div>
              </button>
            );
          })}
        </div>

        {/* Active Era Main Card */}
        <div className="p-8 sm:p-10 bg-slate-900/60 border border-slate-800 rounded-2xl space-y-8">
          
          {/* Era Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/40 rounded-lg text-xs font-mono font-bold text-cyan-300">
                  {era.period}
                </span>
                <span className="text-xs text-slate-400 font-medium">{era.theme}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {era.name}
              </h3>
            </div>
          </div>

          {/* Era Summary */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-4xl">
            {era.summary}
          </p>

          {/* Quote if available */}
          {era.famousQuote && (
            <div className="p-4 bg-slate-950 border border-slate-800/80 rounded-xl text-xs sm:text-sm italic text-amber-300/90 font-mono">
              "{era.famousQuote}"
            </div>
          )}

          {/* 3 Detail Blocks Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Block 1: How it worked */}
            <div className="p-5 bg-slate-950 border border-slate-800 rounded-xl space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider">
                <Cpu className="w-4 h-4" />
                <span>¿Cómo Funcionaba?</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {era.howItWorked}
              </p>
            </div>

            {/* Block 2: Key Milestones */}
            <div className="p-5 bg-slate-950 border border-slate-800 rounded-xl space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider">
                <CheckCircle className="w-4 h-4" />
                <span>Hitos Decisivos</span>
              </div>
              <ul className="text-xs text-slate-300 space-y-2">
                {era.keyMilestones.map((m, mIdx) => (
                  <li key={mIdx} className="flex items-start gap-1.5 leading-snug">
                    <span className="text-emerald-400 font-bold">•</span>
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Block 3: Hardware & Bottlenecks */}
            <div className="p-5 bg-slate-950 border border-slate-800 rounded-xl space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-rose-400 uppercase tracking-wider">
                <AlertTriangle className="w-4 h-4" />
                <span>Límites y Realidad Hardware</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mb-2">
                <strong className="text-rose-300">Cuello de botella:</strong> {era.limitations}
              </p>
              <div className="text-[11px] text-slate-400 border-t border-slate-800 pt-2 font-mono">
                <strong className="text-slate-300">Chips de la época:</strong> {era.hardwareReality}
              </div>
            </div>

          </div>

          {/* Quick jump to Next Era Button */}
          <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
            <span>Sigue el hilo conductor de la historia humana</span>
            <button
              onClick={handleNext}
              className="px-4 py-2 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <span>Ver Siguiente Era</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}

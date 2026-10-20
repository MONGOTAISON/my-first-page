import React, { useState } from 'react';
import { TRINITY_PILLARS } from '../data/aiContent';
import { Zap, Database, Cpu, Flame, ArrowRight, Layers } from 'lucide-react';

export default function TrinitySection() {
  const [selectedPillarId, setSelectedPillarId] = useState<string>('compute');

  const icons = {
    compute: Cpu,
    data: Database,
    algorithms: Zap
  };

  const activePillar = TRINITY_PILLARS.find(p => p.id === selectedPillarId) || TRINITY_PILLARS[0];
  const IconComponent = icons[activePillar.id as keyof typeof icons] || Cpu;

  return (
    <section className="py-20 bg-slate-950 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 mb-2">
              <Flame className="w-4 h-4 text-amber-400" />
              <span>La Pregunta del Millón</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-400">¿Por qué explotó precisamente ahora?</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              La "Santísima Trinidad" de la IA Moderna
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
              Las ideas matemáticas de las redes neuronales existían desde 1943. Descubre por qué tuvieron que pasar 70 años para que la tecnología funcionara a escala mundial.
            </p>
          </div>
        </div>

        {/* 3 Pillar Selector Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {TRINITY_PILLARS.map(pillar => {
            const isSelected = selectedPillarId === pillar.id;
            const BtnIcon = icons[pillar.id as keyof typeof icons] || Cpu;

            return (
              <button
                key={pillar.id}
                onClick={() => setSelectedPillarId(pillar.id)}
                className={`p-5 rounded-2xl text-left border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-slate-900 border-cyan-500 shadow-lg shadow-cyan-500/10'
                    : 'bg-slate-950 border-slate-800 hover:border-slate-700 hover:bg-slate-900/60'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${isSelected ? 'bg-cyan-500 text-slate-950' : 'bg-slate-900 text-cyan-400'}`}>
                    <BtnIcon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono font-bold text-amber-400">
                    {pillar.multiplier.split(' ')[0]}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mb-1">{pillar.title.split(':')[1]}</h3>
                <p className="text-xs text-slate-400 line-clamp-2">{pillar.subtitle}</p>
              </button>
            );
          })}
        </div>

        {/* Detailed Breakdown Card */}
        <div className="p-8 sm:p-10 bg-slate-900/60 border border-slate-800 rounded-2xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <IconComponent className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">{activePillar.title}</h3>
                <div className="text-xs text-slate-400">{activePillar.subtitle}</div>
              </div>
            </div>

            <div className="px-3 py-1.5 bg-amber-950/40 border border-amber-800/60 rounded-xl text-xs font-mono text-amber-300 font-bold self-start sm:self-auto">
              {activePillar.multiplier}
            </div>
          </div>

          {/* Comparison Past vs Present */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 bg-slate-950 border border-slate-800/80 rounded-xl space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500 block">En los Años 60 - 80:</span>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-mono">
                {activePillar.pastState}
              </p>
            </div>

            <div className="p-5 bg-slate-950 border border-cyan-800/40 rounded-xl space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 block">En la Actualidad (2026):</span>
              <p className="text-xs sm:text-sm text-cyan-200 leading-relaxed font-mono">
                {activePillar.todayState}
              </p>
            </div>
          </div>

          {/* Deep Impact explanation */}
          <div className="p-5 bg-slate-950/90 border border-slate-800 rounded-xl space-y-2">
            <div className="text-xs font-semibold text-white">¿Por qué fue el factor desencadenante?</div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {activePillar.impactExplanation}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

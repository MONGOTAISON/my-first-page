import React, { useState } from 'react';
import { AI_VS_HUMAN_DATA } from '../data/aiContent';
import { GitCompare, Zap, Brain, ShieldAlert, Cpu } from 'lucide-react';

export default function AiVsHumanSection() {
  const [selectedIdx, setSelectedIdx] = useState(0);

  const active = AI_VS_HUMAN_DATA[selectedIdx];

  return (
    <section className="py-20 bg-slate-950 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 mb-2">
              <GitCompare className="w-4 h-4" />
              <span>Análisis Comparativo Riguroso</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-400">Mitos vs Realidades</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              IA vs Inteligencia Humana: ¿En qué difieren?
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
              La IA no es una mente humana replicada en silicio. Posee fortalezas sobrehumanas en cálculo y paralelismo, pero profundas limitaciones en sentido común, empatía y eficiencia energética.
            </p>
          </div>
        </div>

        {/* Dimension Selector Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {AI_VS_HUMAN_DATA.map((item, idx) => (
            <button
              key={item.dimension}
              onClick={() => setSelectedIdx(idx)}
              className={`px-4 py-2 text-xs font-medium rounded-lg whitespace-nowrap transition-all cursor-pointer ${
                selectedIdx === idx
                  ? 'bg-cyan-500 text-slate-950 font-semibold shadow-sm'
                  : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-850 border border-slate-800'
              }`}
            >
              {item.dimension}
            </button>
          ))}
        </div>

        {/* Detailed Comparison Card */}
        <div className="p-8 sm:p-10 bg-slate-900/60 border border-slate-800 rounded-2xl space-y-8">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-6">
            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block">Dimensión Analizada</span>
              <h3 className="text-2xl font-bold text-white mt-1">{active.dimension}</h3>
            </div>
            <div className="text-xs text-slate-400 font-mono">
              Dimensión {selectedIdx + 1} de {AI_VS_HUMAN_DATA.length}
            </div>
          </div>

          {/* Comparison Split Bars */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* AI Side */}
            <div className="p-6 bg-slate-950 border border-slate-800 rounded-xl space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm font-semibold text-cyan-400">
                  <Cpu className="w-4 h-4" />
                  <span>Sistemas de Inteligencia Artificial</span>
                </div>
                <span className="text-lg font-mono font-bold text-cyan-300 tabular-nums">
                  {active.aiScore}/100
                </span>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-slate-900 h-2.5 rounded-full overflow-hidden">
                <div 
                  className="bg-cyan-400 h-full rounded-full transition-all duration-500" 
                  style={{ width: `${active.aiScore}%` }}
                />
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {active.aiDetail}
              </p>
            </div>

            {/* Human Side */}
            <div className="p-6 bg-slate-950 border border-slate-800 rounded-xl space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm font-semibold text-purple-400">
                  <Brain className="w-4 h-4" />
                  <span>Cerebro e Inteligencia Humana</span>
                </div>
                <span className="text-lg font-mono font-bold text-purple-300 tabular-nums">
                  {active.humanScore}/100
                </span>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-slate-900 h-2.5 rounded-full overflow-hidden">
                <div 
                  className="bg-purple-400 h-full rounded-full transition-all duration-500" 
                  style={{ width: `${active.humanScore}%` }}
                />
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {active.humanDetail}
              </p>
            </div>

          </div>

          {/* Verdict summary */}
          <div className="p-4 bg-slate-950/80 border border-slate-800 rounded-xl flex items-center gap-3 text-xs sm:text-sm text-slate-300">
            <span className="font-semibold text-cyan-300 shrink-0">Conclusión técnica:</span>
            <span>{active.verdict}</span>
          </div>

        </div>

      </div>
    </section>
  );
}

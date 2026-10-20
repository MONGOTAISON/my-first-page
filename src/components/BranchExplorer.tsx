import React, { useState } from 'react';
import { KnowledgeLevel, AiBranch } from '../types/ai';
import { AI_BRANCHES } from '../data/aiContent';
import { Sparkles, CheckCircle, Copy, Check, ChevronDown, ChevronUp, Layers, Terminal, ArrowUpRight } from 'lucide-react';

interface BranchExplorerProps {
  level: KnowledgeLevel;
}

export default function BranchExplorer({ level }: BranchExplorerProps) {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [expandedBranchId, setExpandedBranchId] = useState<string | null>('machine-learning');
  const [activeDemoBranchId, setActiveDemoBranchId] = useState<string | null>(null);
  const [learnedBranchIds, setLearnedBranchIds] = useState<Set<string>>(new Set(['machine-learning']));
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filterOptions = [
    { id: 'all', label: 'Todas las Ramas' },
    { id: 'ml', label: 'Machine Learning' },
    { id: 'dl', label: 'Deep Learning' },
    { id: 'cv', label: 'Visión Computacional' },
    { id: 'nlp', label: 'NLP & LLMs' },
    { id: 'generative', label: 'IA Generativa' },
    { id: 'robotics', label: 'Robótica & Agentes' },
  ];

  const filteredBranches = selectedFilter === 'all'
    ? AI_BRANCHES
    : AI_BRANCHES.filter(b => b.category === selectedFilter);

  const toggleLearned = (id: string) => {
    setLearnedBranchIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const copyBranchInfo = (branch: AiBranch) => {
    const text = `${branch.title}\n\n${branch.summary[level]}\n\nAplicaciones reales: ${branch.realWorldApplications.join(', ')}`;
    navigator.clipboard.writeText(text);
    setCopiedId(branch.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="ramas" className="py-20 bg-slate-900/40 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading & Progress Track */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 mb-2">
              <Layers className="w-4 h-4" />
              <span>Mapa Conceptual de la Inteligencia Artificial</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-400">Taxonomía Completa</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Especialidades y Ramas de la IA
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
              La Inteligencia Artificial no es una única técnica aislada, sino un ecosistema interconectado. Selecciona un filtro y pulsa los botones de acción para profundizar o simular casos de uso.
            </p>
          </div>

          {/* Interactive Progress Indicator with button */}
          <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl flex items-center gap-4 shrink-0">
            <div>
              <div className="text-[11px] text-slate-400 uppercase tracking-wider font-mono">Progreso de Estudio</div>
              <div className="text-sm font-semibold text-white">
                <span className="text-cyan-400 font-mono tabular-nums">{learnedBranchIds.size}</span> de {AI_BRANCHES.length} dominadas
              </div>
            </div>
            <div className="w-20 bg-slate-800 h-2 rounded-full overflow-hidden">
              <div 
                className="bg-cyan-400 h-full transition-all duration-500" 
                style={{ width: `${(learnedBranchIds.size / AI_BRANCHES.length) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Interactive Filter Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {filterOptions.map(opt => (
            <button
              key={opt.id}
              onClick={() => setSelectedFilter(opt.id)}
              className={`px-4 py-2 text-xs font-medium rounded-lg whitespace-nowrap transition-all cursor-pointer ${
                selectedFilter === opt.id
                  ? 'bg-cyan-500 text-slate-950 font-semibold shadow-sm shadow-cyan-500/20'
                  : 'bg-slate-900/90 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Branch Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBranches.map(branch => {
            const isLearned = learnedBranchIds.has(branch.id);
            const isDemoOpen = activeDemoBranchId === branch.id;
            const isExpanded = expandedBranchId === branch.id;

            return (
              <div
                key={branch.id}
                className="flex flex-col justify-between p-6 bg-slate-900/60 border border-slate-800/80 rounded-2xl hover:border-slate-700 transition-all group"
              >
                <div>
                  {/* Visual slot if available */}
                  {branch.image && (
                    <div className="relative mb-5 rounded-xl overflow-hidden border border-slate-800/80 bg-slate-950 h-44">
                      <img
                        src={branch.image}
                        alt={branch.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />
                      <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded bg-slate-950/80 backdrop-blur-md text-[10px] font-mono text-cyan-300 border border-slate-800">
                        {branch.categoryLabel}
                      </div>
                    </div>
                  )}

                  {!branch.image && (
                    <div className="flex items-center justify-between text-xs text-cyan-400 mb-3 font-mono">
                      <span>{branch.categoryLabel}</span>
                      <span className="text-slate-500">· Modular</span>
                    </div>
                  )}

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {branch.title}
                  </h3>

                  {/* Summary adapted to Knowledge Level */}
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                    {branch.summary[level]}
                  </p>

                  {/* Mechanisms unboxed tags (no pill badge sandwich) */}
                  <div className="pt-2 pb-4 border-t border-slate-800/60">
                    <span className="text-[11px] font-mono text-slate-500 block mb-2 uppercase tracking-wider">Conceptos Clave:</span>
                    <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-slate-400">
                      {branch.keyMechanisms.map((mech, mIdx) => (
                        <span key={mIdx} className="hover:text-slate-200 transition-colors">
                          • {mech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Real World Applications */}
                  <div className="pb-4">
                    <span className="text-[11px] font-mono text-slate-500 block mb-1 uppercase tracking-wider">Dónde se Aplica Hoy:</span>
                    <ul className="text-xs text-slate-300 space-y-1">
                      {branch.realWorldApplications.map((app, aIdx) => (
                        <li key={aIdx} className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/80" />
                          <span>{app}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Interactive In-Card Micro Demo Drawer */}
                  {isDemoOpen && (
                    <div className="my-3 p-3.5 bg-slate-950 border border-cyan-800/60 rounded-xl space-y-2 animate-fadeIn">
                      <div className="flex items-center justify-between text-[11px] font-mono text-cyan-400">
                        <span className="flex items-center gap-1">
                          <Terminal className="w-3.5 h-3.5" />
                          Ejecución de Demostración
                        </span>
                        <span className="text-slate-500">Modo Simulado</span>
                      </div>
                      <div className="text-[11px] font-mono text-slate-300 p-2 bg-slate-900 rounded border border-slate-800">
                        {branch.demoPrompt}
                      </div>
                      <div className="text-[11px] font-mono text-emerald-300 p-2 bg-emerald-950/20 rounded border border-emerald-900/40">
                        {branch.demoResult}
                      </div>
                    </div>
                  )}
                </div>

                {/* Interactive Card Action Buttons */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5">
                    {/* Demo Button */}
                    <button
                      onClick={() => setActiveDemoBranchId(isDemoOpen ? null : branch.id)}
                      className={`px-2.5 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                        isDemoOpen
                          ? 'bg-cyan-500 text-slate-950 font-semibold'
                          : 'bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700'
                      }`}
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{isDemoOpen ? 'Cerrar Demo' : 'Ver Demo'}</span>
                    </button>

                    {/* Copy Button */}
                    <button
                      onClick={() => copyBranchInfo(branch)}
                      title="Copiar información al portapapeles"
                      className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-all cursor-pointer"
                    >
                      {copiedId === branch.id ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  {/* Mark as Learned Toggle Button */}
                  <button
                    onClick={() => toggleLearned(branch.id)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                      isLearned
                        ? 'bg-emerald-950/40 text-emerald-400 border border-emerald-800/60'
                        : 'text-slate-400 hover:text-white hover:bg-slate-800 border border-transparent'
                    }`}
                  >
                    <CheckCircle className={`w-3.5 h-3.5 ${isLearned ? 'text-emerald-400' : 'text-slate-500'}`} />
                    <span>{isLearned ? 'Aprendido' : 'Marcar visto'}</span>
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

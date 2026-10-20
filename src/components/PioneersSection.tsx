import React, { useState } from 'react';
import { AI_PIONEERS } from '../data/aiContent';
import { Users, Award, Sparkles, BookOpen } from 'lucide-react';

export default function PioneersSection() {
  const [selectedId, setSelectedId] = useState(AI_PIONEERS[0].id);

  const pioneer = AI_PIONEERS.find(p => p.id === selectedId) || AI_PIONEERS[0];

  return (
    <section id="pioneros" className="py-20 bg-slate-900/40 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 mb-2">
              <Users className="w-4 h-4" />
              <span>Protagonistas de la Revolución</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-400">Las mentes que cambiaron el mundo</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Padres y Pioneros Fundamentales de la IA
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
              Conoce a las figuras audaces que soñaron con máquinas pensantes, desde Ada Lovelace en el siglo XIX hasta los creadores de los Transformers modernos.
            </p>
          </div>
        </div>

        {/* Pioneer Selector Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {AI_PIONEERS.map(item => (
            <button
              key={item.id}
              onClick={() => setSelectedId(item.id)}
              className={`px-4 py-2 text-xs font-medium rounded-xl whitespace-nowrap transition-all cursor-pointer ${
                selectedId === item.id
                  ? 'bg-cyan-500 text-slate-950 font-semibold shadow-sm shadow-cyan-500/20'
                  : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800 hover:bg-slate-900'
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Selected Pioneer Card */}
        <div className="p-8 sm:p-10 bg-slate-900/60 border border-slate-800 rounded-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/40 rounded-lg text-xs font-mono font-bold text-cyan-300">
                  {pioneer.years}
                </span>
                <span className="text-xs text-slate-400">{pioneer.role}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {pioneer.name}
              </h3>

              <div className="text-sm font-semibold text-cyan-300">
                Aporte Principal: {pioneer.famousFor}
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {pioneer.breakthrough}
              </p>
            </div>

            <div className="lg:col-span-4 p-5 bg-slate-950 border border-amber-800/30 rounded-xl space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Curiosidad de Vida</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {pioneer.funFact}
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

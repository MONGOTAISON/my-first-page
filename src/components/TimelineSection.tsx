import React, { useState, useEffect } from 'react';
import { AI_TIMELINE } from '../data/aiContent';
import { Clock, ChevronLeft, ChevronRight, Play, Pause, Award, BookMarked, User } from 'lucide-react';

export default function TimelineSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const current = AI_TIMELINE[activeIndex];

  // Auto-play timeline tour
  useEffect(() => {
    let timer: any;
    if (isPlaying) {
      timer = setInterval(() => {
        setActiveIndex(prev => (prev + 1) % AI_TIMELINE.length);
      }, 4000);
    }
    return () => clearInterval(timer);
  }, [isPlaying]);

  const handlePrev = () => {
    setIsPlaying(false);
    setActiveIndex(prev => (prev === 0 ? AI_TIMELINE.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIsPlaying(false);
    setActiveIndex(prev => (prev + 1) % AI_TIMELINE.length);
  };

  return (
    <section id="historia" className="py-20 bg-slate-900/40 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 mb-2">
              <Clock className="w-4 h-4" />
              <span>Evolución Histórica</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-400">De 1950 a la Frontera Actual</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Línea de Tiempo: Los 7 Hitos Cruciales
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
              La IA no surgió de la noche a la mañana: ha atravesado inviernos de investigación, descubrimientos matemáticos trascendentes y revoluciones de hardware.
            </p>
          </div>

          {/* Tour playback & arrows */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className={`px-3 py-2 text-xs font-medium rounded-lg flex items-center gap-1.5 transition-all cursor-pointer ${
                isPlaying
                  ? 'bg-amber-500 text-slate-950 font-semibold'
                  : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800'
              }`}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 text-cyan-400" />}
              <span>{isPlaying ? 'Pausar Tour' : 'Tour Automático'}</span>
            </button>

            <button
              onClick={handlePrev}
              aria-label="Hito anterior"
              className="p-2 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 rounded-lg transition-all cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              onClick={handleNext}
              aria-label="Siguiente hito"
              className="p-2 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 rounded-lg transition-all cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Milestone Navigation Buttons (Year Strip) */}
        <div className="flex items-center justify-between gap-2 overflow-x-auto pb-4 mb-10 border-b border-slate-800/80 scrollbar-none">
          {AI_TIMELINE.map((item, idx) => {
            const isActive = activeIndex === idx;
            return (
              <button
                key={item.year}
                onClick={() => {
                  setIsPlaying(false);
                  setActiveIndex(idx);
                }}
                className={`flex flex-col items-center py-2 px-3 sm:px-4 rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-cyan-500/10 border border-cyan-500/80 text-cyan-300'
                    : 'text-slate-500 hover:text-slate-300 hover:bg-slate-900 border border-transparent'
                }`}
              >
                <span className={`text-base sm:text-lg font-bold font-mono tabular-nums ${isActive ? 'text-cyan-300' : 'text-slate-400'}`}>
                  {item.year}
                </span>
                <span className="text-[10px] truncate max-w-[100px] hidden sm:inline">
                  {item.title.split(':')[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Milestone Card */}
        <div className="p-8 sm:p-10 bg-slate-900/60 border border-slate-800 rounded-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Core story */}
            <div className="lg:col-span-8 space-y-5">
              
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/40 rounded-lg text-sm font-bold font-mono text-cyan-300 tabular-nums">
                  {current.year}
                </span>
                <span className="text-xs text-slate-400 font-mono">Hito {activeIndex + 1} de {AI_TIMELINE.length}</span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
                  {current.title}
                </h3>
                <div className="text-sm font-semibold text-cyan-400 italic">
                  "{current.tagline}"
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {current.description}
              </p>

              {/* Protagonists */}
              <div className="pt-4 border-t border-slate-800/60">
                <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5" />
                  <span>Figuras Clave & Pioneros:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {current.protagonists.map((person, pIdx) => (
                    <span 
                      key={pIdx} 
                      className="px-2.5 py-1 bg-slate-950 border border-slate-800 rounded-lg text-xs font-medium text-slate-300"
                    >
                      {person}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Key Fact & Historical Impact */}
            <div className="lg:col-span-4 space-y-4">
              
              {/* Impact box */}
              <div className="p-5 bg-slate-950 border border-slate-800 rounded-xl space-y-2">
                <div className="text-xs font-mono text-cyan-400 flex items-center gap-1.5">
                  <Award className="w-4 h-4" />
                  <span>Impacto en la Ciencia</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {current.impact}
                </p>
              </div>

              {/* Archival fact box */}
              <div className="p-5 bg-slate-950/80 border border-amber-800/30 rounded-xl space-y-2">
                <div className="text-xs font-mono text-amber-400 flex items-center gap-1.5">
                  <BookMarked className="w-4 h-4" />
                  <span>Dato Curioso de Archivo</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {current.keyFact}
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

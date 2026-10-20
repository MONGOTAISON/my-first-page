import React from 'react';
import { KnowledgeLevel } from '../types/ai';
import { ArrowRight, Flame, Compass, GitBranch, Activity, Layers, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  level: KnowledgeLevel;
  setLevel: (lvl: KnowledgeLevel) => void;
}

export default function Hero({ level, setLevel }: HeroProps) {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const levelDescriptions = {
    principiante: 'Explicaciones claras y directas con analogías sencillas, sin jerga confusa.',
    intermedio: 'Detalles sobre algoritmos, datos, historia técnica y arquitectura de modelos.',
    avanzado: 'Profundización técnica con matemáticas, funciones de activación, pesos, gradientes y tensores.'
  };

  return (
    <section id="fundamentos" className="relative pt-10 pb-20 overflow-hidden border-b border-slate-800/80">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Announcement Bar */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-3 bg-slate-900/90 border border-slate-800 rounded-xl backdrop-blur-sm">
          <div className="flex items-center gap-2.5 text-xs text-slate-300">
            <div className="w-5 h-5 rounded-md bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <Flame className="w-3.5 h-3.5 fill-amber-400" />
            </div>
            <span className="font-bold text-white uppercase tracking-wider">LO MÁ DURO:</span>
            <span className="text-slate-400">Todo sobre el origen, la evolución y el funcionamiento real de la IA</span>
          </div>

          {/* Level Switcher Buttons */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-950/80 rounded-lg border border-slate-800/80">
            <span className="text-[11px] text-slate-400 px-2 font-mono hidden md:inline">Nivel:</span>
            {(['principiante', 'intermedio', 'avanzado'] as const).map(lvl => (
              <button
                key={lvl}
                onClick={() => setLevel(lvl)}
                className={`px-3 py-1 text-xs font-medium rounded-md transition-all whitespace-nowrap cursor-pointer capitalize ${
                  level === lvl
                    ? 'bg-gradient-to-r from-amber-400 to-cyan-400 text-slate-950 font-bold shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-slate-900'
                }`}
              >
                {lvl}
              </button>
            ))}
          </div>
        </div>

        {/* Hero Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & Interaction */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-amber-400">
              <Flame className="w-3.5 h-3.5 fill-amber-400" />
              <span>LO MÁ DURO DE LA IA</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-400">Historia, Origen y Futuro</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight" style={{ textWrap: 'balance' }}>
              ¿De Dónde Salió la IA y Cómo Evolucionó?
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              {level === 'principiante' && (
                <>
                  La Inteligencia Artificial no apareció de repente en 2022 con ChatGPT. Tiene más de <strong className="text-amber-300 font-semibold">70 años de historia</strong>: comenzó con autómatas mecánicos, pasó por inviernos donde nadie creía en ella y explotó cuando combinamos chips ultrapotentes con millones de datos de internet.
                </>
              )}
              {level === 'intermedio' && (
                <>
                  Desde la lógica deductiva de Turing en 1950 y la conferencia de Dartmouth en 1956, hasta el colapso de las máquinas LISP y el renacimiento de las redes neuronales con GPUs en 2012. <strong className="text-cyan-300 font-semibold">Descubre los 7 saltos evolutivos</strong> que cambiaron la computación.
                </>
              )}
              {level === 'avanzado' && (
                <>
                  De la computación simbólica GOFAI de Von Neumann y Minsky a la optimización diferencial end-to-end. Análisis de la convergencia de <strong className="text-cyan-300 font-semibold">Backpropagation estocástico, paralelismo tensorial en GPUs masivas y atención multi-cabeza en Transformers</strong>.
                </>
              )}
            </p>

            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400">
              <span className="text-slate-300 font-semibold">Modo {level}:</span> {levelDescriptions[level]}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => scrollTo('origen')}
                className="px-5 py-3 text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-cyan-400 to-teal-300 rounded-xl hover:brightness-110 shadow-md shadow-amber-500/10 active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
              >
                <Compass className="w-4 h-4" />
                <span>¿De Dónde Salió? (Origen)</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollTo('evolucion')}
                className="px-5 py-3 text-xs sm:text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-xl active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
              >
                <GitBranch className="w-4 h-4 text-cyan-400" />
                <span>Las 7 Eras de Evolución</span>
              </button>

              <button
                onClick={() => scrollTo('simulador')}
                className="px-5 py-3 text-xs sm:text-sm font-semibold text-slate-300 hover:text-white bg-slate-950 hover:bg-slate-900 border border-slate-800 rounded-xl active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
              >
                <Activity className="w-4 h-4 text-teal-400" />
                <span>Simulador de Red</span>
              </button>
            </div>

            {/* Micro proof badges */}
            <div className="flex items-center gap-6 pt-2 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>70+ años de historia analizada</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Explicado al grano</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal-400" />
                <span>Simuladores con botones</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Asset */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl group">
              <img
                src="/src/assets/images/hero_ai_evolution_1792478024766.jpg"
                alt="Evolución visual de la inteligencia artificial de nodos simples a redes neuronales masivas"
                referrerPolicy="no-referrer"
                className="w-full h-[380px] object-cover group-hover:scale-102 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none" />
              
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-950/90 backdrop-blur-md border border-slate-800/80">
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="font-bold text-amber-400">1950 vs 2026</span>
                  <span className="font-mono text-cyan-400">De 1 Neurona a 1.8T Parámetros</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Lo que empezó en 1956 como un taller de verano de dos meses hoy representa la mayor transformación tecnológica de la especie humana.
                </p>
                <div className="mt-2 pt-2 border-t border-slate-800/70 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span>Primer Perceptrón: 1957</span>
                  <span>AlexNet: 2012</span>
                  <span className="text-emerald-400">Era Actual: Generativa</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 3 Quick Facts below split */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800/80">
            <div className="text-2xl font-bold text-amber-400 font-mono tabular-nums mb-1">1956</div>
            <div className="text-xs font-semibold text-white uppercase tracking-wider mb-1">El Nacimiento en Dartmouth</div>
            <p className="text-xs text-slate-400 leading-relaxed">
              John McCarthy acuñó por primera vez el término en New Hampshire pensando que resolverían la IA en un verano.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800/80">
            <div className="text-2xl font-bold text-cyan-400 font-mono tabular-nums mb-1">2 Inviernos</div>
            <div className="text-xs font-semibold text-white uppercase tracking-wider mb-1">Los Años Oscuros</div>
            <p className="text-xs text-slate-400 leading-relaxed">
              En los años 70 y 80 los gobiernos retiraron los fondos y la palabra "IA" se volvió tabú por promesas exageradas.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800/80">
            <div className="text-2xl font-bold text-teal-400 font-mono tabular-nums mb-1">50 Mil Millones X</div>
            <div className="text-xs font-semibold text-white uppercase tracking-wider mb-1">Salto de Cómputo</div>
            <p className="text-xs text-slate-400 leading-relaxed">
              La diferencia en potencia de cálculo entre las máquinas de los años 50 y las GPUs de los centros de datos modernos.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

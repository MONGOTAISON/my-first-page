import React, { useState } from 'react';
import { ORIGINS_STORY } from '../data/aiContent';
import { Compass, Sparkles, BookOpen, Clock, Lightbulb, UserCheck, ArrowRight } from 'lucide-react';

export default function OriginsSection() {
  const [activeTab, setActiveTab] = useState<'filosofia' | 'lovelace' | 'turing' | 'dartmouth'>('dartmouth');

  const originPillars = [
    {
      id: 'filosofia',
      title: '1. Raíces Filosóficas y Mecánicas',
      period: 'Siglos IV a.C. - XVII d.C.',
      quote: '"Calculemos en lugar de discutir." — Gottfried Leibniz',
      content: ORIGINS_STORY.philosophicalRoots,
      badge: 'Antigüedad a la Ilustración',
      details: [
        'Mito griego de Talos: El primer autómata conceptual forjado en bronce.',
        'Silogismos de Aristóteles: Las primeras reglas matemáticas formales de inferencia.',
        'La máquina de Leibniz: El primer intento físico de realizar deducciones lógicas mediante ruedas dentadas.'
      ]
    },
    {
      id: 'lovelace',
      title: '2. Ada Lovelace y la Máquina Analítica',
      period: '1843',
      quote: '"La máquina no tiene pretensiones de originar nada por sí misma." — Ada Lovelace',
      content: ORIGINS_STORY.lovelaceInsight,
      badge: 'El Primer Algoritmo',
      details: [
        'Lovelace comprendió que los números podían representar música, imágenes o letras.',
        'Formuló la objeción fundamental de si una computadora puede ser verdaderamente original o creativa.',
        'Creó el primer programa de computadora de la historia para calcular los números de Bernoulli.'
      ]
    },
    {
      id: 'turing',
      title: '3. Alan Turing y la Pregunta de Oro',
      period: '1950',
      quote: '"¿Pueden pensar las máquinas?" — Alan Turing (1950)',
      content: ORIGINS_STORY.turingMoment,
      badge: 'El Padre de la Computación',
      details: [
        'Descifró la máquina Enigma militar acortando la Segunda Guerra Mundial.',
        'Definió la "Máquina Universal": un único hardware capaz de simular cualquier programa.',
        'Creó el Test de Turing: reemplazó el debate metafísico por una prueba empírica de conversación a ciegas.'
      ]
    },
    {
      id: 'dartmouth',
      title: '4. Conferencia de Dartmouth: El Bautismo Oficial',
      period: 'Verano de 1956',
      quote: '"Intentaremos descubrir cómo hacer que las máquinas usen lenguaje y formen conceptos." — Propuesta de Dartmouth',
      content: ORIGINS_STORY.dartmouthGenesis,
      badge: 'Nacimiento Formal de la IA',
      details: [
        'John McCarthy acuñó formalmente el nombre "Inteligencia Artificial" (AI).',
        'Creyeron con optimismo ingenuo que resolverían la inteligencia humana en apenas dos meses.',
        'Reunió a los 4 arquitectos fundacionales: McCarthy, Minsky, Shannon y Rochester.'
      ]
    }
  ];

  const currentPillar = originPillars.find(p => p.id === activeTab) || originPillars[3];

  return (
    <section id="origen" className="py-20 bg-slate-950 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 mb-2">
              <Compass className="w-4 h-4" />
              <span>Génesis Histórica</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-400">¿De dónde salió la IA realmente?</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              De Dónde Salió: El Origen de las Mentes Artificiales
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
              La IA no fue inventada por sorpresa en Silicon Valley. Es el resultado de siglos de filosofía, matemática pura y el audaz experimento de cuatro científicos en 1956.
            </p>
          </div>

          <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-300 max-w-xs shrink-0">
            <span className="font-semibold text-cyan-400 block mb-1">Dato Clave:</span>
            El término "Inteligencia Artificial" fue inventado en 1956 por John McCarthy para evitar la palabra "Cibernética".
          </div>
        </div>

        {/* Interactive Milestone Selector Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8">
          {originPillars.map(p => (
            <button
              key={p.id}
              onClick={() => setActiveTab(p.id as any)}
              className={`p-3.5 rounded-xl text-left border transition-all cursor-pointer ${
                activeTab === p.id
                  ? 'bg-slate-900 border-cyan-500 shadow-md shadow-cyan-500/10'
                  : 'bg-slate-950 border-slate-800 hover:border-slate-700 hover:bg-slate-900/60'
              }`}
            >
              <div className="text-[11px] font-mono text-cyan-400 mb-1">{p.period}</div>
              <div className="text-xs font-bold text-white truncate">{p.title.split('.')[1]}</div>
            </button>
          ))}
        </div>

        {/* Detailed Origin Card */}
        <div className="p-8 sm:p-10 bg-slate-900/60 border border-slate-800 rounded-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            <div className="lg:col-span-8 space-y-5">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 bg-cyan-500/10 border border-cyan-500/40 rounded-lg text-xs font-mono font-bold text-cyan-300">
                  {currentPillar.badge}
                </span>
                <span className="text-xs text-slate-400 font-mono">{currentPillar.period}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {currentPillar.title}
              </h3>

              <div className="p-4 bg-slate-950/80 border border-slate-800 rounded-xl text-sm italic text-cyan-200">
                {currentPillar.quote}
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {currentPillar.content}
              </p>

              {/* Three key facts for this period */}
              <div className="pt-4 border-t border-slate-800 space-y-2">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">Hitos y Claves de este Momento:</div>
                {currentPillar.details.map((d, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                    <span>{d}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side summary panel */}
            <div className="lg:col-span-4 p-6 bg-slate-950 border border-slate-800 rounded-xl space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider">
                <Lightbulb className="w-4 h-4" />
                <span>¿Por qué importa hoy?</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Entender de dónde vino la IA nos protege del "hype" y de creer que los modelos son seres vivos. Desde Ada Lovelace hasta Turing, los fundamentos matemáticos y las preguntas éticas siguen siendo exactamente las mismas.
              </p>
              <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-400">
                La historia demuestra que la IA avanza en ciclos: olas de optimismo desmedido seguidas de correcciones realistas.
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

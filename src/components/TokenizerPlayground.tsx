import React, { useState } from 'react';
import { Sparkles, Terminal, ArrowRight, RotateCcw, Shuffle, Sliders, Layers } from 'lucide-react';

interface CandidateToken {
  token: string;
  probability: number;
}

export default function TokenizerPlayground() {
  const [inputText, setInputText] = useState('La inteligencia artificial aprende a través de');
  const [temperature, setTemperature] = useState<number>(0.7);

  const samplePrompts = [
    'La inteligencia artificial aprende a través de',
    'Una red neuronal profunda ajusta sus pesos mediante',
    'Los modelos de lenguaje generan texto prediciendo el siguiente',
    'El futuro de la ciencia y la robótica dependerá de'
  ];

  // Tokenization simulation: splits by spaces and punctuation, assigns mock hash IDs
  const tokenize = (text: string) => {
    if (!text.trim()) return [];
    const rawTokens = text.split(/(\s+|[.,!?;:])/g).filter(t => t.length > 0);
    return rawTokens.map((tok, idx) => {
      // Deterministic pseudo-ID
      let hash = 0;
      for (let i = 0; i < tok.length; i++) {
        hash = (hash << 5) - hash + tok.charCodeAt(i);
        hash |= 0;
      }
      const tokenId = Math.abs(hash % 90000) + 1000;
      return {
        text: tok,
        id: tokenId,
        isSpace: /^\s+$/.test(tok),
        colorIndex: idx % 5
      };
    });
  };

  const tokens = tokenize(inputText);

  // Dynamic next-token candidates based on context
  const getCandidates = (text: string, temp: number): CandidateToken[] => {
    const trimmed = text.trim().toLowerCase();
    
    let baseList: { token: string; baseWeight: number }[] = [];

    if (trimmed.endsWith('a través de') || trimmed.endsWith('de')) {
      baseList = [
        { token: ' millones de ejemplos', baseWeight: 0.42 },
        { token: ' datos estructurados', baseWeight: 0.28 },
        { token: ' retropropagación', baseWeight: 0.18 },
        { token: ' algoritmos iterativos', baseWeight: 0.12 }
      ];
    } else if (trimmed.endsWith('mediante')) {
      baseList = [
        { token: ' gradiente descendente', baseWeight: 0.51 },
        { token: ' backpropagation estocástico', baseWeight: 0.26 },
        { token: ' optimizadores tipo Adam', baseWeight: 0.14 },
        { token: ' regularización L2', baseWeight: 0.09 }
      ];
    } else if (trimmed.endsWith('siguiente')) {
      baseList = [
        { token: ' token con mayor probabilidad', baseWeight: 0.62 },
        { token: ' paso de inferencia', baseWeight: 0.21 },
        { token: ' carácter semántico', baseWeight: 0.11 },
        { token: ' elemento del vocabulario', baseWeight: 0.06 }
      ];
    } else {
      baseList = [
        { token: ' nuevas metodologías', baseWeight: 0.38 },
        { token: ' patrones latentes', baseWeight: 0.29 },
        { token: ' modelos multimodales', baseWeight: 0.20 },
        { token: ' decisiones autónomas', baseWeight: 0.13 }
      ];
    }

    // Apply temperature softmax perturbation
    const adjusted = baseList.map(item => {
      const logProb = Math.log(item.baseWeight) / Math.max(0.05, temp);
      return { token: item.token, score: Math.exp(logProb) };
    });

    const sumScore = adjusted.reduce((acc, curr) => acc + curr.score, 0);

    return adjusted.map(item => ({
      token: item.token,
      probability: Math.round((item.score / sumScore) * 100)
    }));
  };

  const candidates = getCandidates(inputText, temperature);

  const appendToken = (newToken: string) => {
    setInputText(prev => prev + newToken);
  };

  const tokenColors = [
    'bg-cyan-500/15 border-cyan-500/40 text-cyan-300',
    'bg-purple-500/15 border-purple-500/40 text-purple-300',
    'bg-amber-500/15 border-amber-500/40 text-amber-300',
    'bg-emerald-500/15 border-emerald-500/40 text-emerald-300',
    'bg-blue-500/15 border-blue-500/40 text-blue-300'
  ];

  return (
    <section id="tokens" className="py-20 bg-slate-950 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 mb-2">
              <Terminal className="w-4 h-4" />
              <span>Cómo Funcionan los Grandes Modelos de Lenguaje</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-400">Predicción Autorregresiva</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Laboratorio de Tokens y Probabilidades
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
              Los modelos como ChatGPT o Gemini no leen palabras completas ni piensan en oraciones humanas: dividen el texto en <strong>tokens</strong> numéricos y calculan la probabilidad del siguiente token. ¡Pruébalo tú mismo!
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400 font-mono">Total Tokens:</span>
            <span className="px-3 py-1 bg-slate-900 border border-slate-800 rounded-lg text-sm font-bold text-cyan-400 font-mono tabular-nums">
              {tokens.filter(t => !t.isSpace).length}
            </span>
          </div>
        </div>

        {/* Preset Prompt Buttons */}
        <div className="mb-6 space-y-2">
          <div className="text-xs font-semibold text-slate-400">Frases de Ejemplo para Probar:</div>
          <div className="flex flex-wrap gap-2">
            {samplePrompts.map((p, idx) => (
              <button
                key={idx}
                onClick={() => setInputText(p)}
                className="px-3 py-1.5 text-xs text-slate-300 bg-slate-900 hover:bg-slate-800 hover:text-white border border-slate-800 rounded-lg transition-all cursor-pointer whitespace-nowrap"
              >
                "{p.slice(0, 38)}..."
              </button>
            ))}
          </div>
        </div>

        {/* Input & Tokenizer Playground Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left: Input Textarea and Tokenized Breakdown */}
          <div className="lg:col-span-7 p-6 bg-slate-900/60 border border-slate-800 rounded-2xl flex flex-col justify-between space-y-6">
            
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-semibold text-slate-300">
                  Texto de Entrada (Escribe o Edita):
                </label>
                <button
                  onClick={() => setInputText('')}
                  className="text-xs text-slate-400 hover:text-white flex items-center gap-1 cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Limpiar</span>
                </button>
              </div>

              <textarea
                value={inputText}
                onChange={e => setInputText(e.target.value)}
                rows={3}
                className="w-full p-3.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-slate-200 focus:outline-none focus:border-cyan-500 font-sans leading-relaxed"
                placeholder="Escribe cualquier frase aquí..."
              />
            </div>

            {/* Visual Token Stream */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>Representación en Tokens del Modelo:</span>
                <span className="text-[11px] text-cyan-400">Cada bloque es 1 Token</span>
              </div>

              <div className="p-4 bg-slate-950 border border-slate-800/80 rounded-xl min-h-[90px] flex flex-wrap gap-1.5 items-center">
                {tokens.length === 0 ? (
                  <span className="text-xs text-slate-600 italic">Escribe texto arriba para visualizar la tokenización...</span>
                ) : (
                  tokens.map((tok, idx) => (
                    tok.isSpace ? (
                      <span key={idx} className="w-1" />
                    ) : (
                      <span
                        key={idx}
                        className={`inline-flex flex-col items-center px-2 py-1 rounded border text-xs font-mono transition-transform hover:scale-105 cursor-default ${tokenColors[tok.colorIndex]}`}
                      >
                        <span className="font-semibold">{tok.text}</span>
                        <span className="text-[9px] opacity-70 tabular-nums">#{tok.id}</span>
                      </span>
                    )
                  ))
                )}
              </div>
            </div>

            <div className="text-xs text-slate-500">
              Nota didáctica: Las palabras poco frecuentes o en otros idiomas suelen partirse en múltiples sub-tokens numéricos.
            </div>

          </div>

          {/* Right: Next-Token Probability Selector */}
          <div className="lg:col-span-5 p-6 bg-slate-900/60 border border-slate-800 rounded-2xl flex flex-col justify-between space-y-6">
            
            {/* Temperature Controls */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-white flex items-center gap-1.5">
                  <Sliders className="w-3.5 h-3.5 text-cyan-400" />
                  Temperatura de Inferencia
                </span>
                <span className="text-xs font-mono font-bold text-cyan-400 tabular-nums">
                  {temperature.toFixed(1)}
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2">
                {[
                  { val: 0.1, label: '0.1 Preciso' },
                  { val: 0.5, label: '0.5 Neutro' },
                  { val: 0.9, label: '0.9 Creativo' }
                ].map(opt => (
                  <button
                    key={opt.val}
                    onClick={() => setTemperature(opt.val)}
                    className={`px-3 py-2 text-xs font-medium rounded-lg transition-all cursor-pointer text-center ${
                      temperature === opt.val
                        ? 'bg-cyan-500 text-slate-950 font-semibold shadow-sm'
                        : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Candidate Next Tokens with Probability Buttons */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-300">
                <span className="font-semibold">Elige el Siguiente Token para Continuar:</span>
                <span className="text-[11px] text-slate-500">Haz clic para añadir</span>
              </div>

              <div className="space-y-2">
                {candidates.map((cand, idx) => (
                  <button
                    key={idx}
                    onClick={() => appendToken(cand.token)}
                    className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-cyan-500/80 hover:bg-slate-900/90 transition-all text-left group cursor-pointer"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-medium text-slate-200 group-hover:text-cyan-300 transition-colors">
                        +{cand.token}
                      </span>
                      <span className="text-xs font-mono font-bold text-cyan-400 tabular-nums">
                        {cand.probability}%
                      </span>
                    </div>

                    {/* Probability bar */}
                    <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-cyan-500 to-blue-500 h-full rounded-full transition-all duration-300"
                        style={{ width: `${cand.probability}%` }}
                      />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Explanatory badge */}
            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs text-slate-400">
              <span className="text-cyan-300 font-medium">¿Cómo genera oraciones la IA?</span> Repite este proceso cientos de veces: predice 1 token, lo agrega al contexto, y vuelve a predecir el siguiente.
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

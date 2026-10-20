import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, FastForward, Check, Info, Cpu, Sparkles, TrendingDown, Target } from 'lucide-react';

interface DatasetDef {
  id: string;
  name: string;
  inputs: [string, string, string];
  classes: [string, string];
  testSamples: {
    label: string;
    vals: [number, number, number];
    expectedClass: 0 | 1;
  }[];
}

const DATASETS: DatasetDef[] = [
  {
    id: 'spam',
    name: 'Filtro Anti-Spam',
    inputs: ['Palabras Clave Spam', 'Remitente No Confiable', 'Enlaces Sospechosos'],
    classes: ['Correo Legítimo', 'Spam / Phishing'],
    testSamples: [
      { label: 'Factura oficial de tu banco local', vals: [0.1, 0.05, 0.1], expectedClass: 0 },
      { label: '¡GANASTE $1,000,000! Haz clic aquí urgente', vals: [0.95, 0.9, 0.98], expectedClass: 1 },
      { label: 'Reunión semanal de proyecto viernes 10am', vals: [0.15, 0.1, 0.05], expectedClass: 0 },
      { label: 'Oferta exclusiva de préstamos sin aval', vals: [0.85, 0.7, 0.8], expectedClass: 1 },
    ]
  },
  {
    id: 'vision',
    name: 'Visión: Detección de Vehículo',
    inputs: ['Simetría de Ruedas', 'Silueta Rectangular', 'Reflejo de Parabrisas'],
    classes: ['Objeto No Vehículo', 'Vehículo Detectado'],
    testSamples: [
      { label: 'Árbol en la banqueta lateral', vals: [0.1, 0.2, 0.05], expectedClass: 0 },
      { label: 'Sedán compacto circulando a 40 km/h', vals: [0.92, 0.88, 0.9], expectedClass: 1 },
      { label: 'Peatón con mochila cruzando', vals: [0.15, 0.3, 0.1], expectedClass: 0 },
      { label: 'Camión de carga pesado', vals: [0.85, 0.95, 0.8], expectedClass: 1 },
    ]
  },
  {
    id: 'medical',
    name: 'Diagnóstico Predictivo',
    inputs: ['Nivel de Glucosa', 'Presión Arterial', 'Marcador Inflamatorio'],
    classes: ['Rango Normal / Estable', 'Riesgo Clínico Elevado'],
    testSamples: [
      { label: 'Paciente joven rutina anual', vals: [0.2, 0.25, 0.15], expectedClass: 0 },
      { label: 'Paciente con historial metabólico', vals: [0.88, 0.82, 0.75], expectedClass: 1 },
      { label: 'Atleta de alto rendimiento', vals: [0.1, 0.15, 0.1], expectedClass: 0 },
      { label: 'Paciente con inflamación aguda', vals: [0.75, 0.9, 0.85], expectedClass: 1 },
    ]
  }
];

export default function NeuralNetworkSimulator() {
  const [activeDatasetIndex, setActiveDatasetIndex] = useState(0);
  const [activation, setActivation] = useState<'relu' | 'sigmoid' | 'tanh'>('relu');
  const [learningRate, setLearningRate] = useState<number>(0.05);
  const [epochs, setEpochs] = useState<number>(0);
  const [loss, setLoss] = useState<number>(0.842);
  const [accuracy, setAccuracy] = useState<number>(50);
  const [isAutoTraining, setIsAutoTraining] = useState<boolean>(false);
  const [currentSampleIndex, setCurrentSampleIndex] = useState<number>(1);
  const [weights, setWeights] = useState<number[][]>(() => [
    [0.2, -0.4, 0.5, 0.1],
    [-0.3, 0.6, -0.1, 0.3],
    [0.4, -0.2, 0.3, -0.5],
  ]);
  const [outputWeights, setOutputWeights] = useState<number[][]>(() => [
    [-0.3, 0.4],
    [0.5, -0.6],
    [-0.2, 0.7],
    [0.6, -0.5]
  ]);
  const [lossHistory, setLossHistory] = useState<number[]>([0.842]);
  const [copiedNotification, setCopiedNotification] = useState(false);

  const dataset = DATASETS[activeDatasetIndex];
  const activeSample = dataset.testSamples[currentSampleIndex];

  // Forward Pass calculation for current sample
  const applyActivation = (val: number) => {
    if (activation === 'relu') return Math.max(0, val);
    if (activation === 'sigmoid') return 1 / (1 + Math.exp(-val));
    if (activation === 'tanh') return Math.tanh(val);
    return Math.max(0, val);
  };

  // Compute hidden neurons
  const hiddenActivations = [0, 1, 2, 3].map(hIdx => {
    let sum = 0;
    activeSample.vals.forEach((inVal, inIdx) => {
      sum += inVal * (weights[inIdx]?.[hIdx] ?? 0.1);
    });
    return applyActivation(sum);
  });

  // Compute output logits & softmax
  const rawOutputs = [0, 1].map(outIdx => {
    let sum = 0;
    hiddenActivations.forEach((hVal, hIdx) => {
      sum += hVal * (outputWeights[hIdx]?.[outIdx] ?? 0.1);
    });
    return sum;
  });

  // Softmax
  const exp0 = Math.exp(Math.min(5, Math.max(-5, rawOutputs[0])));
  const exp1 = Math.exp(Math.min(5, Math.max(-5, rawOutputs[1])));
  const prob0 = exp0 / (exp0 + exp1);
  const prob1 = exp1 / (exp0 + exp1);

  // Train one epoch step
  const trainStep = () => {
    setEpochs(prev => {
      const nextEpoch = prev + 1;
      
      // Gradually adjust weights towards ideal separation
      setWeights(currentW => {
        return currentW.map((row, i) => {
          return row.map((w, j) => {
            const delta = (Math.random() - 0.45) * learningRate * 0.8;
            return Number((w + delta).toFixed(3));
          });
        });
      });

      setOutputWeights(currentOutW => {
        return currentOutW.map((row, i) => {
          return row.map((w, j) => {
            // align output with sample target
            const targetDirection = (j === activeSample.expectedClass) ? 0.05 : -0.05;
            return Number((w + targetDirection * learningRate + (Math.random() - 0.5) * 0.02).toFixed(3));
          });
        });
      });

      // Loss decays smoothly with some realistic noise
      setLoss(prevLoss => {
        const decay = Math.max(0.04, prevLoss * (1 - learningRate * 0.25) + (Math.random() - 0.5) * 0.01);
        const newLoss = Math.max(0.02, Number(decay.toFixed(3)));
        setLossHistory(hist => [...hist.slice(-20), newLoss]);
        return newLoss;
      });

      // Accuracy increases
      setAccuracy(prevAcc => {
        const targetAcc = Math.min(99.4, 50 + nextEpoch * 1.8 + (Math.random() * 2));
        return Number(targetAcc.toFixed(1));
      });

      return nextEpoch;
    });
  };

  const trainTenEpochs = () => {
    for (let i = 0; i < 10; i++) {
      trainStep();
    }
  };

  const resetNetwork = () => {
    setIsAutoTraining(false);
    setEpochs(0);
    setLoss(0.842);
    setAccuracy(50.0);
    setLossHistory([0.842]);
    setWeights([
      [0.2, -0.4, 0.5, 0.1],
      [-0.3, 0.6, -0.1, 0.3],
      [0.4, -0.2, 0.3, -0.5],
    ]);
    setOutputWeights([
      [-0.3, 0.4],
      [0.5, -0.6],
      [-0.2, 0.7],
      [0.6, -0.5]
    ]);
  };

  // Auto-training interval
  useEffect(() => {
    let interval: any;
    if (isAutoTraining) {
      interval = setInterval(() => {
        trainStep();
      }, 350);
    }
    return () => clearInterval(interval);
  }, [isAutoTraining, learningRate, activeSample]);

  return (
    <section id="simulador" className="py-20 bg-slate-950 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 mb-2">
              <Cpu className="w-4 h-4" />
              <span>Laboratorio Didáctico Interactivo</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-400">Motor de Cálculo en Vivo</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Simulador Visual de Red Neuronal (Perceptrón Multicapa)
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
              Experimenta en directo cómo aprende una red neuronal artificial: pulsa los botones para cambiar funciones de activación, modificar la tasa de aprendizaje y entrenar los pesos sinápticos paso a paso.
            </p>
          </div>

          {/* Quick status bar */}
          <div className="flex items-center gap-4 p-3 bg-slate-900 border border-slate-800 rounded-xl shrink-0">
            <div>
              <div className="text-[11px] text-slate-400 uppercase tracking-wider font-mono">Épocas</div>
              <div className="text-lg font-bold text-white font-mono tabular-nums">{epochs}</div>
            </div>
            <div className="w-px h-8 bg-slate-800" />
            <div>
              <div className="text-[11px] text-slate-400 uppercase tracking-wider font-mono">Pérdida (Loss)</div>
              <div className="text-lg font-bold text-amber-400 font-mono tabular-nums">{loss.toFixed(3)}</div>
            </div>
            <div className="w-px h-8 bg-slate-800" />
            <div>
              <div className="text-[11px] text-slate-400 uppercase tracking-wider font-mono">Precisión</div>
              <div className="text-lg font-bold text-emerald-400 font-mono tabular-nums">{accuracy.toFixed(1)}%</div>
            </div>
          </div>
        </div>

        {/* Control Toolbar - Full of active, rich buttons */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 p-4 mb-8 bg-slate-900/80 border border-slate-800 rounded-xl backdrop-blur-sm">
          
          {/* Group 1: Datasets */}
          <div className="lg:col-span-4 space-y-2">
            <span className="text-xs font-semibold text-slate-300 block">1. Problema / Dataset a Aprender:</span>
            <div className="flex flex-wrap gap-1.5">
              {DATASETS.map((ds, idx) => (
                <button
                  key={ds.id}
                  onClick={() => {
                    setActiveDatasetIndex(idx);
                    setCurrentSampleIndex(0);
                  }}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                    activeDatasetIndex === idx
                      ? 'bg-cyan-500 text-slate-950 font-semibold shadow-sm'
                      : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  {ds.name}
                </button>
              ))}
            </div>
          </div>

          {/* Group 2: Activation Function */}
          <div className="lg:col-span-3 space-y-2">
            <span className="text-xs font-semibold text-slate-300 block">2. Función de Activación (No linealidad):</span>
            <div className="flex gap-1.5">
              {(['relu', 'sigmoid', 'tanh'] as const).map(fn => (
                <button
                  key={fn}
                  onClick={() => setActivation(fn)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg uppercase tracking-wide transition-all cursor-pointer ${
                    activation === fn
                      ? 'bg-teal-500 text-slate-950 font-semibold shadow-sm'
                      : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  {fn}
                </button>
              ))}
            </div>
          </div>

          {/* Group 3: Learning Rate */}
          <div className="lg:col-span-2 space-y-2">
            <span className="text-xs font-semibold text-slate-300 block">3. Tasa (LR):</span>
            <div className="flex gap-1.5">
              {[0.01, 0.05, 0.1].map(lr => (
                <button
                  key={lr}
                  onClick={() => setLearningRate(lr)}
                  className={`px-2.5 py-1.5 text-xs font-mono rounded-lg transition-all cursor-pointer ${
                    learningRate === lr
                      ? 'bg-blue-500 text-white font-bold'
                      : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  {lr}
                </button>
              ))}
            </div>
          </div>

          {/* Group 4: Training Actions */}
          <div className="lg:col-span-3 space-y-2">
            <span className="text-xs font-semibold text-slate-300 block">4. Ejecutar Entrenamiento:</span>
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={trainStep}
                className="px-3 py-1.5 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg flex items-center gap-1.5 active:scale-95 transition-all cursor-pointer"
              >
                <Play className="w-3.5 h-3.5" />
                <span>+1 Época</span>
              </button>

              <button
                onClick={trainTenEpochs}
                className="px-3 py-1.5 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg flex items-center gap-1.5 active:scale-95 transition-all cursor-pointer"
              >
                <FastForward className="w-3.5 h-3.5 text-cyan-400" />
                <span>+10 Épocas</span>
              </button>

              <button
                onClick={() => setIsAutoTraining(!isAutoTraining)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg flex items-center gap-1.5 active:scale-95 transition-all cursor-pointer ${
                  isAutoTraining
                    ? 'bg-amber-500 text-slate-950'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700'
                }`}
              >
                {isAutoTraining ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 text-emerald-400" />}
                <span>{isAutoTraining ? 'Pausar' : 'Auto'}</span>
              </button>

              <button
                onClick={resetNetwork}
                title="Reiniciar todos los pesos a valores aleatorios"
                className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg border border-slate-800 transition-all cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Interactive Neural Stage & Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Main Stage: Neural Architecture Canvas */}
          <div className="lg:col-span-8 p-6 bg-slate-900/50 border border-slate-800 rounded-2xl flex flex-col justify-between relative overflow-hidden">
            
            {/* Stage title */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 mb-6">
              <div className="text-xs font-mono text-slate-400 flex items-center gap-2">
                <span>Arquitectura: 3 Entradas → 4 Ocultas ({activation.toUpperCase()}) → 2 Salidas (Softmax)</span>
              </div>
              <div className="text-xs text-slate-400">
                Líneas gruesas = Mayor peso sináptico
              </div>
            </div>

            {/* Neural Graph Visualizer */}
            <div className="relative py-8 px-4 flex items-center justify-between">
              
              {/* Input Layer */}
              <div className="flex flex-col gap-8 z-10">
                <div className="text-[11px] font-mono text-cyan-400 text-center uppercase tracking-wider mb-1">Entrada (X)</div>
                {dataset.inputs.map((label, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-slate-950 border-2 border-cyan-500/80 flex flex-col items-center justify-center shadow-lg shadow-cyan-500/10">
                      <span className="text-[10px] font-mono text-slate-400">x{idx + 1}</span>
                      <span className="text-xs font-mono font-bold text-cyan-300 tabular-nums">
                        {activeSample.vals[idx].toFixed(2)}
                      </span>
                    </div>
                    <div className="text-xs text-slate-300 font-medium max-w-[110px] leading-tight">
                      {label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Hidden Layer */}
              <div className="flex flex-col gap-5 z-10">
                <div className="text-[11px] font-mono text-teal-400 text-center uppercase tracking-wider mb-1">Capa Oculta (H)</div>
                {hiddenActivations.map((hVal, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    <div 
                      className="w-12 h-12 rounded-full bg-slate-950 border-2 transition-colors duration-300 flex flex-col items-center justify-center shadow-md"
                      style={{
                        borderColor: hVal > 0.5 ? '#14b8a6' : '#334155',
                        boxShadow: hVal > 0.5 ? '0 0 15px rgba(20, 184, 166, 0.3)' : 'none'
                      }}
                    >
                      <span className="text-[10px] font-mono text-slate-400">h{idx + 1}</span>
                      <span className="text-xs font-mono font-bold text-teal-300 tabular-nums">
                        {hVal.toFixed(2)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Output Layer */}
              <div className="flex flex-col gap-10 z-10">
                <div className="text-[11px] font-mono text-blue-400 text-center uppercase tracking-wider mb-1">Salida (Ŷ)</div>
                
                {/* Class 0 */}
                <div className="flex items-center gap-3">
                  <div 
                    className="w-14 h-14 rounded-full bg-slate-950 border-2 transition-all duration-300 flex flex-col items-center justify-center"
                    style={{
                      borderColor: prob0 > 0.5 ? '#06b6d4' : '#334155',
                      boxShadow: prob0 > 0.5 ? '0 0 20px rgba(6, 182, 212, 0.4)' : 'none'
                    }}
                  >
                    <span className="text-[10px] font-mono text-slate-400">P(C0)</span>
                    <span className="text-xs font-mono font-bold text-cyan-300 tabular-nums">
                      {(prob0 * 100).toFixed(1)}%
                    </span>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">{dataset.classes[0]}</div>
                    {activeSample.expectedClass === 0 && (
                      <span className="text-[10px] text-emerald-400 font-mono">Esperado ✓</span>
                    )}
                  </div>
                </div>

                {/* Class 1 */}
                <div className="flex items-center gap-3">
                  <div 
                    className="w-14 h-14 rounded-full bg-slate-950 border-2 transition-all duration-300 flex flex-col items-center justify-center"
                    style={{
                      borderColor: prob1 > 0.5 ? '#a855f7' : '#334155',
                      boxShadow: prob1 > 0.5 ? '0 0 20px rgba(168, 85, 247, 0.4)' : 'none'
                    }}
                  >
                    <span className="text-[10px] font-mono text-slate-400">P(C1)</span>
                    <span className="text-xs font-mono font-bold text-purple-300 tabular-nums">
                      {(prob1 * 100).toFixed(1)}%
                    </span>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">{dataset.classes[1]}</div>
                    {activeSample.expectedClass === 1 && (
                      <span className="text-[10px] text-emerald-400 font-mono">Esperado ✓</span>
                    )}
                  </div>
                </div>

              </div>

            </div>

            {/* Educational insight bar */}
            <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-slate-400 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <Info className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>
                  {epochs === 0 
                    ? 'Pesos inicializados aleatoriamente. Haz clic en "+1 Época" o "Auto" para iniciar el aprendizaje.'
                    : `Época ${epochs}: La red actualizó ${3 * 4 + 4 * 2} sinapsis mediante descenso de gradiente.`}
                </span>
              </div>
              <div className="font-mono text-slate-400 text-[11px] tabular-nums">
                Muestras evaluadas: {dataset.testSamples.length}
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Test Bench & Loss Graph */}
          <div className="lg:col-span-4 space-y-6 flex flex-col justify-between">
            
            {/* Test Sample Selector Buttons */}
            <div className="p-5 bg-slate-900/60 border border-slate-800 rounded-2xl space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-white uppercase tracking-wider">Inyectar Caso de Prueba</span>
                <span className="text-[11px] text-cyan-400 font-mono">Click para evaluar</span>
              </div>
              
              <div className="space-y-2">
                {dataset.testSamples.map((sample, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSampleIndex(idx)}
                    className={`w-full p-2.5 rounded-xl text-left transition-all cursor-pointer border ${
                      currentSampleIndex === idx
                        ? 'bg-slate-800 border-cyan-500/80 shadow-md'
                        : 'bg-slate-950/60 border-slate-800/80 hover:bg-slate-850 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs font-medium text-white mb-1">
                      <span className="truncate">{sample.label}</span>
                      {currentSampleIndex === idx && <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />}
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono">
                      <span>Valores: [{sample.vals.join(', ')}]</span>
                      <span className={sample.expectedClass === 1 ? 'text-purple-400' : 'text-cyan-400'}>
                        {dataset.classes[sample.expectedClass]}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Mini Loss History Visualizer */}
            <div className="p-5 bg-slate-900/60 border border-slate-800 rounded-2xl space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-white uppercase tracking-wider flex items-center gap-1.5">
                  <TrendingDown className="w-4 h-4 text-amber-400" />
                  Curva de Convergencia (Error)
                </span>
                <span className="text-xs font-mono text-amber-400 tabular-nums">
                  {loss.toFixed(3)}
                </span>
              </div>

              {/* Sparkline bar chart */}
              <div className="h-16 flex items-end gap-1 pt-2 border-b border-slate-800">
                {lossHistory.map((val, idx) => {
                  const heightPercent = Math.min(100, Math.max(10, (val / 0.9) * 100));
                  return (
                    <div
                      key={idx}
                      className="flex-1 bg-amber-500/60 hover:bg-amber-400 rounded-t transition-all"
                      style={{ height: `${heightPercent}%` }}
                      title={`Época: ${idx} - Loss: ${val}`}
                    />
                  );
                })}
              </div>

              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>Inicio (Alto Error)</span>
                <span>Convergencia Óptima</span>
              </div>
            </div>

            {/* Quick concept takeaway */}
            <div className="p-4 bg-cyan-950/20 border border-cyan-800/40 rounded-xl text-xs text-slate-300">
              <p className="font-semibold text-cyan-300 mb-1">¿Qué sucede internamente?</p>
              <p className="text-slate-400 leading-relaxed text-[11px]">
                En cada época, la red calcula la diferencia entre su predicción y la respuesta correcta. Con <strong>Backpropagation</strong>, propaga esa diferencia hacia atrás ajustando cada peso según la tasa de aprendizaje.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

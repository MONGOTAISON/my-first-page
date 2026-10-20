import React, { useState } from 'react';
import { QUIZ_QUESTIONS } from '../data/aiContent';
import { HelpCircle, CheckCircle2, XCircle, RotateCcw, ArrowRight, Award } from 'lucide-react';

export default function QuizSection() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [answers, setAnswers] = useState<Record<number, boolean>>({});
  const [isCompleted, setIsCompleted] = useState(false);

  const question = QUIZ_QUESTIONS[currentIdx];

  const handleSelectOption = (optionId: string, isCorrect: boolean) => {
    if (selectedOptionId !== null) return; // already answered this question
    setSelectedOptionId(optionId);
    setAnswers(prev => ({
      ...prev,
      [question.id]: isCorrect
    }));
  };

  const handleNext = () => {
    if (currentIdx < QUIZ_QUESTIONS.length - 1) {
      setCurrentIdx(prev => prev + 1);
      setSelectedOptionId(null);
    } else {
      setIsCompleted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentIdx(0);
    setSelectedOptionId(null);
    setAnswers({});
    setIsCompleted(false);
  };

  const correctCount = Object.values(answers).filter(Boolean).length;

  return (
    <section id="quiz" className="py-20 bg-slate-900/40 border-b border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 mb-2">
            <HelpCircle className="w-4 h-4" />
            <span>Autoevaluación Interactiva</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-slate-400">Verifica tu Aprendizaje</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Desafío de Conceptos Clave de IA
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl mx-auto leading-relaxed">
            Pon a prueba tu comprensión sobre redes neuronales, transformers y paradigmas de aprendizaje con este test de 5 preguntas.
          </p>
        </div>

        {!isCompleted ? (
          <div className="p-8 sm:p-10 bg-slate-900/80 border border-slate-800 rounded-2xl shadow-xl space-y-6">
            
            {/* Question status counter */}
            <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800/80 pb-4">
              <span className="font-mono text-cyan-400 font-semibold">
                Pregunta {currentIdx + 1} de {QUIZ_QUESTIONS.length}
              </span>
              <span className="font-mono tabular-nums">
                Aciertos: {correctCount}
              </span>
            </div>

            {/* Question Text */}
            <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
              {question.question}
            </h3>

            {/* Option Buttons */}
            <div className="space-y-3 pt-2">
              {question.options.map(option => {
                const isSelected = selectedOptionId === option.id;
                const showFeedback = selectedOptionId !== null;

                let buttonStyles = 'bg-slate-950 text-slate-300 border-slate-800 hover:border-slate-700 hover:bg-slate-850';
                
                if (showFeedback) {
                  if (option.isCorrect) {
                    buttonStyles = 'bg-emerald-950/40 text-emerald-200 border-emerald-500/80';
                  } else if (isSelected && !option.isCorrect) {
                    buttonStyles = 'bg-rose-950/40 text-rose-200 border-rose-500/80';
                  } else {
                    buttonStyles = 'bg-slate-950/40 text-slate-500 border-slate-900';
                  }
                }

                return (
                  <button
                    key={option.id}
                    onClick={() => handleSelectOption(option.id, option.isCorrect)}
                    disabled={showFeedback}
                    className={`w-full p-4 rounded-xl border text-left text-xs sm:text-sm font-medium transition-all flex items-start justify-between gap-3 cursor-pointer ${buttonStyles}`}
                  >
                    <div className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-md bg-slate-900 flex items-center justify-center text-xs font-mono font-bold shrink-0 text-slate-400">
                        {option.id.toUpperCase()}
                      </span>
                      <span className="pt-0.5">{option.text}</span>
                    </div>

                    {showFeedback && option.isCorrect && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    )}
                    {showFeedback && isSelected && !option.isCorrect && (
                      <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Explanation box after selection */}
            {selectedOptionId !== null && (
              <div className="p-4 bg-slate-950 border border-cyan-800/40 rounded-xl space-y-1.5 animate-fadeIn">
                <div className="text-xs font-semibold text-cyan-400">Explicación Didáctica:</div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {question.explanation}
                </p>
              </div>
            )}

            {/* Navigation button */}
            {selectedOptionId !== null && (
              <div className="flex justify-end pt-4 border-t border-slate-800/80">
                <button
                  onClick={handleNext}
                  className="px-5 py-2.5 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg flex items-center gap-2 active:scale-95 transition-all cursor-pointer"
                >
                  <span>{currentIdx < QUIZ_QUESTIONS.length - 1 ? 'Siguiente Pregunta' : 'Ver Resultados'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}

          </div>
        ) : (
          /* Completion Screen */
          <div className="p-8 sm:p-12 bg-slate-900/80 border border-slate-800 rounded-2xl text-center space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/40 flex items-center justify-center mx-auto text-cyan-400">
              <Award className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-bold text-white">¡Desafío Completado!</h3>

            <div className="text-4xl font-extrabold text-cyan-300 font-mono tabular-nums">
              {correctCount} / {QUIZ_QUESTIONS.length}
            </div>

            <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
              {correctCount === 5 
                ? '¡Excelente! Tienes un dominio conceptual sobresaliente de los fundamentos de la inteligencia artificial.'
                : correctCount >= 3 
                ? '¡Buen trabajo! Comprendes los pilares principales de la IA y cómo se diferencian las técnicas.'
                : '¡Buen intento! Puedes revisar el simulador de red y las ramas conceptuales para afianzar tus conocimientos.'}
            </p>

            <button
              onClick={resetQuiz}
              className="px-6 py-3 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg inline-flex items-center gap-2 active:scale-95 transition-all cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Volver a Intentar el Desafío</span>
            </button>
          </div>
        )}

      </div>
    </section>
  );
}

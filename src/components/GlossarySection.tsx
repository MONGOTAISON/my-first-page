import React, { useState } from 'react';
import { GLOSSARY_TERMS } from '../data/aiContent';
import { BookOpen, Search, Copy, Check, ChevronDown, ChevronUp } from 'lucide-react';

export default function GlossarySection() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const [expandedTerm, setExpandedTerm] = useState<string | null>('Token');
  const [copiedTerm, setCopiedTerm] = useState<string | null>(null);

  const categories = ['Todas', ...Array.from(new Set(GLOSSARY_TERMS.map(t => t.category)))];

  const filteredTerms = GLOSSARY_TERMS.filter(item => {
    const matchesCategory = selectedCategory === 'Todas' || item.category === selectedCategory;
    const matchesSearch = item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.definition.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const copyDefinition = (term: string, def: string) => {
    navigator.clipboard.writeText(`${term}: ${def}`);
    setCopiedTerm(term);
    setTimeout(() => setCopiedTerm(null), 2000);
  };

  return (
    <section className="py-20 bg-slate-950 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 mb-2">
              <BookOpen className="w-4 h-4" />
              <span>Vocabulario Esencial</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-400">Referencia Rápida</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Glosario Técnico de Términos de IA
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
              Resuelve dudas frecuentes y comprende los términos que ingenieros e investigadores utilizan a diario.
            </p>
          </div>

          {/* Search Input Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              placeholder="Buscar término o concepto..."
              className="w-full pl-10 pr-4 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-cyan-500"
            />
          </div>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 scrollbar-none">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-cyan-500 text-slate-950 font-semibold shadow-sm'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Terms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredTerms.map(item => {
            const isExpanded = expandedTerm === item.term;
            return (
              <div
                key={item.term}
                className="p-5 bg-slate-900/60 border border-slate-800/80 rounded-xl hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono text-cyan-400">{item.category}</span>
                    <button
                      onClick={() => copyDefinition(item.term, item.definition)}
                      title="Copiar definición"
                      className="p-1 text-slate-500 hover:text-slate-300 rounded cursor-pointer"
                    >
                      {copiedTerm === item.term ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2">
                    {item.term}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-3">
                    {item.definition}
                  </p>
                </div>

                <div className="p-3 bg-slate-950/80 border border-slate-800/60 rounded-lg text-xs text-slate-400">
                  <span className="font-semibold text-slate-300">Ejemplo práctico: </span>
                  <span>{item.practicalExample}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

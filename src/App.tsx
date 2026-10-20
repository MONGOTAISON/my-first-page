import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import OriginsSection from './components/OriginsSection';
import EvolutionErasSection from './components/EvolutionErasSection';
import TrinitySection from './components/TrinitySection';
import PioneersSection from './components/PioneersSection';
import TimelineSection from './components/TimelineSection';
import BranchExplorer from './components/BranchExplorer';
import NeuralNetworkSimulator from './components/NeuralNetworkSimulator';
import TokenizerPlayground from './components/TokenizerPlayground';
import AiVsHumanSection from './components/AiVsHumanSection';
import QuizSection from './components/QuizSection';
import GlossarySection from './components/GlossarySection';
import Footer from './components/Footer';
import { KnowledgeLevel } from './types/ai';

export default function App() {
  const [level, setLevel] = useState<KnowledgeLevel>('principiante');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-amber-500/30 selection:text-amber-200">
      <Header />
      <main className="flex-1">
        <Hero level={level} setLevel={setLevel} />
        <OriginsSection />
        <EvolutionErasSection />
        <TrinitySection />
        <PioneersSection />
        <TimelineSection />
        <BranchExplorer level={level} />
        <NeuralNetworkSimulator />
        <TokenizerPlayground />
        <AiVsHumanSection />
        <QuizSection />
        <GlossarySection />
      </main>
      <Footer />
    </div>
  );
}

export type KnowledgeLevel = 'principiante' | 'intermedio' | 'avanzado';

export interface EvolutionEra {
  id: string;
  name: string;
  period: string;
  theme: string;
  summary: string;
  howItWorked: string;
  keyMilestones: string[];
  limitations: string;
  hardwareReality: string;
  famousQuote?: string;
}

export interface AiPioneer {
  id: string;
  name: string;
  years: string;
  role: string;
  famousFor: string;
  breakthrough: string;
  funFact: string;
}

export interface TrinityPillar {
  id: string;
  title: string;
  subtitle: string;
  pastState: string;
  todayState: string;
  multiplier: string;
  impactExplanation: string;
}

export interface AiBranch {
  id: string;
  title: string;
  category: 'ml' | 'dl' | 'nlp' | 'cv' | 'robotics' | 'generative';
  categoryLabel: string;
  summary: Record<KnowledgeLevel, string>;
  keyMechanisms: string[];
  realWorldApplications: string[];
  demoType: 'text' | 'vision' | 'code' | 'robotics';
  demoPrompt: string;
  demoResult: string;
  image?: string;
}

export interface TimelineMilestone {
  year: number;
  title: string;
  tagline: string;
  description: string;
  protagonists: string[];
  impact: string;
  keyFact: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: {
    id: string;
    text: string;
    isCorrect: boolean;
  }[];
  explanation: string;
}

export interface GlossaryTerm {
  term: string;
  category: string;
  definition: string;
  practicalExample: string;
}

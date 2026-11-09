export type ObjectiveType = 'imovel' | 'automovel';

export interface ObjectiveDetail {
  id: ObjectiveType;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  creditRange: string;
  popularChoices: string[];
  ctaLabel: string;
  whatsappMessage: string;
  image: string;
}

export interface ShowcaseItem {
  id: string;
  category: ObjectiveType;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  highlight: string;
  features: string[];
}

export interface StepItem {
  step: string;
  title: string;
  description: string;
  benefit: string;
}

export interface ComparisonPoint {
  aspect: string;
  consorcio: string;
  financiamento: string;
  consorcioPositive: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'geral' | 'imovel' | 'automovel';
}

export interface TestimonialItem {
  name: string;
  location: string;
  objective: string;
  text: string;
  outcome: string;
}

export interface OfficialPlan {
  id: string;
  category: ObjectiveType;
  creditAmount: number;
  termMonths: number;
  adminFeePercent: number;
  reserveFundPercent: number;
  insurancePercent?: number;
  hasReducedInstallment: boolean;
  reducedInstallmentPercent?: number;
  groupRef: string;
  updatedAt: string;
  legalDisclaimer?: string;
  notes?: string;
}

export interface ModalityCreditLimit {
  min: number | null;
  max: number | null;
  hypothesisMax?: number | null;
  status: 'confirmado_minimo_apenas' | 'confirmado_oficial' | 'pendente_confirmacao';
  referenceSource: string;
  updatedAt: string;
  notes?: string;
}

export type CreditLimitsConfig = {
  imovel: ModalityCreditLimit;
  automovel: ModalityCreditLimit;
};

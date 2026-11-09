import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import {
  Wallet,
  FileCheck,
  TrendingUp,
  UserCheck,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Briefcase,
  ShieldCheck,
} from 'lucide-react';
import { buildWhatsAppLink } from '../utils/whatsapp.ts';

interface ConsultingPhase {
  id: number;
  badge: string;
  title: string;
  headline: string;
  description: string;
  keyPoints: string[];
  deliverable: string;
  metricLabel: string;
  metricValue: string;
  icon: React.ElementType;
  whatsappMessage: string;
}

const CONSULTING_PHASES: ConsultingPhase[] = [
  {
    id: 1,
    badge: 'Fase 01',
    title: 'Planejamento Financeiro',
    headline: 'Definição da meta de crédito e capacidade mensal de investimento',
    description:
      'Iniciamos com um diagnóstico personalizado para mapear seu objetivo — seja a compra de imóvel pronto, terreno e construção, ou aquisição de veículo. Calculamos o valor necessário da carta e alinhamos parcelas que cabem confortavelmente no seu orçamento mensal.',
    keyPoints: [
      'Alinhamento do valor de crédito ideal (R$ 150 mil a R$ 2M+ para imóveis / R$ 40 mil a R$ 350 mil para automóveis)',
      'Previsibilidade de parcelas sem juros bancários compostos',
      'Definição do horizonte de tempo conforme a prioridade da sua conquista',
    ],
    deliverable: 'Estudo de viabilidade orçamentária personalizado',
    metricLabel: 'Flexibilidade de Crédito',
    metricValue: '100% sob medida',
    icon: Wallet,
    whatsappMessage: 'Olá, Kayky! Gostaria de fazer o diagnóstico de planejamento financeiro para o meu objetivo.',
  },
  {
    id: 2,
    badge: 'Fase 02',
    title: 'Compreensão das Condições do Consórcio',
    headline: 'Transparência total sobre regras, prazos e taxas da administradora',
    description:
      'Você compreende exatamente como funciona o consórcio Porto Seguro antes de tomar qualquer decisão. Esclareço a taxa de administração fixa diluída no prazo, o fundo de reserva, os reajustes anuais para manter o poder de compra e as garantias fiscalizadas pelo Banco Central.',
    keyPoints: [
      'Zero juros compostos: taxa de administração transparente e previsível',
      'Manutenção anual do poder de compra da carta contemplada',
      'Segurança institucional com regras e auditoria do Banco Central (BACEN)',
    ],
    deliverable: 'Esclarecimento claro das cláusulas contratuais',
    metricLabel: 'Estrutura de Custo',
    metricValue: 'Sem juros compostos',
    icon: FileCheck,
    whatsappMessage: 'Olá, Kayky! Gostaria de entender detalhadamente as condições e taxas do consórcio.',
  },
  {
    id: 3,
    badge: 'Fase 03',
    title: 'Estratégias de Lance',
    headline: 'Análise técnica de grupos e planejamento de antecipação',
    description:
      'A contemplação ocorre por sorteio ou por lance. Analiso o histórico das assembleias oficiais do grupo para identificar médias competitivas e estruturar sua estratégia: lance livre com recursos próprios, uso do FGTS (no caso imobiliário) ou lance embutido de até 30% da própria carta.',
    keyPoints: [
      'Análise estatística de médias de lances nas últimas assembleias',
      'Utilização estratégica de lance embutido (até 30% do próprio crédito)',
      'Uso do saldo de FGTS para lance ou amortização de parcelas',
    ],
    deliverable: 'Planejamento estatístico para as assembleias mensais',
    metricLabel: 'Modalidades de Lance',
    metricValue: 'Livre, Embutido ou FGTS',
    icon: TrendingUp,
    whatsappMessage: 'Olá, Kayky! Gostaria de conversar sobre estratégias de lances para acelerar minha contemplação.',
  },
  {
    id: 4,
    badge: 'Fase 04',
    title: 'Acompanhamento Comercial Contínuo',
    headline: 'Assessoria próxima e suporte direto até a liberação do crédito',
    description:
      'Meu trabalho como consultor não termina na contratação da cota. Acompanho você em cada assembleia mensal, auxilio na oferta dos lances e, após a contemplação, presto suporte completo na análise documental e faturamento do imóvel ou veículo.',
    keyPoints: [
      'Acompanhamento mensal dos resultados das assembleias oficiais',
      'Suporte direto pelo WhatsApp em todas as etapas burocráticas',
      'Auxílio no faturamento da carta e liberação de pagamento ao vendedor',
    ],
    deliverable: 'Chave na mão com assessoria do início ao fim',
    metricLabel: 'Canal de Atendimento',
    metricValue: 'Direto com Kayky Silva',
    icon: UserCheck,
    whatsappMessage: 'Olá, Kayky! Gostaria de entender como funciona seu acompanhamento até a contemplação.',
  },
];

interface ScrollExperienceSectionProps {
  phone: string;
}

export const ScrollExperienceSection: React.FC<ScrollExperienceSectionProps> = ({ phone }) => {
  const [activeStep, setActiveStep] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const currentPhase = CONSULTING_PHASES[activeStep] || CONSULTING_PHASES[0];
  const CurrentIcon = currentPhase.icon;

  return (
    <section className="py-20 bg-white border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider uppercase text-blue-900 mb-2">
            <Briefcase className="w-4 h-4 text-blue-700" />
            <span>Etapas da Consultoria</span>
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4"
            style={{ textWrap: 'balance' }}
          >
            Do projeto na planta à chave na mão: como transformamos planejamento em patrimônio.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Uma abordagem consultiva transparente e estruturada em quatro pilares fundamentais para orientar sua conquista com segurança.
          </p>
        </div>

        {/* 2-Column Progressive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Interactive Strategic Consulting Panel (No repeating house photos!) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="rounded-3xl border border-slate-200 bg-slate-900 text-white p-7 sm:p-8 shadow-xl overflow-hidden relative">
              {/* Subtle ambient light */}
              <div
                aria-hidden="true"
                className="absolute top-0 right-0 -mr-12 -mt-12 w-48 h-48 bg-blue-600/30 rounded-full blur-3xl pointer-events-none"
              />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-300 bg-blue-950/80 px-3 py-1 rounded-md border border-blue-800/60">
                    {currentPhase.badge}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    Etapa {activeStep + 1} de {CONSULTING_PHASES.length}
                  </span>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentPhase.id}
                    initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -12 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-14 h-14 rounded-2xl bg-blue-600/20 border border-blue-500/30 text-blue-400 flex items-center justify-center mb-5">
                      <CurrentIcon className="w-7 h-7" />
                    </div>

                    <h3 className="text-2xl font-bold tracking-tight text-white mb-2">
                      {currentPhase.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                      {currentPhase.headline}
                    </p>

                    {/* Metric / Deliverable Highlight Box */}
                    <div className="bg-slate-800/80 rounded-2xl p-4 border border-slate-700/60 mb-6">
                      <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
                        {currentPhase.metricLabel}
                      </div>
                      <div className="text-lg font-bold text-white mb-2">
                        {currentPhase.metricValue}
                      </div>
                      <div className="text-xs text-blue-300 flex items-center gap-1.5 pt-2 border-t border-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{currentPhase.deliverable}</span>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Direct Action Link */}
                <a
                  href={buildWhatsAppLink(phone, currentPhase.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Tirar dúvidas sobre esta etapa</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Regulatory footnote under panel */}
            <div className="mt-3.5 flex items-center gap-2 px-2 text-xs text-slate-500">
              <ShieldCheck className="w-4 h-4 text-blue-700 shrink-0" />
              <span>Metodologia em conformidade com as normas do BACEN</span>
            </div>
          </div>

          {/* Right Column: Progressive Text Steps */}
          <div className="lg:col-span-7 space-y-6">
            {CONSULTING_PHASES.map((phase, index) => {
              const isActive = activeStep === index;

              return (
                <div
                  key={phase.id}
                  onClick={() => setActiveStep(index)}
                  className={`cursor-pointer p-6 sm:p-7 rounded-3xl border transition-all duration-300 ${
                    isActive
                      ? 'bg-slate-50 border-blue-600 shadow-md ring-2 ring-blue-600/10'
                      : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-md ${
                        isActive ? 'bg-blue-900 text-white' : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {phase.badge} · {phase.title}
                    </span>
                    <span className="text-xs font-semibold text-slate-400">
                      0{phase.id}
                    </span>
                  </div>

                  <h4 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight mb-2">
                    {phase.headline}
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 font-normal">
                    {phase.description}
                  </p>

                  <ul className="space-y-2 mb-4">
                    {phase.keyPoints.map((point, ptIdx) => (
                      <li key={ptIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-500 font-medium">
                      {isActive ? 'Etapa selecionada no painel' : 'Clique para ver detalhes'}
                    </span>
                    <span className="text-blue-700 font-bold inline-flex items-center gap-1">
                      Ver detalhes
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

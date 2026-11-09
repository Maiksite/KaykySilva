import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Check, X, Shield, ArrowRight, MessageCircle } from 'lucide-react';
import { COMPARISON_POINTS } from '../data/content.ts';
import { buildWhatsAppLink } from '../utils/whatsapp.ts';

interface ComparisonSectionProps {
  phone: string;
}

export const ComparisonSection: React.FC<ComparisonSectionProps> = ({ phone }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-blue-800 mb-2">
            Comparativo Inteligente
          </div>
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4"
            style={{ textWrap: 'balance' }}
          >
            Por que o consórcio é a escolha estratégica de quem valoriza o próprio dinheiro?
          </h2>
          <p className="text-base text-slate-600 leading-relaxed font-normal">
            Entenda a diferença estrutural entre planejar através de consórcio e recorrer ao endividamento bancário por financiamento tradicional.
          </p>
        </motion.div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Card Consórcio (Positive highlight) */}
          <motion.div
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -3 }}
            className="rounded-2xl border-2 border-blue-900 bg-white p-6 sm:p-8 shadow-md relative overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 bg-blue-900 text-white text-[11px] font-bold px-4 py-1.5 rounded-bl-xl uppercase tracking-wider">
              Estratégia Recomendada
            </div>

            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-blue-800 mb-1">
                Planejamento Inteligente
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 mb-4">
                Consórcio Estruturado
              </h3>
              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                Você participa de um grupo autofinanciado fiscalizado pelo Banco Central. Não incidem juros bancários, aplicando-se apenas taxa de administração e encargos contratuais previsíveis.
              </p>

              <div className="space-y-4">
                {COMPARISON_POINTS.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 pb-3 border-b border-slate-100 last:border-none">
                    <div className="mt-1 rounded-full p-1 bg-blue-100 text-blue-800 shrink-0">
                      <Check className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">{item.aspect}</div>
                      <div className="text-xs sm:text-sm text-slate-700 leading-relaxed mt-0.5">
                        {item.consorcio}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100">
              <motion.a
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                href={buildWhatsAppLink(
                  phone,
                  'Olá, Kayky! Gostaria de comparar o consórcio com o financiamento para o meu caso específico.'
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-bold text-white bg-blue-900 hover:bg-blue-800 rounded-xl transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Analisar Meu Caso no WhatsApp</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Card Financiamento Bancário Tradicional */}
          <motion.div
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs flex flex-col justify-between"
          >
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                Crédito Imediato com Alto Custo
              </div>
              <h3 className="text-2xl font-extrabold text-slate-800 mb-4">
                Financiamento Bancário
              </h3>
              <p className="text-sm text-slate-500 mb-6 leading-relaxed">
                O banco antecipa o valor à vista, mas cobra juros compostos que muitas vezes chegam ao equivalente a 2 ou 3 vezes o valor do bem.
              </p>

              <div className="space-y-4">
                {COMPARISON_POINTS.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 pb-3 border-b border-slate-100 last:border-none">
                    <div className="mt-1 rounded-full p-1 bg-rose-50 text-rose-500 shrink-0">
                      <X className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-700">{item.aspect}</div>
                      <div className="text-xs sm:text-sm text-slate-500 leading-relaxed mt-0.5">
                        {item.financiamento}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 leading-relaxed">
                <span className="font-bold text-slate-800">Conclusão Técnica:</span> O financiamento atende quem necessita da posse imediata do bem, assumindo o custo dos juros. O consórcio é a escolha estratégica para quem planeja a aquisição ou construção com taxa de administração diluída e sem juros bancários compostos.
              </div>
            </div>
          </motion.div>
        </div>

        {/* Regulatory note */}
        <div className="text-center text-xs text-slate-500">
          Operações estruturadas sob a Lei Federal nº 11.795/2008 e fiscalizadas pelo Banco Central do Brasil (BACEN).
        </div>
      </div>
    </section>
  );
};

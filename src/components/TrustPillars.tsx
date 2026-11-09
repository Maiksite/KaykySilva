import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ShieldCheck, Landmark, BarChart3, UserCheck, ArrowRight, MessageCircle } from 'lucide-react';
import { TRUST_PILLARS } from '../data/content.ts';
import { buildWhatsAppLink, DEFAULT_WHATSAPP_MESSAGE } from '../utils/whatsapp.ts';

interface TrustPillarsProps {
  phone: string;
}

const PILLAR_ICONS = [
  Landmark,
  ShieldCheck,
  BarChart3,
  UserCheck,
];

export const TrustPillars: React.FC<TrustPillarsProps> = ({ phone }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-20 bg-white border-b border-slate-200">
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
            Segurança & Credibilidade
          </div>
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4"
            style={{ textWrap: 'balance' }}
          >
            Pilares institucionais para você planejar com total tranquilidade
          </h2>
          <p className="text-base text-slate-600 leading-relaxed font-normal">
            Trabalhamos com regras claras, garantia legal e metodologia técnica de contemplação, sem promessas ilusórias.
          </p>
        </motion.div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {TRUST_PILLARS.map((pillar, idx) => {
            const Icon = PILLAR_ICONS[idx % PILLAR_ICONS.length];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-400 hover:bg-white transition-all duration-300 shadow-xs hover:shadow-md group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-100/70 text-blue-900 flex items-center justify-center mb-5 group-hover:bg-blue-900 group-hover:text-white transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div className="text-[11px] font-bold uppercase tracking-wider text-blue-800 mb-2">
                    {pillar.badge}
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 tracking-tight mb-3">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-5 mt-4 border-t border-slate-200/80 flex items-center gap-1.5 text-xs font-semibold text-blue-900">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Garantia oficial</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Direct consultation callout */}
        <div className="text-center">
          <a
            href={buildWhatsAppLink(phone, DEFAULT_WHATSAPP_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-900 hover:text-blue-700 transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-blue-600" />
            <span>Falar com Kayky Silva sobre regras e segurança dos grupos</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

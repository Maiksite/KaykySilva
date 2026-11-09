import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { CalendarCheck, Percent, Sparkles, ArrowRight } from 'lucide-react';
import { WHY_CONSORCIO_BENEFITS } from '../data/content.ts';

interface WhyConsorcioProps {
  phone: string;
}

const BENEFIT_ICONS = [
  <CalendarCheck key="cal" className="w-6 h-6 text-blue-900" />,
  <Percent key="pct" className="w-6 h-6 text-blue-900" />,
  <Sparkles key="spk" className="w-6 h-6 text-blue-900" />,
];

export const WhyConsorcio: React.FC<WhyConsorcioProps> = ({ phone }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="por-que-consorcio" className="py-14 sm:py-18 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <div className="text-xs font-bold uppercase tracking-wider text-blue-900 mb-2">
            Vantagens Estratégicas
          </div>
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-3"
            style={{ textWrap: 'balance' }}
          >
            Por que considerar um consórcio?
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Uma alternativa financeira disciplinada, segura e inteligente para alcançar suas conquistas.
          </p>
        </motion.div>

        {/* 3 Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {WHY_CONSORCIO_BENEFITS.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              whileHover={{ y: -3 }}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-5">
                  {BENEFIT_ICONS[idx]}
                </div>
                <div className="text-xs font-bold text-blue-800 tracking-wider mb-1">
                  Benefício {item.step}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-100">
                <a
                  href="#simulador"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-900 hover:text-blue-700 transition-colors"
                >
                  <span>Simular esta modalidade</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

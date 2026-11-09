import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { HOW_IT_WORKS } from '../data/content.ts';
import { ArrowRight } from 'lucide-react';

interface HowItWorksProps {
  phone: string;
}

export const HowItWorks: React.FC<HowItWorksProps> = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="como-funciona" className="py-14 sm:py-18 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div className="text-xs font-bold uppercase tracking-wider text-blue-900 mb-2">
            Passo a Passo
          </div>
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-3"
            style={{ textWrap: 'balance' }}
          >
            Como funciona?
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Três etapas diretas para entender, planejar e solicitar sua simulação.
          </p>
        </motion.div>

        {/* 3 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {HOW_IT_WORKS.map((item, idx) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              whileHover={{ y: -3 }}
              className="relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-400 hover:bg-white transition-all shadow-xs group"
            >
              <div>
                <div className="text-3xl font-extrabold text-blue-900/35 group-hover:text-blue-900 transition-colors mb-3 tabular-nums">
                  {item.step}
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight mb-2">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="pt-3.5 border-t border-slate-200/80">
                <span className="text-xs font-semibold text-blue-900 block">
                  {item.benefit}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick link back to simulator */}
        <div className="text-center mt-10">
          <a
            href="#simulador"
            className="inline-flex items-center gap-2 text-sm font-bold text-blue-900 hover:text-blue-700 transition-colors"
          >
            <span>Iniciar simulação agora</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

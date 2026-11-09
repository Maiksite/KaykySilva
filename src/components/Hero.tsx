import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';
import { SmartSimulator } from './SmartSimulator.tsx';

interface HeroProps {
  phone: string;
}

export const Hero: React.FC<HeroProps> = ({ phone }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="simulador"
      className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-blue-50/20 pt-6 pb-12 lg:pt-12 lg:pb-16 border-b border-slate-200/70"
    >
      {/* Subtle ambient light accents */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 -mt-16 -mr-16 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Desktop Left Column / Mobile Top: Presentation */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Identification Kicker */}
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 text-xs font-extrabold tracking-wider uppercase text-blue-900 mb-2.5"
            >
              <span>KAYKY SILVA | CONSULTOR DE CONSÓRCIOS</span>
            </motion.div>

            {/* Short Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-3.5"
              style={{ textWrap: 'balance' }}
            >
              Planeje seu próximo imóvel ou veículo.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 font-normal max-w-xl"
            >
              Escolha seu objetivo e solicite uma simulação personalizada com atendimento direto.
            </motion.p>

            {/* Trust Points - Desktop only to keep mobile fast and clean */}
            <div className="hidden lg:flex flex-col gap-2.5 pt-4 border-t border-slate-200/80 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-800 shrink-0" />
                <span className="font-medium text-slate-800">
                  Porto Vale · Distribuidora Autorizada Porto Seguro Consórcios
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Operações auditadas e fiscalizadas pelo Banco Central do Brasil</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0" />
                <span>Orientação consultiva em grupos com análise de contemplações</span>
              </div>
            </div>
          </div>

          {/* Desktop Right Column / Mobile Form: Simulator in Spotlight */}
          <div className="lg:col-span-6 w-full">
            <motion.div
              initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <SmartSimulator phone={phone} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

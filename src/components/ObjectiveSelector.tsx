import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Home, Car, Check, MessageCircle, ArrowRight } from 'lucide-react';
import { OBJECTIVES, REAL_PROPERTY_IMAGES } from '../data/content.ts';
import { buildWhatsAppLink } from '../utils/whatsapp.ts';

interface ObjectiveSelectorProps {
  phone: string;
}

export const ObjectiveSelector: React.FC<ObjectiveSelectorProps> = ({ phone }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="objetivos" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="text-xs sm:text-sm font-bold tracking-wider uppercase text-blue-900 mb-2">
            Escolha seu Objetivo
          </div>
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4"
            style={{ textWrap: 'balance' }}
          >
            Qual conquista você deseja planejar hoje?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Seja para a conquista da casa própria ou para a troca do seu automóvel com inteligência e previsibilidade, 
            cada modalidade possui estratégias específicas que ajusto conforme a sua necessidade.
          </p>
        </motion.div>

        {/* Two distinct objective blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {OBJECTIVES.map((item, index) => {
            const isImovel = item.id === 'imovel';
            const Icon = isImovel ? Home : Car;

            return (
              <motion.div
                key={item.id}
                id={item.id === 'imovel' ? 'imoveis' : 'automoveis'}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -4 }}
                className="relative flex flex-col rounded-3xl border border-slate-200 bg-slate-50/50 hover:bg-white transition-all duration-300 shadow-sm hover:shadow-xl overflow-hidden group"
              >
                {/* Visual Banner */}
                {isImovel ? (
                  /* Real Property Image Banner: FOTOPSITE2 (Pedra & Madeira) exclusively */
                  <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-900">
                    <picture>
                      <source srcSet={REAL_PROPERTY_IMAGES.pedraMadeiraWebp} type="image/webp" />
                      <img
                        src={REAL_PROPERTY_IMAGES.pedraMadeira}
                        alt="Residência moderna com fachada em pedra e madeira"
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                    </picture>

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                    {/* Header overlay on image */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-black/60 backdrop-blur-md text-white text-xs font-semibold">
                        <Icon className="w-4 h-4 text-blue-400" />
                        <span>Setor Imobiliário</span>
                      </div>
                      <span className="text-xs text-slate-200 font-medium bg-black/50 px-2.5 py-1 rounded-lg backdrop-blur-sm">
                        {item.creditRange}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-2xl font-bold tracking-tight mb-1">{item.title}</h3>
                      <p className="text-xs sm:text-sm text-slate-300 font-normal">{item.tagline}</p>
                    </div>
                  </div>
                ) : (
                  /* Prepared Automotive Container (No car photos yet, per instructions) */
                  <div className="relative h-64 sm:h-72 w-full bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 p-6 flex flex-col justify-between overflow-hidden">
                    <div
                      aria-hidden="true"
                      className="absolute -top-12 -right-12 w-48 h-48 bg-blue-600/20 rounded-full blur-2xl pointer-events-none"
                    />
                    
                    <div className="flex items-center justify-between z-10">
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/10 backdrop-blur-md text-white text-xs font-semibold border border-white/10">
                        <Car className="w-4 h-4 text-blue-400" />
                        <span>Setor Automotivo</span>
                      </div>
                      <span className="text-xs text-slate-300 font-medium bg-white/10 px-2.5 py-1 rounded-lg backdrop-blur-sm border border-white/10">
                        {item.creditRange}
                      </span>
                    </div>

                    <div className="z-10 text-white">
                      <div className="w-12 h-12 rounded-2xl bg-blue-600/30 border border-blue-500/30 flex items-center justify-center mb-3">
                        <Car className="w-6 h-6 text-blue-300" />
                      </div>
                      <h3 className="text-2xl font-bold tracking-tight mb-1">{item.title}</h3>
                      <p className="text-xs sm:text-sm text-slate-300 font-normal">{item.tagline}</p>
                    </div>
                  </div>
                )}

                {/* Content Section */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-sm sm:text-base text-slate-600 mb-6 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Vantagens Principais */}
                    <div className="mb-6">
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
                        Vantagens Estratégicas:
                      </div>
                      <ul className="space-y-2.5">
                        {item.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                            <div className="mt-0.5 rounded-full p-0.5 bg-blue-100 text-blue-800 shrink-0">
                              <Check className="w-3.5 h-3.5" />
                            </div>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Finalidades Populares */}
                    <div className="mb-8 pt-4 border-t border-slate-200/80">
                      <div className="text-xs font-semibold text-slate-500 mb-2">
                        Opções frequentes atendidas:
                      </div>
                      <div className="flex flex-wrap gap-2 text-xs font-medium text-slate-700">
                        {item.popularChoices.map((choice, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-700"
                          >
                            {choice}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions with Motion */}
                  <div className="space-y-3 pt-2">
                    <motion.a
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                      href={buildWhatsAppLink(phone, item.whatsappMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-xl shadow-sm hover:shadow transition-all"
                    >
                      <MessageCircle className="w-4 h-4 text-white" />
                      <span>{item.ctaLabel}</span>
                    </motion.a>

                    {isImovel ? (
                      <a
                        href="#inspiracao"
                        className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-700 hover:text-blue-900 hover:bg-slate-100 rounded-xl transition-colors"
                      >
                        <span>Ver inspirações de padrões no carrossel</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <a
                        href="#simulador"
                        className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-700 hover:text-blue-900 hover:bg-slate-100 rounded-xl transition-colors"
                      >
                        <span>Simular crédito para veículo no simulador</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

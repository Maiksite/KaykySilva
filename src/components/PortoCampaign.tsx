import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Sparkles, MessageCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { buildWhatsAppLink } from '../utils/whatsapp.ts';

interface PortoCampaignProps {
  phone: string;
}

export const PortoCampaign: React.FC<PortoCampaignProps> = ({ phone }) => {
  const shouldReduceMotion = useReducedMotion();

  const campaignWhatsAppMessage =
    'Olá, Kayky! Gostaria de consultar as condições disponíveis da Campanha Porto Consórcio para o meu planejamento.';

  return (
    <section id="campanha-porto" className="py-12 sm:py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-slate-200/90 bg-slate-50/70 p-6 sm:p-10 lg:p-12 shadow-sm"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Short Text & Action */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              {/* Discrete Identification */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs font-bold tracking-wider uppercase mb-3.5 w-fit">
                <Sparkles className="w-3.5 h-3.5 text-blue-700" />
                <span>PORTO CONSÓRCIO</span>
              </div>

              {/* Exact Title */}
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-3"
                style={{ textWrap: 'balance' }}
              >
                Conheça as possibilidades para o seu planejamento.
              </h2>

              {/* Exact Description */}
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 font-normal">
                Consulte as condições disponíveis para imóveis e automóveis.
              </p>

              {/* Institutional Note */}
              <div className="flex items-center gap-2 text-xs text-slate-500 font-medium mb-6">
                <ShieldCheck className="w-4 h-4 text-blue-700 shrink-0" />
                <span>Porto Vale & Porto Seguro · Orientação personalizada com Kayky Silva</span>
              </div>

              {/* Exact Button */}
              <div>
                <motion.a
                  whileHover={{ y: -2, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  href={buildWhatsAppLink(phone, campaignWhatsAppMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-4 text-sm sm:text-base font-bold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-xl shadow-md hover:shadow-lg transition-all"
                >
                  <MessageCircle className="w-5 h-5 text-white" />
                  <span>Quero conhecer as condições</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
                <div className="text-xs text-slate-500 mt-2">
                  Atendimento direto no WhatsApp · Resposta ágil
                </div>
              </div>
            </div>

            {/* Right Column: Original Campaign Image Displayed Without Distortion */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="w-full max-w-md sm:max-w-lg lg:max-w-md flex justify-center">
                <img
                  src="/assets/aistudio/file_000000003cb8820ea44bf80aa0cd2bb8_eb707b9f.png"
                  alt="Material da Campanha Porto Consórcio"
                  className="w-full h-auto object-contain rounded-2xl border border-slate-200/90 shadow-md"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { MessageCircle, Mail, ShieldCheck, Clock, ArrowRight } from 'lucide-react';
import { buildWhatsAppLink, DEFAULT_WHATSAPP_MESSAGE, OFFICIAL_DISPLAY_PHONE } from '../utils/whatsapp.ts';
import { CONSULTANT_INFO } from '../data/content.ts';

interface FinalCtaProps {
  phone: string;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ phone }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="contato" className="py-16 sm:py-20 bg-gradient-to-br from-blue-950 via-slate-900 to-blue-900 text-white relative overflow-hidden">
      {/* Decorative ambient elements */}
      <div
        aria-hidden="true"
        className="absolute -top-32 -left-32 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-32 -right-32 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-blue-300 mb-3">
            <span>Atendimento Comercial</span>
          </div>

          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-4"
            style={{ textWrap: 'balance' }}
          >
            Fale diretamente com Kayky Silva
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto mb-8 leading-relaxed font-normal">
            Tire suas dúvidas ou solicite um estudo personalizado para o seu objetivo de imóvel ou automóvel.
          </p>

          {/* Contact Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-8">
            <motion.a
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href={buildWhatsAppLink(phone, DEFAULT_WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-bold text-blue-950 bg-white hover:bg-blue-50 active:bg-blue-100 rounded-xl shadow-lg transition-all"
            >
              <MessageCircle className="w-5 h-5 text-blue-700" />
              <span>Chamar no WhatsApp · {OFFICIAL_DISPLAY_PHONE}</span>
              <ArrowRight className="w-4 h-4 text-blue-700" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href={`mailto:${CONSULTANT_INFO.email}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700 rounded-xl transition-all"
            >
              <Mail className="w-4 h-4 text-blue-300" />
              <span>{CONSULTANT_INFO.email}</span>
            </motion.a>
          </div>

          {/* Quiet Trust Bar */}
          <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-blue-200/80">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              <span>Porto Vale & Porto Seguro Consórcios</span>
            </div>
            <span aria-hidden="true" className="text-blue-300/40">·</span>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-blue-400" />
              <span>Atendimento em todo o Brasil</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { MessageCircle, ShieldCheck, HeartHandshake, UserCheck, ArrowRight, Award, CheckCircle2, Mail } from 'lucide-react';
import { CONSULTANT_INFO } from '../data/content.ts';
import { buildWhatsAppLink, DEFAULT_WHATSAPP_MESSAGE, OFFICIAL_DISPLAY_PHONE } from '../utils/whatsapp.ts';

interface AboutKaykyProps {
  phone: string;
}

export const AboutKayky: React.FC<AboutKaykyProps> = ({ phone }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="sobre" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Executive Credentials Card (No personal photo, and NO house photos used as a portrait substitute) */}
          <motion.div
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-10 shadow-lg relative overflow-hidden">
              {/* Subtle accent header line */}
              <div className="w-16 h-1.5 bg-blue-900 rounded-full mb-6" />

              <div className="text-xs font-bold uppercase tracking-wider text-blue-900 mb-1">
                Consultoria Comercial Credenciada
              </div>

              <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
                Kayky Silva
              </h3>

              <div className="text-sm font-semibold text-slate-700 mb-6 flex items-center gap-2">
                <span>Porto Vale</span>
                <span className="text-slate-300">|</span>
                <span className="text-blue-900">Porto Seguro Consórcios</span>
              </div>

              <div className="space-y-4 py-6 border-y border-slate-100 mb-6 text-xs sm:text-sm text-slate-600">
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-blue-800 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-semibold">Atendimento Especializado</strong>
                    Consultor comercial focado em estratégias de consórcio para imóveis e automóveis.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-blue-800 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-semibold">Segurança Institucional</strong>
                    Parceria com a Porto Vale, distribuidora autorizada Porto Seguro Consórcios.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-800 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-semibold">Atendimento Nacional</strong>
                    Suporte consultivo para clientes de todo o Brasil via WhatsApp e videochamada.
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Callout in card */}
              <div>
                <div className="text-xs text-slate-500 mb-1 font-medium">Canal direto de atendimento:</div>
                <div className="text-sm font-bold text-slate-900 mb-1">
                  {OFFICIAL_DISPLAY_PHONE}
                </div>
                <a
                  href={`mailto:${CONSULTANT_INFO.email}`}
                  className="inline-flex items-center gap-1.5 text-xs text-blue-900 hover:text-blue-700 font-medium mb-3.5 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-blue-800" />
                  <span>{CONSULTANT_INFO.email}</span>
                </a>
                <a
                  href={buildWhatsAppLink(phone, DEFAULT_WHATSAPP_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-xl transition-all shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chamar Kayky no WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Presentation & Methodology Column */}
          <motion.div
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="text-xs sm:text-sm font-bold tracking-wider uppercase text-blue-900 mb-2">
              Apresentação Profissional
            </div>

            <h2
              className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-6"
              style={{ textWrap: 'balance' }}
            >
              Consultoria próxima, transparente e focada no seu objetivo.
            </h2>

            <div className="space-y-4 text-base text-slate-600 leading-relaxed font-normal mb-8">
              <p>
                Sou <strong>Kayky Silva</strong>, consultor comercial da <strong>Porto Vale</strong>. 
                Minha atuação é voltada a ajudar pessoas e famílias a planejarem suas conquistas patrimoniais com estratégia, inteligência e clareza.
              </p>
              <p>
                O consórcio é uma ferramenta financeira sólida quando bem estruturado. 
                Meu papel é entender a sua capacidade orçamentária, analisar os grupos disponíveis na Porto Seguro e indicar caminhos viáveis — seja para adquirir ou construir sua casa, ou para trocar de veículo sem se submeter a financiamentos bancários onerosos.
              </p>
              <p>
                Não comercializo imóveis pontuais nem prometo atalhos ou contemplações imediatas. 
                Trabalho com método, acompanhamento mensal de assembleias e total respeito às normas do Banco Central.
              </p>
            </div>

            {/* 3 Core Differentials */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                <ShieldCheck className="w-5 h-5 text-blue-900 mb-2" />
                <div className="text-sm font-bold text-slate-900 mb-1">Transparência Total</div>
                <p className="text-xs text-slate-500 leading-normal">
                  Sem promessas de contemplação garantida. Trabalho técnico com dados reais dos grupos.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                <HeartHandshake className="w-5 h-5 text-blue-900 mb-2" />
                <div className="text-sm font-bold text-slate-900 mb-1">Atendimento Humano</div>
                <p className="text-xs text-slate-500 leading-normal">
                  Você fala diretamente comigo. Suporte personalizado e sem burocracia desnecessária.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                <UserCheck className="w-5 h-5 text-blue-900 mb-2" />
                <div className="text-sm font-bold text-slate-900 mb-1">Suporte Contínuo</div>
                <p className="text-xs text-slate-500 leading-normal">
                  Acompanhamento nas assembleias mensais até a homologação da carta de crédito.
                </p>
              </div>
            </div>

            {/* Contact Action */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={buildWhatsAppLink(phone, DEFAULT_WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-xl shadow transition-all"
              >
                <MessageCircle className="w-4 h-4 text-white" />
                <span>Conversar com Kayky no WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </motion.a>

              <span className="text-xs text-slate-500 text-center sm:text-left font-medium">
                Atendimento consultivo e sem custos adicionais.
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

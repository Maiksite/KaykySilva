import React, { useState } from 'react';
import { ChevronDown, MessageCircle, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/content.ts';
import { buildWhatsAppLink } from '../utils/whatsapp.ts';

interface FaqSectionProps {
  phone: string;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ phone }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-14 sm:py-18 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-blue-800 mb-2">
            Perguntas Frequentes
          </div>
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4"
            style={{ textWrap: 'balance' }}
          >
            Tire suas dúvidas com total transparência
          </h2>
          <p className="text-base text-slate-600 font-normal">
            As principais respostas sobre consórcios explicadas de forma simples, direta e sem pegadinhas.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3.5 mb-12">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="rounded-xl border border-slate-200 bg-white shadow-2xs overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left font-bold text-slate-900 hover:text-blue-900 transition-colors gap-4"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg tracking-tight">{faq.question}</span>
                  <div
                    className={`p-1 rounded-full bg-slate-100 text-slate-600 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-blue-100 text-blue-900' : ''
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in duration-150">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Fallback Contact card */}
        <div className="rounded-xl bg-white border border-slate-200 p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <div className="text-sm font-bold text-slate-900">Tem alguma dúvida específica sobre o seu perfil?</div>
            <div className="text-xs text-slate-500">Mande uma mensagem direta no WhatsApp e responderei prontamente.</div>
          </div>
          <a
            href={buildWhatsAppLink(phone, 'Olá, Kayky! Gostaria de tirar uma dúvida sobre consórcio que não encontrei no site.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 text-white" />
            <span>Fazer Pergunta no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};

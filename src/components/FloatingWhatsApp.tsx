import React, { useState } from 'react';
import { MessageCircle, X, Home, Car } from 'lucide-react';
import { buildWhatsAppLink, DEFAULT_WHATSAPP_MESSAGE } from '../utils/whatsapp.ts';

interface FloatingWhatsAppProps {
  phone: string;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ phone }) => {
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    {
      label: 'Consórcio de Imóvel',
      sub: 'Casa, condomínio ou construção',
      icon: Home,
      msg: 'Olá, Kayky! Vim pelo seu site e gostaria de saber mais sobre consórcio imobiliário.',
    },
    {
      label: 'Consórcio de Automóvel',
      sub: 'Carro 0km, SUV ou seminovo',
      icon: Car,
      msg: 'Olá, Kayky! Vim pelo seu site e gostaria de saber mais sobre consórcio de automóveis.',
    },
    {
      label: 'Tirar uma Dúvida Geral',
      sub: 'Atendimento direto com o Kayky',
      icon: MessageCircle,
      msg: DEFAULT_WHATSAPP_MESSAGE,
    },
  ];

  return (
    <div className="fixed bottom-5 right-5 z-40">
      {/* Quick popup card */}
      {isOpen && (
        <div className="mb-3 w-80 max-w-[calc(100vw-2.5rem)] rounded-3xl bg-white border border-slate-200 shadow-2xl p-4 text-slate-800 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div>
              <div className="text-xs font-bold text-slate-900">Kayky Silva</div>
              <div className="text-[11px] text-emerald-600 font-medium">Disponível no WhatsApp · (11) 91955-7898</div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1 text-slate-400 hover:text-slate-600 rounded-lg"
              aria-label="Fechar"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="py-2 text-xs text-slate-600">
            Selecione sobre o que deseja falar para iniciar uma conversa direta:
          </div>

          <div className="space-y-1.5">
            {options.map((opt, idx) => {
              const Icon = opt.icon;
              return (
                <a
                  key={idx}
                  href={buildWhatsAppLink(phone, opt.msg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 border border-slate-100 transition-colors group"
                >
                  <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-800 flex items-center justify-center shrink-0 group-hover:bg-blue-100">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold text-slate-900 group-hover:text-blue-900">
                      {opt.label}
                    </div>
                    <div className="text-[10px] text-slate-500">{opt.sub}</div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      )}

      {/* Trigger button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-3 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
        aria-label="Abrir opções de WhatsApp"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="text-xs sm:text-sm font-bold whitespace-nowrap">Falar com Kayky</span>
      </button>
    </div>
  );
};

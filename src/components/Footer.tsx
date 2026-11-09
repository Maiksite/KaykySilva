import React from 'react';
import { CONSULTANT_INFO } from '../data/content.ts';
import { OFFICIAL_DISPLAY_PHONE } from '../utils/whatsapp.ts';
import { Settings, ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onOpenConfig?: () => void;
  phone: string;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConfig, phone }) => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand & Presentation */}
          <div className="md:col-span-2">
            <div className="text-xl font-bold text-white tracking-tight mb-1">
              Kayky Silva
            </div>
            <div className="text-xs font-semibold text-blue-400 mb-3">
              Consultor de Consórcios | Porto Seguro (Porto Vale)
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-md mb-4">
              Consultoria comercial especializada em consórcios de imóveis e automóveis. 
              Planejamento patrimonial inteligente, sem juros bancários e com acompanhamento humanizado do início até a contemplação.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
              <span>Operações em conformidade com as normas do Banco Central do Brasil.</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              Navegação
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#simulador" className="hover:text-white transition-colors">
                  Simular Crédito
                </a>
              </li>
              <li>
                <a href="#campanha-porto" className="hover:text-white transition-colors">
                  Campanha Porto
                </a>
              </li>
              <li>
                <a href="#por-que-consorcio" className="hover:text-white transition-colors">
                  Vantagens do Consórcio
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="hover:text-white transition-colors">
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-white transition-colors">
                  Sobre Kayky Silva
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Perguntas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details & Config */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              Atendimento Direto
            </div>
            <ul className="space-y-2.5 text-xs text-slate-400 mb-4">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>WhatsApp: {OFFICIAL_DISPLAY_PHONE}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <a
                  href={`mailto:${CONSULTANT_INFO.email}`}
                  className="hover:text-white transition-colors"
                >
                  {CONSULTANT_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>{CONSULTANT_INFO.location}</span>
              </li>
            </ul>

            {onOpenConfig && (
              <button
                type="button"
                onClick={onOpenConfig}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs transition-colors"
              >
                <Settings className="w-3.5 h-3.5" />
                <span>Gerenciar WhatsApp</span>
              </button>
            )}
          </div>
        </div>

        {/* Legal Disclaimer & Regulatory Info */}
        <div className="pt-8 border-t border-slate-800 text-xs text-slate-500 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="max-w-2xl leading-relaxed">
            <strong>Aviso Legal Importante:</strong> O consórcio é regulamentado pela Lei nº 11.795/2008 e fiscalizado pelo Banco Central do Brasil. 
            A contemplação ocorre exclusivamente por meio de sorteio ou lance nas assembleias oficiais realizadas pelas administradoras autorizadas. 
            Não comercializamos cotas com garantia de contemplação pré-fixada ou imediata.
          </p>
          <div className="whitespace-nowrap">
            © {new Date().getFullYear()} Kayky Silva. Porto Vale Consórcios.
          </div>
        </div>
      </div>
    </footer>
  );
};

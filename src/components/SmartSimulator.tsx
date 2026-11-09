import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import {
  Home,
  Car,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  AlertCircle,
  Sparkles,
} from 'lucide-react';
import { ObjectiveType } from '../types.ts';
import { buildWhatsAppLink, formatCurrencyBRL } from '../utils/whatsapp.ts';
import { CREDIT_LIMITS } from '../data/content.ts';

interface SmartSimulatorProps {
  phone: string;
  defaultObjective?: ObjectiveType;
}

type BidOption = 'sim' | 'nao' | 'entender';

export const SmartSimulator: React.FC<SmartSimulatorProps> = ({
  phone,
  defaultObjective = 'imovel',
}) => {
  const shouldReduceMotion = useReducedMotion();

  // Form State
  const [category, setCategory] = useState<ObjectiveType>(defaultObjective);
  const [creditAmount, setCreditAmount] = useState<number>(
    defaultObjective === 'imovel' ? 350000 : 90000
  );
  const [monthlyBudget, setMonthlyBudget] = useState<number>(0);
  const [bidInterest, setBidInterest] = useState<BidOption>('entender');
  const [bidAmount, setBidAmount] = useState<number>(0);

  // Quick preset chips
  const quickPicks = useMemo(() => {
    return category === 'imovel'
      ? [100000, 200000, 350000, 500000, 800000]
      : [50000, 80000, 120000, 180000, 250000];
  }, [category]);

  const handleCategoryChange = (newCat: ObjectiveType) => {
    setCategory(newCat);
    if (newCat === 'imovel') {
      setCreditAmount(350000);
    } else {
      setCreditAmount(90000);
    }
  };

  // Safe numeric input handlers
  const handleCreditInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawDigits = e.target.value.replace(/\D/g, '');
    const num = rawDigits ? parseInt(rawDigits, 10) : 0;
    setCreditAmount(num);
  };

  const handleBudgetInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawDigits = e.target.value.replace(/\D/g, '');
    const num = rawDigits ? parseInt(rawDigits, 10) : 0;
    setMonthlyBudget(num);
  };

  const handleBidAmountInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawDigits = e.target.value.replace(/\D/g, '');
    const num = rawDigits ? parseInt(rawDigits, 10) : 0;
    setBidAmount(num);
  };

  // Real-time validation based on CREDIT_LIMITS
  const limitConfig = CREDIT_LIMITS[category];
  const isBelowMin =
    limitConfig.min !== null && creditAmount > 0 && creditAmount < limitConfig.min;

  // Formatted WhatsApp message according to strict specification
  const composedWhatsAppMessage = useMemo(() => {
    const objLabel = category === 'imovel' ? 'Imóvel' : 'Automóvel';
    const creditStr = creditAmount > 0 ? formatCurrencyBRL(creditAmount) : 'A definir';
    const budgetStr = monthlyBudget > 0 ? formatCurrencyBRL(monthlyBudget) : 'Não informado';

    let bidStr = 'Não informado / A definir';
    if (bidInterest === 'sim') {
      bidStr = bidAmount > 0 ? `Sim (${formatCurrencyBRL(bidAmount)})` : 'Sim (valor a definir)';
    } else if (bidInterest === 'nao') {
      bidStr = 'Não planejado no momento';
    } else if (bidInterest === 'entender') {
      bidStr = 'Quero entender melhor como funciona o lance';
    }

    return `Olá, Kayky! Vim pelo seu site e gostaria de receber uma simulação de consórcio.

Objetivo: ${objLabel}

Carta de crédito desejada: ${creditStr}

Orçamento mensal: ${budgetStr}

Possibilidade de lance: ${bidStr}

Gostaria de conhecer as condições disponíveis.`;
  }, [category, creditAmount, monthlyBudget, bidInterest, bidAmount]);

  return (
    <div className="bg-white border border-slate-200/90 rounded-3xl p-5 sm:p-7 shadow-xl relative">
      {/* Top Banner */}
      <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-100">
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-900">
          <Sparkles className="w-3.5 h-3.5 text-blue-600" />
          <span>Simulação Rápida</span>
        </div>
        <span className="text-[11px] text-slate-500 font-medium">
          Atendimento Direto WhatsApp
        </span>
      </div>

      <div className="space-y-5">
        {/* 1. Tipo de consórcio */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
            1. Escolha o objetivo
          </label>
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => handleCategoryChange('imovel')}
              className={`flex items-center justify-center gap-2 py-3 px-3 rounded-xl border text-sm font-bold transition-all ${
                category === 'imovel'
                  ? 'bg-blue-900 border-blue-900 text-white shadow-xs'
                  : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'
              }`}
            >
              <Home className="w-4 h-4 shrink-0" />
              <span>Imóvel</span>
            </button>

            <button
              type="button"
              onClick={() => handleCategoryChange('automovel')}
              className={`flex items-center justify-center gap-2 py-3 px-3 rounded-xl border text-sm font-bold transition-all ${
                category === 'automovel'
                  ? 'bg-blue-900 border-blue-900 text-white shadow-xs'
                  : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'
              }`}
            >
              <Car className="w-4 h-4 shrink-0" />
              <span>Automóvel</span>
            </button>
          </div>
        </div>

        {/* 2. Valor desejado da carta de crédito */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
              2. Valor desejado da carta de crédito
            </label>
            <span className="text-[11px] text-blue-900 font-semibold">Em reais (R$)</span>
          </div>

          <div className="relative">
            <input
              type="text"
              inputMode="numeric"
              value={creditAmount > 0 ? formatCurrencyBRL(creditAmount) : ''}
              onChange={handleCreditInput}
              placeholder="Ex: R$ 350.000"
              className={`w-full px-4 py-3 bg-slate-50/70 border rounded-xl text-lg sm:text-xl font-bold text-slate-900 focus:outline-none focus:ring-2 focus:bg-white transition-all ${
                isBelowMin
                  ? 'border-amber-400 focus:ring-amber-400'
                  : 'border-slate-200 focus:ring-blue-600'
              }`}
            />
          </div>

          {/* Real-time minimum validation note */}
          {isBelowMin && (
            <motion.div
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-2 flex items-start gap-1.5 text-xs text-amber-800 bg-amber-50 p-2.5 rounded-lg border border-amber-200"
            >
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <span>
                O valor mínimo divulgado para consórcio imobiliário é de <strong>R$ 70.000</strong>. Para cartas diferenciadas, consulte o consultor.
              </span>
            </motion.div>
          )}

          {/* Quick preset chips */}
          <div className="mt-2.5 flex flex-wrap items-center gap-1.5">
            <span className="text-[11px] text-slate-400 font-medium mr-1">Sugestões:</span>
            {quickPicks.map((val) => (
              <button
                key={val}
                type="button"
                onClick={() => setCreditAmount(val)}
                className={`px-2.5 py-1 text-xs font-semibold rounded-lg border transition-all ${
                  creditAmount === val
                    ? 'bg-blue-600 text-white border-blue-600 shadow-2xs'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-slate-400'
                }`}
              >
                {formatCurrencyBRL(val)}
              </button>
            ))}
          </div>
        </div>

        {/* 3. Orçamento mensal disponível (opcional) */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
            3. Orçamento mensal disponível <span className="text-slate-400 font-normal lowercase">(opcional)</span>
          </label>
          <input
            type="text"
            inputMode="numeric"
            value={monthlyBudget > 0 ? formatCurrencyBRL(monthlyBudget) : ''}
            onChange={handleBudgetInput}
            placeholder="Ex: R$ 1.500"
            className="w-full px-3.5 py-2.5 bg-slate-50/70 border border-slate-200 rounded-xl text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
          />
        </div>

        {/* 4. Possui valor para lance? (opcional e compacto) */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            4. Possui valor para lance? <span className="text-slate-400 font-normal lowercase">(opcional)</span>
          </label>
          <div className="grid grid-cols-3 gap-2">
            <button
              type="button"
              onClick={() => setBidInterest('sim')}
              className={`py-2 px-2 rounded-lg border text-xs font-bold text-center transition-all ${
                bidInterest === 'sim'
                  ? 'bg-blue-900 border-blue-900 text-white shadow-2xs'
                  : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'
              }`}
            >
              Sim
            </button>
            <button
              type="button"
              onClick={() => setBidInterest('nao')}
              className={`py-2 px-2 rounded-lg border text-xs font-bold text-center transition-all ${
                bidInterest === 'nao'
                  ? 'bg-blue-900 border-blue-900 text-white shadow-2xs'
                  : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'
              }`}
            >
              Não
            </button>
            <button
              type="button"
              onClick={() => setBidInterest('entender')}
              className={`py-2 px-1 rounded-lg border text-xs font-bold text-center transition-all truncate ${
                bidInterest === 'entender'
                  ? 'bg-blue-900 border-blue-900 text-white shadow-2xs'
                  : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'
              }`}
              title="Quero entender melhor"
            >
              Quero entender
            </button>
          </div>

          <AnimatePresence>
            {bidInterest === 'sim' && (
              <motion.div
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: 'auto', marginTop: 8 }}
                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-200/80">
                  <label className="block text-[11px] font-bold text-blue-950 uppercase tracking-wider mb-1">
                    Valor pretendido para lance:
                  </label>
                  <input
                    type="text"
                    inputMode="numeric"
                    value={bidAmount > 0 ? formatCurrencyBRL(bidAmount) : ''}
                    onChange={handleBidAmountInput}
                    placeholder="Ex: R$ 50.000"
                    className="w-full px-3 py-2 bg-white border border-blue-200 rounded-lg text-sm font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                  />
                  <div className="text-[11px] text-slate-500 mt-1">
                    Pode ser recursos próprios, saldo de FGTS (imóveis) ou lance embutido.
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Discrete Notice */}
        <div className="text-[11px] text-slate-500 leading-normal flex items-start gap-1.5 pt-1">
          <ShieldCheck className="w-3.5 h-3.5 text-blue-700 shrink-0 mt-0.5" />
          <span>
            Disponibilidade da carta sujeita à confirmação das condições atuais dos grupos ativos da Porto Seguro.
          </span>
        </div>

        {/* Primary CTA Button */}
        <div className="pt-1">
          <motion.a
            whileHover={{ y: -2, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            href={buildWhatsAppLink(phone, composedWhatsAppMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 text-base font-extrabold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-xl shadow-md hover:shadow-lg transition-all"
          >
            <MessageCircle className="w-5 h-5 text-white" />
            <span>Solicitar minha simulação</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </motion.a>

          <div className="text-center text-[11px] text-slate-500 mt-2 font-medium">
            Atendimento direto com Kayky Silva · Sem compromisso
          </div>
        </div>
      </div>
    </div>
  );
};

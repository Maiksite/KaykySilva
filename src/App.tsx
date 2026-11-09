/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { PortoCampaign } from './components/PortoCampaign.tsx';
import { WhyConsorcio } from './components/WhyConsorcio.tsx';
import { HowItWorks } from './components/HowItWorks.tsx';
import { AboutKayky } from './components/AboutKayky.tsx';
import { FaqSection } from './components/FaqSection.tsx';
import { FinalCta } from './components/FinalCta.tsx';
import { Footer } from './components/Footer.tsx';
import { FloatingWhatsApp } from './components/FloatingWhatsApp.tsx';
import { WhatsAppConfigModal } from './components/WhatsAppConfigModal.tsx';
import { OFFICIAL_WHATSAPP_NUMBER } from './utils/whatsapp.ts';
import { useLenisScroll } from './hooks/useLenisScroll.ts';

export default function App() {
  // Initialize Lenis smooth scroll
  useLenisScroll();

  const [phone, setPhone] = useState<string>(() => {
    const saved = localStorage.getItem('kayky_whatsapp');
    // If legacy placeholder was stored, reset to official number
    if (!saved || saved === '5511999999999') {
      localStorage.setItem('kayky_whatsapp', OFFICIAL_WHATSAPP_NUMBER);
      return OFFICIAL_WHATSAPP_NUMBER;
    }
    return saved;
  });

  const [isConfigOpen, setIsConfigOpen] = useState(false);

  const handleSavePhone = (newPhone: string) => {
    setPhone(newPhone);
    localStorage.setItem('kayky_whatsapp', newPhone);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-['Plus_Jakarta_Sans',sans-serif] selection:bg-blue-600 selection:text-white">
      {/* Top Bar Navigation (Compact, direct anchors) */}
      <Header phone={phone} />

      {/* Main Content Sections — Optimized High-Converting Hierarchy */}
      <main className="flex-1">
        {/* 01 — Hero + Calculadora (Maximum Priority: Immediate simulation on first fold) */}
        <Hero phone={phone} />

        {/* 02 — Campanha Porto (Featured image + concise commercial copy) */}
        <PortoCampaign phone={phone} />

        {/* 03 — Por que considerar um consórcio? (3 clear benefits) */}
        <WhyConsorcio phone={phone} />

        {/* 04 — Como funciona? (3 direct steps) */}
        <HowItWorks phone={phone} />

        {/* 05 — Sobre Kayky (Credenciais e atuação institucional) */}
        <AboutKayky phone={phone} />

        {/* 06 — Perguntas frequentes (5 prioritized questions in expandable accordion) */}
        <FaqSection phone={phone} />

        {/* 07 — Contato final (WhatsApp principal + E-mail corporativo) */}
        <FinalCta phone={phone} />
      </main>

      {/* Institutional Footer */}
      <Footer phone={phone} onOpenConfig={() => setIsConfigOpen(true)} />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp phone={phone} />

      {/* Configuration Modal for WhatsApp Number */}
      <WhatsAppConfigModal
        isOpen={isConfigOpen}
        onClose={() => setIsConfigOpen(false)}
        currentPhone={phone}
        onSavePhone={handleSavePhone}
      />
    </div>
  );
}

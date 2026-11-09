import React, { useState } from 'react';
import { Calculator, Menu, X, ArrowRight } from 'lucide-react';

interface HeaderProps {
  phone: string;
}

export const Header: React.FC<HeaderProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Simular', href: '#simulador' },
    { label: 'Campanha', href: '#campanha-porto' },
    { label: 'Como funciona', href: '#como-funciona' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18 gap-6">
          {/* Brand Presentation: Logo Porto + Kayky Silva */}
          <a
            href="#"
            className="flex items-center gap-3 sm:gap-3.5 group whitespace-nowrap shrink-0 focus:outline-none"
          >
            <img
              src="/assets/aistudio/logo_porto_trimmed.png"
              alt="Porto Seguro Consórcios"
              className="h-[22px] sm:h-[26px] w-auto object-contain shrink-0"
              loading="eager"
            />
            <div className="h-6 w-px bg-slate-200 hidden sm:block" />
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-extrabold tracking-tight text-slate-900 leading-tight group-hover:text-blue-900 transition-colors">
                Kayky Silva
              </span>
              <span className="text-[10px] sm:text-[11px] text-slate-500 font-medium tracking-normal">
                Consultor de Consórcios
              </span>
            </div>
          </a>

          {/* Clean Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-xs sm:text-sm font-semibold text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-blue-900 transition-colors whitespace-nowrap py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Primary Action Button: "Fazer simulação" */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href="#simulador"
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-xl shadow-xs transition-all whitespace-nowrap shrink-0"
            >
              <Calculator className="w-4 h-4 text-white" />
              <span>Fazer simulação</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5 text-slate-800" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col space-y-2.5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-blue-900 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-slate-100">
              <a
                href="#simulador"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-xs"
              >
                <Calculator className="w-4 h-4" />
                <span>Fazer simulação</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

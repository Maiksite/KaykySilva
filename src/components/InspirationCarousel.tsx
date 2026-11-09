import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { ChevronLeft, ChevronRight, Sparkles, MessageCircle, ArrowRight } from 'lucide-react';
import { REAL_PROPERTY_IMAGES } from '../data/content.ts';
import { buildWhatsAppLink, DEFAULT_WHATSAPP_MESSAGE } from '../utils/whatsapp.ts';

interface InspirationCarouselProps {
  phone: string;
}

interface SlideItem {
  id: string;
  photoUrl: string;
  webpUrl: string;
  title: string;
  subtitle: string;
  orientation: 'landscape' | 'vertical';
  alt: string;
}

const INSPIRATION_SLIDES: SlideItem[] = [
  {
    id: 'sobrado-balanco',
    photoUrl: REAL_PROPERTY_IMAGES.balancoCobogo,
    webpUrl: REAL_PROPERTY_IMAGES.balancoCobogoWebp,
    title: 'Arquitetura Contemporânea com Fachada em Balanço',
    subtitle: 'Conceito volumétrico inovador com privacidade e cobogós de iluminação natural.',
    orientation: 'landscape',
    alt: 'Casa moderna com fachada em balanço e cobogós',
  },
  {
    id: 'iluminacao-interiores',
    photoUrl: REAL_PROPERTY_IMAGES.ledGaragem,
    webpUrl: REAL_PROPERTY_IMAGES.ledGaragemWebp,
    title: 'Projeto Luminotécnico & Integração de Ambientes',
    subtitle: 'Iluminação linear em LED e acabamentos nobres integrando interiores e garagem.',
    orientation: 'vertical',
    alt: 'Projeto luminotécnico linear e interiores nobres com enquadramento vertical respeitado',
  },
  {
    id: 'fachada-vidro',
    photoUrl: REAL_PROPERTY_IMAGES.vidroFachada,
    webpUrl: REAL_PROPERTY_IMAGES.vidroFachadaWebp,
    title: 'Conexão Visual & Amplitude em Pele de Vidro',
    subtitle: 'Grandes aberturas que valorizam a luz natural e a integração com o exterior.',
    orientation: 'landscape',
    alt: 'Residência moderna com esquadrias de grande porte e pele de vidro',
  },
];

export const InspirationCarousel: React.FC<InspirationCarouselProps> = ({ phone }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % INSPIRATION_SLIDES.length);
  }, []);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + INSPIRATION_SLIDES.length) % INSPIRATION_SLIDES.length);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  const currentSlide = INSPIRATION_SLIDES[currentIndex];

  const slideVariants = {
    enter: (dir: number) => ({
      x: shouldReduceMotion ? 0 : dir > 0 ? 80 : -80,
      opacity: 0,
      scale: shouldReduceMotion ? 1 : 0.98,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.45, ease: 'easeOut' as const },
    },
    exit: (dir: number) => ({
      x: shouldReduceMotion ? 0 : dir > 0 ? -80 : 80,
      opacity: 0,
      scale: shouldReduceMotion ? 1 : 0.98,
      transition: { duration: 0.35, ease: 'easeInOut' as const },
    }),
  };

  return (
    <section id="inspiracao" className="py-20 bg-slate-50 border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider uppercase text-blue-900 mb-2">
            <Sparkles className="w-4 h-4 text-blue-700" />
            <span>Inspiração de Metas Imobiliárias</span>
          </div>

          <h2
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4"
            style={{ textWrap: 'balance' }}
          >
            Projetos e padrões que você pode planejar conquistar.
          </h2>

          <p className="text-base text-slate-600 leading-relaxed font-normal">
            Inspiração visual dos conceitos de arquitetura e padrões construtivos que nossos clientes realizam através da carta de crédito imobiliária.
          </p>

          <p className="text-xs text-slate-400 mt-2">
            * Fotografias ilustrativas de referências arquitetônicas. Não se tratam de imóveis pontuais à venda; o consórcio viabiliza a compra ou construção do projeto da sua escolha.
          </p>
        </motion.div>

        {/* Carousel Showcase Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Visual Slide Stage */}
          <div className="relative bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-200 flex items-center justify-center min-h-[420px] sm:min-h-[500px]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentSlide.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(_e, info) => {
                  if (info.offset.x < -40) handleNext();
                  if (info.offset.x > 40) handlePrev();
                }}
                className="w-full h-full flex flex-col items-center justify-center"
              >
                {/* Image Display: If vertical orientation, preserve native aspect without aggressive cropping */}
                <div
                  className={`relative w-full ${
                    currentSlide.orientation === 'vertical'
                      ? 'h-[440px] sm:h-[520px] flex items-center justify-center bg-slate-950/90'
                      : 'h-[420px] sm:h-[500px]'
                  }`}
                >
                  <picture className="w-full h-full flex items-center justify-center">
                    <source srcSet={currentSlide.webpUrl} type="image/webp" />
                    <img
                      src={currentSlide.photoUrl}
                      alt={currentSlide.alt}
                      loading="eager"
                      decoding="sync"
                      className={`transition-all duration-300 ${
                        currentSlide.orientation === 'vertical'
                          ? 'h-full w-auto max-w-full object-contain rounded-xl py-2'
                          : 'w-full h-full object-cover object-center'
                      }`}
                      referrerPolicy="no-referrer"
                    />
                  </picture>

                  {/* Discrete orientation tag if vertical */}
                  {currentSlide.orientation === 'vertical' && (
                    <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-md rounded-lg text-white text-[11px] font-medium">
                      Enquadramento Vertical Original
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Imagem anterior"
              className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/90 hover:bg-white text-slate-800 shadow-lg flex items-center justify-center transition-all hover:scale-105 active:scale-95 focus:outline-none"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Próxima imagem"
              className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/90 hover:bg-white text-slate-800 shadow-lg flex items-center justify-center transition-all hover:scale-105 active:scale-95 focus:outline-none"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Clean Caption Bar POSITIONED OUTSIDE THE IMAGE (as requested) */}
          <div className="mt-5 p-5 bg-white rounded-2xl border border-slate-200 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-900 bg-blue-50 px-2.5 py-0.5 rounded-md">
                  Inspiração {currentIndex + 1} de {INSPIRATION_SLIDES.length}
                </span>
                <span className="text-sm sm:text-base font-bold text-slate-900">
                  {currentSlide.title}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600">
                {currentSlide.subtitle}
              </p>
            </div>

            {/* Indicator Dots */}
            <div className="flex items-center gap-2 shrink-0 self-center sm:self-auto">
              {INSPIRATION_SLIDES.map((slide, idx) => (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => {
                    setDirection(idx > currentIndex ? 1 : -1);
                    setCurrentIndex(idx);
                  }}
                  aria-label={`Ir para inspiração ${idx + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    currentIndex === idx
                      ? 'w-7 bg-blue-900'
                      : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Direct CTA under carousel */}
          <div className="mt-6 text-center">
            <a
              href={buildWhatsAppLink(
                phone,
                'Olá, Kayky! Gostei das referências do site e gostaria de planejar uma carta de crédito imobiliária para meu objetivo.'
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-blue-900 hover:text-blue-700 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-blue-600" />
              <span>Simular uma carta para construir ou comprar meu imóvel</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

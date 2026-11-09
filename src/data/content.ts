import {
  ObjectiveDetail,
  StepItem,
  ComparisonPoint,
  FaqItem,
  OfficialPlan,
  CreditLimitsConfig,
} from '../types.ts';

// Strategic real property photos strictly curated (FOTOPSITE1 for Hero, FOTOPSITE2 for Objectives, FOTOPSITE3/8/6 for Carousel)
export const REAL_PROPERTY_IMAGES = {
  piscinaDusk: '/assets/aistudio/FOTOPSITE1_fd534370.jpeg',
  piscinaDuskWebp: '/assets/aistudio/optimized/FOTOPSITE1_fd534370.webp',

  pedraMadeira: '/assets/aistudio/FOTOPSITE2_1cf642e6.jpeg',
  pedraMadeiraWebp: '/assets/aistudio/optimized/FOTOPSITE2_1cf642e6.webp',

  balancoCobogo: '/assets/aistudio/FOTOPSITE3_fdf69ae9.jpeg',
  balancoCobogoWebp: '/assets/aistudio/optimized/FOTOPSITE3_fdf69ae9.webp',

  vidroFachada: '/assets/aistudio/FOTOPSITE6_45f08e80.jpeg',
  vidroFachadaWebp: '/assets/aistudio/optimized/FOTOPSITE6_45f08e80.webp',

  // Vertical photograph of interiors / lighting (original 1000x1333, aspect preserved)
  ledGaragem: '/assets/aistudio/FOTOPSITE8_94bc3916.jpeg',
  ledGaragemWebp: '/assets/aistudio/optimized/FOTOPSITE8_94bc3916.webp',

  portoLogo: '/assets/aistudio/logo_porto_trimmed.png',
};

// Centralized WhatsApp and Consultant Profile
export const CONSULTANT_INFO = {
  name: 'Kayky Silva',
  role: 'Consultor de Consórcios',
  partner: 'Porto Seguro',
  company: 'Porto Vale',
  whatsappNumber: '5511919557898',
  displayPhone: '(11) 91955-7898',
  defaultWhatsAppMessage: 'Olá, Kayky! Vim pelo seu site e gostaria de saber mais sobre consórcios.',
  email: 'Kayky.silva@portovaleconsorcios.com.br',
  location: 'São Paulo - Atendimento em todo o Brasil',
  featuredPropertyHero: REAL_PROPERTY_IMAGES.piscinaDusk,
};

// Official Porto Seguro plans registry.
// When plans are loaded from the official database or contract sheets, Mode 1 activates with deterministic math.
// Otherwise, Mode 2 operates cleanly without artificial calculations or speculative numbers.
export const OFFICIAL_PLANS: OfficialPlan[] = [];

// Credit Limits Configuration per modality (independent settings)
export const CREDIT_LIMITS: CreditLimitsConfig = {
  imovel: {
    min: 70000, // R$ 70.000 mínimo divulgado publicamente pela Porto Seguro
    max: null,  // Não impor R$ 1.500.000 como teto oficial sem validação
    hypothesisMax: 1500000, // Hipótese pendente de confirmação comercial
    status: 'confirmado_minimo_apenas',
    referenceSource: 'Porto Seguro Consórcios (mínimo público divulgado)',
    updatedAt: '2026-10-26',
    notes: 'Valor mínimo de R$ 70.000 divulgado publicamente. Teto de R$ 1.500.000 permanece como hipótese pendente de validação.',
  },
  automovel: {
    min: null, // Não aplicar automaticamente o mínimo de R$ 70.000 a automóveis
    max: null, // Não inventar limites para automóveis
    hypothesisMax: null,
    status: 'pendente_confirmacao',
    referenceSource: 'Aguardando validação oficial da equipe comercial',
    updatedAt: '2026-10-26',
    notes: 'Limites oficiais pendentes de confirmação pela equipe comercial.',
  },
};

export const OBJECTIVES: ObjectiveDetail[] = [
  {
    id: 'imovel',
    title: 'Consórcio Imobiliário',
    tagline: 'Casas em condomínio, terrenos, construção e reformas',
    description:
      'Planeje a compra do seu imóvel ou construção com segurança e previsibilidade financeira através de grupos estruturados da Porto Seguro.',
    highlights: [
      'Poder de compra à vista na hora da negociação com o vendedor',
      'Possibilidade de usar o saldo de FGTS para oferta de lance ou amortização',
      'Liberdade total: comprar pronto, na planta, adquirir terreno ou construir',
      'Parcelas previsíveis no orçamento familiar sem surpresas',
    ],
    creditRange: 'Créditos conforme grupos ativos',
    popularChoices: ['Casa em condomínio', 'Construção do zero', 'Lote + Obra', 'Sobrados'],
    ctaLabel: 'Quero planejar meu Imóvel',
    whatsappMessage: 'Olá, Kayky! Vim pelo seu site e gostaria de saber mais sobre consórcio imobiliário.',
    image: REAL_PROPERTY_IMAGES.pedraMadeira,
  },
  {
    id: 'automovel',
    title: 'Consórcio Automotivo',
    tagline: 'Carros 0km, seminovos, SUVs e utilitários',
    description:
      'Planeje a troca ou aquisição do seu veículo com inteligência financeira, fugindo do endividamento com juros bancários elevados.',
    highlights: [
      'Liberdade de escolha de marca, modelo e ano (veículos novos ou seminovos)',
      'Compra direta em concessionárias ou com particulares em todo o Brasil',
      'Possibilidade de antecipação estratégica com lances livres ou embutidos',
      'Renovação programada de veículos com custos administrativos claros',
    ],
    creditRange: 'Créditos conforme grupos ativos',
    popularChoices: ['SUVs e Crossovers', 'Sedans', 'Picapes', 'Seminovos até 10 anos'],
    ctaLabel: 'Quero planejar meu Veículo',
    whatsappMessage: 'Olá, Kayky! Vim pelo seu site e gostaria de saber mais sobre consórcio de automóveis.',
    image: '',
  },
];

// 3 concise benefits for "Por que considerar um consórcio?"
export const WHY_CONSORCIO_BENEFITS = [
  {
    step: '01',
    title: 'Planejamento para imóveis e automóveis',
    description:
      'Estruture a conquista do seu imóvel ou veículo com planejamento financeiro disciplinado e parcelas que cabem no seu orçamento.',
  },
  {
    step: '02',
    title: 'Sem juros de financiamento',
    description:
      'Livre de juros bancários compostos. Cobrança exclusiva de taxa de administração fixa diluída no prazo e encargos contratuais aplicáveis.',
  },
  {
    step: '03',
    title: 'Possibilidade de contemplação por sorteio ou lance',
    description:
      'Participe de sorteios mensais em igualdade de condições ou acelere sua contemplação ofertando lances livres, embutidos ou com FGTS.',
  },
];

// Short 3-step explanation for "Como Funciona?"
export const HOW_IT_WORKS: StepItem[] = [
  {
    step: '01',
    title: 'Escolha o valor da carta',
    description: 'Defina o montante de crédito necessário para o imóvel ou veículo que você deseja conquistar.',
    benefit: 'Adequação ao seu planejamento',
  },
  {
    step: '02',
    title: 'Conheça as condições e o funcionamento',
    description: 'Receba uma análise clara dos grupos ativos da Porto Seguro, prazos, taxas e regras de participação.',
    benefit: 'Transparência total antes de decidir',
  },
  {
    step: '03',
    title: 'Planeje sua participação com acompanhamento comercial',
    description: 'Conte com assessoria contínua de Kayky Silva em todas as assembleias até a homologação da sua carta.',
    benefit: 'Suporte direto do consultor',
  },
];

// Clear, financially and legally accurate points for comparison
export const COMPARISON_POINTS: ComparisonPoint[] = [
  {
    aspect: 'Juros e Encargos',
    consorcio: 'Não há juros de financiamento. Aplica-se taxa de administração fixa diluída no prazo e fundo de reserva estipulado em contrato.',
    financiamento: 'Cobrança contínua de juros compostos que elevam expressivamente o Custo Efetivo Total (CET) da operação.',
    consorcioPositive: true,
  },
  {
    aspect: 'Entrada Inicial',
    consorcio: 'Não exige entrada obrigatória para adesão ao grupo de consórcio.',
    financiamento: 'Geralmente exige pagamento de 20% a 30% do valor do bem à vista no momento do contrato.',
    consorcioPositive: true,
  },
  {
    aspect: 'Poder de Negociação',
    consorcio: 'A carta de crédito contemplada equivale a pagamento à vista, permitindo obter descontos com o vendedor.',
    financiamento: 'Crédito bancário vinculado a critérios rígidos e menor margem de negociação à vista.',
    consorcioPositive: true,
  },
  {
    aspect: 'Flexibilidade de Recursos',
    consorcio: 'Possibilidade de usar lance embutido (até 30% da própria carta) ou saldo do FGTS para antecipar a compra.',
    financiamento: 'Recursos próprios ficam retidos na entrada, taxas bancárias e despesas contratuais.',
    consorcioPositive: true,
  },
];

// Professional Institutional Trust Pillars
export interface TrustPillar {
  title: string;
  description: string;
  badge: string;
}

export const TRUST_PILLARS: TrustPillar[] = [
  {
    badge: 'Segurança Institucional',
    title: 'Parceria Porto Seguro & Porto Vale',
    description:
      'Solidez e tradição de uma das maiores e mais respeitadas administradoras de consórcios do Brasil.',
  },
  {
    badge: 'Conformidade Legal',
    title: 'Fiscalizado pelo Banco Central (BACEN)',
    description:
      'Todas as operações seguem a Lei nº 11.795/2008, garantindo transparência, proteção e auditoria de cada grupo.',
  },
  {
    badge: 'Método Técnico',
    title: 'Estratégia Baseada em Histórico Real',
    description:
      'Seleção criteriosa de grupos com análise estatística de lances anteriores, aumentando a probabilidade de contemplação.',
  },
  {
    badge: 'Atendimento Humano',
    title: 'Acompanhamento Direto com Kayky Silva',
    description:
      'Suporte direto pelo WhatsApp em todas as assembleias até a liberação da carta de crédito e faturamento do bem.',
  },
];

export const FAQS: FaqItem[] = [
  {
    category: 'geral',
    question: 'Como funciona a contemplação?',
    answer:
      'A contemplação ocorre exclusivamente por meio de sorteio ou lance nas assembleias oficiais mensais realizadas pela administradora Porto Seguro. Todas as cotas ativas concorrem em igualdade de condições no sorteio.',
  },
  {
    category: 'geral',
    question: 'O consórcio possui juros?',
    answer:
      'Não. O consórcio não cobra juros de financiamento bancário (sem juros compostos). Aplica-se apenas uma taxa de administração fixa diluída ao longo de todo o prazo contratado e o fundo de reserva estipulado no grupo.',
  },
  {
    category: 'geral',
    question: 'O que é lance?',
    answer:
      'O lance é a oferta de um valor para antecipar a contemplação da cota na assembleia. Pode ser ofertado com recursos próprios, com saldo do FGTS (para imóveis) ou utilizando o lance embutido (até 30% do próprio crédito).',
  },
  {
    category: 'geral',
    question: 'Existem taxas?',
    answer:
      'As taxas consistem na taxa de administração (remuneração da administradora pela gestão do grupo) e o fundo de reserva (garantia de estabilidade financeira do grupo). Não há cobrança de taxa de juros bancários.',
  },
  {
    category: 'geral',
    question: 'Como receber uma simulação?',
    answer:
      'Basta preencher o simulador no topo da página informando o tipo de consórcio (imóvel ou automóvel) e o valor desejado. Ao clicar no botão, você é direcionado diretamente ao WhatsApp de Kayky Silva para receber as opções oficiais disponíveis.',
  },
];


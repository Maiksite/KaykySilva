# Kayky Silva — Landing Page Comercial de Consórcios

Landing page comercial de alta conversão para **Kayky Silva**, consultor comercial de consórcios da **Porto Vale** (distribuidora autorizada da **Porto Seguro Consórcios**), especializada no planejamento estratégico para aquisição de imóveis e automóveis.

---

## 🚀 Tecnologias Utilizadas

- **React 19**: Biblioteca para interfaces reativas e performáticas.
- **TypeScript**: Tipagem estática rigorosa para garantir segurança e estabilidade.
- **Vite 8**: Ferramenta de build e bundling ultrarrápida.
- **Tailwind CSS v4**: Estilização moderna via `@tailwindcss/vite` e `@import "tailwindcss"`.
- **Motion (Framer Motion)**: Animações sutis e elegantes com suporte automático a `prefers-reduced-motion`.
- **Lenis**: Rolagem suave e agradável em todas as resoluções.
- **Lucide React**: Conjunto de ícones leves e consistentes.

---

## 📁 Estrutura de Arquivos

```text
├── public/
│   └── assets/
│       └── aistudio/           # Imagens reais de alta resolução e otimizadas
├── src/
│   ├── components/             # Componentes modulares
│   │   ├── AboutKayky.tsx      # Apresentação e credenciais do consultor
│   │   ├── FaqSection.tsx      # Dúvidas frequentes prioritárias
│   │   ├── FinalCta.tsx        # Chamada final para WhatsApp e e-mail corporativo
│   │   ├── FloatingWhatsApp.tsx# Botão flutuante para contato ágil
│   │   ├── Footer.tsx          # Rodapé institucional e links
│   │   ├── Header.tsx          # Barra de navegação compacta e botão de simulação
│   │   ├── Hero.tsx            # Primeira dobra com apresentação e simulador
│   │   ├── HowItWorks.tsx      # Metodologia em 3 passos
│   │   ├── PortoCampaign.tsx   # Banner oficial da Campanha Porto Consórcio
│   │   ├── SmartSimulator.tsx  # Calculadora interativa com máscara e envio direto
│   │   ├── WhatsAppConfigModal.tsx # Gerenciador local do número do WhatsApp
│   │   └── WhyConsorcio.tsx    # 3 benefícios estratégicos do consórcio
│   ├── data/
│   │   └── content.ts          # Textos, limites de crédito e contatos centralizados
│   ├── hooks/
│   │   └── useLenisScroll.ts   # Hook para inicialização do smooth scroll
│   ├── types.ts                # Definições de tipos e interfaces TypeScript
│   ├── utils/
│   │   └── whatsapp.ts         # Utilitários de link e máscara de moeda BRL
│   ├── App.tsx                 # Composição principal da landing page
│   ├── index.css               # Importação de estilos globais Tailwind
│   └── main.tsx                # Ponto de entrada React 19
├── .gitignore                  # Arquivos e pastas ignorados no versionamento
├── index.html                  # HTML principal com metadados e SEO configurados
├── package.json                # Dependências e scripts do projeto
├── tsconfig.json               # Configurações do compilador TypeScript
├── vercel.json                 # Roteamento SPA e regras de deploy na Vercel
└── vite.config.ts              # Configuração do Vite e plugins
```

---

## 💻 Instalação e Execução Local

### Pré-requisitos
- **Node.js** 18.0.0 ou superior (recomendado Node.js 20 LTS).
- **npm** (incluso com Node.js).

### Passo a passo
1. Clone o repositório ou descompacte os arquivos:
   ```bash
   git clone https://github.com/SEU_USUARIO/kayky-consorcios.git
   cd kayky-consorcios
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
   A aplicação estará acessível em `http://localhost:3000`.

4. Para testar a compilação e verificação de tipos:
   ```bash
   npm run lint
   npm run build
   ```

5. Para pré-visualizar a versão de produção localmente:
   ```bash
   npm run preview
   ```

---

## 🌐 Publicação na Vercel (Guia Passo a Passo)

A aplicação é uma SPA estática otimizada, 100% compatível com a infraestrutura da Vercel.

### 1. Subir o código para o GitHub
Se ainda não inicializou o repositório Git:
```bash
git init
git add .
git commit -m "feat: landing page comercial Kayky Consórcios pronta para produção"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git
git push -u origin main
```

### 2. Importar o projeto na Vercel
1. Acesse sua conta na [Vercel](https://vercel.com/) e clique em **Add New... > Project**.
2. Selecione o repositório GitHub correspondente e clique em **Import**.
3. Na tela de configuração de build (**Configure Project**), confira os dados:
   - **Framework Preset**: `Vite` (a Vercel detecta automaticamente).
   - **Root Directory**: `./` (raiz do projeto).
   - **Build Command**: `npm run build` (ou padrão `vite build`).
   - **Output Directory**: `dist`.
   - **Install Command**: `npm install`.
4. **Environment Variables**: Nenhuma variável de ambiente privada é necessária para a execução do frontend público.
5. Clique em **Deploy**.

Em menos de 1 minuto, o site estará publicado com certificado SSL gratuito, CDN global de alta performance e domínio personalizado configurável.

---

## 📱 Contato e Atendimento
- **Consultor**: Kayky Silva
- **Empresa**: Porto Vale Consórcios
- **Marca Vinculada**: Porto Seguro Consórcios
- **WhatsApp**: (11) 91955-7898
- **E-mail Corporativo**: Kayky.silva@portovaleconsorcios.com.br
- **Localização**: São Paulo - SP (Atendimento Nacional)

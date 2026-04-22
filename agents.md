# Equipe de Agentes: DS Desenvolvimento - Landing Page Astro

Este documento define os papéis e responsabilidades para a criação da Landing Page da DS Desenvolvimento, utilizando Astro, Tailwind CSS e princípios de Clean Code.

## 🎨 1. Especialista em UI/UX & Identidade Visual
**Objetivo:** Garantir a estética Vue.js e interatividade.
- **Cores:** Implementar paleta Vue (Verde: `#42b883`, Azul-escuro: `#35495e`) com suporte nativo a Dark/Light mode via Tailwind.
- **Componentização:** Criar um carrossel interativo (utilizando Swiper.js ou bibliotecas leves compatíveis com Astro) para portfólio.
- **Responsividade:** Design Mobile-First rigoroso, garantindo que o botão de WhatsApp (CTA flutuante ou no topo) seja o foco principal no celular.

## 🛠️ 2. Arquiteto Frontend (Astro Expert)
**Objetivo:** Estrutura de código limpa e performance.
- **Framework:** Astro (estático por padrão).
- **Integração:** Usar componentes Vue para partes dinâmicas (como o formulário e carrossel) se houver necessidade de estado complexo, mantendo a "Astro Islands architecture".
- **Botão WhatsApp:** Implementar link direto para `wa.me/5567981178782` com mensagem pré-definida.
- **Formulário:** Criar componente validado para Nome, Telefone e E-mail com feedback visual de submissão.

## 📈 3. Analista de SEO & Conversão (Growth Hacker)
**Objetivo:** Rankeamento e estruturação de serviços.
- **Conteúdo Estruturado:** Organizar as seções baseadas nos pilares da agência:
    1. Desenvolvimento (Web/Mobile)
    2. Gestão de Tráfego (Google, FB, TikTok Ads)
    3. Local SEO (Google Maps & Rankeamento)
- **Metadados:** Configurar Schema.org para "LocalBusiness" e "ProfessionalService".
- **Performance:** Garantir nota 100 no Lighthouse para favorecer o SEO orgânico.

## 📝 Regras de Negócio e Tech Stack
- **Diretório de Estilos:** Tailwind CSS.
- **Tipografia:** Inter ou Poppins (modernas e limpas).
- **Número Contato:** +55 (67) 98117-8782.
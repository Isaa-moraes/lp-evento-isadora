# Corrida Noturna OC — Landing Page

Landing page responsiva e acessível desenvolvida em React + Vite + Tailwind CSS v4 para a atividade da disciplina PEND (Programação Front-End).

## 🚀 Deploy

- **Site publicado:** https://lp-evento-isadora.vercel.app
- **Notas do Lighthouse (site publicado):**
  - **Performance:** 100 | **Accessibility:** 96 | **Best Practices:** 96

## 📝 Ticket de Saída — Resumo

* **Componentes e Estado:** Componentes com *props* (como `CartaoAtracao.jsx`) são estáticos e exibem dados recebidos do pai, enquanto componentes com *useState* (como `Inscricao.jsx`) gerenciam estados internos e reagem a interações do usuário.
* **Escalabilidade:** Para adicionar uma quinta atração, basta atualizar o arquivo de dados (`src/data/evento.js`) com o novo item, pois a interface utiliza `.map()` de forma dinâmica.
* **Deploy na Vercel:** A pasta enviada para produção é a `dist/` (gerada pelo *build* do Vite), o HTTPS habilitado pela Vercel permite o funcionamento de recursos como notificações, e o `git push` dispara o deploy contínuo automaticamente.

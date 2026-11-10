# Relatório de Auditoria e Correções de Acessibilidade

Este documento registra a avaliação de acessibilidade da Landing Page da **Corrida Noturna OC**, realizada como parte das atividades da disciplina PEND (Programação Front-End).

---

## 📊 1. Cenário Inicial (Antes das Alterações)

### Notas e Diagnósticos Automáticos
*   **Nota do Lighthouse (Mobile):** 92/100
*   **Problemas apontados pelo Lighthouse:** 
    *   Alguns elementos interativos não possuíam um indicador de foco visual claro ao navegar por teclado.
    *   O menu de navegação principal (`<nav>`) não possuía uma etiqueta descritiva estrutural para leitores de tela.
*   **Problemas apontados pelo axe DevTools:**
    *   Falta de atributos de preenchimento automático (`autoComplete`) nos campos de formulário de identificação pessoal.
    *   Elementos decorativos (emojis gráficos como "🎉") sendo lidos de forma literal pelos leitores de tela, gerando poluição sonora.

### Teste de Teclado Manual
*   **Problemas encontrados:** Ao navegar utilizando apenas as teclas `Tab` e `Shift + Tab`, o foco ficava invisível em alguns links do cabeçalho devido ao esquema de cores escuras. Além disso, usuários dependentes de teclado eram obrigados a percorrer todos os links do menu do cabeçalho antes de conseguir chegar ao conteúdo principal da página.

---

## 🛠️ 2. Cenário Final (Após as Correções)

### Nota Atualizada
*   **Nota do Lighthouse (Mobile):** 100/100 🏆

### O que foi corrigido e implementado:
1.  **Acessibilidade no Menu:** Adicionado o atributo `aria-label="Menu principal"` na tag `<nav>` do componente `Cabecalho.jsx`.
2.  **Atalho de Navegação (Bypass Link):** Criação do link oculto "Pular para o conteúdo" em `App.jsx` com foco visível dinâmico via Tailwind (`sr-only focus:not-sr-only`), direcionando o foco do teclado direto para o `<main id="conteudo">`.
3.  **Contorno de Foco Global:** Aplicação da pseudoclasse `:focus-visible` no arquivo `index.css` com contorno na cor amarela (`--color-destaque`) e espaçamento de 3px, garantindo visibilidade clara de onde o foco está sem alterar o design para quem usa o mouse.
4.  **Respeito ao Usuário (Animação):** Implementação da diretiva `@media (prefers-reduced-motion: reduce)` em `index.css` para desativar a rolagem suave (`scroll-behavior: auto`) caso o usuário possua restrições cognitivas ou labirintite e tenha configurado a redução de movimentos no sistema.
5.  **Formulário Semântico:** 
    *   Refatoração de `Inscricao.jsx` para associar explicitamente as marcas via atributos `htmlFor` e `id`.
    *   Inclusão de `autoComplete="name"` e `autoComplete="email"` para acelerar o preenchimento por pessoas com limitações motoras.
6.  **Notificação Assíncrona:** Inclusão de `role="status"` e `aria-live="polite"` na tela de confirmação de cadastro para que o leitor de tela avise imediatamente e em voz alta que a inscrição foi concluída.
7.  **Isolamento Decorativo:** Inclusão de `aria-hidden="true"` no emoji comemorativo para que o leitor ignore o caractere puramente visual.

---

## 🧩 3. Componente Complexo com ARIA (Passo 3)

Foi criada a nova seção de **Perguntas Frequentes (FAQ)** no arquivo `src/components/PerguntasFrequentes.jsx`, consumindo os dados centralizados de `src/data/evento.js`. 

**Recursos de acessibilidade aplicados no componente:**
*   Cada pergunta foi envolvida em um título semântico `<h3>` contendo um elemento nativo `<button type="button">`.
*   Uso do atributo dinâmico `aria-expanded={isAberta}` amarrado ao estado local (`useState`), atualizando o leitor de tela se a resposta está recolhida ou expandida.
*   Associação por ID entre o botão e o texto através do atributo `aria-controls={\`resposta-\${item.id}\`}`.
*   Ocultação nativa da resposta quando fechada usando o atributo HTML `hidden={!isAberta}`, impedindo que o leitor de tela acesse conteúdos invisíveis.
*   Inclusão do link âncora funcional "Dúvidas" no menu de navegação superior apontando para `#duvidas`.

---

## 🔍 4. Problema que a ferramenta NÃO apontou e eu encontrei

Durante a revisão manual das seções da página, identifiquei uma **inconsistência lógica e de conteúdo** que comprometeria a experiência de qualquer usuário (especialmente pessoas com ansiedade ou déficit de atenção): 
O cartão do percurso *Kids 500 m* listava de forma fixa que a largada aconteceria às **18h**, contudo, esse horário essencial não estava listado na tabela geral da seção de *Programação do Evento*.

**Como foi corrigido:** O erro foi tratado diretamente na camada de dados em `src/data/evento.js`, adicionando o objeto `{ horario: '18h', atividade: 'Largada do percurso Kids 500 m' }` na lista mapeada. Como a interface consome os dados dinamicamente, a tabela de horários e a seção de destaques se atualizaram sozinhas, mantendo as informações idênticas, previsíveis e fáceis de compreender em toda a página.
# Corrida Noturna OC — Landing Page

Landing page responsiva e acessível desenvolvida em React + Vite + Tailwind CSS v4 para a atividade da disciplina PEND (Programação Front-End).

## 📝 Ticket de Saída

### 1. Qual é a diferença entre um componente que recebe props e um que usa useState? Dê um exemplo da sua página para cada um.
**Resposta:** Um componente que recebe *props* é puramente visual e depende de dados externos enviados pelo componente pai, como o `CartaoAtracao.jsx`, que apenas exibe as informações de cada percurso. Já um componente que usa *useState* possui estado interno que pode mudar com base nas ações do usuário, como o `Inscricao.jsx`, que monitora o texto digitado nos campos do formulário e controla se a mensagem de sucesso deve ser exibida.

### 2. Se amanhã o evento ganhar uma quinta atração, quais arquivos você precisa mudar?
**Resposta:** Seria necessário alterar **apenas o arquivo `src/data/evento.js`**, adicionando o objeto do novo percurso dentro do array `percursosLista`. Devido ao uso do método `.map()`, a interface da landing page se atualizaria sozinha e renderizaria o novo cartão de forma automática.

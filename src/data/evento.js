// Dados gerais do evento
export const infoEvento = {
  nome: 'Corrida Noturna OC',
  slogan: 'Corra sob as luzes da cidade.',
  data: '17 de abril de 2027 (sábado)',
  largada: '19h30',
  local: 'Praça da Matriz — Osvaldo Cruz/SP'
};

// Três números de destaque para a seção Sobre
export const destaquesSobre = [
  { id: 1, quantidade: '3', descricao: 'percursos disponíveis' },
  { id: 2, quantidade: '1.500', descricao: 'participantes' },
  { id: 3, quantity: '6', descricao: 'pontos de hidratação' }
];

// Lista de horários e atividades para a seção Programação
export const programacaoHorarios = [
  { horario: '16h', atividade: 'Retirada dos kits' },
  { horario: '18h30', atividade: 'Aquecimento coletivo' },
  { horario: '19h30', atividade: 'Largada dos 10 km' },
  { horario: '19h40', atividade: 'Largada dos 5 km' },
  { horario: '19h50', atividade: 'Saída da caminhada' },
  { horario: '21h', atividade: 'Premiação e show ao vivo' }
];

// Lista de percursos
export const percursosLista = [
  {
    nome: '10 km',
    nivel: 'Avançado',
    descricao: 'Para quem já corre com frequência; percurso com duas subidas.'
  },
  {
    nome: '5 km',
    nivel: 'Iniciante',
    descricao: 'Ideal para a primeira prova, todo em terreno plano.'
  },
  {
    nome: 'Caminhada 3 km',
    nivel: 'Livre',
    descricao: 'Sem cronometragem, para fazer em família ou com os amigos.'
  },
  {
    nome: 'Kids 500 m',
    nivel: 'Infantil',
    descricao: 'Para crianças de 6 a 12 anos, às 18h, com medalha especial.'
  }
];

// Opções de ingressos para carregar no <select> do formulário
export const tiposIngresso = [
  { valor: '10km', label: '10 km — R$ 70' },
  { valor: '5km', label: '5 km — R$ 60' },
  { valor: 'caminhada', label: 'Caminhada — R$ 40' },
  { valor: 'kids', label: 'Kids — R$ 25' }
];
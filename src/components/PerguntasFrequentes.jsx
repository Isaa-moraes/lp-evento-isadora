import { useState } from 'react';
import { perguntasFrequentes } from '../data/evento';

export default function PerguntasFrequentes() {
  // Estado para controlar qual pergunta está aberta pelo ID (null significa nenhuma aberta)
  const [abertoId, setAbertoId] = useState(null);

  const alternarPergunta = (id) => {
    setAbertoId(abertoId === id ? null : id);
  };

  return (
    <section id="duvidas" className="bg-[#0b132b] py-16 px-4 border-t border-slate-800">
      <div className="max-w-3xl mx-auto">
        {/* Título semântico único para a seção */}
        <h2 className="text-3xl font-extrabold text-center text-white mb-10 tracking-tight uppercase">
          Perguntas Frequentes
        </h2>

        <div className="space-y-4">
          {perguntasFrequentes.map((item) => {
            const isAberta = abertoId === item.id;

            return (
              <div 
                key={item.id} 
                className="bg-[#111c40] rounded-xl border border-slate-700/50 overflow-hidden transition-all duration-200"
              >
                <h3>
                  {/* O botão controla o estado expandido e aciona o ID específico da resposta */}
                  <button
                    type="button"
                    onClick={() => alternarPergunta(item.id)}
                    aria-expanded={isAberta}
                    aria-controls={`resposta-${item.id}`}
                    className="w-full flex items-center justify-between p-5 text-left text-white font-semibold hover:bg-[#182654] transition-colors focus-visible:outline focus-visible:outline-3 focus-visible:outline-[#fcc419] focus-visible:outline-offset-2"
                  >
                    <span>{item.pergunta}</span>
                    
                    {/* Ícone decorativo ocultado do leitor de tela */}
                    <span 
                      aria-hidden="true" 
                      className={`ml-4 text-[#fcc419] transform transition-transform duration-200 ${isAberta ? 'rotate-180' : ''}`}
                    >
                      ▼
                    </span>
                  </button>
                </h3>

                {/* Bloco da resposta ocultado nativamente via HTML com hidden se estiver fechado */}
                <div
                  id={`resposta-${item.id}`}
                  hidden={!isAberta}
                  className="p-5 text-slate-300 border-t border-slate-700/40 bg-[#0e1736]/50 leading-relaxed text-sm md:text-base"
                >
                  {item.resposta}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
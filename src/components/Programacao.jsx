import { programacaoHorarios } from '../data/evento'

function Programacao() {
  return (
    <section id="programacao" className="py-20 px-4 bg-gray-50 text-escura">
      <div className="max-w-3xl mx-auto">
        {/* Título da Seção */}
        <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-center text-primaria mb-12">
          Programação
        </h2>

        {/* Lista Cronológica */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="divide-y divide-gray-100">
            {programacaoHorarios.map((item) => (
              <div 
                key={item.horario} 
                className="p-5 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8 hover:bg-gray-50 transition-colors"
              >
                {/* Horário em Destaque */}
                <span className="text-xl font-black text-primaria min-w-[80px]">
                  {item.horario}
                </span>
                
                {/* Atividade Realizada */}
                <span className="text-base sm:text-lg font-medium text-gray-700">
                  {item.atividade}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Programacao
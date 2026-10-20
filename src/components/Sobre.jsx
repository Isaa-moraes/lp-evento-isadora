import { destaquesSobre } from '../data/evento'

function Sobre() {
  return (
    <section id="sobre" className="py-20 px-4 bg-white text-escura">
      <div className="max-w-4xl mx-auto text-center">
        {/* Título da Seção */}
        <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-primaria mb-6">
          Sobre o Evento
        </h2>
        
        {/* Texto descritivo adaptado do briefing */}
        <p className="text-base sm:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
          A <span className="font-bold text-primaria">Corrida Noturna OC</span> traz percursos de 5 km e 10 km pelas avenidas iluminadas do centro, além de uma caminhada de 3 km para quem quer participar sem correr. Todos os inscritos recebem camiseta refletiva e medalha. Parte do valor das inscrições é doada para a compra de equipamentos do hospital da cidade.
        </p>

        {/* Grid de Destaques usando map */}
        <div className="mt-12 grid gap-6 sm:grid-cols-3 max-w-3xl mx-auto">
          {destaquesSobre.map((item) => (
            <div 
              key={item.id} 
              className="p-6 rounded-2xl bg-gray-50 border border-gray-100 shadow-sm transition-all hover:shadow-md"
            >
              {/* Número ou Quantidade */}
              <span className="block text-4xl sm:text-5xl font-black text-destaque">
                {item.quantidade}
              </span>
              {/* Descrição do Destaque */}
              <span className="block mt-2 text-sm sm:text-base font-semibold text-gray-600 uppercase tracking-wide">
                {item.descricao}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Sobre
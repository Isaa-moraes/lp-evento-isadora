import { percursosLista } from '../data/evento'
import CartaoAtracao from './CartaoAtracao'

function Atracoes() {
  return (
    <section id="percursos" className="py-20 px-4 bg-white text-escura">
      <div className="max-w-5xl mx-auto">
        
        {/* Título da Seção */}
        <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-center text-primaria mb-12">
          Percursos Disponíveis
        </h2>

        {/* Grid de Cartões */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {percursosLista.map((percurso) => (
            <CartaoAtracao
              key={percurso.nome}
              nome={percurso.nome}
              nivel={percurso.nivel}
              descricao={percurso.descricao}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Atracoes
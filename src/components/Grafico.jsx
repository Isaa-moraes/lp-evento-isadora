import { useEffect, useRef } from "react";

const dados = [
  { rotulo: "10 km", valor: 580 },
  { rotulo: "5 km", valor: 640 },
  { rotulo: "Caminhada", valor: 280 },
];

function Grafico() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Limpa o canvas antes de desenhar (útil se os dados mudarem)
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const maior = Math.max(...dados.map((d) => d.valor));

    dados.forEach((item, i) => {
      const largura = (item.valor / maior) * 200; // Barra máxima de 200px
      const y = 20 + i * 50; // Espaçamento vertical de 50px

      // 1. Cor da barra (Azul primário do evento)
      ctx.fillStyle = "#1e3a8a";

      // 2. Desenha o retângulo da barra (x = 110, altura = 28px)
      ctx.fillRect(110, y, largura, 28);

      // 3. Cor escura para os textos
      ctx.fillStyle = "#0f172a";
      ctx.font = "bold 14px sans-serif";

      // Escreve o rótulo à esquerda (x = 10)
      ctx.fillText(item.rotulo, 10, y + 19);

      // 4. Escreve o valor numérico logo após o fim da barra
      ctx.fillText(`${item.valor} inscritos`, 110 + largura + 10, y + 19);
    });
  }, []);

  return (
    <section className="py-16 px-4 bg-white text-escura border-t border-gray-100">
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl font-extrabold uppercase tracking-tight text-center text-primaria">
          Inscritos por Modalidade
        </h2>
        <p className="text-sm text-gray-500 text-center mt-2">
          Acompanhe a procura em tempo real pelas vagas da prova.
        </p>

        <div className="mt-8 p-6 bg-gray-50 rounded-2xl border border-gray-200 shadow-sm w-full flex justify-center overflow-x-auto">
          <canvas
            ref={canvasRef}
            width={410}
            height={170}
            role="img"
            aria-label="Gráfico de barras mostrando inscritos por modalidade: 10 km com 580 inscritos, 5 km com 640 inscritos e Caminhada com 280 inscritos."
            className="max-w-full"
          />
        </div>
      </div>
    </section>
  );
}

export default Grafico;

import { useState } from "react";

function BotaoLembrete() {
  const [mensagem, setMensagem] = useState("");

  async function ativarLembrete() {
    // 1. Verifica suporte do navegador
    if (!("Notification" in window)) {
      setMensagem("Este navegador não aceita notificações.");
      return;
    }

    // 2. Pede permissão ao usuário
    const permissao = await Notification.requestPermission();

    // 3. Verifica se o usuário negou ou fechou o aviso
    if (permissao !== "granted") {
      setMensagem("Você não permitiu as notificações.");
      return;
    }

    // 4. Aguarda o Service Worker ficar pronto
    const registro = await navigator.serviceWorker.ready;

    // 5. Dispara a notificação do sistema operacional
    registro.showNotification("Corrida Noturna OC", {
      body: "Falta pouco! Prepare seu tênis para correr sob as luzes da cidade no dia 17 de abril.",
      icon: "/icone-192.png",
    });

    // 6. Feedback visual e acessível na tela
    setMensagem("Lembrete ativado!");
  }

  return (
    <div className="mt-4 flex flex-col items-center">
      <button
        type="button"
        onClick={ativarLembrete}
        className="border-2 border-destaque text-destaque hover:bg-destaque hover:text-escura font-bold py-3 px-6 rounded-xl text-sm uppercase tracking-wider transition-colors min-h-[44px]"
      >
        🔔 Me lembre do evento
      </button>

      {mensagem && (
        <p role="status" className="mt-3 text-sm font-medium text-white bg-white/10 px-4 py-1.5 rounded-lg">
          {mensagem}
        </p>
      )}
    </div>
  );
}

export default BotaoLembrete;
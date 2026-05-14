const messages = [
  "INICIALIZANDO EXPERIÊNCIA...",
  "CARREGANDO TECIDOS DE ALTA PRECISÃO...",
  "PREPARANDO EXCLUSIVIDADE...",
  "AJUSTANDO DETALHES DE ALFAIATARIA...",
  "FINALIZANDO IMPRESSÃO DE LUXO..."
];

let i = 0;

setInterval(() => {
  i = (i + 1) % messages.length;
  document.getElementById("status").innerText = messages[i];
}, 1800);

// efeito de transição final (simula entrada do site)
setTimeout(() => {
  document.body.style.transition = "1.5s ease";
  document.body.style.opacity = "0";
}, 9000);
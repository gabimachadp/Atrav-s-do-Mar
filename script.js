//BARRA DAS CARACTERISTICAS
const botoes = document.querySelectorAll('.opcao');
const indicador = document.querySelector('.indicador');
const container = document.querySelector('.opcoes');
const paineis = document.querySelectorAll('.painel');
function moverIndicador(botao) {
  const largura = botao.offsetWidth;
  const rectBotao = botao.getBoundingClientRect();
  const rectContainer = container.getBoundingClientRect();
  const posicao = rectBotao.left - rectContainer.left;

  indicador.style.width = `${largura}px`;
  indicador.style.transform = `translateX(${posicao}px)`;
}
botoes.forEach((botao, i) => {
  botao.addEventListener('click', () => {
    document.querySelector('.opcao.ativa')?.classList.remove('ativa');
    botao.classList.add('ativa');
    moverIndicador(botao);
    document.querySelector('.painel.ativo')?.classList.remove('ativo');
    paineis[i].classList.add('ativo');
  });
});
window.addEventListener('load', () => {
  const ativo = document.querySelector('.opcao.ativa');
  if (ativo) moverIndicador(ativo);
});

//NAVBAR
const nav = document.getElementById('navbar');
const btn = document.getElementById('menu-btn');

// Abrir e fechar ao clicar no botão
btn.addEventListener('click', (e) => {
  e.stopPropagation();
  nav.classList.toggle('ativo');
});

// Fechar com click 
document.addEventListener('click', (e) => {
  if (!nav.contains(e.target) && e.target !== btn) {
    nav.classList.remove('ativo');
  }
});
// Fecha com o scroll
window.addEventListener('scroll', () => {
  nav.classList.remove('ativo');
});

// AUDIO
const audios = document.querySelectorAll(".audio");
const ttsBotoes = document.querySelectorAll(".TTS");

ttsBotoes.forEach((botao, index) => {
  const audio = audios[index];

  botao.addEventListener("click", () => {
    audios.forEach(aud => {
      if (aud !== audio) {
        aud.pause();
        aud.currentTime = 0;
      }
    });

    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  });
});
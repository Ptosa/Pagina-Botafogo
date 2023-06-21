
const jogadoresMasculinos = jogadores.filter(jogador => jogador.elenco === 'masculino');

const jogadorasFemininas = jogadores.filter(jogador => jogador.elenco === 'feminino');

const manipula_click = (evento) => {
  let audio = new Audio("sons/botafogo-radio-globo.mp3");
  audio.play();
  //console.log("BOTAFOGO")
  const clicada = evento.target;
  sessionStorage.setItem('nomecomp', clicada.dataset.nomecomp);
  window.location.href = 'detalhes.html';
}

function criarCard(jogador) {
  const card = document.createElement('div');
  card.classList.add('card');
  const imagem = document.createElement('img');
  imagem.src = jogador.imagem;
  imagem.alt = jogador.nome;
  imagem.classList.add('card-img');
  imagem.onclick = manipula_click;
  imagem.dataset.nomecomp = jogador.nome_completo;
  const nome = document.createElement('h3');
  nome.textContent = jogador.nome;
  nome.classList.add('card-title');

  const cidade = document.createElement('h3');
  cidade.textContent = jogador.nascimento.split(",")[1];
  cidade.classList.add('card-posicao');

  card.appendChild(cidade);
  card.appendChild(imagem);
  card.appendChild(nome);

  return card;
}

const cardsContainerF = document.getElementById('cards-container-f');

const cardsContainerM = document.getElementById('cards-container-m');

jogadorasFemininas.forEach(function(jogadora) {
    const card = criarCard(jogadora);
    cardsContainerF.appendChild(card);
  });

jogadoresMasculinos.forEach(function(jogador) {
  const card = criarCard(jogador);
  cardsContainerM.appendChild(card);
});


window.addEventListener('DOMContentLoaded', (event) => {
  var audio = document.getElementById('meuAudio');
  audio.play();
});
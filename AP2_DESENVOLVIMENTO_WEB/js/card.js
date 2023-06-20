// variável dos jogadores masculinos
const jogadoresMasculinos = jogadores.filter(jogador => jogador.elenco === 'masculino');

// variável das jogadoras femininas
const jogadorasFemininas = jogadores.filter(jogador => jogador.elenco === 'feminino');

// função para carregar na sessionStorage todas as informações do(a) jogador(a) clicado
const manipula_click = (evento) => {
  let audio = new Audio("sons/botafogo-radio-globo.mp3");
  audio.play();
  console.log("BOTAFOGO")
  const clicada = evento.target;
  sessionStorage.setItem('nomecomp', clicada.dataset.nomecomp);
  window.location.href = 'detalhes.html';
}

// função para criar cards 
function criarCard(jogador) {
  // variável 'card' sendo uma <div> onde serão colocadas a posição, imagem e nome do(a) jogador(a)
  const card = document.createElement('div');
  // adiciona a classe 'card' para estilização da div pelo css
  card.classList.add('card');

  // variável 'imagem' sendo uma <img> que recebe src, alt e a classe 'card-img' 
  const imagem = document.createElement('img');
  imagem.src = jogador.imagem;
  imagem.alt = jogador.nome;
  imagem.classList.add('card-img');

  // chamar a função manipula_click quando a <img> for clicada e gravar os atributos do(a) jogador(a) com o .dataset
  imagem.onclick = manipula_click;
  imagem.dataset.nomecomp = jogador.nome_completo;

  // variável 'nome' sendo um <h3> e classe 'card-title'
  const nome = document.createElement('h3');
  nome.textContent = jogador.nome;
  nome.classList.add('card-title');

  // variável 'posicao' sendo um <h3> e classe 'card-posicao'
  const cidade = document.createElement('h3');
  cidade.textContent = jogador.nascimento.split(",")[1];
  cidade.classList.add('card-posicao');

  // adicionando posição, imagem e nome como elementos filhos em relação ao card
  card.appendChild(cidade);
  card.appendChild(imagem);
  card.appendChild(nome);

  // função retorna um card por vez, depois eles serão exibidos conforme o div container
  return card;
}

//  variável do container dos cards femininos
const cardsContainerFeminino = document.getElementById('cards-container-feminino');

// variável do container dos cards masculinos
const cardsContainerMasculino = document.getElementById('cards-container-masculino');

// iterar sobre as jogadoras femininas, criar os cards e adicionar no container dos cards femininos
jogadorasFemininas.forEach(function(jogadora) {
    const card = criarCard(jogadora);
    cardsContainerFeminino.appendChild(card);
  });

// iterar sobre os jogadores masculinos, criar os cards e adicionar no container dos cards masculinos
jogadoresMasculinos.forEach(function(jogador) {
  const card = criarCard(jogador);
  cardsContainerMasculino.appendChild(card);
});


window.addEventListener('DOMContentLoaded', (event) => {
  var audio = document.getElementById('meuAudio');
  audio.play();
});
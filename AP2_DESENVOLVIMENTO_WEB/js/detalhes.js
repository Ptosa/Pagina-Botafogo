
// guarda cada atributo numa variável correspondente de acordo com os dados da sessionStorage
const nomecomp = sessionStorage.getItem('nomecomp');
let jogadordetalhes = jogadores.find(jogador => jogador.nome_completo == nomecomp);
console.log(nomecomp)
console.log(jogadordetalhes)
// joga os dados para a página .html a partir de cada id
document.getElementById('nome').textContent = jogadordetalhes.nome;
document.getElementById('posicao').textContent = jogadordetalhes.posicao;
document.getElementById('descricao').textContent = jogadordetalhes.descricao;
document.getElementById('nomecomp').textContent = jogadordetalhes.nome_completo.toUpperCase();
document.getElementById('nascimento').innerText = jogadordetalhes.nascimento;
document.getElementById('altura').textContent = jogadordetalhes.altura;
document.getElementById('imagem').src = jogadordetalhes.imagem;


// título da página de detalhes personalizado de acordo com elenco
const tituloDetalhesElement = document.getElementById('tituloPrincipal');

if (jogadoresdetalhe.elenco === 'masculino') {
  tituloDetalhesElement.textContent = 'Detalhes do Jogador';
} else if (jogadoredetalhe.elenco === 'feminino') {
    console.log(elenco);
  tituloDetalhesElement.textContent = 'Detalhes da Jogadora';
};
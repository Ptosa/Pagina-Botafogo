const jogadores = [
    // Função para carregar e processar o arquivo JSON
    function carregarDados() {
        fetch('C:\Users\202203798936\Desktop\AP2_DESENVOLVIMENTO_WEB\js\jogadores2023.js')
        .then(response => response.json())
        .then(data => {
            // Atribuir os dados do arquivo JSON à constante 'jogadores'
            jogadores = data;
            
            // Chamar a função para criar os cards
            criarCards();
        })
        .catch(error => {
            console.error('Erro ao carregar o arquivo JSON:', error);
        });
    }  
];
    // Função para criar os cards
    function criarCards() {
        const container = document.getElementById("card-container");
    
        jogadores.forEach(jogador => {
        const card = document.createElement("div");
        card.className = "card";
    
        const imagem = document.createElement("img");
        imagem.src = jogador.imagem;
        imagem.alt = jogador.nome_completo;
    
        const nome = document.createElement("h2");
        nome.textContent = jogador.nome;
    
        const posicao = document.createElement("p");
        posicao.textContent = `Posição: ${jogador.posicao}`;
    
        const descricao = document.createElement("p");
        descricao.textContent = jogador.descricao;
    
        const nascimento = document.createElement("p");
        nascimento.textContent = `Nascimento: ${jogador.nascimento}`;
    
        const altura = document.createElement("p");
        altura.textContent = `Altura: ${jogador.altura}`;
    
        card.appendChild(imagem);
        card.appendChild(nome);
        card.appendChild(posicao);
        card.appendChild(descricao);
        card.appendChild(nascimento);
        card.appendChild(altura);
    
        container.appendChild(card);
        });
    }
    
    // Carrega o arquivo JSON
    fetch('..\js\jogadores2023.js')
        .then(response => response.json())
        .then(data => {
        jogadores = data;
        criarCards();
        })
        .catch(error => {
        console.error('Erro ao carregar o arquivo JSON:', error);
        });
  
  // Chama a função para criar os cards ao carregar a página
  window.addEventListener("load", criarCards);
// Chama a função para carregar os dados e criar os cards ao carregar a página
window.addEventListener('load', carregarDados);
  
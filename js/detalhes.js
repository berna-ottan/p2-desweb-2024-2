async function fetchData() {
    var params = new URLSearchParams(window.location.search);

    var id = params.get('id');

        const res = await fetch('https://botafogo-atletas.mange.li/2024-1/' + id);
        const data = await res.json()
        if (data.id){
            criarjogador(data)
        }
        else{
            document.getElementById('content').innerHTML = '<p> Jogador nao encontrado </p>'
        }
}
document.getElementById('voltar').onclick = () => {
    window.history.back();
}
const criarjogador = (jogador) => {
    const nome = document.getElementById('nome');
    nome.textContent = jogador.nome;

    const imagem = document.getElementById('imagem');
    imagem.src = jogador.imagem;
    
    const elenco = document.getElementById('elenco');
    elenco.textContent = `Elenco: ${jogador.elenco}`;
    
    const n_jogos = document.getElementById('n_jogos');
    n_jogos.textContent = `Numero total de jogos: ${jogador.n_jogos}`;

    const posicao = document.getElementById('posicao');
    posicao.textContent = `Posicao: ${jogador.posicao}`;

    const naturalidade = document.getElementById('naturalidade');
    naturalidade.textContent = `Naturalidade: ${jogador.naturalidade}`;

    const nascimento = document.getElementById('nascimento');
    nascimento.textContent = `Nascimento: ${jogador.nascimento}`;

    const altura = document.getElementById('altura');
    altura.textContent = `Altura: ${jogador.altura || 'Não disponível'}`;

    const no_botafogo_desde_atleta = document.getElementById('no_botafogo_desde');
    no_botafogo_desde_atleta.textContent = `No Botafogo desde: ${jogador.no_botafogo_desde}`;

    const detalhes = document.getElementById('detalhes');
    detalhes.textContent = `Detalhes: ${jogador.detalhes}`;

    const url_detalhes_atleta = document.getElementById('detalhe_url');
    url_detalhes_atleta.href = jogador.url_detalhes;
    url_detalhes_atleta.textContent = 'Mais detalhes na pagina do botafogo..';
};

fetchData()

fetchData()
    .catch(error => console.error(error))
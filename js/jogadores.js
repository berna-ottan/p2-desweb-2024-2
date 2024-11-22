const cards = document.getElementById("cards")
var jogadores = []

const buttonM = document.getElementById("masculino")
console.log(buttonM)
buttonM.onclick = () => {
    buscar_jogadores("https://botafogo-atletas.mange.li/2024-1/masculino")
}
const buttonF = document.getElementById("feminino")
buttonF.onclick = () => {
    buscar_jogadores("https://botafogo-atletas.mange.li/2024-1/feminino")
}
const buttonC = document.getElementById("completo")
buttonC.onclick = () => {
    buscar_jogadores("https://botafogo-atletas.mange.li/2024-1/all")
}
const sair = document.getElementById("sair")
sair.onclick = () => {
    window.location.href = "/index.html"
}
function atualizar_jogadores(jogadores){
    cards.innerHTML = ""
    jogadores.forEach((jogador) => {
        cardjogador(jogador, cards)
 })
}
const pesquisa = document.getElementById("pesquisa")
pesquisa.oninput = () => {
    const valor = pesquisa.value
    const jodadoresFiltrados = jodadores.filter(jogador => jogador.nome.toLowerCase().includes(valor.toLowerCase()))
    atualizar_jogadores(jodadoresFiltrados)
}
async function fetchData(url) {
    try{
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch (error) {
        throw Error(error)
    }
}
async function buscar_jogadores(url){
    jogadores = await fetchData(url)
    cards.innerHTML = ""
    jogadores.forEach((jogador) => {
        cardjogador(jogador, cards)
    })
}
function cardjogador(jogador, target) {
    const container = document.createElement("div")
    container.className = "card"
    container.addEventListener("click", () =>{
    window.location.href = "/p2-desweb-2024-2/detalhes/detalhes.html?id=" + jogador.id
    })
    const nome = document.createElement("h1")
    nome.innerHTML = jogador.nome

    const imagem = document.createElement("img")
    imagem.src = jogador.imagem

    const posicao = document.createElement("h1")
    posicao.innerHTML = jogador.posicao

    const mais = document.createElement("a")
    mais.href = '/p2-desweb-2024-2/detalhes/detalhes.html?id=' + jogador.id
    mais.textContent = 'Informações Completas'

    container.appendChild(nome)
    container.appendChild(imagem)
    container.appendChild(posicao)
    container.appendChild(mais)

    target.appendChild(container)
}
buscar_jogadores("https://botafogo-atletas.mange.li/2024-1/all")
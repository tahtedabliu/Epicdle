const personagens=[
//guerra de troia
{nome:"Odysseus",status:"vivo",especie:"humano",genero:"masculino",pseudonimo:"Rei, Warrior of the Mind, Monster, Just a Man, Kinda Funny, Loyal Husband",saga:"Troy ",imagemTentativa:"imagens/odysseus.png",imagemVitoria:"imagens/odysseus-vitoria.png"},
{nome:"Diomedes",status:"vivo",especie:"humano",genero:"masculino",pseudonimo:"Rei, Warrior of the Mind",saga:"Troy ",imagemTentativa:"imagens/diomedes.png",imagemVitoria:"imagens/diomedes-vitoria.png"},
{nome:"Menelau",status:"vivo",especie:"humano",genero:"masculino",pseudonimo:"Rei",saga:"Troy ",imagemTentativa:"imagens/menelau.png",imagemVitoria:"imagens/menelau-vitoria.png"},
{nome:"Agamenon",status:"morto",especie:"humano",genero:"masculino",pseudonimo:"Rei, General, Disloyal Husband",saga:"Troy ",imagemTentativa:"imagens/agamenom.png",imagemVitoria:"imagens/agamenom-vitoria.png"},
{nome:"Aquiles",status:"morto",especie:"semideus",genero:"masculino",pseudonimo:"Rei, herói",saga:"Troy ",imagemTentativa:"imagens/aquiles.png",imagemVitoria:"imagens/aquiles-vitoria.png"},
{nome:"Pátroclo",status:"morto",especie:"humano",genero:"masculino",pseudonimo:"Soldado",saga:"Troy ",imagemTentativa:"imagens/pátroclo.png",imagemVitoria:"imagens/pátroclo-vitoria.png"},
{nome:"Hector",status:"morto",especie:"humano",genero:"masculino",pseudonimo:"Rei, herói",saga:"Troy ",imagemTentativa:"imagens/hector.png",imagemVitoria:"imagens/hector-vitoria.png"},
{nome:"Ájax",status:"morto",especie:"humano",genero:"masculino",pseudonimo:"Soldado",saga:"Troy ",imagemTentativa:"imagens/ájax.png",imagemVitoria:"imagens/ájax-vitoria.png"},

 //tripulação 
{nome:"Polites",status:"morto",especie:"humano",genero:"masculino",pseudonimo:"Marinheiro, panqueca",saga:"Troy ",imagemTentativa:"imagens/polites.png",imagemVitoria:"imagens/polites-vitoria.png"},
{nome:"Eurylochus",status:"morto",especie:"humano",genero:"masculino",pseudonimo:"Segundo comandante",saga:"Troy ",imagemTentativa:"imagens/eurylochus.png",imagemVitoria:"imagens/eurylochus-vitoria.png"},
{nome:"Elpenor",status:"morto",especie:"humano",genero:"masculino",pseudonimo:"Marinheiro azarado",saga:"Ocean ",imagemTentativa:"imagens/elpenor.png",imagemVitoria:"imagens/elpenor-vitoria.png"},
{nome:"Perimedes",status:"morto",especie:"humano",genero:"masculino",pseudonimo:"Guerreiro de Ítaca",saga:"Ocean ",imagemTentativa:"imagens/perimedes.png",imagemVitoria:"imagens/perimedes-vitoria.png"},

//deuses
{nome:"Athena",status:"vivo",especie:"deus",genero:"feminino",pseudonimo:"Deusa da Sabedoria",saga:"Troy",imagemTentativa:"imagens/athena.png",imagemVitoria:"imagens/athena-vitoria.png"},
{nome:"Poseidon",status:"vivo",especie:"deus",genero:"masculino",pseudonimo:"Deus do Mar",saga:"Ocean",imagemTentativa:"imagens/poseidon.png",imagemVitoria:"imagens/poseidon-vitoria.png"},
{nome:"Zeus",status:"vivo",especie:"deus",genero:"masculino",pseudonimo:"Rei, Disloyal Husband",saga:"Troy",imagemTentativa:"imagens/zeus.png",imagemVitoria:"imagens/zeus-vitoria.png"},
{nome:"Hermes",status:"vivo",especie:"deus",genero:"masculino",pseudonimo:"Mensageiro dos Deuses",saga:"Circe",imagemTentativa:"imagens/hermes.png",imagemVitoria:"imagens/hermes-vitoria.png"},
{nome:"Aeolus",status:"vivo",especie:"deus",genero:"masculino",pseudonimo:"Deus dos Ventos",saga:"Ocean",imagemTentativa:"imagens/aeolus.png",imagemVitoria:"imagens/aeolus-vitoria.png"},
{nome:"Apolo",status:"vivo",especie:"deus",genero:"masculino",pseudonimo:"Deus do Sol",saga:"Wisdom",imagemTentativa:"imagens/apolo.png",imagemVitoria:"imagens/apolo-vitoria.png"},
{nome:"Ares",status:"vivo",especie:"deus",genero:"masculino",pseudonimo:"Deus da Guerra",saga:"Wisdom ",imagemTentativa:"imagens/ares.png",imagemVitoria:"imagens/ares-vitoria.png"},
{nome:"Hefesto",status:"vivo",especie:"deus",genero:"masculino",pseudonimo:"Deus do Fogo",saga:"Wisdom ",imagemTentativa:"imagens/hefesto.png",imagemVitoria:"imagens/hefesto-vitoria.png"},
{nome:"Afrodite",status:"vivo",especie:"deus",genero:"feminino",pseudonimo:"Deusa do Amor",saga:"Wisdom ",imagemTentativa:"imagens/afodite.png",imagemVitoria:"imagens/afrodite-vitoria.png"},
{nome:"Hera",status:"vivo",especie:"deus",genero:"feminino",pseudonimo:"Deusa do Casamento",saga:"Wisdom ",imagemTentativa:"imagens/hera.png",imagemVitoria:"imagens/hera-vitoria.png"},
{nome:"Circe",status:"vivo",especie:"deus",genero:"feminino",pseudonimo:"Feiticeira de Aeaea",saga:"Circe",imagemTentativa:"imagens/circe.png",imagemVitoria:"imagens/circe-vitoria.png"},
{nome:"Calypso",status:"vivo",especie:"deus",genero:"feminino",pseudonimo:"Ninfa de Ogígia",saga:"Wisdom",imagemTentativa:"imagens/calypso.png",imagemVitoria:"imagens/calypso-vitoria.png"},

//monstros  
{nome:"Polyphemus",status:"vivo",especie:"monstro",genero:"masculino",pseudonimo:"Ciclope",saga:"Cyclops",imagemTentativa:"imagens/polyphemus.png",imagemVitoria:"imagens/polyphemus-vitoria.png"},
{nome:"Scylla",status:"vivo",especie:"monstro",genero:"feminino",pseudonimo:"Hydra",saga:"Thunder",imagemTentativa:"imagens/scylla.png",imagemVitoria:"imagens/scylla-vitoria.png"},
{nome:"Charybdis",status:"vivo",especie:"monstro",genero:"feminino",pseudonimo:"Redemoinho Vivo",saga:"Thunder",imagemTentativa:"imagens/charybdis.png",imagemVitoria:"imagens/charybdis-vitoria.png"},
{nome:"Sirens",status:"vivo",especie:"monstro",genero:"feminino",pseudonimo:"Cantoras do Mar",saga:"Ocean",imagemTentativa:"imagens/sirens.png",imagemVitoria:"imagens/sirens-vitoria.png"},
{nome:"Laestrygonians",status:"vivo",especie:"monstro",genero:"indefinido",pseudonimo:"Gigantes",saga:"Ocean",imagemTentativa:"imagens/laestrygonians.png",imagemVitoria:"imagens/laestrygonians-vitoria.png"},
{nome:"Winions",status:"vivo",especie:"monstro",genero:"indefinido",pseudonimo:"Comedores de lotus",saga:"Troy",imagemTentativa:"imagens/winions.png",imagemVitoria:"imagens/winions-vitoria.png"},


//outros
{nome:"Tiresias",status:"morto",especie:"humano",genero:"masculino",pseudonimo:"Profeta",saga:"Underworld",imagemTentativa:"imagens/tiresias.png",imagemVitoria:"imagens/tiresias-vitoria.png"},
{nome:"Anticlea",status:"morto",especie:"humano",genero:"feminino",pseudonimo:"Rainha, Mãe de Odysseus",saga:"Underworld",imagemTentativa:"imagens/anticlea.png",imagemVitoria:"imagens/anticlea-vitoria.png"},

//ithaca  
{nome:"Penelope",status:"vivo",especie:"humano",genero:"feminino",pseudonimo:"Rainha, Loyal Wife",saga:"Ithaca",imagemTentativa:"imagens/penelope.png",imagemVitoria:"imagens/penelope-vitoria.png"},
{nome:"Telemachus",status:"vivo",especie:"humano",genero:"masculino",pseudonimo:"Príncipe, Warrior of the Mind, Little Wolf",saga:"Wisdom",imagemTentativa:"imagens/telemachus.png",imagemVitoria:"imagens/telemachus-vitoria.png"},
{nome:"Argos",status:"vivo",especie:"Cachorro",genero:"masculino",pseudonimo:"Cachorro do Rei",saga:"",imagemTentativa:"imagens/argos.png",imagemVitoria:"imagens/argos-vitoria.png"},
{nome:"Antinous",status:"morto",especie:"humano",genero:"masculino",pseudonimo:"Líder dos pretendentes",saga:"Ithaca ",imagemTentativa:"imagens/antinous.png",imagemVitoria:"imagens/antinous-vitoria.png"},
{nome:"Eurymachus",status:"morto",especie:"humano",genero:"masculino",pseudonimo:"Pretendente",saga:"Ithaca ",imagemTentativa:"imagens/eurymachus.png",imagemVitoria:"imagens/eurymachus-vitoria.png"},
{nome:"Amphinomus",status:"morto",especie:"humano",genero:"masculino",pseudonimo:"Pretendente",saga:"Ithaca ",imagemTentativa:"imagens/amphinomus.png",imagemVitoria:"imagens/amphinomus-vitoria.png"},

//fim
{nome:"Scamandrius",status:"morto",especie:"humano",genero:"masculino",pseudonimo:"Príncipe, Astyanax",saga:"Troy",imagemTentativa:"imagens/scamandrius.png",imagemVitoria:"imagens/scamandrius-vitoria.png"},

]

// ================= ORDEM ALFABETICA =================
personagens.sort((a,b)=>
a.nome.localeCompare(b.nome, "pt", {sensitivity:"base"})
)

// ================= CHAVE DO DIA =================
const chaveJogo = "epicdle-" + new Date().toISOString().slice(0,10)

// ================= PERSONAGEM DO DIA =================
function personagemDoDia(){
let hoje=new Date()
let numero=hoje.getFullYear()*10000+(hoje.getMonth()+1)*100+hoje.getDate()
return personagens[numero%personagens.length]
}

// ================= VARIÁVEIS =================
let resposta = personagemDoDia()
let tentativas = 0
let usados = []
let jogoFinalizado = false
let selecionadoIndex = -1
let sugestoesAtuais = []

// ================= ELEMENTOS =================
let input = document.getElementById("guess")
let imagem = document.getElementById("imagem")

imagem.src = resposta.imagemTentativa
imagem.style.filter = "brightness(0)"

// ================= EVENTOS =================
input.addEventListener("input", mostrarSugestoes)

input.addEventListener("keydown",function(e){

let itens=document.querySelectorAll("#sugestoes div")

if(e.key==="ArrowDown"){
selecionadoIndex++
if(selecionadoIndex>=itens.length)selecionadoIndex=0
atualizarSelecao(itens)
return
}

if(e.key==="ArrowUp"){
selecionadoIndex--
if(selecionadoIndex<0)selecionadoIndex=itens.length-1
atualizarSelecao(itens)
return
}

if(e.key==="Enter"){

if(selecionadoIndex>=0){
input.value=sugestoesAtuais[selecionadoIndex].nome
}

verificar()
}

})

// ================= MENSAGEM =================
function mostrarMensagem(msg){
document.getElementById("mensagem").innerText=msg
}

// ================= SUGESTÕES =================
function mostrarSugestoes(){

let texto=input.value.toLowerCase()

let lista=personagens.filter(p=>
p.nome.toLowerCase().includes(texto)
)

sugestoesAtuais=lista

let div=document.getElementById("sugestoes")
div.innerHTML=""

lista.forEach((p,index)=>{

let item=document.createElement("div")
item.innerText=p.nome

item.onclick=()=>{
input.value=p.nome
limparSugestoes()
}

div.appendChild(item)

})

}

function atualizarSelecao(itens){
itens.forEach(i=>i.classList.remove("selecionado"))
if(itens[selecionadoIndex]){
itens[selecionadoIndex].classList.add("selecionado")
}
}

function limparSugestoes(){
document.getElementById("sugestoes").innerHTML=""
selecionadoIndex=-1
}

// ================= VERIFICAR =================
function verificar(){

if(jogoFinalizado){
mostrarMensagem("O jogo já terminou!")
return
}

let nome=input.value.trim()

let tentativa=personagens.find(p=>
p.nome.toLowerCase()===nome.toLowerCase()
)

if(!tentativa){
mostrarMensagem("Personagem não encontrado")
return
}

if(usados.includes(tentativa.nome)){
mostrarMensagem("Você já tentou esse personagem!")
return
}

usados.push(tentativa.nome)
tentativas++

document.getElementById("tentativas").innerText="Tentativas: "+tentativas

let linha=document.getElementById("tabela").insertRow()
comparar(linha,tentativa)

input.value=""
limparSugestoes()

if(tentativa.nome===resposta.nome){
mostrarVitoria()
}

salvarProgresso()

}

// ================= COMPARAÇÃO =================
function comparar(linha,tentativa){

// imagem tentativa
let celulaImagem = linha.insertCell()

let img = document.createElement("img")
img.src = tentativa.imagemTentativa

img.onerror = () => {
img.src = "https://via.placeholder.com/50?text=?"
}

img.style.width = "50px"
img.style.borderRadius = "6px"

celulaImagem.appendChild(img)

// campos
let campos=["nome","status","especie","genero","pseudonimo","saga"]

campos.forEach(campo=>{

let celula=linha.insertCell()
celula.innerText=tentativa[campo]
celula.classList.add("flip")

let valorResposta = resposta[campo].toLowerCase().trim()
let valorTentativa = tentativa[campo].toLowerCase().trim()

if(valorTentativa === valorResposta){
celula.classList.add("verde")
}else{

let listaResposta = valorResposta.split(",").map(v => v.trim())
let listaTentativa = valorTentativa.split(",").map(v => v.trim())

let temParcial = listaTentativa.some(item =>
listaResposta.includes(item)
)

if(temParcial){
celula.classList.add("amarelo")
}else{
celula.classList.add("vermelho")
}

}

})

}

// ================= VITÓRIA =================
function mostrarVitoria(){

jogoFinalizado=true

document.getElementById("vitoria").style.display="block"

let imgVitoria = document.getElementById("imagemVitoria")
imgVitoria.src = resposta.imagemVitoria

imgVitoria.onerror = () => {
imgVitoria.src = resposta.imagemTentativa
}

document.getElementById("nomeVitoria").innerText=resposta.nome
document.getElementById("pseudoVitoria").innerText=resposta.pseudonimo

imagem.style.filter = "brightness(1)"

// bloqueia input
input.disabled = true

mostrarMensagem("Parabéns! Você acertou!")

}

// ================= SALVAR =================
function salvarProgresso(){

let dados = {
tentativas,
usados,
jogoFinalizado,
linhas: []
}

let linhas = document.querySelectorAll("#tabela tr")

linhas.forEach((linha,i)=>{
if(i===0) return

let celulas = []
linha.querySelectorAll("td").forEach(c=>{
celulas.push({
texto: c.innerText,
classe: c.className
})
})

dados.linhas.push(celulas)
})

localStorage.setItem(chaveJogo, JSON.stringify(dados))

}

// ================= CARREGAR =================
function carregarProgresso(){

let dados = localStorage.getItem(chaveJogo)

if(!dados) return

dados = JSON.parse(dados)

tentativas = dados.tentativas
usados = dados.usados
jogoFinalizado = dados.jogoFinalizado

document.getElementById("tentativas").innerText = "Tentativas: " + tentativas

dados.linhas.forEach(linhaSalva => {

let linha = document.getElementById("tabela").insertRow()

linhaSalva.forEach(celulaSalva => {

let celula = linha.insertCell()
celula.innerText = celulaSalva.texto
celula.className = celulaSalva.classe

})

})

// se já ganhou
if(jogoFinalizado){
mostrarVitoria()
}

}

// ================= COMPARTILHAR =================
function compartilhar(){

let linhas=document.querySelectorAll("#tabela tr")

let texto="EPICdle "+tentativas+" tentativas\n\n"

linhas.forEach((linha,i)=>{

if(i==0)return

linha.querySelectorAll("td").forEach(c=>{

if(c.classList.contains("verde")) texto+="🟩"
else if(c.classList.contains("amarelo")) texto+="🟨"
else texto+="🟥"

})

texto+="\n"

})

navigator.clipboard.writeText(texto)
mostrarMensagem("Resultado copiado!")

}

// ================= TIMER =================
function atualizarTimer(){

let agora=new Date()
let meiaNoite=new Date()
meiaNoite.setHours(24,0,0,0)

let diff=meiaNoite-agora

let h=Math.floor(diff/1000/60/60)
let m=Math.floor(diff/1000/60)%60
let s=Math.floor(diff/1000)%60

document.getElementById("timer").innerText=
"Próximo personagem em "+h+"h "+m+"m "+s+"s"

}

setInterval(atualizarTimer,1000)

// ================= INICIAR =================
carregarProgresso()

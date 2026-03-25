

// ================= UTIL =================
function getDataLocal(){
const hoje = new Date()
return hoje.toISOString().split("T")[0]
}

function normalizar(txt){
return txt.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"")
}

// ================= STREAK =================
function atualizarStreak(){

let dados = JSON.parse(localStorage.getItem("streak")) || {
dias:0,
ultima:null
}

let hoje = getDataLocal()

if(dados.ultima !== hoje){
dados.dias++
dados.ultima = hoje
localStorage.setItem("streak", JSON.stringify(dados))
}

let el = document.getElementById("streak")
if(el) el.innerText = "🔥 Streak: " + dados.dias
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

let el = document.getElementById("timer")
if(el){
el.innerText=`Próximo desafio em ${h}h ${m}m ${s}s`
}
}

setInterval(atualizarTimer,1000)

// ================= COMPARTILHAR =================
function copiarTexto(texto){
navigator.clipboard.writeText(texto)
.then(()=>alert("Copiado!"))
.catch(()=>alert("Erro ao copiar"))
}

// ================= PERSONAGENS =================
const personagens=[

// ===== GUERRA DE TROIA =====
{nome:"Odysseus",status:"vivo",especie:"humano",genero:"masculino",pseudonimo:"Rei, Warrior of the Mind, Monster, Just a Man, Loyal Husband",saga:"Troy",imagemTentativa:"imagens/odysseus.png",imagemVitoria:"imagens/odysseus-vitoria.png"},
{nome:"Diomedes",status:"vivo",especie:"humano",genero:"masculino",pseudonimo:"Rei, Guerreiro",saga:"Troy",imagemTentativa:"imagens/diomedes.png",imagemVitoria:"imagens/diomedes-vitoria.png"},
{nome:"Menelaus",status:"vivo",especie:"humano",genero:"masculino",pseudonimo:"Rei",saga:"Troy",imagemTentativa:"imagens/menelau.png",imagemVitoria:"imagens/menelau-vitoria.png"},
{nome:"Agamemnon",status:"morto",especie:"humano",genero:"masculino",pseudonimo:"Rei, General, Disloyal Husband",saga:"Troy",imagemTentativa:"imagens/agamenom.png",imagemVitoria:"imagens/agamenom-vitoria.png"},
{nome:"Achilles",status:"morto",especie:"semideus",genero:"masculino",pseudonimo:"Herói Invencível",saga:"Troy",imagemTentativa:"imagens/aquiles.png",imagemVitoria:"imagens/aquiles-vitoria.png"},
{nome:"Patroclus",status:"morto",especie:"humano",genero:"masculino",pseudonimo:"Companheiro de Achilles",saga:"Troy",imagemTentativa:"imagens/pátroclo.png",imagemVitoria:"imagens/pátroclo-vitoria.png"},
{nome:"Hector",status:"morto",especie:"humano",genero:"masculino",pseudonimo:"Príncipe de Troia",saga:"Troy",imagemTentativa:"imagens/hector.png",imagemVitoria:"imagens/hector-vitoria.png"},
{nome:"Ajax",status:"morto",especie:"humano",genero:"masculino",pseudonimo:"Grande Guerreiro",saga:"Troy",imagemTentativa:"imagens/ájax.png",imagemVitoria:"imagens/ájax-vitoria.png"},

// ===== TRIPULAÇÃO =====
{nome:"Polites",status:"morto",especie:"humano",genero:"masculino",pseudonimo:"Marinheiro, otimista",saga:"Troy",imagemTentativa:"imagens/polites.png",imagemVitoria:"imagens/polites-vitoria.png"},
{nome:"Eurylochus",status:"morto",especie:"humano",genero:"masculino",pseudonimo:"Segundo comandante",saga:"Troy",imagemTentativa:"imagens/eurylochus.png",imagemVitoria:"imagens/eurylochus-vitoria.png"},
{nome:"Elpenor",status:"morto",especie:"humano",genero:"masculino",pseudonimo:"Marinheiro azarado",saga:"Ocean",imagemTentativa:"imagens/elpenor.png",imagemVitoria:"imagens/elpenor-vitoria.png"},
{nome:"Perimedes",status:"morto",especie:"humano",genero:"masculino",pseudonimo:"Guerreiro de Ítaca",saga:"Ocean",imagemTentativa:"imagens/perimedes.png",imagemVitoria:"imagens/perimedes-vitoria.png"},

// ===== DEUSES =====
{nome:"Athena",status:"vivo",especie:"deus",genero:"feminino",pseudonimo:"Deusa da Sabedoria",saga:"Troy",imagemTentativa:"imagens/athena.png",imagemVitoria:"imagens/athena-vitoria.png"},
{nome:"Poseidon",status:"vivo",especie:"deus",genero:"masculino",pseudonimo:"Deus do Mar",saga:"Ocean",imagemTentativa:"imagens/poseidon.png",imagemVitoria:"imagens/poseidon-vitoria.png"},
{nome:"Zeus",status:"vivo",especie:"deus",genero:"masculino",pseudonimo:"Rei dos Deuses",saga:"Troy",imagemTentativa:"imagens/zeus.png",imagemVitoria:"imagens/zeus-vitoria.png"},
{nome:"Hermes",status:"vivo",especie:"deus",genero:"masculino",pseudonimo:"Mensageiro",saga:"Circe",imagemTentativa:"imagens/hermes.png",imagemVitoria:"imagens/hermes-vitoria.png"},
{nome:"Aeolus",status:"vivo",especie:"deus",genero:"masculino",pseudonimo:"Senhor dos Ventos",saga:"Ocean",imagemTentativa:"imagens/aeolus.png",imagemVitoria:"imagens/aeolus-vitoria.png"},
{nome:"Apollo",status:"vivo",especie:"deus",genero:"masculino",pseudonimo:"Deus do Sol",saga:"Wisdom",imagemTentativa:"imagens/apolo.png",imagemVitoria:"imagens/apolo-vitoria.png"},
{nome:"Ares",status:"vivo",especie:"deus",genero:"masculino",pseudonimo:"Deus da Guerra",saga:"Wisdom",imagemTentativa:"imagens/ares.png",imagemVitoria:"imagens/ares-vitoria.png"},
{nome:"Hephaestus",status:"vivo",especie:"deus",genero:"masculino",pseudonimo:"Deus da Forja",saga:"Wisdom",imagemTentativa:"imagens/hefesto.png",imagemVitoria:"imagens/hefesto-vitoria.png"},
{nome:"Aphrodite",status:"vivo",especie:"deus",genero:"feminino",pseudonimo:"Deusa do Amor",saga:"Wisdom",imagemTentativa:"imagens/afrodite.png",imagemVitoria:"imagens/afrodite-vitoria.png"},
{nome:"Hera",status:"vivo",especie:"deus",genero:"feminino",pseudonimo:"Deusa do Casamento",saga:"Wisdom",imagemTentativa:"imagens/hera.png",imagemVitoria:"imagens/hera-vitoria.png"},
{nome:"Circe",status:"vivo",especie:"deus",genero:"feminino",pseudonimo:"Feiticeira",saga:"Circe",imagemTentativa:"imagens/circe.png",imagemVitoria:"imagens/circe-vitoria.png"},
{nome:"Calypso",status:"vivo",especie:"deus",genero:"feminino",pseudonimo:"Ninfa",saga:"Wisdom",imagemTentativa:"imagens/calypso.png",imagemVitoria:"imagens/calypso-vitoria.png"},

// ===== MONSTROS =====
{nome:"Polyphemus",status:"vivo",especie:"monstro",genero:"masculino",pseudonimo:"Ciclope",saga:"Cyclops",imagemTentativa:"imagens/polyphemus.png",imagemVitoria:"imagens/polyphemus-vitoria.png"},
{nome:"Scylla",status:"vivo",especie:"monstro",genero:"feminino",pseudonimo:"Monstro Marinho",saga:"Thunder",imagemTentativa:"imagens/scylla.png",imagemVitoria:"imagens/scylla-vitoria.png"},
{nome:"Charybdis",status:"vivo",especie:"monstro",genero:"feminino",pseudonimo:"Redemoinho Vivo",saga:"Thunder",imagemTentativa:"imagens/charybdis.png",imagemVitoria:"imagens/charybdis-vitoria.png"},
{nome:"Sirens",status:"vivo",especie:"monstro",genero:"feminino",pseudonimo:"Cantoras do Mar",saga:"Ocean",imagemTentativa:"imagens/sirens.png",imagemVitoria:"imagens/sirens-vitoria.png"},
{nome:"Laestrygonians",status:"vivo",especie:"monstro",genero:"indefinido",pseudonimo:"Gigantes",saga:"Ocean",imagemTentativa:"imagens/laestrygonians.png",imagemVitoria:"imagens/laestrygonians-vitoria.png"},
{nome:"Lotus Eaters",status:"vivo",especie:"monstro",genero:"indefinido",pseudonimo:"Comedores de Lótus",saga:"Ocean",imagemTentativa:"imagens/winions.png",imagemVitoria:"imagens/winions-vitoria.png"},

// ===== OUTROS =====
{nome:"Tiresias",status:"morto",especie:"humano",genero:"masculino",pseudonimo:"Profeta",saga:"Underworld",imagemTentativa:"imagens/tiresias.png",imagemVitoria:"imagens/tiresias-vitoria.png"},
{nome:"Anticlea",status:"morto",especie:"humano",genero:"feminino",pseudonimo:"Mãe de Odysseus",saga:"Underworld",imagemTentativa:"imagens/anticlea.png",imagemVitoria:"imagens/anticlea-vitoria.png"},

// ===== ÍTACA =====
{nome:"Penelope",status:"vivo",especie:"humano",genero:"feminino",pseudonimo:"Rainha",saga:"Ithaca",imagemTentativa:"imagens/penelope.png",imagemVitoria:"imagens/penelope-vitoria.png"},
{nome:"Telemachus",status:"vivo",especie:"humano",genero:"masculino",pseudonimo:"Príncipe",saga:"Wisdom",imagemTentativa:"imagens/telemachus.png",imagemVitoria:"imagens/telemachus-vitoria.png"},
{nome:"Argos",status:"vivo",especie:"animal",genero:"masculino",pseudonimo:"Cachorro fiel",saga:"Ithaca",imagemTentativa:"imagens/argos.png",imagemVitoria:"imagens/argos-vitoria.png"},
{nome:"Antinous",status:"morto",especie:"humano",genero:"masculino",pseudonimo:"Pretendente",saga:"Ithaca",imagemTentativa:"imagens/antinous.png",imagemVitoria:"imagens/antinous-vitoria.png"},
{nome:"Eurymachus",status:"morto",especie:"humano",genero:"masculino",pseudonimo:"Pretendente",saga:"Ithaca",imagemTentativa:"imagens/eurymachus.png",imagemVitoria:"imagens/eurymachus-vitoria.png"},
{nome:"Amphinomus",status:"morto",especie:"humano",genero:"masculino",pseudonimo:"Pretendente",saga:"Ithaca",imagemTentativa:"imagens/amphinomus.png",imagemVitoria:"imagens/amphinomus-vitoria.png"},

// ===== FINAL =====
{nome:"Astyanax",status:"morto",especie:"humano",genero:"masculino",pseudonimo:"Príncipe de Troia",saga:"Troy",imagemTentativa:"imagens/scamandrius.png",imagemVitoria:"imagens/scamandrius-vitoria.png"},

]

// ================= PERSONAGEM DO DIA =================
function personagemDoDia(){
let hoje = parseInt(getDataLocal().replace(/-/g,""))
return personagens[hoje % personagens.length]
}

// ================= VARIÁVEIS PERSONAGEM =================
let resposta = personagemDoDia()
let tentativas = 0
let usados = []
let fim = false

// ================= INICIAR PERSONAGEM =================
function iniciarPersonagem(){

let save = JSON.parse(localStorage.getItem("personagem"))

if(save && save.data === getDataLocal()){
tentativas = save.tentativas
usados = save.usados
fim = save.fim
}

document.getElementById("tentativas").innerText =
"Tentativas: " + tentativas

}

// ================= VERIFICAR PERSONAGEM =================
function verificar(){

if(fim) return

let nome = document.getElementById("guess").value.trim()

let tentativa = personagens.find(p => normalizar(p.nome) === normalizar(nome))

if(!tentativa) return alert("Não encontrado")

if(usados.includes(tentativa.nome)) return alert("Já tentou")

usados.push(tentativa.nome)
tentativas++

let linha = document.getElementById("tabela").insertRow()
comparar(linha, tentativa)

if(tentativa.nome === resposta.nome){
fim = true
mostrarVitoriaPersonagem()
atualizarStreak()
}

salvarPersonagem()
}

// ================= COMPARAÇÃO =================
function comparar(linha,tentativa){

let campos=["nome","status","especie","genero","pseudonimo","saga"]

campos.forEach(campo=>{

let cel = linha.insertCell()
cel.innerText = tentativa[campo]

let r = normalizar(resposta[campo])
let t = normalizar(tentativa[campo])

if(t === r){
cel.classList.add("verde")
}else if(r.includes(t) || t.includes(r)){
cel.classList.add("amarelo")
}else{
cel.classList.add("vermelho")
}

})

}

// ================= VITÓRIA PERSONAGEM =================
function mostrarVitoriaPersonagem(){
alert("Acertou!")
}

// ================= SALVAR PERSONAGEM =================
function salvarPersonagem(){
localStorage.setItem("personagem", JSON.stringify({
data:getDataLocal(),
tentativas,
usados,
fim
}))
}

// ================= MÚSICAS =================
const musicas = [
{
nome:"Warrior of the Mind",
letra:`I am the one who leads
I am the one who fights
No one can stop me now`,
capa:"imagens/warrior.jpg",
saga:"Troy"
},
{
nome:"Just a Man",
letra:`I'm just a man
Trying to survive`,
capa:"imagens/justaman.jpg",
saga:"Troy"
}
]

// ================= MÚSICA DO DIA =================
function musicaDoDia(){
let hoje = parseInt(getDataLocal().replace(/-/g,""))
return musicas[hoje % musicas.length]
}

// ================= VARIÁVEIS MÚSICA =================
let respostaMusica = musicaDoDia()
let tentativasMusica = 0
let usadosMusica = []
let fimMusica = false

// ================= INICIAR MÚSICA =================
function iniciarMusica(){

let save = JSON.parse(localStorage.getItem("musica"))

if(save && save.data === getDataLocal()){
tentativasMusica = save.tentativas
usadosMusica = save.usados
fimMusica = save.fim
}

document.getElementById("tentativasMusica").innerText =
"Tentativas: " + tentativasMusica

atualizarTrecho()
}

// ================= TRECHO =================
function atualizarTrecho(){

let linhas = respostaMusica.letra.split("\n")

let qtd = 1
if(tentativasMusica>=2) qtd=2
if(tentativasMusica>=3) qtd=3

document.getElementById("trechoMusica").innerText =
linhas.slice(0,qtd).join("\n")
}

// ================= VERIFICAR MÚSICA =================
function verificarMusica(){

if(fimMusica) return

let nome = document.getElementById("guessMusica").value.trim()

let tentativa = musicas.find(m =>
normalizar(m.nome) === normalizar(nome)
)

if(!tentativa) return alert("Não encontrada")

if(usadosMusica.includes(tentativa.nome)) return alert("Já tentou")

usadosMusica.push(tentativa.nome)
tentativasMusica++

let linha = document.getElementById("tabelaMusica").insertRow()
linha.insertCell().innerText = tentativa.nome

if(tentativa.nome === respostaMusica.nome){
fimMusica = true
mostrarVitoriaMusica()
atualizarStreak()
}

if(tentativasMusica >= 5){
alert("Fim! " + respostaMusica.nome)
fimMusica = true
}

salvarMusica()
atualizarTrecho()
}

// ================= VITÓRIA MÚSICA =================
function mostrarVitoriaMusica(){
document.getElementById("resultadoMusica").style.display="block"
document.getElementById("nomeMusica").innerText = respostaMusica.nome
}

// ================= SALVAR MÚSICA =================
function salvarMusica(){
localStorage.setItem("musica", JSON.stringify({
data:getDataLocal(),
tentativas:tentativasMusica,
usados:usadosMusica,
fim:fimMusica
}))
}
// ================= MENU =================
function abrirModo(modo){

document.getElementById("menu").style.display = "none"

document.getElementById("personagem").style.display = "none"
document.getElementById("musica").style.display = "none"
document.getElementById("sobre").style.display = "none"

document.getElementById(modo).style.display = "block"

if(modo === "personagem") iniciarPersonagem()
if(modo === "musica") iniciarMusica()
}

function voltarMenu(){

document.getElementById("menu").style.display = "block"

document.getElementById("personagem").style.display = "none"
document.getElementById("musica").style.display = "none"
document.getElementById("sobre").style.display = "none"

}
// ================= INIT =================
atualizarTimer()
atualizarStreak()

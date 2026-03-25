// ================= ORDEM ALFABÉTICA =================
personagens.sort((a,b)=>
a.nome.localeCompare(b.nome, "pt", {sensitivity:"base"})
)
// ================= DATA LOCAL =================
function getDataLocal(){
const hoje = new Date()
const ano = hoje.getFullYear()
const mes = String(hoje.getMonth()+1).padStart(2,"0")
const dia = String(hoje.getDate()).padStart(2,"0")
return `${ano}-${mes}-${dia}`
}
const STORAGE_KEY = "epicdle-state"
let dataAtual = getDataLocal()
// ================= PERSONAGEM DO DIA =================
function personagemDoDia(){
let hoje = getDataLocal().replace(/-/g,"")
let numero = parseInt(hoje)
return personagens[numero % personagens.length]
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
let tentativa = personagens.find(p => p.nome === nome)
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
let celulaImagem = linha.insertCell()
let img = document.createElement("img")
img.src = tentativa.imagemTentativa
img.onerror = () => {
img.src = "https://via.placeholder.com/50?text=?"
}
img.style.width = "50px"
celulaImagem.appendChild(img)
let campos=["nome","status","especie","genero","pseudonimo","saga"]
campos.forEach((campo,index)=>{
let celula=linha.insertCell()
celula.innerText=tentativa[campo]
setTimeout(()=>{
celula.classList.add("flip")
}, index*150)
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
imgVitoria.src = resposta.imagemVitoria || resposta.imagemTentativa
document.getElementById("nomeVitoria").innerText=resposta.nome
document.getElementById("pseudoVitoria").innerText=resposta.pseudonimo
input.disabled = true
mostrarMensagem("🎉 Acertou!")
salvarProgresso()
}
// ================= COMPARTILHAR =================
function compartilhar(){
let linhas = document.querySelectorAll("#tabela tr")
let texto = "Acertei o personagem no epicdle em " + tentativas + " tentativas\n\n"
linhas.forEach((linha,i)=>{
if(i===0) return
linha.querySelectorAll("td").forEach(c=>{
if(c.classList.contains("verde")) texto+="🟩"
else if(c.classList.contains("amarelo")) texto+="🟨"
else texto+="🟥"
})
texto+="\n"
})
// 🔗 LINK DO JOGO
let link = window.location.href
texto += "\nJogue aqui: " + link
// ================= SHARE NATIVO (CELULAR) =================
if(navigator.share){
navigator.share({
title: "EPICdle",
text: texto
})
.then(()=>{
mostrarMensagem("Compartilhado! 🚀")
})
.catch(()=>{
copiarTexto(texto)
})
}else{
// ================= COPIAR =================
copiarTexto(texto)
}
}
// ================= FUNÇÃO COPIAR =================
function copiarTexto(texto){
if(navigator.clipboard && window.isSecureContext){
navigator.clipboard.writeText(texto)
.then(()=>{
mostrarMensagem("Resultado copiado! 📋")
})
.catch(()=>{
fallbackCopiar(texto)
})
}else{
fallbackCopiar(texto)
}
}
// ================= FALLBACK UNIVERSAL =================
function fallbackCopiar(texto){
let textarea = document.createElement("textarea")
textarea.value = texto
document.body.appendChild(textarea)
textarea.select()
textarea.setSelectionRange(0,99999)
try{
document.execCommand("copy")
mostrarMensagem("Resultado copiado! 📋")
}catch(err){
mostrarMensagem("Não foi possível copiar 😢")
}
document.body.removeChild(textarea)
}
// ================= SALVAR =================
function salvarProgresso(){
let dados = {
data: getDataLocal(),
tentativas,
usados,
jogoFinalizado,
respostaNome: resposta.nome,
linhas: []
}
let linhas = document.querySelectorAll("#tabela tr")
linhas.forEach((linha,i)=>{
if(i===0) return
let nomePersonagem = linha.cells[1].innerText
let celulas = []
linha.querySelectorAll("td").forEach(c=>{
celulas.push({
texto: c.innerText,
classe: c.className
})
})
dados.linhas.push({
nome: nomePersonagem,
celulas: celulas
})
})
localStorage.setItem(STORAGE_KEY, JSON.stringify(dados))
}
// ================= CARREGAR =================
function carregarProgresso(){
let dados = localStorage.getItem(STORAGE_KEY)
if(!dados){
atualizarTimer()
return
}
dados = JSON.parse(dados)
if(dados.data !== getDataLocal()){
localStorage.removeItem(STORAGE_KEY)
atualizarTimer()
return
}
tentativas = dados.tentativas
usados = dados.usados
jogoFinalizado = dados.jogoFinalizado
document.getElementById("tentativas").innerText = "Tentativas: " + tentativas
dados.linhas.forEach(linhaSalva => {
let tentativa = personagens.find(p => p.nome === linhaSalva.nome)
if(!tentativa) return
let linha = document.getElementById("tabela").insertRow()
let celulaImagem = linha.insertCell()
let img = document.createElement("img")
img.src = tentativa.imagemTentativa
img.onerror = () => {
img.src = "https://via.placeholder.com/50?text=?"
}
celulaImagem.appendChild(img)
linhaSalva.celulas.forEach((celulaSalva, index) => {
if(index === 0) return
let celula = linha.insertCell()
celula.innerText = celulaSalva.texto
celula.className = celulaSalva.classe
})
})
if(jogoFinalizado){
mostrarVitoria()
}
atualizarTimer()
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
el.innerText=`Próximo personagem em ${h}h ${m}m ${s}s`
}
}
atualizarTimer()
setInterval(atualizarTimer,1000)
// ================= RESET DIÁRIO =================
setInterval(()=>{
if(getDataLocal() !== dataAtual){
localStorage.removeItem(STORAGE_KEY)
location.reload()
}
},60000)
// ================= INICIAR =================
carregarProgresso()
input.focus()

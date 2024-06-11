//DOM

const blocoA = document.querySelector('#btA')
const blocoB = document.querySelector('#btB')
const blocoC = document.querySelector('#btC')
const blocoD = document.querySelector('#btD')
const blocoE = document.querySelector('#btE')
const blocoF = document.querySelector('#btF')
const blocoG = document.querySelector('#btG')
const blocoH = document.querySelector('#btH')
const blocoI = document.querySelector('#btI')
const blocoJ = document.querySelector('#btJ')
const blocoK = document.querySelector('#btK')
const blocoL = document.querySelector('#btL')
const blocoM = document.querySelector('#btM')
const blocoN = document.querySelector('#btN')
const tituloDesc = document.querySelector('#infoUm')
const descricao = document.querySelector('#infoDois')
const primeiraFoto = document.querySelector('#foto-1')
const segundaFoto = document.querySelector('#foto-2')
const terceiraFoto = document.querySelector('#foto-3')

// Eventos e Functions

blocoA.addEventListener ('click', primeiro)
blocoB.addEventListener ('click', segundo)

function primeiro() {
    tituloDesc.textContent = 'Bloco A - Setor de Gerência e Edificação'
    descricao.textContent = 'Localização: Em cima da praça de alimentação, basta subir as escadas'
    primeiraFoto.src = 'images/bloco_A.jpg'
    segundaFoto.src = 'images/bloco_AA.jpg'
}

function segundo() {
    tituloDesc.textContent = 'Bloco B - Laboratório de Informatica'
    descricao.textContent = 'Localização: Atrás do bloco A. Siga o caminho à direita do bloco A'
    primeiraFoto.src = 'images/bloco_B.jpg'
    segundaFoto.src = 'images/bloco_BB.jpg'
} 

blocoC.addEventListener ('click', terceiro)
blocoD.addEventListener ('click', quarto)

function terceiro() {
    tituloDesc.textContent = 'Bloco C - Laboratório de Gráfica'
    descricao.textContent = 'Localização: Lado esquerdo do bloco A '
    primeiraFoto.src = 'images/bloco_c.jpg'
    segundaFoto.src = ''
    terceiraFoto.src = ''
}

function quarto() {
    tituloDesc.textContent =' Bloco D - Laboratório de Automação'
    descricao.textContent = 'Localização: No primeiro estacionamento, em frente ao bloco C ' 
    primeiraFoto.src = 'images/bloco_d.jpg'
    segundaFoto.src = 'images/bloco_dd.jpg'
    terceiraFoto.src = ''
}

blocoE.addEventListener ('click', cinco)
blocoF.addEventListener ('click', sexto)

function cinco() {
    tituloDesc.textContent = `Bloco E - Setor Administrativo`
    descricao.textContent = `Localização: Onde fica o CAA, em frente ao bloco A, junto a portaria`
    primeiraFoto.src = 'images/bloco_e.jpg'
    segundaFoto.src = ''
    terceiraFoto.src = ''
}

function sexto() {
    tituloDesc.textContent = `Bloco F - Laboratório de Automação`
    descricao.textContent = `Localização: Lado esquerdo do bloco E` 
    primeiraFoto.src = 'images/bloco_f.jpg'
    segundaFoto.src = ''
    terceiraFoto.src = ''
}

blocoG.addEventListener ('click', sete)
blocoH.addEventListener ('click', oito)

//Funções

function sete() {
    tituloDesc.textContent = 'Bloco G - Laboratório de Eletrônica'
    descricao.textContent = 'Localização: Lado esquerdo do F, Em frente ao estacionamento de motos'
    primeiraFoto.src = 'images/bloco_g1.jpg'
    segundaFoto.src = 'images/bloco_g2.jpg'
    terceiraFoto.src = ''
}

function oito() {
    tituloDesc.textContent = 'Bloco H - Laboratório de Elétrica'
    descricao.textContent = 'Localização: Lado esquerdo do bloco G, junto das placas solares '
    primeiraFoto.src = 'images/bloco_h.jpg'
    segundaFoto.src = ''
    terceiraFoto.src = ''
}

blocoL.addEventListener ('click', decimoSeg)
blocoM.addEventListener ('click', decimoTer)
blocoN.addEventListener ('click', decimoQua)

function decimoSeg(){
    tituloDesc.textContent = 'Bloco L - Setor de Exposição'
    descricao.textContent = 'Localização: Lado esquerdo do bloco K'
    primeiraFoto.src = 'images/bloco_l.jpg'
    segundaFoto.src = ''
    terceiraFoto.src = ''
}

function decimoTer(){
    tituloDesc.textContent= 'Bloco M - Setor de Alimentos e Bebidas'
    descricao.textContent= 'Localização: Lado direito do bloco J, local que fica o refeitório e a biblioteca'
    primeiraFoto.src='images/bloco_m.jpg'
    segundaFoto.src=''
    terceiraFoto.src=''
}

function decimoQua(){
    tituloDesc.textContent= 'Bloco N - Laboratório de Construção Civil'
    descricao.textContent= 'Localização: Em frente ao bloco M, no segundo estacionamento'
    primeiraFoto.src='images/bloco_n.jpg'
    segundaFoto.src=''
    terceiraFoto.src=''
}
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

// Eventos

blocoE.addEventListener ('click', cinco)
blocoF.addEventListener ('click', sexto)

//Funções

function cinco() {
    tituloDesc.textContent = `Bloco E - Setor Administrativo`
    descricao.textContent = `Onde fica o CAA, em frente ao bloco A, junto a portaria`
    primeiraFoto.src = 'images/bloco_e.jpg'
    segundaFoto.src = ''
    terceiraFoto.src = ''
}

function sexto() {
    tituloDesc.textContent = `Bloco F - Laboratório de Automação`
    descricao.textContent = `Ao lado esquerdo do bloco E` 
    primeiraFoto.src = 'images/bloco_f.jpg'
    segundaFoto.src = ''
    terceiraFoto.src = ''
}
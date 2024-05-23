'use strict'
import {getGeneros, deleteGenero} from "../../js/filmes.js"
const listaGenero = await getGeneros()
const container = document.getElementById('container')

function criarGenero(info){
    const id = document.createElement('h1')
    id.classList.add('text-white','text-3xl')
    id.textContent = info.id


    const card = document.createElement('div')
    card.classList.add('w-1/2', 'mt-8', 'h-5/6', 'bg-amarelo', 'flex', 'flex-row', 'justify-around', 'items-center', 'gap-8')

    const genero = document.createElement('p')
     genero.textContent = info.genero
    genero.classList.add('text-white','text-3xl')

    const icones = document.createElement('div')
    icones.classList.add('text-white','text-3xl','flex','gap-4')

    const iconeEditar = document.createElement('i')
    iconeEditar.classList.add('bx','bxs-edit-alt','cursor-pointer', 'decoration-white')

    const iconeDeletar = document.createElement('i')
    iconeDeletar.classList.add('bx','bxs-trash','decoration-white','cursor-pointer')

    icones.replaceChildren(iconeEditar,iconeDeletar)
    card.replaceChildren(id, genero, icones)
    container.appendChild(card)

    iconeEditar.addEventListener('click',()=>{
        window.location.href='../screens/editarGenero.html?id=' + info.id
    })
    iconeDeletar.addEventListener('click',()=>{
        deleteGenero(info.id)
        window.location.reload()
    })
}
console.log(listaGenero);





listaGenero.forEach(generos => {
    criarGenero (generos)
});




function addGenero (){
    window.location.href = '../screens/cmsGenero.html'
}

const btnAdicionar = document.getElementById('add')
btnAdicionar.addEventListener('click', addGenero)

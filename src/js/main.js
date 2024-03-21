'use strict'

import {getFilmes, getFilme, postFilme, putFilme, deleteFilme} from "./filmes.js"

//console.table(await getFilme(1))


function criarCard(filme){
    const cardFilme = document.getElementById('cardFilme')
    const capaFilme = document.createElement('img')
    capaFilme.src = filme.foto_capa
    const card = document.createElement('div')
    const titulo = document.createElement('h2')
    const bgTexto = document.createElement('div')
    titulo.textContent = `${filme.nome}`
    
    bgTexto.classList.add(
        'bg-amarelo',
        'w-36',
        'rounded-md',
        'flex',
        'justify-center',
        'items-center'

    )
   
    card.classList.add(
        'flex',
        'flex-col',
        'gap-3.5'
    )

   titulo.classList.add(
    'text-600'
   )
    capaFilme.classList.add(
        'w-40',
        'h-60',
        'rounded-2xl',
        'border-solid',
        'border-4',
        'border-indigo-600',
        'border-amarelo'
    )
  
    bgTexto.append(titulo)
    card.append(capaFilme, bgTexto)
    cardFilme.append(card)
    return cardFilme
}

// function criarCard(filme){
    
//     const capaFilme = document.createElement('img')
//     capaFilme.src = filme.foto_capa
//     const card = document.createElement('div')
//     const titulo = document.createElement('h2')
//     titulo.textContent = `${filme.id} - ${filme.nome}`
//     const texto = document.createElement('textarea')
//     texto.textContent = filme.sinopse
   
//     capaFilme.classList.add(
//         'w-40',
//         'h-60',
//         'rounded-2xl'
//     )
//     card.append(capaFilme, titulo, texto)
//     return card
// }



async function preencherContainer (){

    const container = document.querySelector('body')

    const filmes = await getFilmes()

    filmes.forEach(filme => {
        const card = criarCard(filme)
        container.appendChild(card)
        console.log(card)
    });
}
preencherContainer()

/*const filme = {
    "id": "1",
    "nome": "Velozes e Furiosos",
    "sinopse": "Brian O'Conner é um policial que se infiltra no submundo dos rachas de rua para investigar uma série de furtos. Enquanto tenta ganhar o respeito e a confiança do líder Dom Toretto, ele corre o risco de ser desmascarado.",
    "duracao": "1:46:00",
    "data_lancamento": "2001-09-28",
    "data_relancamento": null,
    "foto_capa": "https://upload.wikimedia.org/wikipedia/pt/thumb/2/20/2_Fast_2_Furious_2003.jpg/230px-2_Fast_2_Furious_2003.jpg",
    "valor_unitario": 30.00
}*/

deleteFilme()
putFilme()
//postFilme (filme)
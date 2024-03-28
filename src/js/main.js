'use strict'

import {getFilmes, getFilme, postFilme, putFilme, deleteFilme} from "./filmes.js"

//console.table(await getFilme(1))


function criarCard(filme){
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
        'gap-3.5',
        'justify-center',
        'items-center'    )

   titulo.classList.add(
    'text-600',
    'items-center'
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
    return card
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

    const container = document.querySelector('#cardFilme')

    const filmes = await getFilmes()

    filmes.forEach(filme => {
        const card = criarCard(filme)
        container.appendChild(card)
        console.log(card)
    });
}
preencherContainer()

const filme = {

    "nome": "Procurando Nemo",
    "sinopse": "O passado reserva tristes memórias para Marlin nos recifes de coral, onde perdeu sua esposa e toda a ninhada. Agora, ele cria seu único filho Nemo com todo o cuidado do mundo, mas o pequeno e simpático peixe-palhaço acaba exagerando durante uma simples discussão e acaba sendo capturado por um mergulhador. Agora, o pai super protetor precisa entrar em ação e parte numa busca incansável pelo mar aberto, na esperança de encontrar seu amado filhote. No meio do caminho, ele acaba conhecendo Dory e, juntos, a dupla vai viver uma incrível aventura. Enquanto isso, Nemo também vive uma intensa experiência ao lado de seus novos amigos habitantes de um aquário, pois eles precisam ajudá-lo a escapar do destino que lhe foi reservado: ir parar nas mãos da terrível Darla, sobrinha do dentista que o capturou.",
    "duracao": "1:41:00",
    "data_lancamento": "2003-07-04",
    "data_relancamento": "2002-10-12",
    "foto_capa": "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/91/25/21/20154443.jpg",
    "valor_unitario": 15.00
}



deleteFilme()
putFilme()
//postFilme (filme)
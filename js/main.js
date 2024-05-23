'use strict'

import {getFilmes, getFilme, postFilme, putFilme, deleteFilme} from "./filmes.js"



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
        'items-center',
        'text-center' 
        )
   
   

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
        'border-amarelo'
    )
  
    bgTexto.append(titulo)
    card.append(capaFilme, bgTexto)
    card.addEventListener('click',()=>{
     window.location.href = './infoFilmes.html?id='+ filme.id

    
    })

    card.classList.add(
        'flex',
        'flex-col',
        'gap-3.5',
        'justify-center',
        'items-center' ,
        'cursor-pointer',
        'hover:scale-110'
        )
    return card
}







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

    "nome": "Jogos Vorazes 5 ",
    "sinopse": "Antes de Katniss Everdeen, sua revolução e o envolvimento do 13 distrito, houve o Presidente Snow, ou melhor, Coriolanus Snow. A Cantiga dos Pássaros e das Serpentes é a história do ditador de Panem antes de chegar ao poder. Anos antes, Coriolanus Snow vivia na capital, nascido na grande casa de Snow, que não anda muito bem em popularidade e financeiramente. Ele se prepara para sua oportunidade de glória como um mentor dos Jogos. O destino de sua Casa depende da pequena chance de Coriolanus ser capaz de encantar, enganar e manipular seus colegas para conseguir mentorar o tributo vencedor. Foi lhe dado a tarefa humilhante de mentorar a garota tributo do Distrito 12. Os destinos dos dois estão agora interligados – toda escolha que Coriolanus fizer terá consequências dentro e fora do Jogo. Na arena, a batalha será mortal e a garota terá que sobreviver a cada segundo. Fora da arena, Coriolanus começa a se apegar a garota, mas terá que ter que qualquer passo que der, fará com que a menina e ele mesmo sofram de alguma maneira.",
    "duracao": "2:38:00",
    "data_lancamento": "2023-11-15",
    "data_relancamento": null,
    "foto_capa": "https://br.web.img2.acsta.net/c_310_420/pictures/23/09/20/17/54/4013241.jpg",
    "valor_unitario": 35.00
}


function validarLogin() {
    window.location.href = '../cms/screens/login.html'

}

const button = document.getElementById('burger')

button.addEventListener('click', validarLogin)






//deleteFilme(52)
// putFilme(filme, 50)
//postFilme (filme)
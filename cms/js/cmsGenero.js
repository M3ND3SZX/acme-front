
'use strict'
import { postGenero } from "../../js/filmes.js"

const nome = document.getElementById('genero')
const cadastrar = document.getElementById('adicionar')

cadastrar.addEventListener('click', async () => {
    try {
        const nomeInput = nome.value
        if (!nomeInput) {
            alert('Nome não pode estar vazio')
            return
        }

        const insert = { genero: nomeInput }
        const inserir = await postGenero(insert)
        console.log(inserir)
        console.table(insert)

        if (inserir) {
            window.location.href = '../screens/homeGenero.html'
        } else {
            alert('Não foi possível inserir')
        }
    } catch (error) {
        alert('Erro: ' + error.message)
    }
})
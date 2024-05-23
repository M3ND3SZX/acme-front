'use strict';
import { getGenero, putGenero } from "../../js/filmes.js";

const nome = document.getElementById('genero');
const salvar = document.getElementById('salvar');

// Supondo que você obtenha o ID do gênero de algum lugar no seu código
const id = new URLSearchParams(window.location.search).get('id')

async function dadosFilme() {
    if (id) {
        try {
            const info = await getGenero(id);
            console.log(info.genero)

            // Atribuir valores aos elementos do formulário
            nome.value = info.genero|| '';
        } catch (error) {
        console.error('Erro ao obter dados do filme:', error);

    }
}  else {
    console.error('ID do filme não fornecido.');
}

}

salvar.addEventListener('click', async () => {
    try {
        const nomeInput = nome.value;
        if (!nomeInput) {
            alert('Nome não pode estar vazio');
            return;
        }

        const alteracoes = {
            genero: nomeInput
        };

        const atualizarResult = await putGenero(id, alteracoes);
        console.log(alteracoes)
        console.table(atualizarResult)

        
        if (atualizarResult) {
            window.location.href = '../screens/homeGenero.html';
        } else {
            alert('Não foi possível atualizar o gênero');
        }
    } catch (error) {
        alert('Erro: ' + error.message);
    }
});

dadosFilme()


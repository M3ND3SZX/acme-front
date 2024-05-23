'use strict'


const inputs = document.querySelectorAll('#lancamento, #relancamento');

inputs.forEach(input => {
    input.addEventListener('input', function(data) {
   
    let valor = data.target.value;

            valor = valor.replace(/[^0-9\-]/g, '');


            valor = valor.replace(/(?!^)\-/g, '');

            if (valor.length > 4) {
                valor = valor.slice(0, 4) + '-' + valor.slice(4);
            }

        
            if (valor.length > 7) {
                valor = valor.slice(0, 7) + '-' + valor.slice(7, 10);
            }

            if (valor.length > 10) {
                valor = valor.slice(0, 10);
            }

            data.target.value = valor;
});
})


document.getElementById('duracao').addEventListener('input', function(tempo) {
    let valor = tempo.target.value;

    // Remove todos os caracteres que não são dígitos ou traços
    valor = valor.replace(/[^0-9\:]/g, '');

    // Remove traços fora de posição
    valor = valor.replace(/(?!^)\:/g, '');

    if (valor.length > 2) {
        valor = valor.slice(0, 2) + ':' + valor.slice(2);
    }

    if (valor.length > 5) {
        valor = valor.slice(0, 5) + ':' + valor.slice(5, 8);
    }

    if (valor.length > 8) {
        valor = valor.slice(0, 8);
    }

    tempo.target.value = valor;
});

document.getElementById('preco').addEventListener('input', function(preco) {
    let valor = preco.target.value;

    valor = valor.replace(/[^0-9\.]/g, '');

    valor = valor.replace(/(?!^)\./g, '');

    if (valor.length > 2) {
        valor = valor.slice(0, 2) + '.' + valor.slice(2);
    }

    if (valor.length > 5) {
        valor = valor.slice(0, 5);
    }

    preco.target.value = valor;
});
'use strict'

const inputs = document.querySelectorAll('#nascimento, #falecimento');

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
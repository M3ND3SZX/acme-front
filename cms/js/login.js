'use strict'

function validarLogin() {
    window.location.href = '../screens/home.html'

}

const button = document.getElementById('entrar')

button.addEventListener('click', validarLogin)

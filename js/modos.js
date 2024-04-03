// DOM

const light = document.querySelector('#claro')
const dark = document.querySelector('#escuro')
const fundo = document.querySelector('body')

// Eventos

light.addEventListener('click', changelight)
dark.addEventListener('click', changedark)

// Função

function changelight() {
    fundo.className = 'modoClaro' 
    /* light.style.display = 'none'
    dark.style.display = 'inline' */
}

function changedark() {
    fundo.className = 'modoEscuro' 
    /* dark.style.display = 'none'
    light.style.display = 'inline' */
}



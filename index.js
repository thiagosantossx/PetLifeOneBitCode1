var elementosDuvida = document.querySelectorAll('.duvida')

elementosDuvida.forEach(function (duvida) {
duvida.addEventListener('click', function () {
    duvida.classList.toogle('ativa')
})
})
function verde () {
    document.querySelector("#inicio").classList.remove('vermelho')
    document.querySelector("#inicio").classList.remove('azul')
    document.getElementById("inicio").classList.add('verde');
}

function vermelho () {
    document.querySelector("#inicio").classList.remove('azul')
    document.querySelector("#inicio").classList.remove('verde')
    document.getElementById("inicio").classList.add('vermelho');
}

function azul () {
    document.querySelector("#inicio").classList.remove('vermelho')
    document.querySelector("#inicio").classList.remove('verde')
    document.getElementById("inicio").classList.add('azul');
}
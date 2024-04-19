let botoes = document.querySelectorAll(".botoes button")
botoes.forEach(botao => {
    botao.addEventListener("click", guardarNota)
})

function guardarNota(evento) {
    console.log("cheguei aqui")
    let nota = evento.target.innerText

    localStorage.setItem("nota", nota)
}
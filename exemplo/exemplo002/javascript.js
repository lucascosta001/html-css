function search() {
    let pesquisar = document.getElementById('search')
    pesquisar = pesquisar.toLowerCase()
    let itens = document.getElementsByClassName('names')

    for (let i = 0; i < itens.length; i++) {
        if (!itens[i].innerHTML.toLocaleLowerCase().includes(pesquisar)) {
            itens[i].style.display = "none"
        }
    }
}

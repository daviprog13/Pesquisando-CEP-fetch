const input = document.querySelector('[type="text"]')
const resultado = document.querySelector('.resultado')
const btnPesquisar = document.querySelector('.enviar')



function handleCEP(cep) {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.text())
        .then(body => {
            resultado.innerText = body.replace('{', '').replace('}', '')
        })
}

function pesquisarCEp(event) {
    event.preventDefault()
    const cep = input.value
    handleCEP(cep)
}





btnPesquisar.addEventListener('click', pesquisarCEp)
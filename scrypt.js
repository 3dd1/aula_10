const nome = document.querySelector("#nome")
// const email = document.querySelector("#email")
// const senha = document.querySelector("#senha")
const lista = document.querySelector("#lista")
const botao = document.querySelector("#botao")
const formulario = document.querySelector("#formulario")


// function verificandoCampos(event){
//     event.preventDefault()
    
//     if (nome.value.length > 0 && email.value.length > 0 && senha.value.length > 0){
//         alert("seja bem vindo")
//     } else{
//         alert("preencha todos os formularios")
//     }
// }
//---------------------------------------------------------------------------------
// function adicionarNomes(e){  // steeel balll runn
//     e.preventDefault()
//     const novo_nome = document.createElement("li")
//     novo_nome.textContent = nome.value 
//     lista.appendChild(novo_nome)
//     novo_nome.value = ''
//     novo_nome.focus()
// }

function arraySoma( array1){
    let soma = 0
    for (let i of array1){
        soma += i 
    }
    return soma
}

// formulario.addEventListener("submit", verificandoCampos)
formulario.addEventListener("submit", adicionarNomes)
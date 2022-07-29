const form = document.getElementById("novoCadastro")
const lista = document.getElementById("lista")
const usuarios = JSON.parse(localStorage.getItem("usuarios")) || []
// console.log(form)

usuarios.forEach( (elemento) => {
    criaElemento(elemento)

})

form.addEventListener("submit", (evento) => {
    evento.preventDefault()

    const nome = evento.target.elements['nome']
    const email = evento.target.elements['email']
    const senha = evento.target.elements['senha']
    const confirmeSenha = evento.target.elements['confirmeSenha']

    criaElemento( nome.value, email.value, senha.value, confirmeSenha.value)

    nome.value = ""
    email.value = ""
    senha.value = ""
    confirmeSenha.value = ""

})



function criaElemento(nome, email, senha, confirmeSenha) {

    const usuarioAtual = {
        "nome": nome,
        "email": email,
        "senha": senha,
        "confirmeSenha": confirmeSenha
    }

    usuarios.push(usuarioAtual)

    localStorage.setItem("listaUsuarios", JSON.stringify(usuarios))

    window.alert("Cadastro realizado com sucesso");

    window.location.href = './login.html'
}


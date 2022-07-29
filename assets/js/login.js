function logar(){

    var email = document.querySelector('#email')
    var emailLabel = document.querySelector('#emailLabel')
    
    var senha = document.querySelector('#senha')
    var senhaLabel = document.querySelector('#senhaLabel')

    var listaUsuarios = []
    
    var userValid = {
        confirmeSenha: '',
        email: '',
        nome: '',
        senha: ''
    }
    
    listaUsuarios = JSON.parse(localStorage.getItem('listaUsuarios'))

    listaUsuarios.forEach((item) => {
        if(email.value == item.email && senha.value == item.senha){

            userValid = {
                confirmeSenha: item.confirmeSenha,
                email: item.email,
                nome: item.nome,
                senha: item.senha
            }
        }
    })

    if (email.value == userValid.email && senha.value == userValid.senha) {
        location.href = './galeria.html'

    } else {
        alert("Dados Incorretos.")
        email.focus()
    }
}
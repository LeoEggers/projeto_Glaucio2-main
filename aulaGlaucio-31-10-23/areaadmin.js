function validarEntrada() {
    var emailtxt = document.getElementById("login").value;
    var senhatxt = document.getElementById("senha").value;
    var entrar = document.getElementById("entradaValida");
    
    var objetoLoginSenha = {
        email: emailtxt,
        senha: senhatxt
    }

    var liberado = validarUsuario(objetoLoginSenha);

    if (liberado) {
        entrar.innerHTML = '<a href="areaMsg.html">Ver mensagens</a>';
    } else {
        entrar.innerText = "Usuário não reconhecido.";
    }

}

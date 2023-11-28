function enviarMsg() {
    
    var nome = document.getElementById("nome");
    var email = document.getElementById("email");
    var msg = document.getElementById("msg");

    var dados = {
        nome: nome,
        email: email,
        mensagem: msg
    }
    
    inserirMensagem(dados)
    alert("Mensagem enviada com sucesso.");
    
}



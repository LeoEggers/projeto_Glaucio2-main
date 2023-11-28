function enviarMsg() {
    
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var msg = document.getElementById("msg").value;

    var dados = {
        nome: nome,
        email: email,
        mensagem: msg
    };
    
    inserirMensagem(dados)
    alert("Mensagem enviada com sucesso.");
    
}



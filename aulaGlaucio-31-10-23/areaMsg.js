function receberDados() {

    var mensagens = obterMensagens();

    var quadro_mensagens = document.getElementById("mensagens1");
    
    mensagens.forEach(element => {
        var nome = element["nome"];
        var email = element["email"];
        var mensagem = element["mensagem"];
    
        var tableRow = document.createElement("tr");
    
        var tableData1 = document.createElement("td");
        tableData1.textContent = nome;
        tableRow.appendChild(tableData1);
        
        var tableData2 = document.createElement("td");
        tableData2.textContent = email;
        tableRow.appendChild(tableData2);
    
        var tableData3 = document.createElement("td");
        tableData3.textContent = mensagem;
        tableRow.appendChild(tableData3);
    
        quadro_mensagens.appendChild(tableRow);
    });

}
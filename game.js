function send() {
    n1 = document.getElementById("n1").value;
    n2 = document.getElementById("n2").value;
    resposta = parseInt(n1) * parseInt(n2);
    pergunta = "<h4>" + n1 + " X " + n2 + "</h4>";
    input = "<br>Resposta : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Checar</button>";
    pergunta = "<h4>" + n1 + " X " + number2 + "</4>";
    input = "<br>Resposta : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Checar</button>";
    row = pergunta + input + check_button;
    document.getElementById("output").innerHTML = row;

    document.getElementById("n1").value = "";
    document.getElementById("n2").value = "";
}
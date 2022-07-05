
/*exemplo1 mandando obrigado pelo o alert
function clicou(){
    alert("Obrigado por clicar");
}
*/


/*exemplo2 mandando o obrigado pelo html no javascript
function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar<b>";
}


                    Redirecionado a outra página com o JavaScript
function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar<b>";
}

function redirecionar(){
    window.open("https://www.linkedin.com/in/emanuel-santos-souza-de-jesus-086959235/");
    window.location.href = "https://www.linkedin.com/in/emanuel-santos-souza-de-jesus-086959235/";
}
*/


function trocar(element){
    //document.getElementById("mousemove").innerHTML = "Obrigador por passar o mouse"
    element.innerHTML = "Obrigado, mas estou triste"
    //alert("obrigado")
}

function voltar(element){
    //document.getElementById("mousemove").innerHTML = " Passe o mouse aqui";
    element.innerHTML = "Veja como eu me sinto!"
}

function load(){
    alert("Página carregada com sucesso")
}


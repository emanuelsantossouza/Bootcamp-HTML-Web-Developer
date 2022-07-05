/*AULA 1 PROGRAMAÇÃO PARA INTERNET COM JAVASCRIPT

var nome = "Emanuel";
var idade = 16;
var idade2 = 10;
console.log(idade + idade2);
alert(nome + " tem " + idade);
alert(idade + idade2);

//Frase\\
var frase = "Corintias é o melhor time do mundo"
console.log(frase.toUpperCase("Corintias", "São Paulo"));
*/




/*AULA 2 ARRAY E DICIONARIO

var frutas = [{nome:"maça", cor:"vermelha"},  {nome:"uva", cor:"roxa"}];
console.log(frutas);
alert(frutas[1].nome);
//var lista = ["maça", "pêra", "laranja"];
//lista.pop(); APAGAR ALGUM ITEM
//lista.push("uva"); COLOCAR ALGUM ITEM
//console.log(lista); MOSTRAR A LISTA
//console.log(lista.length); MOSTRAR O TAMANHO
//console.log(lista.reverse); MOSTRAR O REVERSO DA MATRIX
//console.log(lista);
//console.log(lista.toString()); MOSTRAR UM VALOR 
//console.log(lista.join(" |")); TROCAR A VIRGULA POR ALGO
*/




/* AULA 3 CONDIÇÕES, LAÇOS DE REPITIÇÃO E DATE
                IF
var idade = prompt("Qual a sua idade");
if(idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
}

                WHILLE
var count = 0
while (count <= 5){
    console.log(count);
    alert(count);
    count++;
};

                FOR
for (count = 0; count <= 5; count++){
    alert(count);
}

                Date
var d = new Date();
alert(d.getDate());
alert(d.getMinutes());
alert(d.getHours());
alert(d.getDay());
alert(d.getMonth());
alert(d.getFullYear());
*/

/*AULA 4 DESENVOLVA PAGINA WEB COM JAVASCRIPT 

        FUNCÃO
function soma(n1, n2){
    return n1 + n2;
}

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}

alert(soma(5,10));
alert(setReplace("Vai Japão", "Japão", "Brasil"));


                    função e var global 
var validar;
function validaIdade(idade){
    if (idade >= 18){
        validar = "Você é de maior"
    }else{
        validar = "Você é de menor"
    }
    return validar;
}

var idade = prompt("Qual é a sua idade");
validaIdade(idade)
console.log(validar);
*/



var numeros = [11, 7, -11, 6, 11, -2];

var soma1 = numeros[0] + numeros[1];
var soma2 = numeros[2] + numeros[3];
var soma3 = numeros[4] + numeros[5];

console.log("X = " + soma1);
console.log("X = " + soma2);
console.log("X = " + soma3);

var valor1 = parseInt(prompt("Digite o primeiro número"));

var valor2 = parseInt(prompt("Digite o segundo número"));

var operacaoCalc = parseInt(prompt("Digite 1 para adição\n Digite 2 para subtração\n Digite 3 para multiplacação\nDigite 4 para divisão"));

if (operacaoCalc == 1){
var resultado = valor1 + valor2;
document.write("<h2>" + valor1 + "+"  + valor2 + "=" + resultado + "</h2>");
}else if (operacaoCalc == 2) {
 var resultado = valor1 - valor2;
 document.write("<h2>" + valor1 + "-"  + valor2 + "=" + resultado + "</h2>");
}else if(operacaoCalc ==3){
var resultado = valor1 * valor2;
document.write("<h2>" + valor1 + "*"  + valor2 + "=" + resultado + "</h2>");
}else if(operacaoCalc ==4){
var resultado = valor1 / valor2;
 var conversaoResultado = resultado.toFixed(2);
document.write("<h2>" + valor1 + "/"  + valor2 + "=" + conversaoResultado + "</h2>");
}else {
alert("Opção inválida");
}

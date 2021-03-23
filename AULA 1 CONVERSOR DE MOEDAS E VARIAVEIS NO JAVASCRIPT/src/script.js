var entradaUsuario = prompt("Digite o valor em dólar a ser convertido");

if (entradaUsuario == null || entradaUsuario == "") {
  alert("Nenhum valor inserido");
} else {
  var valorConvertido = parseFloat(entradaUsuario);
  valorConvertido = (valorConvertido * 5.51);
 var conversaoResultado = valorConvertido.toFixed(2);
  alert( "Valor em Real R$" + conversaoResultado );
}
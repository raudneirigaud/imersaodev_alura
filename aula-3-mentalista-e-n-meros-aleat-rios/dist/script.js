var numeroPremiado = parseInt(Math.random() * (10 - 0) + 0);
var tentativas = 3;
while (tentativas > 0) {
var entradaUser = parseInt(prompt("Digite um número:"));
  
  if (numeroPremiado == entradaUser) {
    alert("Você acertou");
    break
  }
  else if (numeroPremiado > entradaUser){
    alert("O número premiado é maior");
    tentativas = tentativas - 1;
  }
  else if (numeroPremiado < entradaUser){
    alert("O número premiado é menor");
    tentativas = tentativas - 1;
  } 
}
if( numeroPremiado != entradaUser ) {
    alert("Você já utilizou as 3 tentativas");
  }
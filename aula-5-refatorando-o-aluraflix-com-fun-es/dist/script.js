function adicionarFilme(){
  var campoFilmeFavorito = document.querySelector('#filme')
  var filmeFavorito= campoFilmeFavorito.value
  if(filmeFavorito.endsWith('.jpg')){
    listarFilmeNaTela(filmeFavorito)
  }else {
    alert("Imagem inválida")
  }campoFilmeFavorito.value =""
}
function listarFilmeNaTela (filme){
  var listafilmes = document.querySelector('#listafilmes')
  var elementofilme = "<img src="+ filme + ">"
  listaFilmes.innerHTML = listaFilmes.innerHTLM + elementofilme
}
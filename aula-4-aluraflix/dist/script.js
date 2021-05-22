var filmes = ["https://m.media-amazon.com/images/M/MV5BMzQxNzQzOTQwM15BMl5BanBnXkFtZTgwMDQ2NTcwODM@._V1_UX182_CR0,0,182,268_AL_.jpg" , "https://m.media-amazon.com/images/M/MV5BMTUyNzkwMzAxOF5BMl5BanBnXkFtZTgwMzc1OTk1NjE@._V1_UX182_CR0,0,182,268_AL_.jpg" , "https://m.media-amazon.com/images/M/MV5BZTJiNGM2NjItNDRiYy00ZjY0LTgwNTItZDBmZGRlODQ4YThkL2ltYWdlXkEyXkFqcGdeQXVyMjY5ODI4NDk@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BZDVkZmI0YzAtNzdjYi00ZjhhLWE1ODEtMWMzMWMzNDA0NmQ4XkEyXkFqcGdeQXVyNzYzODM3Mzg@._V1_UX182_CR0,0,182,268_AL_.jpg"]

var filmesnomes = ["Filme 1", "Filme 2", "Filme 3" , "Filme 4"];

/* for(var i= 4; i >= 0; i--){
console.log(filmes[i]);
}

for (var i= 0; i < 3; i++){
 console.log(filmes[i]);
}

for (var i= 0; i < filmes.length; i++){
  console.log(filmes[i]);
}
*/
for (var i= 0; i < filmes.length; i++){
  document.write("<img src="+ filmes[i]+">");
}
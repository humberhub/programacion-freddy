var vp = document.ElementById("villaplatzi");
var papel = vp.getContext("2d");
var mapa = "tile.png";

var imagen = new Image();


function aleatorio(min,maxi)
{
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}

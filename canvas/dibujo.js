var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujito");
var ancho =d.width;
var lienzo = d.getContext("2d");
console.log(lienzo);

//ciclo for
// //for(l = 0; l<lineas; l++)
// {
//   yi = 10 * l;
//   xf = 10 * (l + 1);
//
// dibujarLinea(colorcito, 0, yi, xf, 300);
// console.log("linea" + 1);
// }

//ciclo do while
// do{
//   xi = 10 * l2;
//   yf = 10 * (l2+1);
//   dibujarLinea(colorcito, xi, 0, 300, yf);
//   l2 = l2 + 1;
//   console.log ("l2 " + l2);
// }
// while(l2< lineas2);


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoPorClick()
{
 var lineas = parseInt(texto.value);
 alert(lineas);
 var l = 0;
 var lineas2 = 30;
 var l2 = 0;
 var colorcito = "#FE9A23";
 var yi, xf;
 var xi, yf;
 var espacio = ancho / lineas;
 //ciclo while original del lado izq el dibujo
 while(l<lineas)
 {
   yi = espacio * l;
   xf = espacio * (l + 1);

 dibujarLinea(colorcito, 0, yi, xf, 300);
 console.log("linea" + l);
 l = l + 1;
 }
 dibujarLinea (colorcito, 1, 0, 1, ancho-1);
 dibujarLinea (colorcito, 0, ancho-1, ancho-1, ancho-1);


}

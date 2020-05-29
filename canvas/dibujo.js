var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
console.log(lienzo);
var lineas = 30;
var l = 0;
var lineas2 = 30;
var l2 = 0;
var colorcito = "#FE9A23";
var yi, xf;
var xi, yf;
//ciclo while original del lado izq el dibujo
while(l<lineas)
{
  yi = 10 * l;
  xf = 10 * (l + 1);

dibujarLinea(colorcito, 0, yi, xf, 300);
console.log("linea" + l);
l = l + 1;
}

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
do{
  xi = 10 * l2;
  yf = 10 * (l2+1);
  dibujarLinea(colorcito, xi, 0, 300, yf);
  l2 = l2 + 1;
  console.log ("l2 " + l2);
}
while(l2< lineas2);

dibujarLinea (colorcito, 1, 0, 1, 300);
dibujarLinea (colorcito, 0, 299, 300, 299);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

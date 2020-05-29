

var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
console.log(lienzo);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial,yinicial);
  lienzo.lineTo(xfinal,yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

dibujarLinea("#FE9A2E",0,0,300,300);
dibujarLinea("#FE9A2E",0,300,300,0);
dibujarLinea("#FE9A2E",1,1,300,1);
dibujarLinea("#FE9A2E",299,0,299,299);
dibujarLinea("#FE9A2E",299,299,0,299);
dibujarLinea("#FE9A2E",1,299,1,1);
dibujarLinea("#FE9A2E",150,0,150,300);
dibujarLinea("#FE9A2E",0,150,300,150);

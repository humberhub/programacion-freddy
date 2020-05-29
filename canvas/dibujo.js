
alert("si funciona");
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

dibujarLinea("pink",1,300,300,1);
dibujarLinea("black",1,1,300,300);

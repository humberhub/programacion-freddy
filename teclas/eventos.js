var teclas = { UP: 38,DOWN: 40,LEFT: 37,RIGHT:39 };//esta es una variable con variables estables dentro de ella
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x = 50;
var y = 50;

document.addEventListener("keydown",dibujarTeclado);//keydown evento cuando se presiona la tecla

dibujarLinea("red",x-1,y-1,x+1,y+1,papel);

console.log(teclas);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal,lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 5;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}
  function dibujarTeclado(evento)
  {
    var colorcito = "blue";
    var movimiento = 10;
    switch(evento.keyCode)
    {
      case teclas.UP:
      dibujarLinea(colorcito,x,y,x,y - movimiento,papel);
      y = y - movimiento;
      break;

      case teclas.DOWN:
      dibujarLinea(colorcito,x,y,x,y + movimiento,papel);
      y = y + movimiento;
      break;

      case teclas.RIGHT:
      dibujarLinea(colorcito,x,y,x + movimiento,y,papel);
      x = x + movimiento;
      break;

      case teclas.LEFT:
      dibujarLinea(colorcito,x,y,x - movimiento,y,papel);
      x = x - movimiento;
      break;

      default:
      console.log("otra tecla");
      break;
    }
    // if (evento.keyCode == teclas.UP)
    // {
    //   console.log("vamos pa arriba");
    // }
    // if (evento.keyCode == teclas.DOWN)
    //  {
    //   console.log("vamos pa abajo");
    // }
    // if (evento.keyCode == teclas.LEFT)
    // {
    //   console.log("Vamos pa la izquierda");
    // }
    // if (evento.keyCode == teclas.RIGHT)
    // {
    // console.log("vamos pa la derecha");
    // }
//hasta este punto se hiciero 4 if para determinar que tecla esta siendo presionada pero....
//hay otra opcion para hacer lo mismo con un switch aunque hay ocasiones donde hace mas facil leer el codigo
//y hay otras ocasiones donde no, usar a criterio segun corresponda
//otra cosa switch solo funciona para compara cuando es == no en otros casos

  }

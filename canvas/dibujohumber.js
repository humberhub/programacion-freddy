var lineas = document.getElementById("cantlineas");
var sombras = document.getElementById("cantsombras");

var botonlinea = document.getElementById("botonenviar");
var botonsombras = document.getElementById("botonenviar2");

botonlinea.addEventListener("click",algoritmolineas);
botonsombras.addEventListener("click",algoritmosombras);

var papel = document.getElementById("canvas");
var lienzo = papel.getContext("2d");



function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
  {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
  }

function algoritmolineas()
  {
  var hacernlineas=parseInt(lineas.value);

  var l = 5;
  var color = "black";

  if(hacernlineas==l)
  {
    dibujarLinea(color,0,120,300,120);
    dibujarLinea(color,300,120,60,300);
    dibujarLinea(color,60,300,150,0);
    dibujarLinea(color,150,0,240,300);
    dibujarLinea(color,240,300,0,120);
  }
  else if (hacernlineas==1)
  {
  dibujarLinea(color,0,120,300,120);
  }
  else if (hacernlineas==2)
  {
    dibujarLinea(color,0,120,300,120);
    dibujarLinea(color,300,120,60,300);
   }
  else if(hacernlineas==3)
  {
    dibujarLinea(color,0,120,300,120);
    dibujarLinea(color,300,120,60,300);
    dibujarLinea(color,60,300,150,0);
   }
  else if(hacernlineas==4)
  {
    dibujarLinea(color,0,120,300,120);
    dibujarLinea(color,300,120,60,300);
    dibujarLinea(color,60,300,150,0);
    dibujarLinea(color,150,0,240,300);
   }
  else
  {
    document.write("opcion incorrecta");
  }

  }

  function algoritmosombras()
  {
    var color = "#CC2EFA";
    var hacernsombras = parseInt(sombras.value);


    for(s=0;s<hacernsombras;s++)
    {
    yi = 1*(120+s);
    yf = 1*(120-s);
    dibujarLinea(color,0,yi,300,yf);
  }

    for (s=0;s<hacernsombras;s++)
    {

      yi = 1*(120-s);
      xf = 1*(60+s);
      dibujarLinea(color,300,yi,xf,300);
    }
    for (s=0;s<hacernsombras;s++)
    {

      xi = 1*(60+s);
      xf = 1*(150-s);
      dibujarLinea(color,xi,300,xf,0);
    }
    for (s=0;s<hacernsombras;s++)
    {

      xi = 1*(150-s);
      xf = 1*(240+s);
      dibujarLinea(color,xi,0,xf,300);
    }
    for (s=0;s<hacernsombras;s++)
    {

      xi = 1*(240+s);
      yf = 1*(120+s);
      dibujarLinea(color,xi,300,0,yf);
    }
}

var c=document.getElementById("canvitas");
var ancho= c.width;
var alto= c.height;
var nombre=c.id;
var canvas=c.getContext("2d");
var color = "black";
var x,y,pintar;

c.addEventListener("mousedown",puntoInicial);
c.addEventListener("mousemove",movimiento);
c.addEventListener("mouseup",puntoInicial);


function puntoInicial(botonAbajo)
  {
    if(botonAbajo.buttons==1)
    {
    x=botonAbajo.offsetX;
    y=botonAbajo.offsetY;
    pintar=true;
    }
    else
    {
    pintar=false;
    }
  }

function movimiento(mov)
  {
    if(pintar==true)
    {
    dibujarLinea(color,x,y,mov.offsetX,mov.offsetY,canvas);
    x=mov.offsetX;
    y=mov.offsetY;
    }
  }






dibujarLinea(color,0,0,ancho,0,canvas);
dibujarLinea(color,ancho,0,ancho,alto,canvas);
dibujarLinea(color,ancho,alto,0,alto,canvas);
dibujarLinea(color,0,alto,0,0,canvas);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal,lienzo)
  {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
  }

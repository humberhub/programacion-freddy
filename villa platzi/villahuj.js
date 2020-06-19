var moviTeclas={UP:38,DOWN:40,LEFT:37,RIGHT:39};
var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
var fondo={
  url:"tile.png",
  cargaOK:false,
  // imagen:new Image() este no se pone dentro de acuerdo a la buenas practicas segun fredy
  //pero aun si lo pongo dentro se ejecuto correctamente.
};
var vaca= {
  url:"vaca.png",
  cargaOK:false
};

var pollo={
  url:"pollo.png",
  cargaOK:false
};

var cerdo={
  url:"cerdo.png",
  cargaOK:false
}


fondo.imagen = new Image(); // class Imagen es una nueva definicion
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load",cargarFondo);


vaca.objeto=new Image();//objeto es la parte de la variable que tienes propiedades
vaca.objeto.src=vaca.url;
vaca.objeto.addEventListener("load",cargarVaca);

pollo.objeto=new Image();
pollo.objeto.src=pollo.url;
pollo.objeto.addEventListener("load",cargarPollo);

cerdo.imagen = new Image(); // class Imagen es una nueva definicion
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load",cargarCerdo);
document.addEventListener("keydown",moverCerdoConTeclas);
var xc=0,yc=0;

function moverCerdoConTeclas(evento){

console.log(xc);
console.log(yc);


  if(evento.keyCode==moviTeclas.LEFT){
     xc=xc-10
     dibujar();
     papel.drawImage(cerdo.imagen,xc,yc);


    }
  if(evento.keyCode==moviTeclas.UP){
     yc=yc-10
     dibujar();
     papel.drawImage(cerdo.imagen,xc,yc);

     }
  if(evento.keyCode==moviTeclas.RIGHT){
     xc=xc+10
     dibujar();
     papel.drawImage(cerdo.imagen,xc,yc);
      }
  if(evento.keyCode==moviTeclas.DOWN){
      yc=yc+10
      dibujar();
      papel.drawImage(cerdo.imagen,xc,yc);
      }
  }




function dibujar()
{
  if(fondo.cargaOK==true){
    papel.drawImage(fondo.imagen,0,0);
  }
  if(vaca.cargaOK){
    var cantidad = aleatorio(0,10)
    console.log(cantidad);
    for(i=0;i<cantidad;i++){
      var x=aleatorio(0,7);
      var y=aleatorio(0,7);
      var x=x*60;
      var y=y*60;
      papel.drawImage(vaca.objeto,x,y);
    }
    }
  if(pollo.cargaOK){
      var cantidad = aleatorio(0,10)
      console.log(cantidad);
      for(i=0;i<cantidad;i++){
        var x=aleatorio(0,7);
        var y=aleatorio(0,7);
        var x=x*60;
        var y=y*60;
        papel.drawImage(pollo.objeto,x,y);
      }
      }

}
function cargarFondo(){

fondo.cargaOK=true;
dibujar();
}

function cargarVaca(){
vaca.cargaOK=true;
dibujar();
}

function cargarPollo(){
  pollo.cargaOK=true;
  dibujar();
}

function cargarCerdo(){
  cerdo.cargaOK=true;
  dibujar();
}
var z;
for(i=0;i<10;i++)
{
  z=aleatorio(0,10);
  document.write(z + ", ");
}

function aleatorio(min,maxi)
{
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}

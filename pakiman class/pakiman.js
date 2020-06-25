//esta es una definicion de una class
class Pakiman
{
  constructor(n,v,a)//todas las clases tienen un constructor
  {
    this.nombre=n; /* this. es la forma de señalar una variable
                    dentro de una funcion de una class  */
    this.vida=v;   //vida es una variable dentro de una class
    this.ataque=a;
    this.imagen=new Image();
    this.imagen.src= imagenes[this.nombre];
  }
  hablar() /* para definir una funcion dentro de una class
              no es necesario poner function al inicio */
  {
  alert(this.nombre);
  }

  mostrar()
  {
  document.body.appendChild(this.imagen);  //appendChill es para agregar un nuevo hijo al body
  document.write("<p>");
  document.write("<strong>" + "nombre: " + this.nombre + "</strong>" + "<br/>");
  document.write("<strong>" + "vida: " + this.vida + "</strong><br/>" );
  document.write("<strong>" + "ataque: " + this.ataque + "</strong> <hr/>");
  document.write("</p>");
  }
}

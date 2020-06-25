var imagenes=[];
imagenes["cauchin"]="vaca.png";
imagenes["pokacho"]="pollo.png";
imagenes["tocinauro"]="cerdo.png";
imagenes["humbertito"]="humberdj.png";
// console.log(imagenes);

var cauchin=new Pakiman("cauchin",100,30);
var pokacho=new Pakiman("pokacho",80,50);

// console.log(cauchin, pokacho, tocinauro);

var coleccion = [];
coleccion.push(cauchin);// estas son dos formas de agregar al array coleccion el pakimanes
coleccion.push(pokacho);// una con la variable y declarar la variable antes o
coleccion.push(new Pakiman("tocinauro",120,40));/* crear la instancia al mismo tiempo que
se crea el nuevo pakiman con la class pakiman y sus propiedades del objeto*/
coleccion.push(new Pakiman("humbertito",200,100));


// pokacho.mostrar();
// cauchin.mostrar();
// coleccion[2].mostrar();
/* es un ciclo especial para dos variables, variable1 in variable2, esto quiere decir
que en variable1 coloca lo que haya dentro de variable2, tantas veces o
variables haya en variable2 */
/* puede haber variable en este for puede ser "in"(indice, lee el indice del objeto)
 o puede ser "of"(y este muestra directamente el objeto de la instacia) */
for (var pakin of coleccion) // este ciclo especial recorre la cantidad de veces que el objeto existe
{
pakin.mostrar();

}
console.log(coleccion);

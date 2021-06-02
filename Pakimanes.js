var imagenes = [];//arreglo asociativo (string)
imagenes["Cauchin"] = "cauchin.png";
imagenes["Pokacho"] = "pokacho.png";
imagenes["Tocinauro"] = "tocinauro.png";
// esto es similar(se ejecuta igual) que lo siguiente en notacion JSON
// var imagenes = {
//     cauchin: "cauchin.png",
// }
//Con en el proyecto Villa Platzi

// var cauchin = new Pakiman("Cauchin", 100, 30, "Planta");
// var pokacho = new Pakiman("Pokacho", 80, 50, "Electrico");
// var tocinauro = new Pakiman("Tocinauro", 120, 40, "Fuego");
// // console.log(cauchin, pokacho, tocinauro, imagenes);
// cauchin.mostrar();
// pokacho.mostrar();
// tocinauro.mostrar();
// Esta es una forma mas corta de hacer lo de arriba
var coleccion = [];
coleccion.push(new Pakiman("Cauchin", 100, 30, "Planta"));//.push agrega un elemento al ultimo lugar del arreglo
coleccion.push(new Pakiman("Pokacho", 80, 50, "Electrico"));
coleccion.push(new Pakiman("Tocinauro", 120, 40, "Fuego"));
for (var p of coleccion) {// para cada variable dentro de coleccion coloquelo dentro de "p"(para cada "p" en coleccion)
    p.mostrar();
}
//para utilizar el indice se utiliza "in" para utilizar el objeto de usa "of"
// for (var p in coleccion) {
//     console.log(coleccion[p]);
// }
//en este caso se utiliza "of"

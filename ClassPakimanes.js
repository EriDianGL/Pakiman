class Pakiman {
    constructor(n, v, a, t) {
        this.imagen = new Image();
        this.nombre = n;
        this.vida = v;
        this.ataque = a;
        this.tipo = t;
        this.imagen.src = imagenes[this.nombre];
    }
    hablar() { //Las funciones dentro de las clases o necesitan la palabra "Function"
        alert(this.nombre);
    }
    mostrar() {
        document.body.appendChild(this.imagen);
        document.write("<br/><br/><strong>" + this.nombre + "</strong><br/>");
        document.write("Vida: " + this.vida + "<br/>");
        document.write("Ataque: " + this.ataque + "<br/>");
        document.write("Tipo: " + this.tipo + "<br/><hr/>");

    }
}

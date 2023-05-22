document.write("<b>Objetos:</b> Tecaldo, Mouse, Monitor <br><br> <b>metodo:</b> imprimirDatos()");

class Objeto {
    constructor(name, precio){
    this.codigo = Math.round(Math.random()*1000);
    this.name = name;
    this.precio = precio;
}
    imprimirDatos(){
        document.write(`<b>Codigo:</b> ${this.codigo}<br> <b>Name:</b> ${this.name}<br> <b>Precio:</b> ${this.precio}`);
    }
}

const teclado = new Objeto("Teclado",5000);
const mouse = new Objeto("Mouse",3200);
const monitor = new Objeto("Monitor",20000);



//Sistema de productos electronicos

//Clase Producto

class Producto {
    constructor(nombre, precio, categoria) {
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
    }

    //Funcion para obtener detalles del producto
    obtenerDetalles() {
        return "Nombre: " + this.nombre + ", Precio: $" + this.precio + ", Categoria: " + this.categoria;
    }
}

//Class Telefono that inherits from Producto
class Telefono extends Producto {
    constructor(nombre, precio, categoria, almacenamiento, ram) {
        super(nombre, precio, categoria);
        this.almacenamiento = almacenamiento;
        this.ram = ram;
    }

    //Overwriting the obtenerDetalles function
    obtenerDetalles() {
        return super.obtenerDetalles() + ", Almacenamiento: " + this.almacenamiento + "RAM: " + this.ram + "GB";
    }
}

//Class Laptop that inherits from Producto
class Laptop extends Producto {
    constructor(nombre, precio, categoria, procesador, pulgadas) {
        super(nombre, precio, categoria);
        this.procesador = procesador;
        this.pulgadas = pulgadas;
    }

    //Overwriting the obtenerDetalles function
    obtenerDetalles() {
        return super.obtenerDetalles() + ", Procesador: " + this.procesador + ", Pulgadas: " + this.pulgadas;
    }
}
//Instantiating objects of Telefono and Laptop

let telefono1 = new Telefono("Samsung Galaxy S21", 799, "Smartphone", "128GB", 8);
let laptop1 = new Laptop("Dell XPS 13", 999, "Ultrabook", "Intel i7", 13);
let Producto1 = new Producto("Generic Product", 50, "General");

//Showing details of the products
console.log(telefono1.obtenerDetalles());
console.log(laptop1.obtenerDetalles());
console.log(Producto1.obtenerDetalles());

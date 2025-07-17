// Sistema figuras geometricas

// Clase Figura
class Figura {
    constructor(color) {
        this.color = color;
    }

    // Método para obtener detalles de la figura
    area() {
        return 0; // Método base, debe ser sobrescrito
    }
}
// Clase Rectangulo que hereda de Figura
class Rectangulo extends Figura {
    constructor(color, base, altura) {
        super(color);
        this.base = base;
        this.altura = altura;
    }

    // Sobrescribiendo el método area
    area() {
        return this.base * this.altura;
    }
}

//Clae Circulo que hereda de Figura
class Circulo extends Figura {
    constructor(color, radio) {
        super(color);
        this.radio = radio;
    }

    // Sobrescribiendo el método area
    area() {
        return Math.PI * Math.pow(this.radio, 2);
    }
}

// Creair objetos de Rectangulo y Circulo
let rectangulo1 = new Rectangulo("Rojo", 5, 10);
let circulo1 = new Circulo("Azul", 7);

// Mostrar áreas
console.log("Área del rectángulo: " + rectangulo1.area());
console.log("Área del círculo: " + circulo1.area());

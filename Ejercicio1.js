//Sistema basico de vehiculos

//Clase Vehiculo

class Vehiculo {
    constructor(marca,modelo,anio)
    {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
    }
     //FuncionPara obtener detalles

     obtenerDetalles(){
        return "Marca: " + this.marca + ", Modelo: " + this.modelo + ", Año: " + this.anio;
     }
}

//Clase Coche que hereda de Vehiculo

class Coche extends Vehiculo {
    constructor(marca,modelo,anio,numeroPuertas)
    {
        super(marca,modelo,anio);
        this.numeroPuertas = numeroPuertas;
    }

    //Sobrescribiendo la funcion obtenerDetalles
    obtenerDetalles(){
        return super.obtenerDetalles() + ", Numero de Puertas: " + this.numeroPuertas;
    }
}
//Clase Moto que hereda de Vehiculo
class Moto extends Vehiculo {
    constructor(marca,modelo,anio,tipo)
    {
        super(marca,modelo,anio);
        this.tipo = tipo;
    }
    //Sobrescribiendo la funcion obtenerDetalles
    obtenerDetalles(){
        return super.obtenerDetalles() + ", Tipo: " + this.tipo;
    }
}
//Instanciando objetos de Coche y Moto
let coche1 = new Coche("Toyota", "Corolla", 2020, 4);
let moto1 = new Moto("Yamaha", "MT-07", 2021, "Deportiva");

//Mostrando detalles de los vehiculos
console.log(coche1.obtenerDetalles());
console.log(moto1.obtenerDetalles());


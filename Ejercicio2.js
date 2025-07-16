//Sistema de empleados

//Clase empleado 

class Empleado {
    constructor(nombre, edad, salarioBase)
    {
        this.edad = edad;
        this.nombre = nombre;
        this.salarioBase = salarioBase;
    }

    calcularSalario()
    {
        return this.salarioBase;
    }
}

//Clase Gerente que hereda de Empeado

class Gerente extends Empleado {
    constructor(nombre,edad,salarioBase, bonificacion)
    {
        super(nombre,edad,salarioBase)
        this.bonificacion = bonificacion
    }

    calcularSalario()
    {
        return super.calcularSalario() + this.bonificacion;
    }
}

//Clase Desarrollador

class Desarrollador extends Empleado
{
    constructor(nombre,edad,salarioBase, lenguaje)
    {
        super(nombre,edad,salarioBase)
        this.lenguaje= lenguaje;
    }

    calcularSalario()
    {
        return super.calcularSalario();
    }
}

let empleado = new Empleado("juan",24,1500000);
let gerente = new Gerente("juan",24,1500000,500000);
let desarrollador = new Desarrollador("jose",26,2000000000,"Java");

console.log(empleado.calcularSalario());
console.log(gerente.calcularSalario());
console.log(desarrollador.calcularSalario());
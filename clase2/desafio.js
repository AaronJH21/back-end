class Alumno{
    constructor (nombre,edad){
        this.nombre=nombre
        this.edad=edad
    }
    static saludoPequeño = 'hola'
    
    saludoCompleto(){
        console.log('Buenas,soy ${this.nombre}')
    }

    static saludoEstatico(){
        console.log(Alumno.saludoPequeño)
    }
} 
const andres = new Alumno('Andres',14)
console.log(andres)
andres.saludoCompleto()
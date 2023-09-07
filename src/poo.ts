class Personaje {
    // readonly id: number // solo lectura.
    // name: string
    // nivel: number
    // private _hp: number // con la palabra reservada "private" gestionamos control de acceso a propiedades.
    // como "profesion" no tiene valor inicial, queda fuera del constructor
    profesion?: string // esta propiedad es opcional, no hay que definirla en la creacion del objeto.
    private static _equipo: number = 0
    constructor (
        public readonly id: number, 
        public name: string, 
        public nivel: number, 
        private _hp: number
    ) {
    }

    subirNivel(): number {
        this.nivel += 1
        return this.nivel
    }

    cambiarHp(cantidad: number): number {
        this._hp += cantidad
        return this._hp
    }

    get hp(): number {
        return this._hp
    }

    // los "setters" se usan mas a menudo para validacion de datos, no para este tipo de funcion,
    // siempre es mejor hacer un metodo para cambiar una propiedad privada
    // set hp(cantidad: number) {
    //     this._hp += cantidad
    // } 

    static agregarPj(): void {
        Personaje._equipo++
    }
    
    static getEquipo(): number {
        return Personaje._equipo
    }
}

const personaje = new Personaje(1, "Carrot", 1, 100)
Personaje.agregarPj()
const personaje2 = new Personaje(2, "Curry", 1, 120)
Personaje.agregarPj()
console.log("Cantidad de Personajes: ",Personaje.getEquipo())



console.log(personaje)
personaje.cambiarHp(-10)
// personaje.subirNivel()
// console.log(personaje)

console.log(personaje, personaje2)


if (personaje instanceof Personaje) {
    console.log(personaje.hp)
}


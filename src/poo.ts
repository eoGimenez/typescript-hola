class Personaje {
    id: number
    name: string
    nivel: number
    private _hp: number // con la palabra reservada "private" gestionamos control de acceso a propiedades
    constructor (id: number, name: string, nivel: number, hp: number) {
        this.id = id
        this.name = name
        this.nivel = nivel
        this._hp = hp
    }

    subirNivel(): number {
        this.nivel += 1
        return this.nivel
    }

    cambiarHp(cantidad: number): number {
        this._hp += cantidad
        return this._hp
    }
}

const personaje = new Personaje(1, "Carrot", 1, 100)

console.log(personaje)
personaje.cambiarHp(-10)
// personaje.subirNivel()
// console.log(personaje)


if (personaje instanceof Personaje) {
    console.log(personaje)
}
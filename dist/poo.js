"use strict";
class Personaje {
    constructor(id, name, nivel, _hp) {
        this.id = id;
        this.name = name;
        this.nivel = nivel;
        this._hp = _hp;
    }
    subirNivel() {
        this.nivel += 1;
        return this.nivel;
    }
    cambiarHp(cantidad) {
        this._hp += cantidad;
        return this._hp;
    }
    get hp() {
        return this._hp;
    }
    static agregarPj() {
        Personaje._equipo++;
    }
    static getEquipo() {
        return Personaje._equipo;
    }
}
Personaje._equipo = 0;
const personaje = new Personaje(1, "Carrot", 1, 100);
Personaje.agregarPj();
const personaje2 = new Personaje(2, "Curry", 1, 120);
Personaje.agregarPj();
console.log("Cantidad de Personajes: ", Personaje.getEquipo());
console.log(personaje);
personaje.cambiarHp(-10);
console.log(personaje, personaje2);
if (personaje instanceof Personaje) {
    console.log(personaje.hp);
}
//# sourceMappingURL=poo.js.map
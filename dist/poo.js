"use strict";
class Personaje {
    constructor(id, name, nivel, hp) {
        this.id = id;
        this.name = name;
        this.nivel = nivel;
        this.hp = hp;
    }
    subirNivel() {
        this.nivel += 1;
        return this.nivel;
    }
    cambiarHp(cantidad) {
        this.hp += cantidad;
        return this.hp;
    }
}
const personaje = new Personaje(1, "Carrot", 1, 100);
console.log(personaje);
personaje.cambiarHp(-10);
if (personaje instanceof Personaje) {
    console.log(personaje);
}
//# sourceMappingURL=poo.js.map
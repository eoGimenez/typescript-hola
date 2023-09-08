"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const log = (a, b) => {
    console.log(a, b);
    return b;
};
log('Hola', 22);
log('Hola', "2");
log(1, "1");
log("El compilador", "infiere en los tipos");
function fetchData(recurso) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`${recurso}`);
        return response.json();
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield fetchData('/usuarios');
    });
}
class Programador {
    constructor(t) {
        this.computador = t;
    }
}
const programador = new Programador({ encender: () => { }, apagar: () => { } });
const programador2 = new Programador('Hola papa');
programador.computador.apagar;
programador2.computador.toUpperCase();
function fetchProduct() {
    return {
        key: 'id del producto',
        value: { id: "id del producto desde ProductKey" }
    };
}
function fetchStock() {
    return {
        key: 'id del producto',
        value: 22
    };
}
const calendar = { id: 1, font: 'Google', owner: 'Yo' };
function getProp(object, porperty) {
    return object[porperty];
}
getProp(calendar, "id");
getProp(calendar, "font");
const keyVal = {
    'la key': 21
};
const p = {
    x: 21
};
const p1 = {
    x: 1,
    desc: "SOlo usare las propiedades que elegí en el Pick"
};
const readOnlyP = {
    x: 2,
    y: 44
};
//# sourceMappingURL=genericos.js.map
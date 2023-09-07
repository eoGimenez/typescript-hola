"use strict";
let mensaje = "Hola mundo";
mensaje = "62";
console.log(mensaje);
mensaje = "Chau pa";
let extincionDinosaurios = 76000000;
let dinosaurioFavorito = "T-Rex";
let extintos = true;
let variableAny;
variableAny = "Hola soy string";
variableAny = 44;
let animales = ["perro", "gato", "carrot"];
let numbs = [1, 23, 5];
let checks = [];
let numbs2 = [];
let tupla = [1, "Carrot feliz", 2];
let tupla2 = [2, ["carrot", "feliz", "gatito"]];
var Talla;
(function (Talla) {
    Talla[Talla["Chica"] = 0] = "Chica";
    Talla[Talla["Mediana"] = 1] = "Mediana";
    Talla[Talla["Grande"] = 2] = "Grande";
    Talla[Talla["ExtraGrande"] = 3] = "ExtraGrande";
})(Talla || (Talla = {}));
var TallaS;
(function (TallaS) {
    TallaS["Chica"] = "S";
    TallaS["Meidana"] = "M";
    TallaS["Grande"] = "L";
    TallaS["ExtraGrande"] = "XL";
})(TallaS || (TallaS = {}));
const medianoNum = Talla.Mediana;
const medianoS = TallaS.Meidana;
console.log(medianoNum);
console.log(medianoS);
const estado = 2;
const objeto = {
    id: 1,
    talla: TallaS.Chica,
    direccion: {
        numero: 4,
        calle: "Gran via",
        pais: "Spain"
    }
};
const arregloPersonas = [];
const fun = (edad) => {
    if (edad > 17)
        return "Puedes pasar";
    return "NO puede pasar";
};
function validadEdad(edad, msg = "Hola") {
    if (edad > 17)
        return `Puedes pasar ${msg}`;
    return "NO puedes pasar";
}
validadEdad(10);
validadEdad(19, "22");
const ErrorUsuario = () => {
    throw new Error('error de usuario');
};
let animal = {
    id: 1,
    estado: '',
    name: ''
};
const sumaDos = (n) => {
    if (typeof n === 'number')
        return n + 2;
    return parseInt(n) + 2;
};
const product = {
    created_at: '',
    modified_at: '',
    name: ''
};
const nDeFibo = 2;
const toNumber = (s) => {
    if (!s) {
        return 0;
    }
    return parseInt(s);
};
const n = toNumber(null);
const m = toNumber(undefined);
const getUser = (id) => {
    if (id < 0) {
        return null;
    }
    let user = {
        id: id,
        name: 'Carrot',
        created_at: new Date()
    };
    return user;
};
const user = getUser(1);
console.log(user === null || user === void 0 ? void 0 : user.created_at);
const arr1 = null;
console.log(arr1 === null || arr1 === void 0 ? void 0 : arr1[0]);
const fn5 = null;
console.log(fn5 === null || fn5 === void 0 ? void 0 : fn5());
const dificulty = 0;
const user2 = {
    name: "Carrot",
    dificulty: dificulty !== null && dificulty !== void 0 ? dificulty : 1
};
console.log(user2);
const Narrow = (n) => {
    if (typeof n === 'number') {
        return n.toLocaleString();
    }
    if (typeof n === 'string') {
        return n.toUpperCase();
    }
    return n;
};
const test = Narrow(null);
console.log(test);
console.log(typeof (test));
//# sourceMappingURL=index.js.map
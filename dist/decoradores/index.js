"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Route(ruta) {
    return (constructor) => {
        console.log(`Ejecutando el decorador de ruta: ${ruta}`);
        constructor.prototype.route = ruta;
    };
}
function Method(method) {
    return (target, methodName, descriptor) => {
        console.log(methodName, descriptor);
        const original = descriptor.value;
        descriptor.value = function (...args) {
            console.log('antes del metodo');
            original.call(this, ...args);
            console.log('despues del metodo');
        };
    };
}
let Products = class Products {
    find(val) {
        console.log(`Soy el metodo FIND ${val} `);
    }
};
__decorate([
    Method('get')
], Products.prototype, "find", null);
Products = __decorate([
    Route('/products')
], Products);
const pa = new Products();
pa.find('LALALALA');
function UpperCase(target, methodName, descriptor) {
    const original = descriptor.get;
    descriptor.get = function () {
        const r = original === null || original === void 0 ? void 0 : original.call(this);
        if (typeof r === "string") {
            return r.toUpperCase();
        }
        return r;
    };
}
class UserDecorated {
    constructor(name, lastname) {
        this.name = name;
        this.lastname = lastname;
    }
    get fullName() {
        return `${this.name} ${this.lastname}`;
    }
}
__decorate([
    UpperCase
], UserDecorated.prototype, "fullName", null);
const userr = new UserDecorated("Juli", "Mattos");
console.log(userr.fullName);
function Min(min) {
    return (target, propertyName) => {
        let val;
        const descriptor = {
            get() {
                return val;
            },
            set(v) {
                if (v.length < min) {
                    throw new Error(`La propiedad ${propertyName} debe ser de largo minimo de 6 caracteres`);
                }
                val = v;
            },
        };
        Object.defineProperty(target, propertyName, descriptor);
    };
}
class UserPropiedad {
    constructor(name, lastname, password) {
        this.name = name;
        this.lastname = lastname;
        this.password = password;
    }
    get fullName() {
        return `${this.name} ${this.lastname}`;
    }
}
__decorate([
    Min(6)
], UserPropiedad.prototype, "password", void 0);
__decorate([
    UpperCase
], UserPropiedad.prototype, "fullName", null);
const userPropiedad = new UserPropiedad("Juli", "Mattos", "123445");
console.log(userPropiedad.password);
function Dec1(constructor) {
    console.log('decorador 1');
}
function Dec2(constructor) {
    console.log('decorador 2');
}
let Test = class Test {
};
Test = __decorate([
    Dec1,
    Dec2
], Test);
const testDecorador = new Test();
console.log(testDecorador);
//# sourceMappingURL=index.js.map
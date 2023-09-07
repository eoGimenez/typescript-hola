"use strict";
class Horse {
    constructor() {
        this.name = 'LalaHoo';
    }
    walk() {
        console.log('Walking...');
    }
    talk() {
        console.log('Horses noise ?');
    }
}
class Pig {
    constructor() {
        this.name = 'popopi';
    }
    walk() {
        console.log('Walking...');
    }
    talk() {
        console.log('pig noise ?');
    }
}
class Dog {
    constructor() {
        this.name = 'Enzo';
    }
    walk() {
        console.log('Walking...');
    }
    talk() {
        console.log('dog noise ?');
    }
}
class UsersDictionary {
}
let dictionarioUser = new UsersDictionary();
dictionarioUser['1'] = {
    id: 1,
    name: "Carrot",
    lastName: "Mattos",
    cel: 111555
};
dictionarioUser['2'] = {
    id: 2,
    name: "Curry",
    lastName: "Gimenez",
    cel: 11111555
};
console.log(dictionarioUser);
//# sourceMappingURL=interfaces.js.map
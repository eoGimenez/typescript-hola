interface Animal2 { // es el equivalente de "Type" en lo POO, aunque podriamos usar Type y funcionaria, pero por convencion se usa interface en POO
    name: string
    walk(): void;
    talk(): void;
}

class Horse implements Animal2 {
    name: string = 'LalaHoo'

    walk() {
        console.log('Walking...')
    }

    talk() {
        console.log('Horses noise ?')
    }
}

class Pig implements Animal2 {
    name: string = 'popopi'
    
    
    walk() {
        console.log('Walking...')
    }
    
    talk() {
        console.log('pig noise ?')
    }
}

class Dog implements Animal2{
    name: string = 'Enzo';
    walk(): void {
        console.log('Walking...')
    }
    talk(): void {
        console.log('dog noise ?')
    }
    
}


// Index signature

type UserDic = {
    id: number,
    name: string,
    lastName: string,
    cel: number
}

class UsersDictionary {
    [id: string]: UserDic
}

let dictionarioUser = new UsersDictionary()

dictionarioUser['1'] = {
    id:1,
    name: "Carrot",
    lastName: "Mattos",
    cel: 111555
}
dictionarioUser['2'] = {
    id:2,
    name: "Curry",
    lastName: "Gimenez",
    cel: 11111555
}

console.log(dictionarioUser)
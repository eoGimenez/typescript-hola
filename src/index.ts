let mensaje: string = "Hola mundo"

mensaje = "62"

console.log(mensaje)

mensaje = "Chau pa"

/* 
** TIPOS NATIVOS DE JS
* number
* string
* boolean
* null
* undefined
* object
* function

**

* TIPOS de TS
* any // no usar
* unknow
* never 
* array
* tuplas
* enums
*/


// el tipado inferido es cuando inicializamos una variable y le asignamos un valor, de esa manera se asigna automaticamente el tipo del valor, 
// SI NO se asigna un valor, hay que darle un tipo para evitar el tipo: any
let extincionDinosaurios  = 76_000_000
let dinosaurioFavorito = "T-Rex"
let extintos = true

let variableAny
variableAny = "Hola soy string"
variableAny = 44 // aquí está aceptando cualquier tipo, porque cuando inicializamos la variable no le asignamos ni tipo ni valor.


let animales: string[] = ["perro", "gato", "carrot"]
let numbs: number[] = [1, 23, 5]
let checks: boolean[] = []
let numbs2: Array<number> = []

// animales.map(x => x.) el autocompletado suguiere los metodos del tipo de dato que contiene la array
// numbs.map(x => x.)

let tupla: [number, string, number] = [1, "Carrot feliz", 2]
let tupla2: [number, string[]] = [2, ["carrot", "feliz", "gatito"]]

// tupla.push("odqndoq") Cuidado con el push porque es un bug que no lo detecta como error de tipado


enum Talla {Chica, Mediana, Grande, ExtraGrande}
//             0       1        2        3
// Por defecto les da valores como index.

enum TallaS {Chica = 'S', Meidana = 'M', Grande = 'L', ExtraGrande = 'XL'}
// cuando definimos datos a los enums, tenemos que asignarle a todos las variables

const medianoNum = Talla.Mediana
const medianoS = TallaS.Meidana

console.log(medianoNum)
console.log(medianoS)


// creando el enum con "const" evitamos que compile codigo adicional generando un codigo de .js mas limpio, de esta forma
// se ejecuta el enum solo cuando se asigna un valor o se usa un valor, pero sin necesidad de generar el IFEE en el .js
// codigo mas reducido y optimizado.
const enum LoadingState { Idle, Loading, Success, Error }

const estado = LoadingState.Success

type Direccion = 
        {
            numero: number,
            calle: string,
            pais: string
        }

type Persona = {
    readonly id: number, // readonly es para que esa propiedad sea solo lectura
    nombre?: string, // el "?" despues del nombre de la propiedad es para que no sea obligatorio de asignar cuando se crea el objero
    talla: TallaS, // usamos el enum que creamos previamente como tipo de una propiedad
    direccion: Direccion
}


const objeto: Persona = { 
    id: 1,
    talla: TallaS.Chica,
    direccion: {
        numero: 4,
        calle: "Gran via",
        pais: "Spain"
    }
 }

 const arregloPersonas: Persona[] = []


 const fun: (a: number) => string = (edad: number) => {
    if (edad > 17) return "Puedes pasar"
    return "NO puede pasar"
 }

 function validadEdad(edad: number, msg: string = "Hola"): string {
    if (edad > 17) return `Puedes pasar ${msg}`
    return "NO puedes pasar"
 }

//  validadEdad(19, 22)
validadEdad(10)
validadEdad(19, "22")


// El tipo "never" se usa cuando una funcion va a arrojar un error, por lo tanto no va a ejecutar o escribir nada,
// evitar usar el tipo "void" para este tipo de funciones
const ErrorUsuario: () => never = () => {
    throw new Error('error de usuario')
}

type Animal = {
    id: number,
    estado: string
}

type Usuario = {
    id: number,
    name: string
}

let animal: Usuario | Animal = {
    id: 1,
    estado: '',
    name: '' // cuando usamos Union type, no necesiramente hay que definir todas las propiedades
}


// Union type
// usando Union type, para armar funciones nos da la posibilidad, a la hora de usar condicionales,
// aislar los tipos de metodos que podamos aplicarle a las variables
// en el ejemplo siguiente si dentro del condicional typeof === number usara metodos, solo aparecerias los metodos de numbers y asi con cualquier otro type
// si no usamos condicional, nos ofrece solos los metodos que tengan en comuno los tipos Union
const sumaDos : (a: number | string) => number = (n: string | number) => {
    if (typeof n === 'number') return n + 2
    return parseInt(n) +2 
}

type Audit = {
    created_at: string,
    modified_at: string
}

type Product = {
    name: string
}

//Interseption Type
// los interseptions types son definidos con "&" a la hora de asignar tipos y son para especificar que queremos que todas las propiedades de los tipos
// interceptados se usen obligatoriamente, a diferencia de Unions que pueden o no tener todos los tipos
const product: Audit & Product = {
    created_at: '',
    modified_at: '',
    name: ''
}

//Literal Types
// Los tipos literales son para especificar que valor quiero que contenga una variable, ya no solo es una cuestion de tipo, sino que especificamente el valor en si
type Fibo = 0 | 1 | 2 | 3 | 5 

const nDeFibo: Fibo = 2


// Nullable type
// asignando controles Union para los valores nulls y undefineds, podemos controlar que llegue a enviar esos valores a las funciones,
// aunque tenemos que agregar logica para manejar que sucede cuando se llama a la funcion sin valor
const toNumber:(a: string | null | undefined) => number = (s: string | null | undefined) => {
    if (!s){
        return 0
    }
    return parseInt(s)
}

const n = toNumber(null)
const m = toNumber(undefined)

// Optional chaining
// el "?" hace una validacion de si el objeto/array existe
type User = {
    id: number,
    name: string,
    created_at: Date
}
const getUser: (n: number) => User | null = (id: number) => {
    if (id < 0) {
        return null
    }
    let user: User = {
        id: id,
        name: 'Carrot',
        created_at: new Date()
    }
    return user
}

const user = getUser(1)
console.log(user?.created_at)

const arr1 = null
console.log(arr1?.[0])

const fn5: any = null
console.log(fn5?.())


// Nullish coalescing operator
// Cuando el valor de 0 o una '' es un valor util para nosotros tenemos que usar el "??" para hacer comparaciones de valores
// sobre todo cuado sepamos que nuestro codigo va a crecer y no tenemos bien definidas las futuras features

const dificulty : number | null = 0

const user2 = {
    name: "Carrot",
    dificulty: dificulty ?? 1 // Si usamos "dificulty || 1" cuando pasemos valor de 0 nos va a asigar 1 y nosotros queremos usar el valor de 0 como parametro valido 
}

console.log(user2)

// Type assetion
// hay que evitar su uso, pero es para cuando estamos 100% seguros del tipo de dato que vamos a recibir
// y nuestro compilador no nos ofrece sus metodos
// justo luego del "=" definimos el <Type assetion>

// const input = <HTMLInputElement> document.getElementById('username') // as HTMLInputElement -- tambien se puede usar el "as" al final de la definicion de la variable

// input.value
// input.onchange

// Type narrowing
// es cuando utilizmos condicionales para llevar a una funcion a hacer distintas cosas dependiendo el tipo de dato que tengamos
const Narrow : (a: number | string | null | undefined ) => number | string | null | undefined = (n: string | number | null | undefined) => {
    if (typeof n === 'number') {
        return n.toString()
    }
    if (typeof n === 'string') {
        return n.toUpperCase()
    } 
    return n
}

const test = Narrow(null)

console.log(test)
console.log(typeof(test))


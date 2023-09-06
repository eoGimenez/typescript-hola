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
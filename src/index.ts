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



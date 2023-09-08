import { Point, puntito } from './Point'
// import Group, { grupito } from './Group'
import * as Group from './Group' // Wildcard import, para traer de un archivo.
import {Animales, Caballos, Chanchitos} from './Animales'

const point = new Point(2, 4)

// const group = new Group(1, "Carrot") // importando en ES6


// CUando queremos usar el "export default" en wildcard tenemos que usar el nomber.default no el nombre de lo que importemos como default
const group = new Group.default(1, "Carrot") 

console.log(puntito)
console.log(point)
console.log(group)
// console.log(grupito.admins) // importand en ES6
console.log(Group.grupito.admins)

console.log( Animales, Chanchitos, Caballos)
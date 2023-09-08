const log : <V, T> (a: V, b: T) => T = <V, T> (a: V, b: T): T => {
    console.log(a, b)
    return b
}

log<string, number>('Hola', 22)
log<string, string>('Hola', "2")

log(1, "1")
log("El compilador", "infiere en los tipos")


async function fetchData<T>(recurso:string): Promise<T> {
    const response = await fetch(`${recurso}`)
    return response.json()
}

type UserFetch = {
    id: number,
    name: string
}

async function main() {
    const user = await fetchData<UserFetch>('/usuarios')
    //ahora ya sabemos que va a devolver el typo userFetch
    // user.id
}

type Computador = {
    encender: () => void;
    apagar: () => void;
}

class Programador<T> {
    computador: T
    constructor(t:T) {
        this.computador = t
    }
}

const programador = new Programador<Computador>({ encender: () => {}, apagar: () => {}})
const programador2 = new Programador<string>('Hola papa')

programador.computador.apagar
programador2.computador.toUpperCase()



interface KeyValue<T, V> {
    key: T,
    value: V,
}

interface ProductKey {
    id: string
}

function fetchProduct(): KeyValue<string, ProductKey> {
    return {
        key: 'id del producto',
        value: { id: "id del producto desde ProductKey"}
    }
}

function fetchStock(): KeyValue<string, number> {
    return {
        key: 'id del producto',
        value: 22
    }
}

type Calendar = {
    id: number,
    font: string,
    owner: string
}

const calendar: Calendar = {id: 1, font:'Google', owner: 'Yo'}

function getProp<T>(object: T, porperty: keyof T): unknown {
    return object[porperty]
}


getProp<Calendar>(calendar,"id")
getProp<Calendar>(calendar,"font")
// getProp<Calendar>(calendar,"propiedadQueNoExiste") con el keyof solo nos va a dejar utilizar operaciones existentes


// Utility types

type Punto = {
    x: number,
    y: number,
    desc?: string
}

type PuntoOpcional = Partial<Punto> // Creamos un nuevo type con todas las mismas propiedades pero todas opcionales
type PuntoRequerido = Required<Punto> // Igual que Partial, pero crea todas las opciones requeridas.

const keyVal: Record<string, number> = {
    'la key': 21
}
// es lo mismo que escribit :
// type kv = { [key: string]: number}

const p: Omit<Punto, 'desc' | "y"> = {
    x: 21
}
// Cuando queremos crear un objeto y queremos sacarle algunas de las propiedades/operaciones

const p1: Pick<Punto, 'x' | 'desc'> = {
    x: 1,
    desc: "SOlo usare las propiedades que elegí en el Pick"
}

const readOnlyP: Readonly<Punto> = {
    x: 2,
    y: 44
}

// readOnlyP.desc = "koisjubfoqiwe"
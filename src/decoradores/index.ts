
//Class y Method decorators

function Route(ruta: string) {
    return (constructor: Function) => {
        console.log(`Ejecutando el decorador de ruta: ${ruta}`)
        constructor.prototype.route = ruta
    }
}

function Method (method: string) {
    return (target: any, methodName: string, descriptor: PropertyDescriptor) => {
        console.log(methodName, descriptor);
        const original = descriptor.value
        descriptor.value = function(...args: any) {
            console.log('antes del metodo');
            original.call(this, ...args)
            console.log('despues del metodo');
        }
    }
}

@Route('/products')
class Products {
    @Method('get')
    find(val: string) {
        console.log(`Soy el metodo FIND ${val} `);
        
    }
}

// const pa = new Products() as any // Este eny es solo para ver la route de la instancia pa

// console.log(pa.route)

const pa = new Products()

pa.find('LALALALA')

// Getter y setter decorators

function UpperCase(target: any, methodName: string, descriptor: PropertyDescriptor) {
    const original = descriptor.get
    descriptor.get = function() {
        const r = original?.call(this)
        if (typeof r === "string") {
            return r.toUpperCase()
        }
        return r
    }
}

class UserDecorated {
    constructor(public name: string, public lastname: string) {}

    @UpperCase
    get fullName() {
        return `${this.name} ${this.lastname}`
    }
}

const userr = new UserDecorated("Juli", "Mattos")

console.log(userr.fullName);


// Propierty decorators

function Min(min: number) {
    return(target:any, propertyName: string) => {
        let val: string
        const descriptor: PropertyDescriptor = {
            get() {
                return val
            },
            set(v: string) {
                if (v.length < min) {
                    throw new Error(`La propiedad ${propertyName} debe ser de largo minimo de 6 caracteres`)
                }
                val = v
            },
        }
        Object.defineProperty(target, propertyName, descriptor)
    }
}


class UserPropiedad {
    @Min(6)
    public password: string;

    constructor(public name: string, public lastname: string, password: string) {
        this.password = password
    }

    @UpperCase
    get fullName() {
        return `${this.name} ${this.lastname}`
    }
}

const userPropiedad = new UserPropiedad("Juli", "Mattos", "123445")

console.log(userPropiedad.password);

// Composicion de decorado

function Dec1(constructor: Function) {
    console.log('decorador 1');
    
}

function Dec2(constructor: Function) {
    console.log('decorador 2');
    
}

@Dec1
@Dec2
class Test {

}

const testDecorador = new Test()

console.log(testDecorador)

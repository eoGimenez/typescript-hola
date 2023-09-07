abstract class BasicData { // AL crear una clase abstracta aseguramos que no se puedan crear instancias entre otras cosas
    constructor (
        public name: string,
        public desc: string,
        protected created_at: Date,
        protected created_by: number
    ) {}

    get fullYear() {
        return this.created_at.getFullYear()
    }

    get fullDesc() {
        return `${this.name}, ${this.desc}`
    }

    abstract save(): void; // Los metodos abstractos obligan a las herencias a crear ese metodo, asi todas las herencias compartirar el metodo y podremos aplicar polimorfismo
}

class ProductStore extends BasicData {
    constructor(
        public stock: number,
        public sku: number,
        name: string,
        desc: string,
        created_at: Date,
        created_by: number
    ) {
        super(name, desc, created_at, created_by)
    }

    override get fullDesc() {
        return `Product: ${super.fullDesc}`
    }

    save() {
        console.log('savind...')
    }
}



class Category extends BasicData {
    public products: ProductStore[] = []
    constructor(
        name: string,
        desc: string,
        created_at: Date,
        created_by: number
        ) {
            super(name, desc, created_at, created_by)
        }
        
        addProduct(product: ProductStore) {
            this.products.push(product)
        }
        
        override get fullDesc() {
            return `Category - ${super.fullDesc}`
        }
        save() {
            console.log('savind...')
        }
}

let product1 = new ProductStore(
    100,
    1,
    'iPhone',
    'Este es un smartphone',
    new Date(),
    1
)
let product2 = new ProductStore(
    10,
    1,
    'iPhone16',
    'Este es un smartphone',
    new Date(),
    1
)

let categoryMobile = new Category(
    'Celulares',
    '',
    new Date(),
    1
)

categoryMobile.addProduct(product1)
categoryMobile.addProduct(product2)

console.log(categoryMobile)

console.log(product1.fullDesc)
console.log(categoryMobile.fullDesc)


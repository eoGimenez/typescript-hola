"use strict";
class BasicData {
    constructor(name, desc, created_at, created_by) {
        this.name = name;
        this.desc = desc;
        this.created_at = created_at;
        this.created_by = created_by;
    }
    get fullYear() {
        return this.created_at.getFullYear();
    }
    get fullDesc() {
        return `${this.name}, ${this.desc}`;
    }
}
class ProductStore extends BasicData {
    constructor(stock, sku, name, desc, created_at, created_by) {
        super(name, desc, created_at, created_by);
        this.stock = stock;
        this.sku = sku;
    }
    get fullDesc() {
        return `Product: ${super.fullDesc}`;
    }
    save() {
        console.log('savind...');
    }
}
class Category extends BasicData {
    constructor(name, desc, created_at, created_by) {
        super(name, desc, created_at, created_by);
        this.products = [];
    }
    addProduct(product) {
        this.products.push(product);
    }
    get fullDesc() {
        return `Category - ${super.fullDesc}`;
    }
    save() {
        console.log('savind...');
    }
}
let product1 = new ProductStore(100, 1, 'iPhone', 'Este es un smartphone', new Date(), 1);
let product2 = new ProductStore(10, 1, 'iPhone16', 'Este es un smartphone', new Date(), 1);
let categoryMobile = new Category('Celulares', '', new Date(), 1);
categoryMobile.addProduct(product1);
categoryMobile.addProduct(product2);
console.log(categoryMobile);
console.log(product1.fullDesc);
console.log(categoryMobile.fullDesc);
//# sourceMappingURL=herencia.js.map
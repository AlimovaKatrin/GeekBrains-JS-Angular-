// 2. Продолжить работу с интернет-магазином:
// a. В прошлом домашнем задании вы реализовали корзину на базе массивов.
//  Какими объектами можно заменить их элементы?
// b. Реализуйте такие объекты.
// c. Перенести функционал подсчета корзины на объектно-ориентированную базу.

// 3. * Подумать над глобальными сущностями. 
// К примеру, сущность «Продукт» в интернет-магазине актуальна не только для корзины,
//  но и для каталога. Стремиться нужно к тому, чтобы объект «Продукт» имел единую структуру 
//  для различных модулей сайта, но в разных местах давал возможность вызывать разные методы.

let myBascket = {
    bascket: [],

    putProductInShelf(item) {
        this.bascket.push(item)
    },

    getNumberOfProductds() {
        console.log(this.bascket.length)
    },

    getSumOfPrices() {
        this.bascket.reduce((item, nextItem) =>
            item + nextItem)
    }
};

let product = {
    getName() {
        console.log(this.name)
    },

    getPrice() {
        console.log(this.price)
    },

    getCountryOfProduction() {
        console.log(this.produced)
    }
};

function productCreator(name, price, location) {
    let product1 = Object.create(product);
    product1.name = name
    product1.price = price
    product1.produced = location
    return product1
}

let banan = productCreator('banan', 100, 'Africa');
let orange = productCreator('orange', 200, 'Marocco');
let cola = productCreator('cola', 250, 'USA');

banan.getName();
orange.getName();
banan.getPrice();
orange.getPrice();
cola.getCountryOfProduction();
cola.getPrice();

myBascket.putProductInShelf(banan);
myBascket.putProductInShelf(cola);
myBascket.getNumberOfProductds();
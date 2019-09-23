// 1. Добавьте пустые классы для Корзины товаров и Элемента корзины товаров.
// Продумайте, какие методы понадобятся для работы с этими сущностями.

// 2. Добавьте для GoodsList метод, определяющий суммарную стоимость всех товаров.

function Bascket({ ...params }) {
  this.name = params.name;
  this.goodsList = params.products;
}

function Goods({ ...params }) {
  this.name = params.name;
  this.price = params.price;
}
let cucumber = new Goods({ name: 'cucmber', price: 50 });
let apple = new Goods({ name: 'apple', price: 34 });
let productBascket = new Bascket({
  name: 'Lenta Bascket',
  products: [cucumber, apple]
});

Bascket.prototype.getSumOfGoods = function() {
  let res = 0;
  this.goodsList.forEach(element => {
    res += element.price;
  });
  return res
};

console.log(productBascket.getSumOfGoods());
